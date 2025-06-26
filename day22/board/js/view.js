getBoard(); // JS가 실행될때 최초1번 자동으로 함수실행
function getBoard(){
    // 1. URL (웹주소) 상의 웹주소
    const url = new URLSearchParams( location.search );
    // 2. 웹주소에서 선택된 게시물번호(쿼리스트링값) 가져오기
    const selectNo = url.get('no');
    // 3. localStorage 에서 해당 배열 가져오기
    let boardList = localStorage.getItem('boardList');
    if( boardList == null ){ boardList = [];}
    else{ boardList = JSON.parse(boardList);}
    // 4. 선택된 게시물번호와 일치한 게시물 찾기 <for>
    for(let i = 0; i <= boardList.length-1; i++){
        let obj = boardList[i];
        if( obj.no == selectNo){ // 만약에 내가 선택한 게시물번호와 일치한 번호를 찾았으면
            // 5. 찾았으면 내용 출력
            document.querySelector('#title').innerHTML = obj.제목;
            document.querySelector('#content').innerHTML = obj.내용;
            return;
        }// if end
    } // for end    
}// func end