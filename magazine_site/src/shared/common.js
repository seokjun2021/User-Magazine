
// 정규식 만들기 => 패턴 만듬 
// aa_aa@aa.com
export const emailCheck = (email) => {
    let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/
 
    return _reg.test(email) // 정규식 패턴이 일치한지 알려준다.
}

