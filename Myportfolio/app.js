// Writing an program to save the email 

// Get ref to the input element


// function for checking the email and saving it  

function save(){
    let userinput=document.getElementById('input_mail_box');
    const Usermail=userinput.value;
    localStorage.setItem('Usermail',Usermail);
    
}

// jquery for scrolling animations 


$(document).ready(function(){
    $('#about').hide()
    $('#skills').hide()
    
    $(window).scroll(function(){
        let positiontop = $(document).scrollTop();
        console.log(positiontop);
        if(positiontop>50){
            $('#about').fadeIn(1000);
        }


        if((positiontop>1100) ){
            $('#skills').fadeIn(1000);
           
        }
        if((positiontop>1900) && (positiontop<2100) ){
            $('#main_resume').addClass('animated slideInLeft');
           
        }
        
       
    })
})


