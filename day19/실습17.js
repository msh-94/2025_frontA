// [ 실습17 ] 식당 대기표 페이지 * 제출용( CSS 선택,생략가능 )
// 1. 목표
//     -식당 직원이 대기 손님의 정보를 등록하고, 손님은 자신의 전화번호로 대기 상태를 직접 확인할 수 있는 간단한 대기 관리 페이지를 제작합니다.
//     -모든 대기 정보는 브라우저의 localStorage 활용하여 관리합니다.

// 2. 화면 구성
//     -페이지는 **'대기 등록 영역'**과 **'대기 확인 영역'**으로 명확히 구분되어야 합니다.
//     -대기 등록 영역:
//         --대기자 이름 입력: 대기하는 손님의 이름을 입력받는 <input> 필드가 있어야 합니다.
//         --전화번호 입력: 손님의 전화번호를 입력받는 <input> 필드가 있어야 합니다.
//         --인원 수 입력: 함께 온 인원 수를 숫자로 입력받는 <input> 필드가 있어야 합니다.
//         --대기 등록 버튼: 클릭 시 addWaiting() 함수를 호출하는 "대기 등록" 버튼이 있어야 합니다.
//     -대기 확인 영역:
//         --전화번호 입력: 대기 상태를 확인할 손님의 전화번호를 입력받는 <input> 필드가 있어야 합니다.
//         --대기 확인 버튼: 클릭 시 checkStatus() 함수를 호출하는 "대기 확인" 버튼이 있어야 합니다.

// 3. 데이터 관리
//     -저장소: 모든 대기 정보는 브라우저의 **localStorage**를 사용하여 저장 및 관리되어야 합니다. (브라우저 탭 종료 시 대기 목록 초기화)
//     -데이터 구조: 대기 목록은 객체(Object)를 담는 배열(Array) 형태로 관리합니다.
//     -각 대기 팀 객체는 { no: 대기번호, name: '이름', phone: '전화번호', count: 인원수 } 형태를 가집니다.
//     -대기번호(no)는 등록 시마다 1씩 자동 증가해야 합니다.
//     -이 배열 전체는 JSON.stringify()를 통해 문자열로 변환된 후, localStorage 'waitingList'라는 키(key)로 저장되어야 합니다.

// 4. 핵심 기능 구현
// addWaiting() 구현 (대기 등록):
//     -입력된 이름, 전화번호, 인원 수를 받아 새로운 대기 객체를 생성하고, waitingList 배열에 추가합니다.
//     -대기번호는 현재 배열의 마지막 대기번호에 1을 더한 값으로 자동 부여합니다.
// checkStatus() 구현 (대기 확인):
//     -"대기 확인" 버튼 클릭 시 실행됩니다.
//     -입력된 전화번호를 받아, localStorage에 저장된 waitingList 배열에서 전화번호가 일치하는 객체를 찾습니다.
//     -일치하는 정보가 있으면, alert를 통해 해당 손님의 "대기번호"를 보여줍니다. (예: "고객님의 대기번호는 O번 입니다.")
//     -일치하는 정보가 없으면, alert로 "대기 정보가 없습니다."를 알려줍니다.




function addWaiting(){ console.log( 'addWaiting' );
    const nameInput = document.querySelector('.nameInput');     console.log(nameInput);
    const telInput = document.querySelector('.telInput');        console.log(telInput);
    const numberInput = document.querySelector('.numberInput'); console.log(numberInput);
    // value 값 가져오기
    const name = nameInput.value;                               console.log(name);
    const tel = telInput.value;                                 console.log(tel);
    const number = numberInput.value;                           console.log(number);
    // 객체화하기
    let no = 1;
    // localStorage 에서 'waitingList' 속성 가져오기
    let waitingList = localStorage.getItem('waitingList');
    // 존재하지않으면 배열 생성 , 존재하면 타입변환
    if( waitingList == null){   // 존재하지않으면
        waitingList = [];   // 배열생성
        // 대기번호는 그대로 1사용한다
    }else{  // 존재하면 타입변환
        waitingList = JSON.parse(waitingList);
        no = waitingList[ waitingList.length-1 ].no + 1     // 마지막인덱스 대기번호 +1
    }
    const obj = { no : no , name : name , phone : tel , count : number };
    console.log(obj);
    waitingList.push(obj);
    alert('[성공] 대기 등록 되었습니다.')
    nameInput.value = '';
    telInput.value = '';
    numberInput.value = '';
    // localStorage 에 waitingList 저장하기
    let jsonData = JSON.stringify(waitingList);
    localStorage.setItem('waitingList' , jsonData);
} // addwaiting end


function checkStatus(){ console.log('==checkStatus==')
    const checkInput = document.querySelector('.checkInput');           console.log(checkInput);
    // value값 가져오기
    check = checkInput.value;
    // 가져온value 값을 배열내 존재하는지 대조하기
    // localStorage 에서 'waitingList' 속성 가져오기
    let waitingList = localStorage.getItem('waitingList');
    // 존재하지않으면 배열 생성 , 존재하면 타입변환
    if( waitingList == null){   // 존재하지않으면
        waitingList = [];   // 배열생성        
    }else{  // 존재하면 타입변환
        waitingList = JSON.parse(waitingList);        
    } // if else end
    for( let i = 0; i <= waitingList.length-1; i++){
        let list = waitingList[i]
        if(list.phone == check){
            alert(`고객님의 대기번호는 ${list.no}번 입니다.`);
            checkInput.value = '';
            return;
        }// if end
    } // for end
    alert('대기 정보가 없습니다.')
    checkInput.value = '';
}// checkStatus end
