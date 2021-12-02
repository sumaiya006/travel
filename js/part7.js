
var logo = document.querySelectorAll('.star-logo');

// console.log(logo.length);
// console.log(typeof logo);
var flag = 0;

for(var i=0; i<logo.length; i++){
    // let x = logo[i].Value;
    // console.log(x);
    // let y = logo[0];
    // console.log(typeof y);
    // console.log(y.Value);
    logo[i].setAttribute("style" ,"color:midnightblue");

    logo[0].onclick = function(){    
        // console.log("1");
        logo[i-5].style.color = "rgb(221, 221, 7)";
        flag = 1;
        console.log(flag); 

        if(flag == 1){
            console.log("ok1");
            for(var j=flag; j<=logo.length ;j++){
                logo[j].style.color = "midnightblue";
            }
        }      
    }
    
    logo[1].onclick = function(){
        // console.log("2");

        for(var j=0; j<=(logo.length-4) ;j++){
            logo[j].style.color = "rgb(221, 221, 7)";
        }
        flag = 2;
        console.log(flag);

        if(flag == 2){
            console.log("ok2");
            for(var j=flag; j<=logo.length ;j++){
                logo[j].style.color = "midnightblue";
            }
        } 
        // logo[i-5].style.color = "rgb(221, 221, 7)";
        // logo[i-4].style.color = "rgb(221, 221, 7)";
        // logo[i-1].setAttribute = logo[i-1].style.color;
    }
        
    logo[2].onclick = function(){
        // console.log("3");

        for(var j=0; j<=(logo.length-3) ;j++){
            logo[j].style.color = "rgb(221, 221, 7)";
        }
        flag = 3;
        console.log(flag);

        if(flag == 3){
            console.log("ok2");
            for(var j=flag; j<=logo.length ;j++){
                logo[j].style.color = "midnightblue";
            }
        } 
        // logo[i-5].style.color = "rgb(221, 221, 7)";
        // logo[i-4].style.color = "rgb(221, 221, 7)";
        // logo[i-3].style.color = "rgb(221, 221, 7)"; 
        
    }
    logo[3].onclick = function(){
        // console.log("4");

        for(var j=0; j<=(logo.length-2) ;j++){
            logo[j].style.color = "rgb(221, 221, 7)";
        }

        flag = 4;
        console.log(flag);

        if(flag == 4){
            console.log("ok1");
            for(var j=flag; j<=logo.length ;j++){
                logo[j].style.color = "midnightblue";
            }
        } 
        // logo[i-5].style.color = "rgb(221, 221, 7)";
        // logo[i-4].style.color = "rgb(221, 221, 7)";
        // logo[i-3].style.color = "rgb(221, 221, 7)";
        // logo[i-2].style.color = "rgb(221, 221, 7)";
        
    }
    logo[4].onclick = function(){
        // console.log("5");
        for(var j=0; j<=(logo.length-1) ;j++){
            logo[j].style.color = "rgb(221, 221, 7)";
        }
        flag = 5;
        console.log(flag);
    }

    
    
   






}