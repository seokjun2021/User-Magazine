// 쿠키는 객체형식식
const getCookie = (name) => { // 쿠키데이터 가져오기
    let value = "; " + document.cookie;
    
    let parts = value.split(`; ${name}=`); // [aa=xx ; bb=cc ;cc=dd] => [aa=bb,cc,dd] (구분을 이렇게 하면 맨 처음 값은 버리고 두번째 값 부터 바로 value로 나눌수있다.)
    // 백키쓸땐 띄어쓰기 주의
    if(parts.length === 2){ // id,pw 두개니까
        return parts.pop().split(";").shift();
        // .pop() 은 원래배열의 마지막 요소를 떼서 반환 
        //.shift() 은 원래배열의 첫번째 요소를 떼서 반환
    }
};


const setCookie = (name , value , exp = 5) => { // 쿠키데이터 만들기
    
    let date = new Date()
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000 ) 
    document.cookie = `${name} = ${value}; expires = ${date.toUTCString()}`;
}

function deleteCookie(name) { // 쿠키데이터 삭제하기
    let date = new Date("2020-01-01").toUTCString();

    document.cookie = name+"=; expires="+date
}

export {getCookie, setCookie, deleteCookie}