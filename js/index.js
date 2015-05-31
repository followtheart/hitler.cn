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
  var meny=Meny.create({
    menuElement:document.querySelector('.meny'),
    contentsElement:document.querySelector('.contents'),
    position:'left',
    height:200,
    width:260,
    angle:30,
    threshold:40,
    overlap:6,
    transitionDuration:'0.5s',
    transitionEasing:'ease',
    gradient:'rgba(0,0,0,0.20) 0%,rgba(0,0,0,0.65)100%)',
    mouse:true,
    touch:true
  });
});
