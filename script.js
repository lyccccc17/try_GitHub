var s = skrollr.init();

var works = [
  {
    name: "網頁_進擊的巨人",
    introduction: "應用bootstrap-結合skrollr製作捲動式網頁",
    work_link: "https://codepen.io/lyccccc/full/GbzaNg",
    work_img: "https://i.imgur.com/qZi6bgf.jpg"
  },{
    name: "$$流動清單",
    introduction: "動態新增花費金額和結算",
    work_link: "https://codepen.io/lyccccc/full/QXZKyv",
    work_img: "https://i.imgur.com/dGbVnya.png"
  },{
    name: "動態天氣盒",
    introduction: "CSS的應用",
    work_link: "https://codepen.io/lyccccc/full/ZdxMdL",
    work_img: "https://i.imgur.com/3fn3QDh.png"
  },{
    name: "名片設計",
    introduction: "Pug/Sass練習",
    work_link: "https://codepen.io/lyccccc/full/gNoLVX",
    work_img: "https://i.imgur.com/Ktvtwf6.png"
  },{
    name: "手機demo",
    introduction: "使用Jqyery切換class/css的應用",
    work_link: "https://codepen.io/lyccccc/full/bXePRp",
    work_img: "https://i.imgur.com/jPVwc1u.png"
  }
]
  
var vm = new Vue({
  el: "#app",
  data: {
    works: works
  }
});


//----------------------------------
window.onscroll = function(){
  //因為有些瀏覽器可接受的用法不一樣
  var window_scroll_height = document.documentElement.scrollTop + document.body.scrollTop;
  
  if (window_scroll_height > 0){
    // console.log(window_scroll_height);
    document.getElementById("home_icon").classList.remove("at_top");
    document.getElementById("explore").classList.remove("at_top");
    document.getElementById("navbar").classList.remove("navbar-top");
  }
  else{
    document.getElementById("home_icon").classList.add("at_top");
    document.getElementById("explore").classList.add("at_top");
    document.getElementById("navbar").classList.add("navbar-top");
  }
};

//---------------------------------------
window.onmousemove = function(evt){
  var pagex = evt.pageX;
  var pagey = evt.pageY;
  
  //區域相對位置
  var section_About = document.getElementById("section_About");
  var x = pagex - section_About.offsetLeft;
  var y = pagey - section_About.offsetTop;
  // console.log(x+"+"+y);
  // console.log("--"+pagex+"+"+ pagey);
  
  //球出現的區域 
  if ( y<0 || y > section_About.clientHeight)
    document.getElementById("ball").style.display = "none";
  else
    document.getElementById("ball").style.display = "block";

  //球跟著滑鼠移動
  document.getElementById("ball").style.left = ( x +"px");
  document.getElementById("ball").style.top = ( y +"px");
  
  //笑臉在#section_About的位置
  var smile_id = document.getElementById("smile");
  var smile_place = smile_id.offsetLeft + smile_id.offsetWidth/2;
  var smile_top = smile_id.offsetTop + document.querySelector(".row_smile").offsetTop;

  //右下上
  if (x > smile_place + 80) //right
    smile_id.setAttribute("src","https://i.imgur.com/uNSj3RX.png");
  else if(x < smile_place - 80) //left
    smile_id.setAttribute("src","https://i.imgur.com/WshgFCU.png");
  else  //top
    smile_id.setAttribute("src","https://i.imgur.com/0nb6S3i.png");
  // 左上 / 右上
  if(x < smile_place - 80 && y < smile_top) //lefttop
    smile_id.setAttribute("src","https://i.imgur.com/EArrjfA.png");
  if(x > smile_place + 80 && y < smile_top) //righttop
    smile_id.setAttribute("src","https://i.imgur.com/dIY9N5k.png");

  //浮動  
  document.querySelector(".r1text").style.transform = "translateX("+(-y/5)+"px)";
  document.querySelector(".r2text").style.transform = "translateX("+(-y/5)+"px)";
  document.querySelector(".r3text_1").style.transform = "translateX("+(-y/12)+"px)";
  document.querySelector(".r3text_2").style.transform = "translateX("+(-y/10)+"px)";
  document.querySelector(".tri1").style.transform = "translateX("+(-x/12)+"px)";
  document.querySelector(".tri2").style.transform = "translateX("+( x/12)+"px)";
  document.querySelector(".pi1").style.transform = "translateX("+( x/12)+"px)";
  document.querySelector(".pi2").style.transform = "translateX("+(-x/12)+"px)";
  
  if (document.body.offsetWidth <=750){
    document.querySelector(".r1text").style.transform = "translateX("+(y/10)+"px)";
    document.querySelector(".r2text").style.transform = "translateX("+(y/10)+"px)";
    document.querySelector(".r3text_1").style.transform = "translateX("+(-y/15)+"px)";
    document.querySelector(".r3text_2").style.transform = "translateX("+(-y/17)+"px)";
    
    document.querySelector(".tri1").style.transform = "translateX("+( x/12)+"px)";
    document.querySelector(".tri2").style.transform = "translateX("+(-x/12)+"px)";
    document.querySelector(".pi1").style.transform = "translateX("+(-x/12)+"px)";
    document.querySelector(".pi2").style.transform = "translateX("+( x/12)+"px)";
  }
};

//----------------------------------
var elements = document.getElementsByClassName("page_href");

for (var i=0 ; i < elements.length ; i++){
  elements[i].onclick = function(evt){
    evt.preventDefault();
    var target = this.getAttribute("href"); //抓到被點擊的元素的href
    window.scroll({
      top: document.querySelector(target).offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  };
};

//----------------------------------
var clicks = document.getElementsByClassName("click");

for (var j=0 ; j < clicks.length ; j++){
  clicks[j].onclick = function(evt){
    var target = this.getAttribute("data-id");
    var text = this.getAttribute("data-text");
    var text_all = document.querySelectorAll(".ball1text,.ball2text,.ball3text,.ball4text");
    // console.log(target);
    
    if (target=="opening" || target=="not_open"){
      for (var a=0 ; a < text_all.length ; a++){
        text_all[a].style.opacity = 0;
      }
      for (var b=0 ; b < document.querySelectorAll(text).length ; b++){
        document.querySelectorAll(text)[b].style.opacity = 1;
      }
      for (var c=0 ; c < document.querySelectorAll(".click").length ; c++){
        document.querySelectorAll(".click")[c].setAttribute("data-id", "not_open");
      }
      this.setAttribute("data-id","showing");
    }
    else if (target=="showing"){
      for (var d=0 ; d < text_all.length ; d++){
        text_all[d].style.opacity = 1;
      }
      this.setAttribute("data-id","opening");
    }
  }
};