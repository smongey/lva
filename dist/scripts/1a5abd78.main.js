$(document).ready(function(){$("body").hasClass("home")&&$(".navbar-brand span").addClass("hidden"),memberButton(),titlePosition(),$(window).resize(function(){titlePosition(),memberButton()})}),titlePosition=function(){var a=$(".title").height()/2,b=$(".holder").height()/2;$("#slides .title").css({"margin-top":-(b+a-20)})},memberButton=function(){$(window).width()>1200&&$("li.member a").hover(function(){$("li.membertext a").animate({"margin-right":"0px"},150)},function(){$("li.membertext a").animate({"margin-right":"-160px"},150)})};