$(document).ready(function(){
 // تغيير خصائص navbar عند النزول مسافة أكير من 400 م
 $(window).scroll(function(){
    if($(this).scrollTop()>=100){
        $("#navBar").addClass("noTransparrent");
    }
    else{
        $("#navBar").removeClass("noTransparrent");
    }
});
var wow = new WOW({
    mobile:false
});
wow.init();

// لإخفاء القائمة عند النقر علي أي رابط
$(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

//   لعمل حركة عند الإنتقال عبر الصفحة بإستخدام الروابط
$("a.scroll").on('click', function(event){
    var hash = this.hash;
    $('html, body').animate({scrollTop: $(hash).offset().top},800,function(){});
});

    // E-mail validation 
    $(".custom-form-control").blur(function(){
        var x = document.forms["myForm"]["email"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
            $(this).parent().find(".alert-danger").fadeIn(200);
        }
        else{
            $(this).parent().find(".alert-success").fadeIn(200);
        }
    });

    // E-mail validation1 
    $(".custom-form-control").blur(function(){
        var x = document.forms["myForm1"]["email1"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
            $(this).parent().find(".alert-danger").fadeIn(200);
        }
        else{
            $(this).parent().find(".alert-success").fadeIn(200);
        }
    });
});


