function request(url, method, cb, action){
    fetch(url, {
        credentials: 'include',
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(action),
    })
    .then(r=>r.json())
    .then(console.log)
    

    // (method!=='get')&&{
    //     method,
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(action),
    // }
}

export {request}