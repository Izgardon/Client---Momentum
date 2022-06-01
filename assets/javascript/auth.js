//login function
async function requestLogin(e){
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        const r = await fetch(``, options)
        const data = await r.json()
            if (data.err){ throw Error(data.err); }
            login(data);
    } catch (err) {
        console.warn(`Error: ${err}`);
    }

}

//If user attempts login without reg
async function requestReg(e){
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        const r = await fetch(``, options)
        const data = await r.json()
        if (data.err){ throw Error(data.err) }
        requestLogin(e);
    }   catch (err) {
            console.warn(err);
        }
    }


function login(data){
    localStorage.setItem('username', data.user);
    location.hash = '';
}

function logout(){
    localStorage.clear();
    location.hash = '';
}

function currentUser(){
    const username = localStorage.getItem('username')
    return username;
}
