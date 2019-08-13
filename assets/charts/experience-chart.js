// Add any resizing events here...
window.addEventListener('resize', function() {
    createViz();
});

function createViz() {
    var myChart = echarts.init(document.getElementById('pie')),
        clientWidth = myChart._dom.clientWidth,
        showLabels = true;

    if (clientWidth < 520) {
        showLabels = false;
    }

    var option = {
        baseOption: {
            title : {
                text: 'Interests Over Time',
                subtext: 'Interact with the timeline',
                left: '10%'
            },
            tooltip: {
                confine: true
            },
            timeline: {
                show: true,
                type: 'slider',
                axisType: 'category',
                autoPlay: true,
                loop: true,
                playInterval: 5000,
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
                }]
            },
            color : ['#6699ff', '#00cc99', '#f9ae58', '#ff6666', '#666699','#ace600', '#336699'],
            series: [
                {
                    name: 'Interests',
                    label: {
                        show: showLabels
                    },
                    labelLine: {
                        show: showLabels
                    },
                    type: 'pie',
                    radius: ['0%', '50%']
                }
            ]
        },
        options: [
            {
                series: [
                    {
                        data: [
                            {
                                name: 'Mechanical Design',
                                value: 40
                            },
                            {
                                name: 'R&D',
                                value: 20
                            },
                            {
                                name: 'Data Analytics',
                                value: 20
                            },
                            {
                                name: 'Computer Aided Design',
                                value: 20
                            }

                        ]
                    }
                ]
            },
            {
                series: [
                    {
                        data: [
                            {
                                name: 'R&D',
                                value: 30
                            },
                            {
                                name: 'Product Development',
                                value: 20
                            },
                            {
                                name: 'Mechanical Design',
                                value: 20
                            },
                            {
                                name: 'Data Analytics',
                                value: 20
                            },
                            {
                                name: 'Web Development',
                                value: 10
                            }
                        ]
                    }
                ]
            },
            {
                series: [
                    {
                        data: [
                            {
                                name: 'Product Design',
                                value: 50
                            },
                            {
                                name: 'Web Development',
                                value: 20
                            },
                            {
                                name: 'Data Analytics',
                                value: 15
                            },
                            {
                                name: 'R&D',
                                value: 10
                            },
                            {
                                name: 'Mobile Development',
                                value: 5
                            }
                        ]
                    }
                ]
            },
            {
                series: [
                    {
                        data: [
                            {
                                name: 'Product Design',
                                value: 25
                            },
                            {
                                name: 'Web Development',
                                value: 25
                            },
                            {
                                name: 'Data Analytics',
                                value: 20
                            },
                            {
                                name: 'Mobile Development',
                                value: 15
                            },
                            {
                                name: 'UI/UX',
                                value: 15
                            }
                        ]
                    }
                ]
            },
            {
                series: [
                    {
                        data: [
                            {
                                name: 'Web Development',
                                value: 30
                            },
                            {
                                name: 'Product Development',
                                value: 20
                            },
                            {
                                name: 'Data Visualization',
                                value: 20
                            },
                            {
                                name: 'Mobile Development',
                                value: 12
                            },
                            {
                                name: 'Data Analytics',
                                value: 10
                            },
                            {
                                name: 'UI/UX',
                                value: 8
                            }
                        ]
                    }
                ]
            },
            {
                series: [
                    {
                        data: [
                            {
                                name: 'Web Development',
                                value: 40
                            },
                            {
                                name: 'UI/UX',
                                value: 20
                            },
                            {
                                name: 'Data Visualization',
                                value: 20
                            },
                            {
                                name: 'Product Development',
                                value: 10
                            },
                            {
                                name: 'Mobile Development',
                                value: 10
                            }
                        ]
                    }
                ]
            }
        ]
    };

    myChart.setOption(option);
    myChart.resize();
}

createViz();
