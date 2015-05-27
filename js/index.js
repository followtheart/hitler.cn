$(document).ready(function() {
  $('#fullpage').fullpage({

    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage'],
    sectionsColor: ['#58EFCC', '#58EFCC', '#58EFCC', '#58EFCC', '#58EFCC', '#58EFCC', '#58EFCC', '#58EFCC'],
    css3: true,
    //navigation
    navigation: true,
    navigationTooltips: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage'],
    showActiveTooltip:true,
    slidesNavigation:true,
    slidesNavPosition:'bottom'
  });
  $('header').headroom({
    "offset":209,
    "tolerance":5,
    "classes":{
      "initial":"animated",
      "pinned":"swingInX",
      "unpinned":"swingOutX"
    }
  });
  $('p').mouseover(function() {
    $(this).addClass("animated bounceIn");
  });
  $('p').mouseleave(function() {
    $(this).removeClass("animated bounceIn");
  });
  $('header').headroom("destroy");
});
