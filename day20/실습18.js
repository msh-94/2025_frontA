// 데이터모델링
const product = [ { pno : 1 , 제품명 : '아메리카노' , 가격 : 2000 , 설명 : '콜롬비아원두' , 이미지 : 'https://placehold.co/100' } ];
let lastPno = product.length -1;
let currentPno = product[lastPno].pno;


// 제품등록함수
function productAdd(){ console.log('productAdd');    
    // 마크업객체 가져오기
    const nameInput = document.querySelector('.nameInput');         console.log(nameInput);
    const payInput = document.querySelector('.payInput');           console.log(payInput);
    const areaInput = document.querySelector('.areaInput');          console.log(areaInput);
    const imgInput = document.querySelector('.imgInput');           console.log(imgInput);
    // value값 가져오기
    const name = nameInput.value;                                         console.log(name);
    const pay = payInput.value;                                           console.log(pay);
    const area = areaInput.value;                                     console.log(area);
    const imge = imgInput.files[0];                                        console.log(imge);
    const img = imge ? URL.createObjectURL(imge) :'https://placehold.co/100x100';  console.log(img);
    // value값 가져온거 객체화 하기
    if( name == '' || pay == '' || area == '' ){
        alert('[실패] 제품 등록에 실패하였습니다.');
        return;
    }
    const obj = { pno : ++currentPno , 제품명 : name , 가격 : pay , 설명 : area , 이미지 : img }
    console.log(obj);
    // 객체화한거 배열에 추가
    product.push(obj);
    alert('[성공] 제품이 등록되었습니다.');  

}// func end