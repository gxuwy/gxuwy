$(document).ajaxStart(function() {
    // 开启进度条
    NProgress.start();
  })
  $(document).ajaxStop(function() {
    // 模拟网络延迟
    setTimeout(function() {
      // 结束进度条
      NProgress.done();
    }, 500)
  })
  


  $(function(){
    $(".two").on("click",function(){
        $(this).next().stop().slideToggle();
    })

    $(".tl").on("click",function(){
        $(".aside").toggleClass("current");
        $(".topad").toggleClass("current");
        $(".main").toggleClass("current");
    })

  $(".tr").on("click",function(){
    // 显示模态框
    $("#logoutModal").modal("show");
    
  });
  //退出 清除
  $("#logoutBtn").on("click",function(){
    $.ajax({
      url:"/employee/employeeLogout",
      dataType:"json",
      success:function( a ){
        if( a.success){
          location.href ="login.html";
        }
      }
    })
  })
})


