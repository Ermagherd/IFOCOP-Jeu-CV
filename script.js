window.addEventListener('DOMContentLoaded', function () {

  ///////////////////////////////////////////////////////////////
  /////               GESTION DE LA NAV ONE PAGE            /////
  ///////////////////////////////////////////////////////////////

  $("#go-tuto").click(function(e){
    e.preventDefault();
    $("#tutoriel").animate({opacity: "0"});
    setTimeout(function () {
      $("#tutoriel").css({display: "none"});      
    }, 500);
  });

  $("#accueil").click(function(){
    $("#canvas").css("display", "inline-block");
    $("object").css("display", "none");
    $("#formulaire-contact").css("display", "none");
  });

  $("#cv").click(function(){
    $("#canvas").css("display", "none");
    $("object").css("display", "inline-block");
    $("#formulaire-contact").css("display", "none");
  });

  $("#contact").click(function(){
    $("#canvas").css("display", "none");
    $("object").css("display", "none");
    $("#formulaire-contact").css("display", "inline-block");
  });

  $("#accueil").click();

  $("#linkedin").click(function(){
    window.open('https://www.linkedin.com/in/pierre-fouch%C3%A9/', '_blank', 'toolbar=0,location=0,menubar=0');
  });

  ///////////////////////////////////////////////////////////////
  /////                     LANCEMENT DU JEU                /////
  ///////////////////////////////////////////////////////////////

  jeuDave();
  
});
