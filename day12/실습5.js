// 문제 1: 과일 목록 관리
// 다음 과일 목록 배열이 주어져 있습니다.
// let fruitList = [ '사과', '바나나' ];
// 사용자로부터 새로운 과일 이름을 입력받아, fruitList에 이미 존재하는 과일이면 '이미 존재하는 과일입니다.'를 출력하세요. 존재하지 않는 과일이면 배열에 추가한 뒤, 변경된 배열 전체를 출력하는 프로그램을 작성하시오.

// let fruitList = [ '사과', '바나나' ];
// let newFruit = prompt('과일:');
// if( fruitList.indexOf(newFruit) == -1 ){ 
//     fruitList.push(newFruit)
//     console.log(fruitList);}
// else{ 
//     console.log('이미 존재하는 과일입니다.');
// }

// 문제 2: 성별에 따른 색상 지정
// 주민등록번호 13자리를 문자열로 입력받습니다. 성별을 나타내는 7번째 숫자가 '1' 또는 '3'이면 'blue'를, '2' 또는 '4'이면 'red'를 출력하는 프로그램을 작성하시오.

// let 주민번호 = prompt('주민번호13자리:');
// if( 주민번호[6] == '1' || 주민번호[6] == '3'){
//     console.log('blue');
// }else if(주민번호[6] == '2' || 주민번호[6] == '4'){
//     console.log('red');
// }


// 문제 3: 구매 금액에 따른 할인율 적용
// 사용자로부터 총 구매 금액을 입력받습니다. 구매 금액에 따라 아래와 같이 할인율을 적용하여 최종 결제 금액을 출력하는 프로그램을 작성하시오.
// 50,000원 이상: 10% 할인
// 30,000원 이상 50,000원 미만: 5% 할인
// 10,000원 이상 30,000원 미만: 1% 할인
// 10,000원 미만: 할인 없음

// let 구매금액 = Number(prompt('구매금액:'));
// if( 구매금액 >= 50000 ){
//     let 할인가 = 구매금액 - (구매금액/10) 
//     console.log(할인가);
// }else if( 구매금액 >= 30000 ){
//     let 할인가 = 구매금액 - (구매금액/20)
//     console.log(할인가);
// }else if( 구매금액 >= 10000 ){
//     let 할인가 = 구매금액 - (구매금액/10/10)
//     console.log(할인가);
// }else{console.log(구매금액);}

// 문제 4: 월(Month)에 따른 계절 판별
// 1부터 12 사이의 월(Month)을 숫자로 입력받아, 해당하는 계절을 출력하는 프로그램을 작성하시오.
// 봄: 3, 4, 5월
// 여름: 6, 7, 8월
// 가을: 9, 10, 11월
// 겨울: 12, 1, 2월
// 만약 1~12 이외의 숫자를 입력하면 '잘못된 월입니다.'를 출력하세요.

// let month = Number(prompt('월 : '));
// if( month >= 3 && month < 6){
//     console.log('봄');
// }else if( month >= 6 && month < 9 ){
//     console.log('여름');
// }else if( month >= 9 && month < 12 ){
//     console.log('가을');
// }else if( month == 12 || month < 3 ){
//     console.log('겨울');
// }else{ console.log('잘못된 월입니다.');}

// 문제 5: 세 수 중 가장 큰 수 찾기
// 서로 다른 세 개의 정수를 입력받아, 가장 큰 수를 출력하는 프로그램을 작성하시오.

// let one = parseInt(prompt('정수1:'));
// let two = parseInt(prompt('정수2:'));
// let four = parseInt(prompt('정수3:'));
// if( one > two && one > four ){
//     console.log(one);
// }else if( two > four ){
//     console.log(two);
// }else{ console.log(four);}

// 문제 6: 윤년 판별기
// 사용자로부터 연도(year)를 입력받아 해당 연도가 윤년인지 평년인지 판별하는 프로그램을 작성하시오.
// 윤년 조건:
// 연도가 4의 배수이면서, 100의 배수는 아닐 때
// 또는 연도가 400의 배수일 때
// 출력 예시: '2024년은 윤년입니다.' 또는 '2023년은 평년입니다.'

// let year = Number(prompt('연도:'));
// if( ( year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ){
//     {console.log(`${year}년은 윤년입니다.`);}     
// }else{ console.log(`${year}년은 평년입니다.`);}

// 문제 7: 세 수 오름차순 정렬
// 서로 다른 세 개의 정수를 입력받아, 오름차순(작은 수부터 큰 수 순서)으로 정렬하여 출력하는 프로그램을 작성하시오.
// 예시: 17, 4, 8 입력 시 4, 8, 17 출력     오름차순 : 두 수 간의 작은 값을 앞에 나열

// let one = parseInt(prompt('정수1:'));
// let two = parseInt(prompt('정수2:'));
// let ten = parseInt(prompt('정수3:'));    
// if( one > two && one > ten ){
//     if( two > ten ){
//     console.log( ten , two , one );}
//     else{ console.log(two , ten ,one )}
// }else if( two > ten ){
//     console.log( one , ten , two)
// }else{ console.log(one,two,ten)}


// let one = parseInt(prompt('정수1:'));
// let two = parseInt(prompt('정수2:'));
// let ten = parseInt(prompt('정수3:'));
// let temp    // 임시변수
     // 3개의자료를 하나의 배열자료로 표현하여 변수에 저장
// let num = [ one , two , ten ]
// if( num[0] > num[1]){   // 첫번째 값이 두번째 값보다 크면 ( 스왑/교체 )
//     temp = num[0];      // 임시변수에 첫번째 값을 넣고
//     num[0] = num[1]     // 첫번째 위치에 두번째 값을넣고
//     num[1] = temp;      // 두번째 위치에 임시변수(첫번째값) 값을 넣고    
// }  
    // else if [x] : 다수 조건에 따른 다수처리(스왑)
// if( num[0] > num[2]){   // 첫번째 값이 세번째 값보다 크면 ( 스왑/교체 )
//     temp = num[0];
//     num[0] = num[2];
//     num[2] = temp;    
// }  
// if( num[1] > num[2]){   // 두번째 값이 세번째 값보다 크면 ( 스왑/교체 ) 
//     temp = num[1];
//     num[1] = num[2];
//     num[2] = temp;    
// }  
// console.log(num); // 정렬 결과
// 문제 8: 가위바위보 게임
// 두 명의 플레이어가 참여하는 가위바위보 게임을 만드시오.
// 입력: 플레이어 1과 플레이어 2는 각각 0(가위), 1(바위), 2(보) 중 하나의 숫자를 입력합니다.
// 규칙:
// 가위(0)는 보(2)를 이깁니다.
// 바위(1)는 가위(0)를 이깁니다.
// 보(2)는 바위(1)를 이깁니다.
// 출력:
// 플레이어 1이 이기면 '플레이어1 승리'를 출력합니다.
// 플레이어 2가 이기면 '플레이어2 승리'를 출력합니다.
// 두 플레이어가 같은 것을 내면 '무승부'를 출력합니다.
// 조건 : 플레이어가 이기는 경우의수(3) , 지는수(3), 비기는수(3) => 경우의수9개
// ( 방법1 : 모든 경우의수 판단 )
// 이기는수 : 가위 = 보 , 바위 = 가위 , 보 = 바위  / 0 = 2 , 1 = 0 , 2 = 1
// 비기는수 : 가위 = 가위 , 바위 = 바위 , 보 = 보  / 0 = 0 , 1 = 1 , 2 = 2
// 지는수 : 가위 = 바위 , 바위 = 보 , 보 = 가위    / 0 = 1 , 1 = 2 , 2 = 0
// ( 방법2 : 모든 경우의수 에서 패턴 찾기)
//      1. 두 수가 같으면 무승부이다.
//      0 == (2+1)%3
//      1 == (0+1)%3
//      2 == (1+1)%3
// let 플레이어1 = Number(prompt('0,1,2 중 하나를 고르시오.'));
// let 플레이어2 = Number(prompt('0,1,2 중 하나를 고르시오.'));
// //(방법1)
// if( 플레이어1 == 플레이어2 ){ console.log('무승부');}
// else if(( 플레이어1 == 0 && 플레이어2 == 2) || 
//     ( 플레이어1 == 1 && 플레이어2 == 0) || 
//     ( 플레이어1 == 2 && 플레이어2 == 1)){
//    console.log('플레이어1 승리'); // 플레이어1 이기는수
// }else{ console.log('플레이어2 승리');}  // 그외
// // (방법2)
// if( 플레이어1 == 플레이어2 ){ console.log('무승부');}
// else if( 플레이어1 == (플레이어2 + 1 )%3 ){
//    console.log('플레이어1 승리'); // 플레이어1 이기는수
// }else{ console.log('플레이어2 승리');}  // 그외

// 문제 9: 주차 차량 위치 검색
// 주차장 차량 정보가 다음과 같이 두 개의 배열로 관리되고 있습니다. 두 배열에서 같은 인덱스는 동일한 차량의 정보를 의미합니다.
// 차량 번호 목록: let carArray = [ '250어7142', '142가7415', '888호8888' ];
// 주차 위치 목록: let locationArray = [ 'A1', 'B3', 'C2' ];
// 사용자로부터 차량 번호를 입력받아, carArray에서 해당 차량을 찾은 뒤 locationArray에 있는 그 차량의 주차 위치를 찾아 출력하는 프로그램을 작성하시오. 만약 해당하는 차량 번호가 없다면 '차량이 존재하지 않습니다.'를 출력하시오.

// let carArray = [ '250어7142', '142가7415', '888호8888' ];
// let locationArray = [ 'A1', 'B3', 'C2' ];
// let car = prompt('차량번호:');
// if( car == '0' ){
//     console.log(carArray[0]);
//     console.log(locationArray[0]);
// }else if( car == '1'){
//     console.log(carArray[1]);
//     console.log(locationArray[1]);
// }else if( car == '2'){
//     console.log(carArray[2]);
//     console.log(locationArray[2]);
// }else{ console.log('차량이 존재하지 않습니다.')}

// 문제 10: 수강 신청 목록에서 과목 제외하기
// 현재 수강 신청한 과목 목록이 배열로 주어져 있습니다.
// let courseList = ['수학', '영어', '과학', '국어'];
// 사용자로부터 제외하고 싶은 과목명을 입력받아, courseList에 해당 과목이 존재하면 목록에서 삭제한 뒤 변경된 배열 전체를 출력하세요. 만약 존재하지 않는 과목이면 '해당 과목은 신청 목록에 없습니다.'를 출력하는 프로그램을 작성하시오.

// let courseList = ['수학', '영어', '과학', '국어'];
// let course = prompt('과목:')
// if( course == courseList[0] ){
//     courseList.splice(0,1);
//     console.log(courseList);
// }else if( course == courseList[1] ){
//     courseList.splice(1,1);
//     console.log(courseList);
// }else if( course == courseList[2] ){
//     courseList.splice(2,1);
//     console.log(courseList);
// }else if( course == courseList[3] ){
//     courseList.splice(3,1);
//     console.log(courseList);
// }else { console.log('해당 과목은 신청 목록에 없습니다.');}

