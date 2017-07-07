var epiQ1 = $("#epicodusQ1").val();
var epiQ2 = $("#epicodusQ2").val();
var epiQ3 = $("#epicodusQ3").val();
var epiQ4 = $("#epicodusQ4").val();
var epiQ5 = $("#epicodusQ5").val();

var rubyRQ1 = $("#rubyRailsQ1").val();
var rubyRQ2 = $("#rubyRailsQ2").val();
var phpDQ1 = $("#phpDrupalQ1").val();
var phpDQ2 = $("#phpDrupalQ2").val();
var javaAQ1 = $("#javaAndQ1").val();
var javaAQ2 = $("#javaAndQ2").val();
var cssDQ1 = $("#cssDesignQ1").val();
var cssDQ2 = $("#cssDesignQ2").val();
var cNtQ1 = $("#cNetQ1").val();
var cNtQ2 = $("#cNetQ2").val();
var locationInput = $("#location").val();

var epiResult = 0;
var rubyRailsResult = 0;
var phpDrupalResult = 0;
var javaAndResult = 0;
var cssDesignResult = 0;
var cNetResult = 0;

$(document).ready(function(){
  $("#submit").click(function(event){
    event.preventDefault();
    if (epiQ1 === "Yes"){
      epiResult += 1;
    } else if (epiQ1 === "No"){
      epiResult += 0;
    } else {
      epiResult += 0;
    }
    if (epiQ2 === "Yes"){
      epiResult += 1;
    } else if (epiQ2 === "No"){
      epiResult += 0;
    } else {
      epiResult += 0;
    }
    if (epiQ3 === "Yes"){
      epiResult += 1;
    } else if (epiQ3 === "No"){
      epiResult += 0;
    } else {
      epiResult += 0;
    }
    if (epiQ4 === "Yes"){
      epiResult += 1;
    } else if (epiQ4 === "No"){
      epiResult += 0;
    } else {
      epiResult += 0;
    }
    if (epiQ5 === "Yes"){
      epiResult += 1;
    } else if (epiQ5 === "No"){
      epiResult += 0;
    } else {
      epiResult += 0;
    }

    if (rubyRQ1 === "Yes"){
      rubyRailsResult += 1;
    } else if (rubyRQ1 === "No"){
      rubyRailsResult += 0;
    } else {
      rubyRailsResult += 0;
    }

    if (rubyRQ2 === "Yes"){
      rubyRailsResult += 1;
    } else if (rubyRQ2 === "No"){
      rubyRailsResult += 0;
    } else {
      rubyRailsResult += 0;
    }

    if (phpDQ1 === "Yes"){
      phpDrupalResult += 1;
    } else if (phpDQ1 === "No"){
      phpDrupalResult += 0;
    } else {
      phpDrupalResult += 0;
    }

    if (phpDQ2 === "Yes"){
      phpDrupalResult += 1;
    } else if (phpDQ2 === "No"){
      phpDrupalResult += 0;
    } else {
      phpDrupalResult += 0;
    }

    if (javaAQ1 === "Yes"){
      javaAndResult += 1;
    } else if (javaAQ1 === "No"){
      javaAndResult += 0;
    } else {
      javaAndResult += 0;
    }

    if (javaAQ2 === "Yes"){
      javaAndResult += 1;
    } else if (javaAQ2 === "No"){
      javaAndResult += 0;
    } else {
      javaAndResult += 0;
    }

    if (cssDQ1 === "Yes"){
      cssDesignResult += 1;
    } else if (cssDQ1 === "No"){
      cssDesignResult += 0;
    } else {
      cssDesignResult += 0;
    }

    if (cssDQ2 === "Yes"){
      cssDesignResult += 1;
    } else if (cssDQ2 === "No"){
      cssDesignResult += 0;
    } else {
      cssDesignResult += 0;
    }

    if (cNtQ1 === "Yes"){
      cNetResult += 1;
    } else if (cNtQ1 === "No"){
      cNetResult = 0;
    } else {
      cNetResult = 0;
    }

    if (cNtQ2 === "Yes"){
      cNetResult += 1;
    } else if (cNtQ1 === "No"){
      cNetResult += 0;
    } else {
      cNetResult += 0;
    }

    if (epiQ1)

    if (rubyRailsResult = 2) {
      $("#rubyRailsShow").show();
    } else {
      $("#rubyRailsShow").hide();
    }

    if (phpDrupalResult = 2) {
      $("#phpDrupalShow").show();
    } else {
      $("#phpDrupalShow").hide();
    }

    if (javaAndResult = 2) {
      $("#javaAndShow").show();
    } else {
      $("#javaAndShow").hide();
    }

    if (cssDesignResult = 2) {
      $("#cssDesignShow").show();
    } else {
      $("#cssDesignShow").hide();
    }

    if (cNetResult = 2) {
      $(".cNetShow").show();
    } else {
      $(".cNetShow").hide();
    }

 });
});
