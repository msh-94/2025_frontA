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
    productAddList();
    productSelect ();
    return;

}



function productAddList(){ //제품 출력함수
    const productList = document.querySelector('#productList');


    let html ='';
    for(let i = 0; i <product.length; i++){
        const proArray = product[i];
        html += `<tr>
                        <td> ${proArray.제품명} </td> <td> ${proArray.가격} </td> <td> ${proArray.설명} </td> 
                        <td> <img src=${proArray.이미지} > </td> <td> <button type="button" onclick="productDelete(${proArray.pno})"> 제품삭제 </button> </td>
                </tr>`

    }

    productList.innerHTML = html;
    productSelect ();
}

function productDelete(pno){  // 제품 제거 함수
    for(let i = 0; i< product.length; i++){
        if(product[i].pno === pno){
            product.splice( i , 1 );
            alert("삭제되었습니다.");
            productAddList();
            return;
        }
    }
    alert("실패하였습니다.");
    return;
}


//=====================================================================



// 키오스크 관리자 
// 데이터샘플
const stockList = [{ sno : 1 , pno : 1 , 입출고 : 1 , amount : 30 , reason : '12312312312' , sdate : '2025-06-24' } ]
let lastSno = stockList.length -1;
let currentSno = stockList[lastSno].sno;

// 1. 등록함수
// 2. 출력함수
// 3. 수정함수
// 4. 제품ID함수
let nowdate = new Date();
let year = nowdate.getFullYear();
let month = nowdate.getMonth() + 1;
let date = nowdate.getDate();
let now = `${year}-${month}-${date}`;


// 등록함수 
function stockIn(){
    // 마크업객체 가져오기
    const productId = document.querySelector('#productId');         console.log(productId);
    const categoryId = document.querySelector('#categoryId');       console.log(categoryId);
    const amountInput = document.querySelector('.amountInput');     console.log(amountInput);
    const reasonInput = document.querySelector('.reasonInput');     console.log(reasonInput);
    // value값 가져오기
    let pid = productId.value;                                          console.log(pid);
    let cid = categoryId.value;                                         console.log(cid);
    if(cid == 1 ){ cid = '입고' ;}
    if(cid == 2 ){ cid = '출고' ;}
    let amount = amountInput.value;                                     console.log(amount);
    let reason = reasonInput.value;                                     console.log(reason);
    
    // value값 가져온거 객체화하기

    const obj1 = { sno : ++currentSno , pno : pid , 입출고 : cid ,amount : amount , reason : reason , sdate : now };
    console.log(obj1);

}
// 카테고리함수
productSelect ();
function productSelect (){
    const productId = document.querySelector('#productId');
    let html = `<option value="" disabled selected > 제품을 선택하세요. </option>`;         
    for(let i = 0 ; i < product.length ; i++){                                       
        const proList = product[i];                                                       
        html += `<option value="${proList.pno}"> ${proList.제품명} </option></select>`; 
    } // for end
    
    productId.innerHTML = html;                             
}
// 수정함수
function pCorrection(sno){
    for( let i = 0; i <= stockList.length-1; i++){
        let stock = stockList[i]
        if(stock.sno == sno ){
            const 입출고 = prompt('입출고사유 : ')
            stock.reason = 입출고
            alert('[성공] 수정 되었습니다.')
        }// if end
    }// for end
    alert('[실패]다시 입력해주세요')
}// func end