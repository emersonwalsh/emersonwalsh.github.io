
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
            left: '10%'
        },
        grid: {
            top: 80,
            bottom: 100
        },
        legend: {
            left: 'center',
            top: 'bottom'
        },
        tooltip: {
            confine: true,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                shadowStyle: {
                    opacity: 0.75
                }
            }
        },
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
            data: ['JavaScript', 'HTML', 'CSS', 'Matlab', 'Python', 'R'],
            axisLabel: {
                formatter: function (value) {
                    return '{' + value + '| }';
                    // return '{' + value + '| }\n{value|' + value + '}';
                },
                margin: 15,
                rich: {
                    // value: {
                    //     lineHeight: 20,
                    //     align: 'center'
                    // },
                    JavaScript: {
                        height: 40,
                        align: 'center',
                        backgroundColor: {
                            image: './images/skills/js.png'
                        }
                    },
                    HTML: {
                        height: 40,
                        align: 'center',
                        backgroundColor: {
                            image: './images/skills/html.png'
                        }
                    },
                    CSS: {
                        height: 40,
                        align: 'center',
                        backgroundColor: {
                            image: './images/skills/css.png'
                        }
                    },
                    Matlab: {
                        height: 40,
                        align: 'center',
                        backgroundColor: {
                            image: './images/skills/matlab.png'
                        }
                    },
                    Python: {
                        height: 40,
                        align: 'center',
                        backgroundColor: {
                            image: './images/skills/python.png'
                        }
                    },
                    R: {
                        height: 40,
                        align: 'center',
                        backgroundColor: {
                            image: './images/skills/r.png'
                        }
                    }
                }
            }
        },
        yAxis: {
            type: 'value',
            show: false
        },
        series: [
            {
                name: 'Proficiency',
                data: [9, 9, 7, 6, 6, 5],
                type: 'bar',
                itemStyle: {
                    color: '#6699ff'
                }
            },
            {
                name: 'Interests',
                data: [10, 7, 8, 4, 7, 8],
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