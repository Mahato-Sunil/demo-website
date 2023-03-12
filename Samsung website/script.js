//js for opening navigation bar

function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("main").style.marginRight = "100%";
}

// js for closing navigation bar
function closeNav() {
  document.getElementById("myNav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}

//	 js for changing promo picture 
function change(){
var img = document.getElementById("pic");
if(img.src.match("sam")){
	 img.src = "item1.png";
    }else if(img.src.match("item1")){
 				img.src="pic1.png";
	}else if(img.src.match("pic1.png")){
			 	img.src="item8.png";
	}else if(img.src.match("item8.png")){
 				img.src="item5.png";
	}else if(img.src.match("item5")){
 				img.src="pic2.png";
	}else{
	img.src="sam.png";
	}
	}
setInterval(change,3500); 


//showing user about the webpage information 
     var askInfo = prompt("Inorder to use this webpage please enter your Name first:");
	var info= "Hi" +""+ askInfo + "!! \nWelcome to my Page.\n -Sunil Mahato ";
   if(askInfo!=null){
   setTimeout(function show(){alert(info);},3000);
     }else{
     	alert("You missed one important alert!!");
	     }