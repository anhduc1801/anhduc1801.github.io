//slide show
$(document).ready(function() {
  $('.banner img:gt(0)').hide();
  setInterval(function(){
      $('.banner :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.banner');}, 
      4000);
})

function validateF(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var text;
	if (name == "" || email =="" || subject =="") {
		text = "You must fill out";
	} else {
		text = "OK";
	}
	
	document.getElementById("msg").innerHTML = text;
	document.getElementById("msg3").innerHTML = text;

	var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        text ="Not a valid e-mail address";
    }

	document.getElementById("msg2").innerHTML = text;
}