function SetHome(obj, url) {
  try {
    obj.style.behavior = 'url(#default#homepage)';
    obj.setHomePage(url);
  } catch (e) {
    if (window.netscape) {
      try {
        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
      } catch (e) {
        alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
      }
    } else {
      alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【" + url + "】设置为首页。");
    }
  }
}

function AddFavorite(title, url) {
  try {
    window.external.addFavorite(url, title);
  } catch (e) {
    try {
      window.sidebar.addPanel(title, url, "");
    } catch (e) {
      alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请进入新网站后使用Ctrl+D进行添加");
    }
  }
}
//////////////////

function checksearch(the) {
  if ($.trim(the.key.value) == '') {
    alert('请输入关键字');
    the.key.focus();
    the.key.value = '';
    return false
  }
  if ($.trim(the.key.value) == '请输入关键字') {
    alert('请输入关键字');
    the.key.focus();
    the.key.value = '';
    return false
  }
}
/*
// 导航
    var isAnimated = false;
    //on() 添加监听  "所要监听的事件" function(){}当监听到事件后执行的方法
    $(window).on("scroll", function() {
        //this代表window scrollTop()向上滑动的距离
        if ($(this).scrollTop() > 100) {
            $(".o-nav").addClass("fixed");
            //如果动画执行过
            if (!isAnimated) {
                $(".o-nav").css("top", "-40px"); //每次要执行动画之前都将top值设为-40px
                $(".o-nav").animate({
                    "top": "0px"
                }, 1000);
                isAnimated = true;
            }
        } else {
            isAnimated = false;
            $(".o-nav").removeClass("fixed");
        }
    })
    */