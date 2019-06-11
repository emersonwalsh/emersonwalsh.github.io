
// Add any resizing events here...
window.addEventListener('resize', function() {
    createBar();
});

function createBar() {
    var myChart = echarts.init(document.getElementById('bar'));

    var option = {
        title : {
            text: 'Technical Proficiencies',
            subtext: 'Click on a bar to learn more',
            left: 'center'
        },
        legend: {
            left: 'center',
            top: 'bottom'
        },
        tooltip: {
            confine: true
        },
        // Add heat to represent interest instead of additional series
        // visualMap: {
        //     show: true,
        //     min: 0,
        //     max: 10
        // },
        toolbox: {
            feature: {
                magicType: {
                    type: ['line', 'bar', 'stack', 'tiled'],
                    title: {
                        line: 'Line',
                        bar: 'Bar',
                        stack: 'Stack',
                        tiled: 'Tiled'
                    }
                }
            },
            itemGap: 22,
            orient: 'vertical',
            left: 'right',
            top: 'center'
        },
        xAxis: {
            type: 'category',
            data: ['JavaScript', 'HTML', 'CSS', 'Matlab', 'Python', 'R']
        },
        yAxis: {
            type: 'value',
            show: false
        },
        series: [
            {
                name: 'Proficiency',
                data: [9, 8.5, 7.6, 7.5, 6.2, 5.5],
                type: 'bar',
                itemStyle: {
                    color: '#6699ff'
                }
            },
            {
                name: 'Interests',
                data: [9.8, 7, 6.8, 5, 7.5, 8.5],
                type: 'bar',
                itemStyle: {
                    color: '#00cc99'
                }
            }
        ]
    };

    myChart.setOption(option);
    myChart.resize();

    myChart.on('click', function (params) {
        // printing data name in console
        // console.log(params.name);
        if (params.name === 'JavaScript') {
            window.open('https://www.javascript.com/');
        } else if (params.name === 'CSS') {
            window.open('https://developer.mozilla.org/en-US/docs/Web/CSS');
        } else if (params.name === 'HTML') {
            window.open('https://developer.mozilla.org/en-US/docs/Web/HTML');
        } else if (params.name === 'R') {
            window.open('https://www.r-project.org/');
        } else if (params.name === 'Python') {
            window.open('https://www.python.org/');
        } else if (params.name === 'Matlab') {
            window.open('https://www.mathworks.com/products/matlab.html');
        }

    });
    
}

createBar();