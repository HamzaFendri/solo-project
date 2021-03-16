$(document).ready(function() {
    $("div#form1").append(
    $("<h3/>").text("Contact Form"), $("<p/>").text("Fill in your information and what kind of shooting session you want"), $("<form/>", {
    action: '#',
    method: '#'
    }).append(
    $("<input/>", {type: 'text',id: 'userName',name: 'name',placeholder: 'Your Name'}),
    $("<input/>", {type: 'text',id: 'userEmail',name: 'email',placeholder: 'Your Email'}),     
    $("<textarea/>", {rows: '5px',cols: '27px',type: 'text',id: 'vmsg',name: 'msg',placeholder: 'Message'}),    
    $("<br/>"), $("<input/>", {type: 'submit',id: 'submit',value: 'Submit'})))
    
function allert(e) {
    e.preventDefault();
        alert("Your Input has been recieved !!");
      }
    $("#submit").click(allert)
}); 
      