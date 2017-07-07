$(document).ready(function(){
  $("#submit").click(function(){
    var epiInput = $("#epicodusQ").val();
    var rubyRInput = $("#rubyRailsQ").val();
    var phpDInput = $("#phpDrupalQ").val();
    var javaAInput = $("#javaAndQ").val();
    var cssDInput = $("#cssDesignQ").val();
    var cNInput = $("#cNetQ").val();

    var epiResult = 0;
    var rubyRResult = 0;
    var phpDResult = 0;
    var javaAResult = 0;
    var cssDResult = 0;
    var cNResult = 0;

    if (epiInput === "Yes") {
      epiResult += 1;
    } else {
      epiResult += 0;
    }

    if (rubyRInput === "Yes") {
      rubyRResult += 1;
    } else {
      rubyRResult += 0;
    }

    if (phpDInput === "Yes") {
      phpDResult += 1;
    } else {
      phpDResult += 0;
    }

    if (javaAInput === "Yes") {
      javaAResult += 1;
    } else {
      javaAResult += 0;
    }

    if (cssDInput === "Yes") {
      cssDResult += 1;
    } else {
      cssDResult += 0;
    }
    if (cNInput === "Yes") {
      cNResult += 1;
    } else {
      cNResult += 0;
    }

    if (epiResult === 1) {
      $(".epicodusY").show();
    } else {
      $(".epicodusN").show();
    }
  });
});
