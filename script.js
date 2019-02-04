window.addEventListener('DOMContentLoaded', function () {

  ///////////////////////////////////////////////////////////////
  /////               GESTION DE LA NAV ONE PAGE            /////
  ///////////////////////////////////////////////////////////////

  // splash screen tuto du début
  $("#go-tuto").click(function(e){
    e.preventDefault();
    $("#tutoriel").animate({opacity: "0"});
    setTimeout(function () {
      $("#tutoriel").css({display: "none"});      
    }, 500);
  });

  // affichage des éléments en fonction du menu
  $("#accueil").click(function(){
    $("#canvas").css("display", "inline-block");
    $("object").css("display", "none");
    $("#formulaire-contact").css("display", "none");
    $("#gauche").css("display", "inline-block");
    $("#droite").css("display", "inline-block");
    $("#bas").css("display", "inline-block");
    $("#haut").css("display", "inline-block");
    $("#hit").css("display", "inline-block");
    $("#revive").css("display", "inline-block");
  });

  $("#cv").click(function(){
    $("#canvas").css("display", "none");
    $("object").css("display", "inline-block");
    $("#formulaire-contact").css("display", "none");
    $("#gauche").css("display", "none");
    $("#droite").css("display", "none");
    $("#bas").css("display", "none");
    $("#haut").css("display", "none");
    $("#hit").css("display", "none");
    $("#revive").css("display", "none");
  });

  $("#contact").click(function(){
    $("#canvas").css("display", "none");
    $("object").css("display", "none");
    $("#formulaire-contact").css("display", "inline-block");
    $("#gauche").css("display", "none");
    $("#droite").css("display", "none");
    $("#bas").css("display", "none");
    $("#haut").css("display", "none");
    $("#hit").css("display", "none");
    $("#revive").css("display", "none");
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
