import styles from '@/styles/posts.module.css';
import Image from 'next/image';
import heartImg from '@/public/icon/ic_heart.svg';
import timeString from '@/utils/timeString';
import user_icon from '@/public/icon/user_icon.svg';
import Link from 'next/link';

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

interface PostsProps {
  posts: List;
}

export default function Posts({ posts }: PostsProps) {
  return (
    <Link href={`/borads/${posts.id}`}>
      <div key={posts.id} className={styles.post_container}>
        <div className={styles.posts_top}>
          <span className={styles.posts_title}>{posts.title}</span>
          {posts.image && <Image width={72} height={72} alt="이미지" src={posts.image} />}
        </div>
        <div className={styles.posts_bottom}>
          <div className={styles.best_info_first}>
            <Image width={24} height={24} alt="프로필사진" src={user_icon} />
            <span className={styles.writer}>{posts.writer.nickname}</span>
            <span className={styles.times}>{timeString(posts.createdAt)}</span>
          </div>
          <div>
            <div className={styles.best_info_heart}>
              <Image width={16} height={16} alt="하트" src={heartImg} />
              <span className={styles.like_count}>{posts.likeCount}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
