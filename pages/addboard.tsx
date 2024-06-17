import { useState } from 'react';
import styles from '@/styles/Addboard.module.css';
import PlusIcon from '@/public/icon/ic_plus.svg';

export interface IBoardValues {
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
    <div className={styles.BoardContainer}>
      <form className={styles.AddContainer}>
        <div className={styles.addTop}>
          <h1 className={styles.addTopText}>게시글 쓰기</h1>
          <button className={styles.button} type="submit">
            등록
          </button>
        </div>
        <div className={styles.postContainer}>
          <div className={styles.inputTitleBox}>
            <label htmlFor="title" className={styles.inputText}>
              *제목
            </label>
            <input id="title" className={styles.TitleInput} type="text" placeholder="제목을 입력해주세요" />
          </div>
          <div className={styles.inputTextBox}>
            <label htmlFor="text" className={styles.inputText}>
              *내용
            </label>
            <textarea id="text" className={styles.TextInput} placeholder="내용을 입력해주세요"></textarea>
          </div>
          <div className={styles.inputTextBox}>
            <label htmlFor="picture" className={styles.inputText}>
              이미지
            </label>
            <div className={styles.image_button_area}>
              <label htmlFor="picture">
                <PlusIcon />
                이미지 등록
              </label>
              <input id="picture" type="file" style={{ display: 'none' }} />
              <div>
                <button>X</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
