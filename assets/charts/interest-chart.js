
// Add any resizing events here...
window.addEventListener('resize', function() {
    createBar();
});

function createBar() {
    var myChart = echarts.init(document.getElementById('bar')),
        visualMap,
        toolbox,
        clientWidth = myChart._dom.clientWidth;

    if (clientWidth < 620) {
        visualMap = {
            orient: 'horizontal',
            left: 'center',
            top: 'bottom',
            min: 0,
            max: 10,
            text: ['High Interest', 'Low Interest'],
            dimension: 1,
            calculable: false,
            inRange: {
                color: ['#6699ff', '#ff6666']
            }
        };
        toolbox = {
            feature: {
                magicType: {
                    type: ['bar', 'line'],
                    title: {
                        bar: 'Bar',
                        line: 'Line'
                    }
                }
            },
            itemGap: 22,
            orient: 'vertical',
            left: 'right',
            top: 'center'
        };
    } else {
        visualMap = {
            orient: 'vertical',
            left: 'right',
            top: 'center',
            min: 0,
            max: 10,
            text: ['High Interest', 'Low Interest'],
            dimension: 1,
            calculable: false,
            inRange: {
                color: ['#6699ff', '#ff6666']
            }
        };
        toolbox = {
            feature: {
                magicType: {
                    type: ['bar', 'line'],
                    title: {
                        bar: 'Bar',
                        line: 'Line'
                    }
                }
            },
            itemGap: 22,
            orient: 'horizontal',
            left: 'center',
            top: 'bottom'
        };
    }

    var option = {
        dataset: {
            source: [
                ['proficiency', 'interest', 'language', 'detail'],
                [9, 10, 'JavaScript', 'React, Angular, Vue, LWC'],
                [9, 7, 'HTML', false],
                [8.5, 9, 'CSS', 'SASS, LESS'],
                [5.5, 1, 'Matlab', false],
                [5, 7, 'Python', false],
                [4, 8, 'R', false],
                [3, 3, 'Java', false]
            ]
        },
        title : {
            text: 'My Technical Proficiencies',
            subtext: 'Scale: 1 (Novice) - 10 (Expert). Tip: Click on a bar to learn more.',
            left: '10%'
        },
        grid: {
            top: 80,
            bottom: 100
        },
        tooltip: {
            confine: true,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                shadowStyle: {
                    opacity: 0.75
                }
            },
            extraCssText: 'text-align: left;',
            formatter: function(param) {
                var html = '';

                html += param[0].marker + param[0].axisValue;
                html += '<br>';
                html += 'Proficiency: ' + param[0].data[0] + '<br>';

                if (param[0].data[3]) {
                    if (param[0].axisValue === 'JavaScript') {
                        html += 'FE Frameworks: ' + param[0].data[3];
                    } else if (param[0].axisValue === 'CSS') {
                        html += 'Pre-Processors: ' + param[0].data[3];
                    } else {
                        html += 'Detail: ' + param[0].data[3];
                    }
                }

                return html;
            }
        },
        visualMap: visualMap,
        toolbox: toolbox,
        xAxis: {
            type: 'category',
            data: ['JavaScript', 'HTML', 'CSS', 'Matlab', 'Python', 'R', 'Java'],
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
                    },
                    Java: {
                        height: 40,
                        align: 'center',
                        backgroundColor: {
                            image: './images/skills/java.png'
                        }
                    }

                }
            }
        },
        yAxis: {
            type: 'value',
            show: true,
            splitLine: {
                show: false,
                interval: 2
            }
        },
        series:{
            name: 'Proficiency',
            type: 'bar',
            barWidth: '60%',
            encode: {
                x: 'language',
                y: 'proficiency'
            },
            itemStyle: {
                color: '#000000',
                barBorderRadius: 3
            }
        }
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
        } else if (params.name === 'Java') {
            window.open('https://www.java.com/en/')
        }

    });
    
}

createBar();