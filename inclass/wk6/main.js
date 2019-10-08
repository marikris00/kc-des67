$(document).ready(function(){
    //$("#main_title").addClass ("pink");

    $("#colorChange").click(changeColor);
    $("#addDiv").click(addStuff);

    function changeColor(){
      $("#main_title").toggleClass("blue");
      $("#subTitle").toggle();

      //if( $("#main_title").hasClass("pink") ){
      //    $("#main_title").removeClass("pink");
      //    $("#main_title").addClass("blue");
      //}
      //else if( $("#main_title").hasClass("blue") ){
      //          $("#main_title").removeClass("blue");
      //          $("#main_title").addClass("pink");
      //}
      //else {
      //  $("#main_title").addClass("pink");
      //}
}

function addStuff() {
  $("#main_title").append('<span style="color:red">Ha,ha,ha!</span>');
}



})

$(document).ready(function(){
    //$("#mainTitle").addClass("pink");

    $("#colorChange").click(changeColor);
    $("#addDiv").click(addStuff);

    function changeColor(){
        $("#mainTitle").toggleClass("blue");
        $("#subTitle").toggle();
        // if( $("#mainTitle").hasClass("pink") ){
        //     $("#mainTitle").removeClass("pink");
        //     $("#mainTitle").addClass("blue");
        // }
        // else if( $("#mainTitle").hasClass("blue") ) {
        //     $("#mainTitle").removeClass("blue");
        //     $("#mainTitle").addClass("pink");
        // }
        // else {
        //     $("#mainTitle").addClass("pink");
        // }
    }

    function addStuff(){
        $("#mainTitle").append('<span style="color: red">Ha, ha, ha!</span>');
    }

})
