// [ 실습13 : 미니 전화번호부 페이지 ] *제출
// 1. 목표
//    - 사용자가 이름, 전화번호, 그리고 간단한 메모를 함께 저장하여 자신만의 상세한 연락처 목록을 만들고, 등록된 모든 연락처를 한눈에 볼 수 있는 전화번호부 웹 페이지를 만듭니다.
// 2. 화면 구성
//    - 페이지는 사용자가 정보를 입력하는 **'연락처 등록 영역'**과 그 결과를 보여주는 **'연락처 목록 영역'**으로 명확히 구분되어야 합니다.
//    - 연락처 등록 영역:
//       - 이름 입력: 저장할 사람의 이름을 텍스트로 자유롭게 입력할 수 있어야 합니다. (예: "홍길동")
//       - 전화번호 입력: 연락처의 전화번호를 숫자로 입력할 수 있어야 합니다 (예:010-1234-5678)
//       - 메모 입력: 해당 연락처에 대한 추가 정보(소속, 관계 등)를 텍스트로 입력할 수 있는 칸이 있어야 합니다. (예: "OO회사 부장")
//       - 등록 버튼: 이름과 전화번호를 입력한 후, 목록에 추가하기 위한 "등록" 버튼이 있어야 합니다.

//    - 연락처 목록 영역:
//       - 등록된 모든 연락처 정보를 보여주는 표가 있어야 합니다.
//        - 표는 "이름", "전화번호", "메모" 순서의 열로 구성되어야 합니다.
// 3. 핵심 기능
//    - 초기 데이터 표시:
//       - 사용자가 페이지에 처음 방문했을 때, 전화번호부 사용법을 쉽게 이해할 수 있도록 두 개의 예시 연락처가 목록 표에 기본적으로 표시되어 있어야 합니다.
//    - 연락처 등록 기능:
//       - 사용자가 '등록 영역'에 이름과 전화번호를 모두 입력하고 "등록" 버튼을 클릭하면, 해당 연락처가 '목록 영역' 표의 가장 아래쪽에 새로운 행으로 즉시 추가되어야 합니다.


// [ 작업 순서 ]
// 1. 화면구성
// 2. 데이터모델링
    // - 이름 , 전화번호 , 메모
// 3. 함수(기능) 설계
    // (1) 등록함수
        //  함수명     : '등록함수'
        // 매개변수    : x 
        // 반환값      : x
        // 로직        : 1. input으로부터 입력받은 값 저장
        //               2. 입력값 3개를 객체{} 로 구성
        //               3. 구성된 객체를 전화번호부(배열)에 저장
        // 실행조건 : '등록버튼' 클릭(onclick) 했을때
    // (2) 조회함수
        // 함수명      : '전체조회'
        // 매개변수    : x         , 반환값 : x
        // 로직        : 1. for문으로 배열내 객체정보 조회 
        //               2. 입력받은 객체를 표 가장아래 출력
        // 실행조건    : 1. 페이지 열렸을때(최초1번) 
        //               2. 등록 성공했을때(새로고침)

// [2] 데이터 모델링
const 전화번호부 = [{ 이름 : '유재석' , 전화번호 : '010-1234-5678' , 메모 : '국민MC' },
                    { 이름 : '강호동' , 전화번호 : '010-4321-8765' , 메모 : '천하장사' }]

// [3] 함수 구역
function 등록함수(){ // 함수 선언 
    console.log('---func1 exe---')  // 콘솔확인
    // input으로 마크업 각각 가져오기
    const nameInput = document.querySelector('#nameInput');      console.log(nameInput);
    const numberInput = document.querySelector('#numberInput');  console.log(numberInput);
    const memoInput = document.querySelector('#memoInput');      console.log(memoInput);
    // 각 마크업 객체에서 입력값 가져오기
    const name = nameInput.value;           console.log(name);
    const number = numberInput.value;       console.log(number);
    const memo = memoInput.value;           console.log(memo);
    // 입력값 객체만들기
    const obj = { 이름 : name , 전화번호 : number , 메모 : memo };  console.log(obj);
    // 구성된 객체 전역변수(배열)에 저장하기
    전화번호부.push( obj );         console.log(전화번호부);
    전체조회(); // 등록시 실행
} // func1 end
// [4] 전체조회함수 구역
전체조회(); // JS가 그냥 1번 출력함수 호출
function 전체조회(){ console.log('---전체조회 exe ---') // 함수선언 , 콘솔확인
    // 출력할 위치 가져오기
    const content = document.querySelector('#contentBody');  console.log(content);
    // 배열내 객체 정보를 조회 및 출력
    let html = '';
    for( let i = 0; i <= 전화번호부.length-1; i++){
        const obj = 전화번호부[i];               console.log(obj);// i번재 객체 호출
        html += `<tr>
                    <th>${obj.이름} </th> 
                    <th> ${obj.전화번호} </th> 
                    <th> ${obj.메모} </th>
                 </tr>`;
    }// for end
    // 출력
    content.innerHTML = html;
} // func2 end
