

// 기존데이터 조회
// (1) 수정페이지 접속했을때 기존 데이터 호출 함수
getBoard(); // 최초 1번 함수 실행
function getBoard(){
    const url = new URLSearchParams(location.search);
    let selectNo = url.get('no');
    let boardList = localStorage.getItem('boardList');
    if(boardList == null ){ boardList = [];}
    else{ boardList = JSON.parse(boardList);}
    for( let i = 0 ; i < boardList.length; i++){
        const obj = boardList[i]
        if(obj.no == selectNo){ // 기존 게시물정보를 input 마크업에 넣어주기.
            document.querySelector('#titleInput').value = obj.제목
            document.querySelector('#areaInput').value = obj.내용
        }//if end
    }// for end
}// func end

// (2) 수정처리 함수