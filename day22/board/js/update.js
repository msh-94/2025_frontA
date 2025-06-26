

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
function 수정함수(){
    // const add = document.querySelector('#add') // 어디에 출력할건지
    const url = new URLSearchParams(location.search); 
    const selectNo = url.get('no');
    // let html = '';
    let boardList = localStorage.getItem('boardList');
    if(boardList == null){ boardList = [];}
    else{ boardList = JSON.parse(boardList);}
    for(let i = 0; i < boardList.length; i++){
        const obj = boardList[i]
        if( obj.no == selectNo){           
            obj.제목 = document.querySelector('#titleInput').value;
            obj.내용 = document.querySelector('#areaInput').value;
            obj.비밀번호 = document.querySelector('#pwInput').value; 
            // let title = document.querySelector('#titleInput').value;
            // let area = document.querySelector('#areaInput').value;
            // let pw = document.querySelector('#pwInput').value;
            // let title = titleInput.value;
            // let area = areaInput.value;
            // obj.제목 = title;   // value값 변경
            // obj.내용 = area;    // value값 변경
            // obj.비밀번호 = pw;  // value값 변경
            // html += `<tr>
            //             <td>${obj.제목}</td><td>${obj.내용}</td>
            //         </tr>`
            localStorage.setItem('boardList' , JSON.stringify(boardList));
            alert('수정 성공')
            location.href = `view.html?no=${selectNo}`
            return;
        }// if end
    }// for end
    // add.innerHTML = html;
    alert('수정 실패')
}// func end