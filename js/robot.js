const accordion = document.getElementsByClassName('accordion-box');

for(i=0;i<accordion.length;i++){
    accordion[i].addEventListener('click', ()=>{
        event.currentTarget.classList.toggle('active');
    })
};

