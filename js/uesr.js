$(function(){
    var currentPage =1;
    var pageSize =5;
     render();
    function render(){
        $.ajax({
            type:"get",
            url:"/user/queryUser",
            data:{
                page: currentPage,
                pageSize:pageSize
            },
            dataType:"json",
            success:function( info ){
                console.log(info);
                
               var htmlStr =template("onepart",info);
               $("tbody").html(htmlStr);

               $('#paginator').bootstrapPaginator({
                // 指定bootstrap版本
                bootstrapMajorVersion: 3,
                // 当前页
                currentPage: info.page,
                // 总页数
                totalPages: Math.ceil( info.total / info.size ),
      
                // 当页面被点击时触发
                onPageClicked: function( a, b, c, page ) {
                  // page 当前点击的页码
                  currentPage = page;
                  // 调用 render 重新渲染页面
                  render();
                }
              });
            }
        })



        // 按钮切换 按钮为动态创建  用事件委托
        

    }
       
})