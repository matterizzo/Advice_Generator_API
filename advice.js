
// ------ Classic Button ------

function btn(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        console.log(data.slip);

        const adviceId = document.querySelector('#idNumber')
        const adviceTxt = document.querySelector('#advice')

        adviceId.innerHTML = data.slip.id;        
        adviceTxt.innerHTML = data.slip.advice;        
    });
};

//------ Automatic Button ------

function btnAuto(){
    setInterval(() => {
        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            console.log(data.slip);
    
            const adviceId = document.querySelector('#idNumber')
            const adviceTxt = document.querySelector('#advice')
            
            adviceId.innerHTML = data.slip.id;        
            adviceTxt.innerHTML = data.slip.advice;        
        })        
    }, 3000);
};

