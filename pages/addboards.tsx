const AddBoard = () => {
  return (
    <div>
      <form>
        <div>
          <h1>게시글 쓰기</h1>
          <button type="submit">등록</button>
        </div>
        <label>*제목</label>
        <input type="text" placeholder="제목을 입력해주세요" />
        <label>*내용</label>
        <textarea placeholder="내용을 입력해주세요"></textarea>
        <label>상품 이미지</label>
      </form>
    </div>
  );
};

export default AddBoard;
