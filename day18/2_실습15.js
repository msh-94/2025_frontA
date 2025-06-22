// C : Create
// R : Read
// U : Update
// D : Delete
// CSS 선택
// [ 실습15 - 인사 관리 대시보드 ] * 제출
// 1. 목표
//     부서, 사원, 그리고 휴가 신청 정보를 하나의 웹 페이지에서 통합적으로 관리하는 대시보드를 제작합니다.
//     사용자는 부서 등록/삭제/수정, 사원 등록/삭제/수정, 휴가 신청/취소 기능을 직관적으로 사용할 수 있어야 합니다.

// 2. 화면 구성
//     페이지는 '부서 관리(왼쪽)', '사원 관리(가운데)', '휴가 관리(오른쪽)' 라는 3개의 명확한 컬럼으로 구성되어야 합니다.
//     부서 관리 영역:
//         부서 등록:  
//             새로운 부서의 이름을 텍스트로 입력할 수 있는 입력창과 "추가" 버튼이 있어야 합니다.
//         부서 목록:  
//             등록된 모든 부서 정보를 보여주는 표(테이블)가 있어야 합니다.
//             표는 "부서명"과 "관리" 열로 구성됩니다.
//             각 부서 항목마다 해당 부서를 수정하고 삭제할 수 있는 버튼이 제공되어야 합니다.

//     사원 관리 영역:
//         사원 등록:
//             사원의 이름과 직급을 입력하는 텍스트 필드가 있어야 합니다.
//             등록된 부서 목록에서 소속될 부서를 선택할 수 있는 드롭다운 메뉴가 있어야 합니다.
//             사원의 사진을 등록할 수 있는 파일 선택 버튼이 있어야 합니다.
//         사원 목록:
//             등록된 모든 사원 정보를 보여주는 표(테이블)가 있어야 합니다.
//             표는 "사진", "이름", "부서", "직급", "관리" 순서의 열로 구성됩니다.
//             각 사원 항목마다 해당 사원의 이름과 직급을 수정하고, 사원 정보를 삭제할 수 있는 버튼이 제공되어야 합니다.

//     휴가 관리 영역:
//         휴가 신청:
//             등록된 사원 목록에서 휴가를 신청할 사원을 선택하는 드롭다운 메뉴가 있어야 합니다.
//             휴가 시작일과 종료일을 선택할 수 있는 날짜 입력 필드가 있어야 합니다.
//             휴가 사유를 텍스트로 간단히 기입할 수 있는 입력창이 있어야 합니다.
//         휴가 신청 전체 목록:
//             제출된 모든 휴가 신청 내역을 보여주는 목록이 있어야 합니다.
//             각 항목에는 신청한 사원의 이름, 휴가 기간, 사유가 표시되어야 합니다.
//             각 휴가 신청 항목마다 해당 신청을 취소할 수 있는 "신청취소" 버튼이 제공되어야 합니다.

// 3. 핵심 기능
//     초기 데이터 표시:
//         모든 데이터(부서, 사원, 휴가)는 웹 페이지가 실행되는 동안에만 유지되는 전역 배열을 통해 관리됩니다. 페이지를 새로고침하면 데이터는 초기 샘플 상태로 돌아갑니다.
//         사용자가 처음 페이지에 접속했을 때, 시스템 사용법을 쉽게 파악할 수 있도록 부서, 사원, 휴가 신청에 대한 예시 데이터가 기본적으로 화면에 표시되어 있어야 합니다.

//     부서 관리 기능:
//         등록: "추가" 버튼 클릭 시, 입력된 부서가 부서 목록과 사원 등록의 부서 선택 메뉴에 즉시 반영되어야 합니다. 이미 존재하는 부서명은 등록되지 않아야 합니다.
//         수정: "수정" 버튼 클릭 시, prompt 대화상자가 나타나 새로운 부서명을 입력받고, 입력 완료 시 목록에 즉시 반영되어야 합니다.
//         삭제: "삭제" 버튼 클릭 시, 해당 부서가 목록에서 제거되어야 합니다. 단, 해당 부서에 소속된 사원이 한 명이라도 있을 경우, 삭제할 수 없다는 경고 메시지를 표시해야 합니다.

//     사원 관리 기능:
//         등록: 사원 정보를 입력하고 "등록" 버튼 클릭 시, 사원 목록과 휴가 신청의 사원 선택 메뉴에 즉시 추가되어야 합니다. 사진을 첨부하면 해당 사진이, 첨부하지 않으면 기본 이미지가 표시되어야 합니다.
//         수정: "수정" 버튼 클릭 시, prompt 대화상자를 통해 새로운 이름과 직책을 입력받아 해당 사원의 정보를 수정하고 목록을 즉시 갱신해야 합니다.
//         삭제: "삭제" 버튼 클릭 시, 해당 사원이 목록에서 제거되며, 관련된 모든 휴가 신청 기록도 함께 삭제되어야 합니다.

//     휴가 관리 기능:
//         신청: 휴가 정보를 입력하고 "신청" 버튼 클릭 시, 휴가 신청 목록에 즉시 추가되어야 합니다.
//         취소: "신청취소" 버튼 클릭 시, 해당 휴가 신청 내역이 목록에서 제거되어야 합니다.

// 데이터모델링
const 부서관리 = [{팀코드 : 1 , 부서 : '개발팀' } , {팀코드 : 2 , 부서 : '인사팀' } , {팀코드 : 3 , 부서 : '기획팀' }];
const 사원관리 = [{팀코드 : 1 , 사원코드 : 1 , 부서 : '개발팀' , 이름 : '유재석' , 직급 : '신입' , 사진 : 'https://placehold.co/100x100' },
                    {팀코드 : 2 , 사원코드 : 2 , 부서 : '인사팀' , 이름 : '신동엽' , 직급 : '대리' , 사진 : 'https://placehold.co/100x100' },
                    {팀코드 : 3 , 사원코드 : 3 , 부서 : '기획팀' , 이름 : '강호동' , 직급 : '과장' , 사진 : 'https://placehold.co/100x100' }];
const 휴가관리 = [{팀코드 : 1 , 사원코드 : 1 , 이름 : '유재석' , 휴가시작일 : '2025-06-12' , 휴가종료일 : '2025-06-15' , 사유 : '병가'},
                    {팀코드 : 2 , 사원코드 : 2 , 이름 : '신동엽' , 휴가시작일 : '2025-06-17' , 휴가종료일 : '2025-06-20' , 사유 : '연차'},
                    {팀코드 : 3 , 사원코드 : 3 ,  이름 : '강호동' , 휴가시작일 : '2025-06-21' , 휴가종료일 : '2025-06-25' , 사유 : '경조사'}];
// 필요한 함수
// 1. 부서관리 등록함수
// 2. 부서관리 출력함수
// 3. 부서관리 삭제함수
// 4. 부서관리 수정함수
// 5. 사원관리 등록함수
// 6. 사원관리 출력함수
// 7. 사원관리 삭제함수
// 8. 사원관리 수정함수
// 9. 휴가관리 신청함수
// 10. 휴가관리 출력함수
// 11. 휴가관리 취소함수
// 12. 팀코드를 이용한 다른 배열 대입 함수
// 13. 카테고리 함수
// 14. 사원코드를 이용한 다른배열 대입 함수

let current팀코드 = 3;
let current사원코드 = 3;
// 1. 부서관리 등록함수
function t등록함수(){ console.log('--등록함수--');
    // 1. 어디에
    const btnAdd = document.querySelector('.btnAdd');              // console.log(btnAdd);
    // 2. 무엇을
    const tName = document.querySelector('#tName');                 //console.log(tName);
    // 3. 밸류값 가져오고 객체만들기
    const name = tName.value;                                       //console.log(name);
    const team = { 팀코드 : ++current팀코드 , 부서 : name };        //console.log( team );
    // 4. 만든 객체 배열에 추가하기
    부서관리.push( team );                                          //console.log(부서관리);
    t출력함수();
    categoryPlint();
}// func end 부서관리 등록함수 끝

// 2. 부서관리 출력함수
t출력함수();
function t출력함수(){ //console.log('--t출력함수--') 
    // 1. 어디에
    const tOutput = document.querySelector('#tOutput');            // console.log(tOutput);
    // 2. 무엇을
    let html = '';
    for( let i = 0; i <= 부서관리.length-1; i++){
        let obj1 = 부서관리[i];                                     //console.log(obj1);
        html += `<tr>
                    <td> ${obj1.부서}</td>
                    <td><button onclick="t삭제함수(${obj1.팀코드})"> 삭제 </button> <button onclick="t수정함수(${obj1.팀코드})"> 수정 </button></td>
                </tr>`
    } // for end
    // 3. 출력
    tOutput.innerHTML = html;                                       //console.log(html);
} // func end 부서관리 출력함수 끝

// 3. 부서관리 삭제함수
function t삭제함수(팀코드){                                         //console.log('===t삭제함수==='); console.log(팀코드);
    for( let i = 0; i <= 부서관리.length-1; i++){
        if( 부서관리[i].팀코드 == 팀코드 ){                        
            부서관리.splice( i , 1 );
            alert('[성공] 항목 삭제')
            t출력함수();
            return;                                                     
        }//if end
    }// for end
} // func end t삭제함수 끝

// 4. 부서관리 수정함수
function t수정함수(팀코드){                                     //console.log('t수정함수'); console.log(팀코드);
    for( let i = 0; i <= 부서관리.length-1; i++){
        if( 부서관리[i].팀코드 == 팀코드 ){
            const 부서명 = prompt('부서명 : ');                 //console.log(부서명);
            부서관리[i].부서 = 부서명;
            alert('[성공] 항목 수정')
            t출력함수();
            return;
        } // if end
    } // for end
} // func end

// 5. 사원관리 등록함수
function c등록함수(){       console.log('--c등록함수--');
    // 1. 어디에
    const btnMemory = document.querySelector('.btnMemory');         //console.log( btnMemory); 
    // 2. 무엇을
    const cnameInput = document.querySelector('#cnameInput');           //console.log(cnameInput);
    const cclassInput = document.querySelector('#cclassInput');        // console.log(cclassInput);
    const ccategoryInput = document.querySelector('#ccategoryInput');   //console.log(ccategoryInput);
    const cimgInput = document.querySelector('#cimgInput');            // console.log(cimgInput);
    // 3. 불러온 자료 value값구하기
    const cname = cnameInput.value;                                    // console.log(cname);
    const cclass = cclassInput.value;                                   //console.log(cclass);
    const ccategory = ccategoryInput.value;                             //console.log(ccategory);    
    const cimg = cimgInput.files[0];                                    //console.log(cimg);
    // 4. 입력받은 값 객체만들기
    const obj2 = {  팀코드 : ++current팀코드,
                    사원코드 : ++current사원코드,
                    이름 : cname ,
                    직급 : cclass ,
                    부서 : ccategory ,
                    사진 : cimg ? URL.createObjectURL(cimg) : 'https://placehold.co/100x100',};      //console.log(obj2);
    // 5. 만든 객체 배열에 push하기
    사원관리.push( obj2 );         // console.log(사원관리);
    c출력함수();
    holidayPlint();
    
    cnameInput.value = '';
    cclassInput.value = '';
    ccategoryInput.value = '';
}// func end 사원관리 등록함수 끝

// 13-1 . 사원관리카테고리 함수
categoryPlint();
function categoryPlint(){
    // 1. 어디에
    const ccategoryInput = document.querySelector('#ccategoryInput');         console.log(ccategoryInput)
    // 2. 무엇을
    let html = `<option value="" disabled selected > 부서를 선택하세요. </option>`
    for( let i = 0; i <= 부서관리.length-1; i++){
        const ccategory = 부서관리[i];                                    console.log(ccategory);
        html += `<option value="${ccategory.팀코드}"> ${ccategory.부서} </option>`
    }// for end
    console.log(html);
    ccategoryInput.innerHTML = html;    
}// func end 사원관리카테고리 끝


// 6. 사원관리 출력함수
c출력함수();
function c출력함수(){          // console.log('===c출력함수===');
    // 1. 어디에
    const cOutput = document.querySelector('#cOutput');        // console.log(cOutput);
    // 2. 무엇을
    let html = '';
    for( let i = 0; i <= 사원관리.length-1; i++){
        let obj3 = 사원관리[i]
        console.log(obj3);
        html += ` <tr>
                        <td> <img src="${obj3.사진}" /> </td> <td> ${obj3.이름} </td>
                        <td> ${obj3.부서} </td> <td> ${obj3.직급}
                        </td> <td> <button onclick="c삭제함수(${obj3.사원코드})"> 삭제 </button> <button onclick="c수정함수(${obj3.사원코드})"> 수정 </button></td>
                  </tr>`
    }// if end
    cOutput.innerHTML = html;          // console.log(html);

} // func end 사원관리 출력함수 끝

// 7. 사원관리 삭제함수
function c삭제함수(사원코드){ console.log('--c삭제함수--');
    for( let i = 0; i <= 사원관리.length-1; i++){
        if(사원관리[i].사원코드 == 사원코드){
            사원관리.splice( i , 1 );
            c출력함수();
            alert('[성공] 목록이 변경되었습니다.')
            return;
        }// if end
    }// for end
}// func end 사원관리 삭제함수 끝

// 8. 사원관리 수정함수
function c수정함수(사원코드){ console.log( ' --c수정함수-- ' );
    for( let i = 0; i <= 사원관리.length-1; i++){
        if( 사원관리[i].사원코드 == 사원코드){
            const chaName = prompt('이름 : ');
            const chaClass = prompt('직급 : ');
            사원관리[i].이름 = chaName;
            사원관리[i].직급 = chaClass;
            c출력함수();
            alert('[성공] 이름/직급 수정되었습니다.')
            return;
        }//if end
    }// for end
}// func end 사원관리 수정함수 끝

// 9. 휴가 신청 함수 
function h신청함수(){ console.log( ' --h신청함수-- ');
    // 1. 어디에
    const btnHoliday = document.querySelector('.btnHoliday');                   console.log(btnHoliday);
    // 2. 무엇을    
    const startInput = document.querySelector('#startInput');                   console.log(startInput);
    const endInput = document.querySelector('#endInput');                       console.log(endInput);
    const reasonInput = document.querySelector('#reasonInput');                 console.log(reasonInput);
    // 3. value 값 불러오기    
    const start = startInput.value;                                             console.log(start);
    const end = endInput.value;                                                 console.log(end);
    const reason = reasonInput.value;                                           console.log(reason);
    // 4. value 값 객체만들기
    const obj4 = { 팀코드 : current팀코드 , 사원코드 : current사원코드 , 휴가시작일 : start , 휴가종료일 : end , 사유 : reason }
    console.log( obj4 );
    // 5. 만듣개체 배열에 저장하기
    휴가관리.push( obj4 );
    console.log( 휴가관리 ); 
    h출력함수();   
    startInput.value = '';
    endInput.value = '';
    reasonInput.value = '';
}// func end 휴가신청함수 끝

// 13-2 휴가신청자 카테고리함수
holidayPlint();
function holidayPlint(){
    // 1. 어디에
    const holiInput = document.querySelector('#holiInput');         console.log(holiInput);
    // 2. 무엇을
    let html = `<option value="" disabled selected > 휴가 신청자를 고르세요. </option>`
    for( let i = 0; i <= 사원관리.length-1; i++){
        const holi = 사원관리[i];                                    console.log(holi);
        html += `<option value="${holi.사원코드}"> ${holi.이름} </option>`
    }// for end
    console.log(html);
    holiInput.innerHTML = html;    
}// func end 사원관리카테고리 끝

// 10. 휴가 출력 함수
h출력함수();
function h출력함수(){ console.log('==h출력함수==');
    // 1. 어디에
    const holiOutput = document.querySelector('#holiOutput');                   console.log(holiOutput);
    // 2. 무엇을
    let html = '';
    for(let i = 0; i <= 휴가관리.length-1; i++){
        let obj5 = 휴가관리[i]      
        html +=  `<tr>
                        <td> 유재석 </td> <td> ${obj5.휴가시작일} ~ ${obj5.휴가종료일} </td> <td> ${obj5.사유} </td>
                        <td> <button onclick="h삭제함수(${obj5.사원코드})"> 신청취소 </button></td>
                    </tr>`
    }//for end
    holiOutput.innerHTML = html;            console.log(html);
}//func end 휴가 출력함수 끝

// // 11. 휴가 취소 함수
// function h삭제함수(){ console.log(사원코드)
//     for( let i = 0; i <= 휴가관리.length-1; i++){
//         if(휴가관리[i].사원코드 == 사원코드){
//             휴가관리.splice( i , 1 );
//             h출력함수();
//             alert('[성공] 목록이 삭제 되었습니다.')
//             return;
//         }// if end
//     }// for end
// }// func end 휴가취소함수 끝
// 부서값함수();
// function 부서값함수(팀코드){
//     console.log('부서값함수'); console.log(팀코드)

// }// func end 부서값함수 끝