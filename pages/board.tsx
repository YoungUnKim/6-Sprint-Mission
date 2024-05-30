import styles from './board.module.css';
import LinkButton from '@/utils/Button';

export default function Board() {
  return (
    <div className={styles.BoardContainer}>
      <div className={styles.bestContainer}>
        <span>베스트 게시글</span>
        {/* 베스트3개 컴포넌트 */}
      </div>
      <div className={styles.posts}>
        <div className={styles.postsTop}>
          <span>게시글</span>
          <LinkButton href="/">글쓰기</LinkButton>
        </div>
        <div className={styles.postsMiddle}>
          {/* 검색 컴포넌트 */}
          {/* 드롭다운 컴포넌트 */}
        </div>
        {/* 게시글 컴포넌트  */}
      </div>
    </div>
  );
}
