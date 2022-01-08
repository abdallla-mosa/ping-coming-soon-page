const form=document.getElementById('from'),
      btn=document.querySelector('.btn'),
      email=document.querySelector('#email');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    ValidateEmail(email);
})

function ValidateEmail(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat))
    {
    console.log('true');
    return true;
    }
    else{
        // console.log('eroor');
    }
   
    }