// Add any resizing events here...
window.addEventListener('resize', function() {
    createViz();
});

function createViz() {
    var myChart = echarts.init(document.getElementById('pie')),
        colorMapping,
        option;

    colorMapping = {
        'Web Development': '#6699ff',
        'Mobile Development': '#00cc99',
        'Data Visualization': '#f9ae58',
        'Data Analytics': '#ff6666',
        'Product Design': '#7777e0',
        'Computer Vision': '#c0e063',
        'Computer-Aided Design': '#336699'
    }

    option = {
        baseOption: {
            title : {
                text: 'How I Spend My Time',
                subtext: 'Topics are sized relative to my level of interest. Tip: Interact with the timeline.',
                left: '10%'
            },
            tooltip: {
                show: true,
                formatter: function (param) {
                    var html = '';
                    html += param.marker + param.name;
                    return html;
                }
            },
            timeline: {
                show: true,
                type: 'slider',
                axisType: 'category',
                currentIndex: 6,
                autoPlay: false,
                loop: true,
                playInterval: 1500,
                left: '10%',
                right: '10%',
                controlPosition: 'left',
                data: [{
                    value: '2014', 
                    tooltip: {
                        show: false
                    }
                },{
                    value: '2015', 
                    tooltip: {
                        show: false
                    }
                },{
                    value: '2016', 
                    tooltip: {
                        show: false
                    }
                },{
                    value: '2017', 
                    tooltip: {
                        show: false
                    }
                },{
                    value: '2018', 
                    tooltip: {
                        show: false
                    }
                },{
                    value: '2019', 
                    tooltip: {
                        show: false
                    }
                },{
                    value: '2020', 
                    tooltip: {
                        show: false
                    }
                }]
            },
            animation: true,
            animationDuration: 3000,
            series: [
                {
                    name: 'Interests',
                    type: 'treemap',
                    roam: false,
                    loop: true,
                    nodeClick: false,
                    height: '50%',
                    width: '50%',
                    breadcrumb: {
                        show: false
                    }
                }
            ]
        },
        options: [
            {
                series: [
                    {
                        data: [{
                            name: 'Web Development',
                            value: 0,
                            itemStyle: {
                                color: colorMapping['Web Development'],
                            }
                        }, {
                            name: 'Mobile Development',
                            value: 0,
                            itemStyle: {
                                color: colorMapping['Mobile Development']
                            }
                        }, {
                            name: 'Data Visualization',
                            value: 5,
                            itemStyle: {
                                color: colorMapping['Data Visualization']
                            }
                        }, {
                            name: 'Data Analytics',
                            value: 20,
                            itemStyle: {
                                color: colorMapping['Data Analytics']
                            }
                        }, {
                            name: 'Product Design',
                            value: 10,
                            itemStyle: {
                                color: colorMapping['Product Design']
                            }
                        }, {
                            name: 'Computer Vision',
                            value: 20,
                            itemStyle: {
                                color: colorMapping['Computer Vision']
                            }
                        }, {
                            name: 'Computer-Aided Design',
                            value: 45,
                            itemStyle: {
                                color: colorMapping['Computer-Aided Design']
                            }
                        }]
                    }
                ]
            },
            {
                series: [
                    {
                        data: [{
                            name: 'Web Development',
                            value: 0,
                            itemStyle: {
                                color: colorMapping['Web Development'],
                            }
                        }, {
                            name: 'Mobile Development',
                            value: 5,
                            itemStyle: {
                                color: colorMapping['Mobile Development']
                            }
                        }, {
                            name: 'Data Visualization',
                            value: 5,
                            itemStyle: {
                                color: colorMapping['Data Visualization']
                            }
                        }, {
                            name: 'Data Analytics',
                            value: 30,
                            itemStyle: {
                                color: colorMapping['Data Analytics']
                            }
                        }, {
                            name: 'Product Design',
                            value: 20,
                            itemStyle: {
                                color: colorMapping['Product Design']
                            }
                        }, {
                            name: 'Computer Vision',
                            value: 20,
                            itemStyle: {
                                color: colorMapping['Computer Vision']
                            }
                        }, {
                            name: 'Computer-Aided Design',
                            value: 20,
                            itemStyle: {
                                color: colorMapping['Computer-Aided Design']
                            }
                        }]
                    }
                ]
            },
            {
                series: [
                    {
                        data: [{
                            name: 'Web Development',
                            value: 5,
                            itemStyle: {
                                color: colorMapping['Web Development'],
                            }
                        }, {
                            name: 'Mobile Development',
                            value: 15,
                            itemStyle: {
                                color: colorMapping['Mobile Development']
                            }
                        }, {
                            name: 'Data Visualization',
                            value: 5,
                            itemStyle: {
                                color: colorMapping['Data Visualization']
                            }
                        }, {
                            name: 'Data Analytics',
                            value: 25,
                            itemStyle: {
                                color: colorMapping['Data Analytics']
                            }
                        }, {
                            name: 'Product Design',
                            value: 25,
                            itemStyle: {
                                color: colorMapping['Product Design']
                            }
                        }, {
                            name: 'Computer Vision',
                            value: 10,
                            itemStyle: {
                                color: colorMapping['Computer Vision']
                            }
                        }, {
                            name: 'Computer-Aided Design',
                            value: 15,
                            itemStyle: {
                                color: colorMapping['Computer-Aided Design']
                            }
                        }]
                    }
                ]
            },
            {
                series: [
                    {
                        data: [{
                            name: 'Web Development',
                            value: 15,
                            itemStyle: {
                                color: colorMapping['Web Development'],
                            }
                        }, {
                            name: 'Mobile Development',
                            value: 20,
                            itemStyle: {
                                color: colorMapping['Mobile Development']
                            }
                        }, {
                            name: 'Data Visualization',
                            value: 10,
                            itemStyle: {
                                color: colorMapping['Data Visualization']
                            }
                        }, {
                            name: 'Data Analytics',
                            value: 20,
                            itemStyle: {
                                color: colorMapping['Data Analytics']
                            }
                        }, {
                            name: 'Product Design',
                            value: 25,
                            itemStyle: {
                                color: colorMapping['Product Design']
                            }
                        }, {
                            name: 'Computer Vision',
                            value: 5,
                            itemStyle: {
                                color: colorMapping['Computer Vision']
                            }
                        }, {
                            name: 'Computer-Aided Design',
                            value: 5,
                            itemStyle: {
                                color: colorMapping['Computer-Aided Design']
                            }
                        }]
                    }
                ]
            },
            {
                series: [
                    {
                        data: [{
                            name: 'Web Development',
                            value: 30,
                            itemStyle: {
                                color: colorMapping['Web Development'],
                            }
                        }, {
                            name: 'Mobile Development',
                            value: 20,
                            itemStyle: {
                                color: colorMapping['Mobile Development']
                            }
                        }, {
                            name: 'Data Visualization',
                            value: 15,
                            itemStyle: {
                                color: colorMapping['Data Visualization']
                            }
                        }, {
                            name: 'Data Analytics',
                            value: 10,
                            itemStyle: {
                                color: colorMapping['Data Analytics']
                            }
                        }, {
                            name: 'Product Design',
                            value: 15,
                            itemStyle: {
                                color: colorMapping['Product Design']
                            }
                        }, {
                            name: 'Computer Vision',
                            value: 5,
                            itemStyle: {
                                color: colorMapping['Computer Vision']
                            }
                        }, {
                            name: 'Computer-Aided Design',
                            value: 0,
                            itemStyle: {
                                color: colorMapping['Computer-Aided Design']
                            }
                        }]
                    }
                ]
            },
            {
                series: [
                    {
                        data: [{
                            name: 'Web Development',
                            value: 50,
                            itemStyle: {
                                color: colorMapping['Web Development'],
                            }
                        }, {
                            name: 'Mobile Development',
                            value: 16,
                            itemStyle: {
                                color: colorMapping['Mobile Development']
                            }
                        }, {
                            name: 'Data Visualization',
                            value: 17,
                            itemStyle: {
                                color: colorMapping['Data Visualization']
                            }
                        }, {
                            name: 'Data Analytics',
                            value: 5,
                            itemStyle: {
                                color: colorMapping['Data Analytics']
                            }
                        }, {
                            name: 'Product Design',
                            value: 10,
                            itemStyle: {
                                color: colorMapping['Product Design']
                            }
                        }, {
                            name: 'Computer Vision',
                            value: 2,
                            itemStyle: {
                                color: colorMapping['Computer Vision']
                            }
                        }, {
                            name: 'Computer-Aided Design',
                            value: 0,
                            itemStyle: {
                                color: colorMapping['Computer-Aided Design']
                            }
                        }]
                    }
                ]
            },
            {
                series: [
                    {
                        data: [{
                            name: 'Web Development',
                            value: 65,
                            itemStyle: {
                                color: colorMapping['Web Development'],
                            }
                        }, {
                            name: 'Mobile Development',
                            value: 5,
                            itemStyle: {
                                color: colorMapping['Mobile Development']
                            }
                        }, {
                            name: 'Data Visualization',
                            value: 15,
                            itemStyle: {
                                color: colorMapping['Data Visualization']
                            }
                        }, {
                            name: 'Data Analytics',
                            value: 5,
                            itemStyle: {
                                color: colorMapping['Data Analytics']
                            }
                        }, {
                            name: 'Product Design',
                            value: 10,
                            itemStyle: {
                                color: colorMapping['Product Design']
                            }
                        }, {
                            name: 'Computer Vision',
                            value: 0,
                            itemStyle: {
                                color: colorMapping['Computer Vision']
                            }
                        }, {
                            name: 'Computer-Aided Design',
                            value: 0,
                            itemStyle: {
                                color: colorMapping['Computer-Aided Design']
                            }
                        }]
                    }
                ]
            }
        ]
    };

    myChart.setOption(option);
    myChart.resize();
}

createViz();
