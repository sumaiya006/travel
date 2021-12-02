// menu bar start-------------------------------->

let menu_bar = document.getElementById('menu_bar');
let main_nav= document.querySelector('.main-nav-links');
let contact_box = document.querySelector('.contact-box');

menu_bar.onclick = function(){
    // console.log("1");
    main_nav.classList.toggle('show');
    contact_box .classList.toggle('show');
}
// menu bar end-------------------------------->



// Search box start----------------------------------->>

let search = document.querySelector('.search');
let search_box = document.querySelector('.search-box');

search.onclick = function(){
    // console.log("2");
    search_box.classList.toggle('show');
}

// Search box end----------------------------------->


// close button start----------------------------------->
let close_button = document.querySelector('.fa-window-close');
let login = document.querySelector('.login-box');

close_button.onclick = function(){
    // console.log("1");
    login.setAttribute("style" , "display:none");
}
// close button end----------------------------------->


// login window start-------------------------------->
let user_logo = document.querySelector('.fa-user')
let login_window = document.querySelector('.login-box');

user_logo.onclick = function(){
    // console.log("yes");
    login_window.setAttribute("style" , "display:block");
}
// login window end-------------------------------->





// slider--->

// input button start--------------------------------------->

var input_button = document.querySelectorAll('.slide-change-button');
let img = document.querySelectorAll('.img');
// let x =input_button.childElementCount;

// console.log(input_button.length);
// console.log(img.length);
setInterval(auto_slide, 2000);
var j = 0;
function auto_slide(){
    if(j == 0){
        // console.log("YES1");
        img[0].setAttribute("style" , "background: url(../images/img3.jpg) no-repeat center center/100% 100%;");
        j=1;
    }
    else if(j == 1){
        // console.log("YES2");
        img[0].setAttribute("style" , " background: url(../images/img4.jpg) no-repeat center center/100% 100%;");
        j=2;
    }
    else if(j == 2){
        // console.log("YES3");
        img[0].setAttribute("style" , "background: url(../images/img5.jpg) no-repeat center center/100% 100%;");
        j=0;
    }   
}




for(var i=0;i<=input_button.length;i++){

    let x = input_button[i].value;
    // console.log(x);
    // let y = img[i];
    // console.log(y);
    
    input_button[i].onclick = function(){
    
        console.log("1");
        if(x == "b1"){
            // console.log("YES1");
            img[0].setAttribute("style" , "background: url(../images/img3.jpg) no-repeat center center/100% 100%;");
        }
        else if(x == "b2"){
            // console.log("YES2");
            img[0].setAttribute("style" , " background: url(../images/img4.jpg) no-repeat center center/100% 100%;");
        }
        else if(x == "b3"){
            // console.log("YES3");
            img[0].setAttribute("style" , "background: url(../images/img5.jpg) no-repeat center center/100% 100%;");
        }
    }

}

// input button end--------------------------------------->