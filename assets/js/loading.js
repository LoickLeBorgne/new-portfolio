
var tooltiptext;
$(".tooltip").mouseenter(function(){
  // Get elements:
  var thisStat = $(this);
  var thisTooltip = thisStat.find(".tooltiptext");
  var thisTooltipInner = thisTooltip.find("span");
  // Get data attributes:
  var dataPercentage = thisStat.attr("data-stat");
  var dataSoftware = thisStat.attr("data-soft");
  var dataColor = thisStat.attr("data-color");
  // Rewrite tooltip:
  thisTooltipInner.text(dataSoftware + " " + dataPercentage + "%");
  thisTooltip.css({"background":dataColor, "color":dataColor});
});


var path = document.querySelector('.stat-path');
var dashLength = path.getTotalLength();
//Set Stat Path: Initial styles:
$('.stat-path').css({
  "stroke-dasharray": dashLength,
  "stroke-dashoffset": dashLength
});

//Stats Handler:
$(document).mouseenter(function(){
  triggerStats();
});

function triggerStats(){
  //Add transition:
  $(".stat-path").css({"transition": "1.2s cubic-bezier(0.35, 2, 0.35, 0.3)"});
  //Loop items:
  $(".stat-item").each(function(){
    //This item select:
    var thisStat = $(this);
    var thisPath = $(this).find("svg .stat-path");
    //Get this Stat Item data percentage attribute:
    var dataPercentage = thisStat.attr("data-stat");
    //Convert "dataPercentage" to absolute length:
    var statLength = (dataPercentage/100) * dashLength;
    //Set Stat Path (new styles):
    thisPath.css({
      "stroke-dasharray": dashLength,
      "stroke-dashoffset": (dashLength - statLength)
    });
  });
};
