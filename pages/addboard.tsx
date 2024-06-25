import { useState } from 'react';
import styles from '@/styles/Addboard.module.css';
import PlusIcon from '@/public/icon/ic_plus.svg';

interface IBoardValues {
  title: string;
  content: string;
  imgFile: string | null;
}

export default function AddBoard() {
  const [values, setValues] = useState<IBoardValues>({
    title: '',
    content: '',
    imgFile: null,
  });

  function onChangeValues(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
  }

  return (
    <div className={styles.board_container}>
      <form className={styles.add_container}>
        <div className={styles.add_top}>
          <h1 className={styles.add_top_text}>게시글 쓰기</h1>
          <button className={styles.button} type="submit">
            등록
          </button>
        </div>
        <div className={styles.post_container}>
          <div className={styles.input_title_box}>
            <label htmlFor="title" className={styles.input_text}>
              *제목
            </label>
            <input id="title" className={styles.title_input} type="text" placeholder="제목을 입력해주세요" />
          </div>
          <div className={styles.input_text_box}>
            <label htmlFor="text" className={styles.input_text}>
              *내용
            </label>
            <textarea id="text" className={styles.text_input} placeholder="내용을 입력해주세요"></textarea>
          </div>
          <div className={styles.input_text_box}>
            <label htmlFor="picture" className={styles.input_text}>
              이미지
            </label>
            <div className={styles.image_button_area}>
              <label htmlFor="picture">
                <PlusIcon />
                이미지 등록
              </label>
              <input id="picture" type="file" style={{ display: 'none' }} />
              <div>
                <button type="button">X</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
