export const ADMIN_DEV_URL = "http://3p-internal.kurly3p.com";
export const email = localStorage.getItem('email') == null ? false : true;

export const getLocalStorage =()=>{
    let check = false;
    if( localStorage.getItem('email') != null ) {
        check = true;
    } 

    return check;
}

