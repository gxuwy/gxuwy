$(function(){
    var currentPage = 1;
    var pageSize = 5;
    // 1. 一进入页面, 渲染第一页
    render();
  
    function render() {
      // 发送ajax, 进行渲染
       $.ajax({
         type: "get",
         url: "/category/querySecondCategoryPaging",
         data: {
           page: currentPage,
           pageSize: pageSize
         },
         dataType: "json",
         success: function( info ) {
           console.log( info );
           var htmlStr = template( "secondTpl", info );
           $('tbody').html( htmlStr );
  
           // 根据后台返回的数据, 进行分页初始化
           $('#paginator').bootstrapPaginator({
             bootstrapMajorVersion: 3,  // 版本号
             currentPage: info.page,  // 当前页
             totalPages: Math.ceil( info.total / info.size ), // 总页数
             onPageClicked: function( a, b, c, page ) {
               // 更新当前页
               currentPage = page;
               // 重新渲染
               render();
             }
           })
         }
       })
    }

        $("#addcate").on("click",function(){
            $("#addsecond").modal("show");
            $.ajax({
                type: "get",
                url: "/category/queryTopCategoryPaging",
                data: {
                  page: 1,
                  pageSize: 100
                },
                dataType: "json",
                success: function( info ) {
                  console.log( info );
                  var htmlStr = template( "dropdownTpl", info );
                  $('.dropdown-menu').html( htmlStr );
                }
              })
        })


        $(".dropdown-menu").on('click','a',function(){
            var b=$(this).text();
            $("#dropdownText").text(b);
        })

        $('#fileupload').fileupload({
            dataType: "json",
            // 文件上传完成的回调函数
            done: function( e, data ) {
              console.log( data );
              var picUrl = data.result.picAddr; // 获取地址
              $('#imgBox img').attr("src", picUrl);
            }
          })

})