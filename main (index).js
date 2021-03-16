$('.main').css("background-image", "url('https://s1.1zoom.me/big3/680/358480-admin.jpg')");

function myFunction() {
    var popup = document.getElementById("contact");
    popup.classList.toggle("show");
  }

  $(window).load(function () {
    $(".trigger_popup_fricc").click(function(){
       $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
});



