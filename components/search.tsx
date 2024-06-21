import styles from '@/styles/Board.module.css';
import searchIC from '@/public/icon/ic_Search.svg';
import Image from 'next/image';

interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className={styles.search_container}>
      <Image width={15} height={15} src={searchIC} alt="검색 아이콘" className={styles.search_icon} />
      <input
        type="text"
        placeholder="검색할 상품을 입력해주세요"
        value={value}
        onChange={onChange}
        className={styles.search_input}
      />
    </div>
  );
}
