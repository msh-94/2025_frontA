/*
[실습14: 제품 관리 페이지]
1. 목표
    사용자가 카테고리, 제품명, 가격, 이미지를 포함한 제품 정보를 등록하고, 등록된 모든 제품을 표 형태로 한눈에 확인하며 관리할 수 있는 웹 페이지를 제작합니다.
2. 화면 구성
    페이지는 사용자가 정보를 입력하는 **'제품 등록 영역'**과 등록된 결과를 보여주는 **'제품 목록 영역'**으로 명확히 구분되어야 합니다.
    제품 등록 영역 (<div id="header">):
        카테고리 선택: 미리 정의된 카테고리 목록에서 제품의 분류를 선택할 수 있는 드롭다운 메뉴가 있어야 합니다. (예: '음료', '과자')
        제품명 입력: 등록할 제품의 이름을 텍스트로 입력할 수 있어야 합니다. (예: "코카콜라")
        제품 가격 입력: 제품의 가격을 숫자로 입력할 수 있어야 합니다. (예: 1000)
        제품 이미지 입력: 제품의 사진을 사용자의 컴퓨터에서 파일 형태로 선택하여 첨부할 수 있어야 합니다.
        등록 버튼: 모든 정보를 입력한 후, 목록에 제품을 추가하기 위한 "등록" 버튼이 있어야 합니다.
    제품 목록 영역 (<div id="main">):
        등록된 모든 제품 정보를 보여주는 표(테이블)가 있어야 합니다.
        표는 "이미지", "카테고리명", "상품명", "가격", "등록일", "비고" 순서의 열로 구성되어야 합니다.
        각 제품 항목(행)마다 해당 제품을 관리할 수 있는 "삭제" 버튼과 "수정" 버튼이 포함되어야 합니다.

3. 핵심 기능
    초기 데이터 표시:
        사용자가 페이지에 처음 방문했을 때, 카테고리 선택 메뉴에는 두 개의 예시 카테고리('음료', '과자')가 기본적으로 표시되어 있어야 합니다.
        제품 목록 표에는 사용법을 쉽게 이해할 수 있도록 네 개의 예시 제품이 기본적으로 표시되어 있어야 합니다.

    제품 등록 기능:
        사용자가 '등록 영역'에 카테고리, 제품명, 가격을 모두 입력하고 "등록" 버튼을 클릭하면, 해당 제품이 '목록 영역' 표에 새로운 행으로 즉시 추가되어야 합니다.
        제품 등록 시, 등록 날짜는 현재 날짜로 자동 기록되어야 합니다.
        첨부된 이미지는 목록의 '이미지' 열에 표시되어야 하며, 이미지를 첨부하지 않은 경우 기본 이미지가 대신 표시되어야 합니다.

    제품 관리 기능:
        삭제: 각 제품의 "삭제" 버튼을 클릭하면 해당 제품이 목록에서 즉시 제거되어야 합니다.
        수정: "수정" 버튼을 클릭하면, prompt 창을 통해 새로운 제품명과 가격을 입력받아 해당 제품의 정보를 수정하고 목록을 즉시 갱신해야 합니다.
*/
/*      ==== 100% 예측 불가능 ====
    1. 화면구성[프]
        (1) 화면 스케치(프로토타입)
        (2) HTML 과 CSS 표현
    2. 데이터모델링[백]
        카테고리 , 제품명 , 가격 , 이미지 , 비고 , 등록날짜
    3. 함수설계[백]
        (1) 등록함수
        (2) 카테고리함수
        (3) 목록함수
        (4) 삭제 함수
        (5) 수정 함수
    4. 구현/로직
    5. 테스트
*/
// =========================== [1] 데이터 모델링 샘플 ====================================//
// 1. 카테고리 목록
const categoryList = [ { cno : 1 , cname : '음료류' } , { cno : 2 , cname : '과자류' } ];
let currentCno = 2; // * 코드를 자동대입 하기 위한 현재 코드번호 , 샘플의 마지막 코드의번호 로 초기화
// 2. 제품 목록 , 제품이미지 없을경우 : https://placehold.co/100x100 경로 샘플
const productList = [
    { pno : 1 , cno : 1 , pname : '코카콜라' , pprice : 1000 , pimg : 'https://placehold.co/100x100' , pdate : '2025-06-17' },
    { pno : 2 , cno : 2 , pname : '새우깡' , pprice : 1200 , pimg : 'https://placehold.co/100x100' , pdate : '2025-06-18' },
    { pno : 3 , cno : 1 , pname : '칠성사이다' , pprice : 900 , pimg : 'https://placehold.co/100x100' , pdate : '2025-06-19' }
];
let currentPno = 3; // * 
// * 오타방지 확인차
// console.log( categoryList);
// console.log( productList );
categoryPint();
// 1. 카테고리 출력함수 : 실행조건 : 페이지가 (JS)열렸을때 실행
function categoryPint(){ // console.log(' >> categoryPint exe ');// 함수 선언
    // 1. 어디에 , <select id="categoryInput">
    const categoryInput = document.querySelector('#categoryInput');         //console.log( categoryInput );
    // 2. 무엇을 , 카테고리목록(배열)내 객체정보를 하나씩 HTML 형식으로
    let html = `<option value="" disabled selected > 카테고리 선택하세요. </option>`;
        // *
        for( let i = 0; i <= categoryList.length-1; i++){ // i 번째 카테고리리스트 꺼내기
            const category = categoryList[i];                              //console.log( category );
            html += `<option value="${ category.cno} "> ${category.cname} </option>`    
            // 주의할점 : 백틱주의
        } // for end
    // 3. 출력
    categoryInput.innerHTML = html;                                         // console.log( html );
} // func end
// 2. 제품 등록함수 :
function 등록함수(){ console.log(등록함수);
    // 1. 어디에 
    const btnAdd = document.querySelector('.btnAdd');                       console.log( btnAdd );
    // 2. 
    const pcategoryInput = document.querySelector('#categoryInput');        console.log(pcategoryInput);
    const pnameInput = document.querySelector('#pnameInput');               console.log(pnameInput);
    const ppriceInput = document.querySelector('#ppriceInput');             console.log(ppriceInput);
    const pimgInput = document.querySelector('#pimgInput');                 console.log(pimgInput);
    // 3. 불러온 input value 불러오기
    const cno = pcategoryInput.value;                                       console.log(cno);
    const pname = pnameInput.value;                                         console.log(pname);    
    const pprice = ppriceInput.value;                                       console.log(pprice);    
    // 첨부파일은 value 대신에 files[0] : 선택된 첨부파일의 첫번째 파일객체 가져오기
    const pimg = pimgInput.files[0];                                        console.log(pimg);  

    // * 현재 날짜/시간 구하기 ==  new Date() 객체
    let year = new Date().getFullYear(); // 현재 연도 반환 함수
    let month = new Date().getMonth()+1; // 현재 월 반환 함수 * 1월이 0부터 시작이므로 +1
        month = month < 9 ? `0${month}` : month ; // 만약에 월이 한자리수 이면 앞에 '0' 붙인다.
    let day = new Date().getDate(); // 현재 일 반환 함수
        day = day < 9 ? `0${day}` : day ;
    let pdate = `${year}-${month}-${day}`; // 백틱 주의
    // * 입력한 값이 없으면 등록 실패
    if(cno == '' || pname == '' || pprice == ' '){
        alert('비어있는 항목이 있습니다.[실패] ');
        return; // 반환값 없는 함수종료 : 아래코드는 실행되지 않는다
    }

    // 4. 입력받은값 객체로 만들어서 배열에 저장하기
    const obj = { 
        pno : ++currentPno ,// 제품코드는 1증가 후 구성
        cno : Number( cno ) ,
        pname : pname , pprice : Number(pprice) ,// 제품가격은 숫자형 타입변환
        pimg : pimg ? URL.createObjectURL(pimg) : 'https://placehold.co/100x100',
        // URL.createObjectURL() 선택한 파일객체의 url 주소 생성함수    
        pdate : pdate
    }; console.log(obj);    
    productList.push(obj);              console.log(productList);
    // (*) 기타등등
    pcategoryInput.value = '';
    pnameInput.value = '';
    ppriceInput.value = '';    
    alert('[성공] 제품 등록');
    출력함수();
} // func end // 등록함수 끝

// 3. 제품목록 출력함수 , 실행조건 : (1) 페이지(HTML/CSS)가 열렸을때 (2) 등록/삭제/수정 처리 했을때
출력함수();
function 출력함수(){ console.log('---출력함수---');    
    // 출력할 위치 가져오기 <tbody>
    const main = document.querySelector('#main > table > tbody ');   console.log(main);
    // 배열내 객채조회 및 출력
    let html = '';      console.log(html);
    for( let j = 0; j <= productList.length-1; j++ ){
        let pd = productList[j]
        for( let a = 0; a <= categoryList.length-1; a++){
            let cate = categoryList[a]
            if( pd.cno == cate.cno){
                let name = cate.cname
                html += `<tr>
                            <td><img src="${pd.pimg}"/></td>
                            <td>${name}</td>
                            <td>${pd.pname}</td>
                            <td>${pd.pprice.toLocaleString()}</td>
                            <td>${pd.pdate}</td>
                            <td><button class="btnDelete" onclick="삭제함수(${pd.pno})"> 삭제 </button>
                                <button class="btnEdit" onclick="수정함수(${pd.pno})"> 수정 </button>
                            </td>    
                         </tr>`                 
            }// if end
               
        }// for2 end   
        
    } // for1 end
    //출력
    main.innerHTML = html;    
} // func end
삭제함수();
// 4. 제품 삭제함수 : 배열내 삭제할 객체를 찾아서 splice 한다. < 매개변수 : 제품코드 >
// 실행조건 : [삭제버튼] onclick 했을때
function 삭제함수(pno){ console.log('--삭제함수--'); console.log( pno );
    // 
    const deleteBtn = document.querySelector('.btnDelete') 
    console.log( deleteBtn )
}

// 5. 제품 수정함수 : 새로운 정보를 받아 배열내 수정할 객체를 찿ㅈ아서 대입한다. < 매개변수 : 제품코드 > 
// 실행조건 : [수정버튼] onclick 했을때
function 수정함수(pno){ console.log( '-- 수정함수--'); console.log(pno);

}
