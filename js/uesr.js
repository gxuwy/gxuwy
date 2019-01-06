$(function(){
    var currentPage =1;
    var pageSize =5;

    var currentId;
    var isDelete;
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

 }

        // 按钮切换 按钮为动态创建  用事件委托
        $("tbody").on("click",".btn",function(){
            // console.log(111);
           $("#updatestatus").modal("show");
           $(this).hasClass("btn-danger")?$("#newpart").text("您确定要禁用吗？"):$("#newpart").text("您确定要启用吗？");         
           currentId =$(this).parent().data("id");
        // console.log(currentId);
           isDelete =$(this).hasClass("btn-danger")?0:1;
         
        
        })

        $("#statusBtn").on("click",function(){
            // console.log(1111);
            $.ajax({
                type:"post",
                url:"/user/updateUser",
                data:{
                    id:currentId,
                    isDelete:isDelete
                },
                dataType:"json",
                success:function(info){
                    if(info.success){
                        $("#updatestatus").modal("hide");
                        render();
                    }
                }
            })
        })

   
       
})