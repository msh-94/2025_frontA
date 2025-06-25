function 가져오기(){
    let products = localStorage.getItem('products');
    if(products == null){ products = [];}
    else{ products = JSON.parse(products)}
    return products;
} 

function 저장하기(products){
    localStorage.setItem('products' , JSON.stringify(products));
}

function 등록함수(){
    const nameInput = document.querySelector('#nameInput');
    const ppriceInput = document.querySelector('#ppriceInput');
    const imgInput = document.querySelector('#imgInput');
    const areaInput = document.querySelector('#areaInput');
    //
    let name = nameInput.value;
    let price = ppriceInput.value;
    let img = imgInput.files[0];
    let area = areaInput.value;
    //
    let products = 가져오기();
    let pcode = products.length == 0 ? 1 : products[products.length-1].pcode + 1;
    // e
    let obj = { pcode : pcode , 이름 : name , 가격 : Number(price) ,
        이미지 : img ? URL.createObjectURL(img) : 'http://placehold.co/100x100' , 설명 : area}
    //
    products.push(obj);
    저장하기(products)
    출력함수()    
}
출력함수()
function 출력함수(){
    const bodyIn = document.querySelector('#bodyIn');
    let products = 가져오기()
    let html = '';
    for(let i = 0; i <= products.length-1; i++){
        제품 = products[i]
        html += `<tr>
                        <td>${제품.이름}</td>
                        <td>${제품.가격}</td>
                        <td>${제품.설명}</td>
                        <td><img src="${제품.이미지}"/></td>
                        <td><button onclick="삭제함수(${제품.pcode})">삭제</button></td>
                    </tr>`
    }
    bodyIn.innerHTML = html;
}

function 삭제함수(pcode){
    let products = 가져오기()
    for(let i = 0; i <= products.length-1; i++){
        if(products[i].pcode == pcode){
            products.splice(i , 1);
            저장하기(products)
            출력함수()
            return
        }
    }
}