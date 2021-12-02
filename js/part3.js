let part3_main_row = document.getElementById('part3-row');

 const createItem = [

    {   image:"images/maldive.jpg",
        cost:"price:$100",
        placeName:"Maldive",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    
    {   image:"images/hawaii.jpg",
        cost:"price:$100",
        placeName:"Hawai",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },

    {   image:"images/paris.jpg",
        cost:"price:$100",
        placeName:"Paris",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    
    {   image:"images/switzerland.jpg",
        cost:"price:$100",
        placeName:"Switzerland",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {   image:"images/dubai.jpg",
        cost:"price:$100",
        placeName:"Dubai",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  
    {   image:"images/greece.jpg",
        cost:"price:$100",
        placeName:"Greece",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }

];

// console.log(createItem.length);

for(var i=0; i<createItem.length; i++){

    createbox(createItem[i].image,createItem[i].cost,createItem[i].placeName,createItem[i].text);
}

function createbox(image,cost,placeName,text){

var main_div = document.createElement('div'); 
main_div.setAttribute('class' ,'part3-main-box col-lg-4 col-md-6 col-sm-12');

var holder = document.createElement('div');
holder.setAttribute('class', 'part3-holder');
// ----
var image_holder = document.createElement('div');
image_holder.setAttribute('class' , 'part3-image-holder');

var images = document.createElement('img');
images.setAttribute('src' , image);
images.setAttribute('alt','not found');

var button_holder = document.createElement('div');
button_holder.setAttribute('class' , 'book-button');

var button = document.createElement('h3');
button.setAttribute('class' , 'book');
button.innerHTML = "BOOK";

var place_holder = document.createElement('div');
place_holder.setAttribute('class' , 'part3-place-holder');


var logo = document.createElement('i');
logo.setAttribute('class' , 'far fa-map-marker-alt');

var place = document.createElement('h3');
place.setAttribute('class' , 'part3-place-name');
place.innerHTML = placeName;



var place_text = document.createElement("p");
place_text.innerHTML = text;

var price = document.createElement('h3');
price.setAttribute('class' , 'part3-price');
price.innerHTML = cost;



image_holder.appendChild(images);
image_holder.appendChild(button_holder);
button_holder.appendChild(button);
holder.appendChild(image_holder);
holder.appendChild(place_holder);
place_holder.appendChild(logo);
place_holder.appendChild(place);
holder.appendChild(place_text);
holder.appendChild(price);


main_div.appendChild(holder);
part3_main_row.appendChild(main_div);

}