var s = skrollr.init();

var works=[
  {
    name: "網頁_進擊的巨人",
    introduction: "應用bootstrap-結合skrollr製作捲動式網頁",
    work_link: "https://codepen.io/lyccccc/pen/GbzaNg",
    work_img: "https://i.screenshot.net/gd7lrbq"
  },{
    name: "$$流動清單",
    introduction: "動態新增花費金額和結算",
    work_link: "https://codepen.io/lyccccc/pen/QXZKyv",
    work_img: "https://i.screenshot.net/grl28s4"
  },{
    name: "動態天氣盒",
    introduction: "CSS的應用",
    work_link: "https://codepen.io/lyccccc/pen/ZdxMdL",
    work_img: "https://i.screenshot.net/g86wpuw"
  },{
    name: "名片設計",
    introduction: "Pug/Sass練習",
    work_link: "https://codepen.io/lyccccc/pen/gNoLVX",
    work_img: "https://i.screenshot.net/g50vdin"
  },{
    name: "手機demo",
    introduction: "使用Jqyery切換class/css的應用",
    work_link: "https://codepen.io/lyccccc/pen/QXaYOa",
    work_img: "https://i.screenshot.net/g0pv1i4"
  }
]
  
var vm = new Vue({
  el: "#app",
  data: {
    works: works
  }
});

//----------------------------------
$(window).scroll(function(evt){
  if ($(window).scrollTop() > 0){
    $(".explore").removeClass("at_top");
    $("#home_icon").removeClass("at_top");
    $(".navbar").removeClass("navbar-top");
  }else{
    $(".explore").addClass("at_top");
    $("#home_icon").addClass("at_top");
    $(".navbar").addClass("navbar-top");
  }
});

//---------------------------------------
$(window).mousemove(function(evt){
  var pagex = evt.pageX;
  var pagey = evt.pageY;
  
  //區域相對位置
  var x = pagex - $("#section_About").offset().left;
  var y = pagey - $("#section_About").offset().top;
  // console.log(x+"+"+y);
  // console.log("--"+pagex+"+"+ pagey);
  
  //球出現的區域 
  if ( y<0 || y > $("#section_About").outerHeight())
    $("#ball").css("opacity", 0);
  else
    $("#ball").css("opacity", 1);
  //球跟著滑鼠移動
  $("#ball").css("left",x+"px");
  $("#ball").css("top",y+"px");
  
  //笑臉的位置
  var smile_place = $("#smile").offset().left + $("#smile").width()/2;
  var smile_top = $("#smile").offset().top;
  
  //右下上
  if (pagex > smile_place + 80) //right
    $("#smile").attr("src","https://i.screenshot.net/k6gvjc0");
  else if(pagex < smile_place - 80) //left
    $("#smile").attr("src","https://i.screenshot.net/kqvrkt9");
  else  //top
    $("#smile").attr("src","https://i.screenshot.net/g3go9iw");
  // 左上 / 右上
  if(pagex < smile_place - 80 && pagey < smile_top) //lefttop
    $("#smile").attr("src","https://i.screenshot.net/k41q8ax");
  if(pagex > smile_place + 80 && pagey < smile_top) //righttop
    $("#smile").attr("src","https://i.screenshot.net/k7p91s5");
  
  //浮動
  $(".r1text").css("transform", "translateX("+(-y/5)+"px)");
  $(".r2text").css("transform", "translateX("+(-y/5)+"px)");
  $(".r3text").css("transform", "translateX("+(-y/10)+"px)");
  $(".r3text_1").css("transform", "translateX("+(-y/12)+"px)");
  
  $(".pi1").css("transform", "translateX("+(x/12)+"px)");
  $(".pi2").css("transform", "translateX("+(-x/12)+"px)");
  $(".tri1").css("transform", "translateX("+(-x/12)+"px)");
  $(".tri3").css("transform", "translateX("+(+x/12)+"px)");
  
  if ($(window).width() <=750){
    $(".r1text").css("transform", "translateX("+(y/10)+"px)");
    $(".r2text").css("transform", "translateX("+(y/10)+"px)");
    $(".r3text").css("transform", "translateX("+(-y/15)+"px)");
    $(".r3text_1").css("transform", "translateX("+(-y/17)+"px)");
    
    $(".pi1").css("transform", "translateX("+(-x/12)+"px)");
    $(".pi2").css("transform", "translateX("+(x/12)+"px)");
    $(".tri1").css("transform", "translateX("+(x/12)+"px)");
    $(".tri3").css("transform", "translateX("+(-x/12)+"px)");
  }
});
//----------------------------------
$(document).on("click",".page_href",function(evt){
  evt.preventDefault();
  var target = $(this).attr("href");
  $('html,body').animate({
    scrollTop: $(target).offset().top
  },500);
});
//----------------------------------
$(document).on('click','.click',function(event){
  var target = $(this).attr("data-id");
  var text = $(this).attr("data-text");
  var text_all = ".ball1text,.ball2text,.ball3text,.ball4text";

  if (target=="opening" || target=="not_open"){
    $(text_all).css("opacity", "0");
    $(text).css("opacity", "1");
    $(".click").attr("data-id","not_open");
    $(this).attr("data-id","showing");
  }else if(target=="showing"){
    $(text_all).css("opacity", "1");
    $(".click").attr("data-id","opening");
  }
});