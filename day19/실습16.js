// [ 실습16 ] 웹 스토리지를 이용한 회원가입/로그인 페이지
// 1. 목표
//     -사용자가 아이디와 비밀번호를 등록하고, 저장된 정보를 바탕으로 로그인 기능을 확인할 수 있는 기본 인증 페이지를 제작합니다. 
//     -모든 회원 정보는 브라우저의 sessionStorage를 활용하여 관리합니다.

// 2. 화면 구성
//     -페이지는 **'회원가입 영역'**과 '로그인 영역' 두 개의 <div>으로 명확히 구분되어야 합니다.
//     -회원가입 영역:
//         --아이디 입력: 가입할 아이디를 입력받는 <input> 필드가 있어야 합니다. (클래스명: signId)
//         --비밀번호 입력: 가입할 비밀번호를 입력받는 <input> 필드가 있어야 합니다. (클래스명: signPw)
//         --회원가입 버튼: 클릭 시 signup()를 호출하는 "회원가입" 버튼이 있어야 합니다.
//     -로그인 영역:
//         --아이디 입력: 로그인할 아이디를 입력받는 <input> 필드가 있어야 합니다. (클래스명: loginId)
//         --비밀번호 입력: 로그인할 비밀번호를 입력받는 <input> 필드가 있어야 합니다. (클래스명: loginPw)
//         --로그인 버튼: 클릭 시 login()를 호출하는 "로그인" 버튼이 있어야 합니다.

// 3. 데이터 관리
//     -저장소: 모든 회원 정보는 브라우저의 **sessionStorage**를 사용하여 저장 및 관리되어야 합니다. (브라우저 탭 종료 시 데이터 초기화)
//     -데이터 구조: 회원 목록은 객체(Object)를 담는 배열(Array) 형태로 관리합니다.
//     -각 회원 객체는 { 'no' : 회원번호 , 'id' : 아이디, 'pw' : 비밀번호 } 형태를 가집니다.
//     -회원번호(no)는 등록 시마다 1씩 자동 증가해야 합니다.
//     -이 배열 전체는 JSON.stringify()를 통해 문자열로 변환된 후, sessionStorage에 'memberList'라는 키(key)로 저장되어야 합니다.

// 4. 핵심 기능 구현
//     -signup() 구현:
//         --입력된 아이디와 비밀번호를 입력받아 (memberList)배열 에 새로 생성한 회원 객체를 추가(push)합니다.
//         --회원번호는 현재 배열의 마지막 대기번호에 1을 더한 값으로 자동 부여합니다.
//     -login() 구현:
//         --입력된 아이디와 비밀번호를 입력받아 (memberList)배열 내의 어떤 회원 객체의 id, pw 값과 모두 일치하면, "로그인 성공" 알림창을 띄우고 함수를 즉시 종료합니다.
//         --일치하는 정보를 찾지 못하면, "동일한 회원정보가 없습니다. 로그인실패" 알림창을 띄웁니다.

// const memberList = [ { no : 1 , id : '유재석' , pw : 12341234 } ,
//                      { no : 2 , id : '신동엽' , pw : 13451345 },
//                      { no : 3 , id : '강호동' , pw : 43214321 }
//                    ] 전역변수 대신에 sessionStorage 활용


function signup(){ console.log(' -- signup --');    
    //  무엇을
    const signId = document.querySelector('.signId');           console.log(signId);
    const signPw = document.querySelector('.signPw');           console.log(signPw);
    //  밸류값 가져오기
    const sId = signId.value;                                   console.log(sId);
    const sPw = signPw.value;                                   console.log(sPw);
    //  가져온 밸류값 객체화
    let no = 1;
        //  ================== sessionStorage 에서 memberList 가져오기 ==========//
        // (1) sessionStorage 에서 memberList 가져오기
        let memberList = sessionStorage.getItem('memberList');   // .getItem('속성명/key')
        // (2) 존재하지않으면 (배열) 새로 생성 , 존재하면 타입변환
        if(memberList == null ){ // 해당 속성명(memberList)이 존재 하지 않으면
            memberList = [];    // 새로운 배열 생성
            // no(회원번호) 그대로 1 사용한다.
        }else{ // 존재하면 JSON(배열타입)으로 변환하기
            memberList = JSON.parse(memberList);
            no = memberList[ memberList.length-1 ].no + 1 ; // 배열내 마지막인덱스의 회원번호 + 1
        }
    
    const obj1 = { no : no , id : sId , pw : sPw };       console.log(obj1);
    //  객체를 배열에 추가하기
    memberList.push(obj1);
    console.log(memberList);
    alert(' 회원 등록 성공 ');
    signId.value = '';
    signPw.value = '';
        // ============ sessionStorage 에서 memberList 저장하기 =============== //
        // (1) 배열타입을 JSON문자열 타입으로 변환
        let jsonData = JSON.stringify(memberList);
        // (2) sessionStorage 에 memberList 속성명으로 배열 저장하기
        sessionStorage.setItem('memberList' , jsonData);
} // signup end

function login(){ console.log(' -- login --');    
    //  무엇을
    const loginId = document.querySelector('.loginId');         console.log(loginId);
    const loginPw = document.querySelector('.loginPw');         console.log(loginPw);
    //  value값 가져오기
    const lId = loginId.value;                                  console.log(lId);
    const lPw = loginPw.value;                                  console.log(lPw);
    //  가져온 밸류값 과 배열내 값 비교하기
    //  ================== sessionStorage 에서 memberList 가져오기 ==========//
    let memberList = sessionStorage.getItem('memberList'); // 'memberList'이름의 속성값 가져오기
    if( memberList == null ){ // 만약에 'memberList' 이름의 속성이 존재하지않으면
        memberList = []; // 새로운 배열 생성
    }else{ // 'memberList' 속성명이 존재하면 JSON(배열) 타입으로 변환하기
        memberList = JSON.parse(memberList);
    }
    for(let i = 0; i <= memberList.length-1; i++){
        let 목록 = memberList[i]
        if( 목록.id == lId && 목록.pw == lPw){
            alert('로그인 성공')
            loginId.value = '';
            loginPw.value = '';
            return;
        } // if end
    } // for end
    alert('동일한 회원정보가 없습니다. 로그인실패 ')
    loginId.value = '';
    loginPw.value = '';
} // login end
