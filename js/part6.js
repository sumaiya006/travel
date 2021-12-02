var review_holder = document.getElementById('review_holder');

const review_element = [

    {
        image_path:"images/women3.jpg",
        name:"Brielle"
    },
    {
        image_path:"images/women2.jpg",
        name:"Dionne"
    },
    {
        image_path:"images/man5.jpg",
        name:"Aiden"
    },
    {
        image_path:"images/women1.jpg",
        name:"Eloise"
    },
    {
        image_path:"images/man3.jpg",
        name:"Charlie"
    },
    {
        image_path:"images/man1.jpg",
        name:"Elijah"
    },
    {
        image_path:"images/women6.jpg",
        name:"Fay"
    },
    {
        image_path:"images/women7.jpg",
        name:"Sophia"
    },
    {
        image_path:"images/man6.jpg",
        name:"Oliver"
    },
    {
        image_path:"images/women4.jpg",
        name:"Everleigh"
    },
    {
        image_path:"images/man2.jpg",
        name:"Caspian"
    },
    {
        image_path:"images/man4.jpg",
        name:"Lucas"
    },
    {
        image_path:"images/women5.jpg",
        name:"Ava"
    },

];
//  console.log(review_element.length);
 for( var i=0; i<review_element.length; i++){
     create_element(review_element[i].image_path,review_element[i].name);
    //  console.log(review_element[i].name);
 }

function create_element(image_path,name){

var review = document.createElement('div');
review.setAttribute('class', 'review');

var image_holder = document.createElement('div');
image_holder.setAttribute('class' , 'image');

var img = document.createElement('img');
img.setAttribute('src' , image_path);
img.setAttribute('alt' , 'not found');

var review_name = document.createElement('h3');
review_name.setAttribute('class' , 'review-name');
review_name.innerHTML = name;

var review_text = document.createElement('p');
review_text.setAttribute('class' , 'review-text');
review_text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

var rating = document.createElement('h3');
rating.setAttribute('class' , 'rating');
rating.innerHTML = "Ratings:";

var logo = document.createElement('div');
logo.setAttribute('class' , 'rating-logo');

var logo1 = document.createElement('i');
logo1.setAttribute('class' , 'fas fa-star');

var logo2 = document.createElement('i');
logo2.setAttribute('class' , 'fas fa-star');

var logo3 = document.createElement('i');
logo3.setAttribute('class' , 'fas fa-star');

var logo4 = document.createElement('i');
logo4.setAttribute('class' , 'fas fa-star');

var logo5 = document.createElement('i');
logo5.setAttribute('class' , 'fas fa-star');

review.appendChild(image_holder);
image_holder.appendChild(img);
review.appendChild(review_name);
review.appendChild(review_text);
review.appendChild(rating);
review.appendChild(logo);

logo.appendChild(logo1);
logo.appendChild(logo2);
logo.appendChild(logo3);
logo.appendChild(logo4);
logo.appendChild(logo5);

review_holder.appendChild(review);


}

// change by clicking logo-------------------------->

// let main_holder = document.querySelectorAll('.review');
// let right_button = document.querySelector('.right-swipe')
// console.log(main_holder.length);

// for(var i=0; i<main_holder.length; i++){
//     let x = main_holder[i]
//     // let y = x.childNodes[0];
//     // let z = y.childNodes[0].src;
   
//     console.log(x);
//     // console.log(y.childNodes[0]);
//     // console.log(z);
     

  
    

    
    
   

//     right_button.onclick = function(){
      
//         let j = main_holder[0];
//         console.log(j);
//         console.log("1");
//         x.setAttribute("style" , "border:1px solid red");
   
      
//     }
  
// }



// const container = document.querySelector(".review-holder");
// const lefty = document.querySelector(".left-swipe");


// lefty.addEventListener("click", function() {
//   	translate += 200;
//   	container.style.transform = "translateX(" + translate + "px" + ")";
// });

// const righty = document.querySelector(".right-swipe");

// righty.addEventListener("click", function() {
//     translate -= 200;
//     container.setAttribute("style" , "transform:translate")
// });

$('.right-swipe').click(function() {
    event.preventDefault();
    $('#review_holder').animate({
      scrollLeft: "+=250px"
    }, "fast");
  });
  
   $('.left-swipe').click(function() {
    event.preventDefault();
    $('#review_holder').animate({
      scrollLeft: "-=250px"
    }, "fast");
  });
