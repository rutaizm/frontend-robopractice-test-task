function getInitialData() {
    return  fetch('http://localhost:8080/api/users', {
        method:'GET',         
        headers: {
            "Content-Type": "application/json",
            'Accept':'application/json',
        },
    })
    .then ((response) => {      
        if (response.ok) {
            return response.json();
            
        }
        return Promise.reject(`Произошла ошибка ${response.status}`);
    });
}

export default getInitialData;