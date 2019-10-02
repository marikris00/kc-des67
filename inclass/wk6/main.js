$(document).ready{function(){
    $("#main_title").addClass ("pink");

    $("#colorchange").click(changecolor);

    function changecolor(){
      if ($("#main_title").hasClass("pink"))
          $("#main_title").removeClass("pink");
          $("#main_title").addClass("blue");
    }
}

function addStuff() {
  $("#main_title").append('span style="color:red")
}
