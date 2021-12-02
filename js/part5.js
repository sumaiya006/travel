let part5_main_row = document.getElementById('part5-row');

let element = [
    {
        image:"images/img7.jpg"
    },
    {
        image:"images/img8.jpg"
    },
    {
        image:"images/img9.jpg"
    },
    {
        image:"images/img10.jpg"
    },
    {
        image:"images/img11.jpg"
    },
    {
        image:"images/img12.jpg"
    },
    {
        image:"images/china.jpg"
    },
    {
        image:"images/norway.jpg"
    },
    {
        image:"images/img13.jpg"
    }

];
console.log(element.length);

for(var i=0; i<element.length; i++){

   createElement(element[i].image);
   console.log(element[0].image);

}

function createElement(image){
    var main_box = document.createElement('div');
    main_box.setAttribute('class' , 'part5-main-box col-lg-4 col-md-6 col-sm-12');

    var holder = document.createElement('div');
    holder.setAttribute('class' , 'part5-holder');

    var image_holder = document.createElement('img');
    image_holder .setAttribute('src' , image);

    var button_holder = document.createElement('div');
    button_holder.setAttribute('class' , 'part5-button-holder');

    var button = document.createElement('h3');
    button.innerHTML = "Veiw more";

    button_holder.appendChild(button);
    holder.appendChild(button_holder);
    holder.appendChild(image_holder);

    main_box.appendChild(holder);
    part5_main_row.appendChild(main_box);
}