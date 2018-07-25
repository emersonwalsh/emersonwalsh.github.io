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
                text: 'Professional Interests Over Time',
                subtext: 'Try interacting with the timeline below!',
                left: 'center'
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
                controlPosition: 'left',
                data: ['2013', '2014', '2015', '2016', '2017', '2018']
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
                                name: 'R&D',
                                value: 40
                            },
                            {
                                name: 'Mechanical Design',
                                value: 30
                            },
                            {
                                name: 'Data Analytics',
                                value: 30
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
                                name: 'Computer Aided Design',
                                value: 10
                            },
                            {
                                name: 'Web Development',
                                value: 10
                            },
                            {
                                name: 'Data Analytics',
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
                                value: 15
                            },
                            {
                                name: 'R&D',
                                value: 15
                            },
                            {
                                name: 'Data Analytics',
                                value: 10
                            },
                            {
                                name: 'Computer Aided Design',
                                value: 5
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
                                name: 'R&D',
                                value: 10
                            },
                            {
                                name: 'UI/UX',
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
            }
        ]
    };

    myChart.setOption(option);
    myChart.resize();
}

createViz();
