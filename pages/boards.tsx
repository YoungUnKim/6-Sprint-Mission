import { GetServerSideProps } from 'next';
import BestPost from '@/components/BestPost';
import Posts from '@/components/posts';
import SearchInput from '@/components/search';
import styles from '@/styles/Board.module.css';
import LinkButton from '@/utils/Button';
import Dropdown from '@/components/DropDown';
import { useEffect, useState } from 'react';
import axios from '@/utils/axios';

interface List {
  id: number;
  title: string;
  content: string;
  image: null | string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
}

interface Writer {
  id: number;
  nickname: string;
}

interface Props {
  PostsData: List[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await axios.get('/articles');
    const PostsData: List[] = res.data.list ?? [];

    return {
      props: {
        PostsData,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        PostsData: [],
      },
    };
  }
};

export default function Board({ PostsData }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState<List[]>(PostsData);
  const [order, setOrder] = useState<'recent' | 'like'>('recent');

  const handleSortOrderChange = (selectedOrder: 'recent' | 'like'): void => {
    setOrder(selectedOrder);
  };

  const sortData = (data: List[], order: 'recent' | 'like'): List[] => {
    if (order === 'recent') {
      return data.slice().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (order === 'like') {
      return data.slice().sort((a, b) => b.likeCount - a.likeCount);
    } else {
      return data;
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = posts.filter(item => item.title.toLowerCase().trim().includes(searchTerm.toLowerCase().trim()));

  useEffect(() => {
    const sortedPosts = sortData(PostsData, order);
    setPosts(sortedPosts);
  }, [order, PostsData]);

  return (
    <div className={styles.board_container}>
      <div className={styles.best_container}>
        <span className={styles.best_top_text}>베스트 게시글</span>
        <div className={styles.best_posts}>
          <BestPost />
        </div>
      </div>
      <div className={styles.posts}>
        <div className={styles.posts_top}>
          <span className={styles.best_top_text}>게시글</span>
          <LinkButton href="/addboard">글쓰기</LinkButton>
        </div>
        <div className={styles.posts_middle}>
          <SearchInput value={searchTerm} onChange={handleSearchChange} />
          <Dropdown onChange={handleSortOrderChange} />
        </div>
        <div className={styles.posts_container}>
          {filteredData.map(post => (
            <Posts key={post.id} posts={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
