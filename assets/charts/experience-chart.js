// Add any resizing events here...
window.addEventListener('resize', function() {
    createViz();
});

function createViz() {
    var myChart = echarts.init(document.getElementById('pie'));

    // if window.width is less that x px, hide labels

    var option = {
        baseOption: {
            title : {
                text: 'Professional Interests',
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
                playInterval: 2000,
                controlPosition: 'left',
                data: ['2013', '2014', '2015', '2016', '2017', '2018']
            },
            color : ['#6699ff', '#00cc99', '#f9ae58', '#ff6666', '#666699','#ace600', '#336699'],
            series: [
                {
                    name: 'Interests',
                    label: {
                        show: true,
                        position: 'outside'
                    },
                    type: 'pie',
                    radius: ['0%', '40%']
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
                                value: 30
                            },
                            {
                                name: 'R&D',
                                value: 40
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
                                name: 'Mechanical Design',
                                value: 30
                            },
                            {
                                name: 'R&D',
                                value: 40
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
                                name: 'Product Development',
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
                                name: 'R&D',
                                value: 10
                            },
                            {
                                name: 'Computer Aided Design',
                                value: 10
                            },
                            {
                                name: 'Web Development',
                                value: 30
                            },
                            {
                                name: 'Mobile Development',
                                value: 20
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
                                value: 10
                            },
                            {
                                name: 'R&D',
                                value: 20
                            },
                            {
                                name: 'Web Development',
                                value: 10
                            },
                            {
                                name: 'Mobile Development',
                                value: 10
                            },
                            {
                                name: 'Data Analytics',
                                value: 20
                            },
                            {
                                name: 'Data Visualization',
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
                                name: 'Product Development',
                                value: 10
                            },
                            {
                                name: 'Web Development',
                                value: 15
                            },
                            {
                                name: 'Mobile Development',
                                value: 10
                            },
                            {
                                name: 'Data Analytics',
                                value: 30
                            },
                            {
                                name: 'Data Visualization',
                                value: 30
                            },
                            {
                                name: 'UI/UX',
                                value: 30
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
