$(function(){
    
    var myChart = echarts.init(document.querySelector(".left"));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '2019年注册人数'
        },
        tooltip: {},
        legend: {
            data:['人数','销量']
        },
        xAxis: {
            data: ["1月","2月","3月","4月","5月","6月"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [50, 200, 360, 100, 100, 200]
        },{
            name: '人数',
            type: 'bar',   // bar 柱状图   line 折线图    pie 饼图
            data: [150, 202, 160, 123, 130, 140]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);


    var myChart1 = echarts.init(document.querySelector(".right"));

    // 指定图表的配置项和数据
    option1 = {
        title : {
            text: '热门商品销售',
            subtext: '2019年1月',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['耐克','阿迪','老奶奶','老北京','特步']
        },
        series : [
            {
                name: '品牌热卖',   // 系列名称
                type: 'pie',   // 饼图
                radius : '55%',  // 设置圆的大小
                center: ['50%', '60%'],  // 控制圆心位置
                data:[
                  {value:335, name:'耐克'},
                  {value:310, name:'阿迪'},
                  {value:234, name:'老奶奶'},
                  {value:135, name:'老北京'},
                  {value:1548, name:'特步'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1);
})