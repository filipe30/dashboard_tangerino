var ctx1 = document.getElementsByClassName("bar-chart-1");
        var chartGraph1 = new Chart(ctx1,{
            type:'bar',
            data: {
        labels: ['Administração', 'RH', 'Comercial', 'Financeiro', 'Produção', 'TI', 'Marketing'],
        datasets: [{
            label: 'TOTAL DE COLABORADORES',
            data: [42, 19, 37, 14, 200, 30, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx2 = document.getElementsByClassName("pie-chart-1");
        var chartGraph2 = new Chart(ctx2,{
            type:'pie',
            data: {
        labels: ['Pontos Ativos', 'Pontos Pedentes'],
        datasets: [{
            label: 'Taxa de Presençpa de Ponto',
            data: [302, 45],
            backgroundColor: [
                'rgb(255, 99, 132)',     
                'rgb(255, 205, 86)'           
            ],
           
         
            hoverOffset: 4
                }]
    },
   
});

var ctx3 = document.getElementsByClassName("line-chart-admin");
        var chartGraph3 = new Chart(ctx3,{
            type:'line',
            data: {
        labels: ['Sem Presença', 'Ponto Aberto', 'Ponto Fechado', 'Férias'],
        datasets: [{
            label: 'STATUS DIARIO DE COLABORADORES',
            data: [1, 15, 20, 6],
            backgroundColor: [
                'rgba(255, 99, 12, 0.2)',
                'rgba(54, 12, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 19, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx4 = document.getElementsByClassName("line-chart-rh");
        var chartGraph4 = new Chart(ctx4,{
            type:'line',
            data: {
        labels: ['Sem Presença', 'Ponto Aberto', 'Ponto Fechado', 'Férias'],
        datasets: [{
            label: 'STATUS DIARIO DE COLABORADORES',
            data: [0, 5, 10, 4],
            backgroundColor: [
                'rgba(255, 99, 12, 0.2)',
                'rgba(54, 12, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 19, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx5 = document.getElementsByClassName("line-chart-com");
        var chartGraph5 = new Chart(ctx5,{
            type:'line',
            data: {
        labels: ['Sem Presença', 'Ponto Aberto', 'Ponto Fechado', 'Férias'],
        datasets: [{
            label: 'STATUS DIARIO DE COLABORADORES',
            data: [3, 13, 10, 11],
            backgroundColor: [
                'rgba(255, 99, 12, 0.2)',
                'rgba(54, 12, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 19, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx6 = document.getElementsByClassName("line-chart-fin");
        var chartGraph6 = new Chart(ctx6,{
            type:'line',
            data: {
        labels: ['Sem Presença', 'Ponto Aberto', 'Ponto Fechado', 'Férias'],
        datasets: [{
            label: 'STATUS DIARIO DE COLABORADORES',
            data: [0, 9, 5, 0],
            backgroundColor: [
                'rgba(255, 99, 12, 0.2)',
                'rgba(54, 12, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 19, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx7 = document.getElementsByClassName("line-chart-prod");
        var chartGraph7 = new Chart(ctx7,{
            type:'line',
            data: {
        labels: ['Sem Presença', 'Ponto Aberto', 'Ponto Fechado', 'Férias'],
        datasets: [{
            label: 'STATUS DIARIO DE COLABORADORES',
            data: [12, 150, 20, 20],
            backgroundColor: [
                'rgba(255, 99, 12, 0.2)',
                'rgba(54, 12, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 19, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx8 = document.getElementsByClassName("line-chart-ti");
        var chartGraph8 = new Chart(ctx8,{
            type:'line',
            data: {
        labels: ['Sem Presença', 'Ponto Aberto', 'Ponto Fechado', 'Férias'],
        datasets: [{
            label: 'STATUS DIARIO DE COLABORADORES',
            data: [0, 15, 10, 5],
            backgroundColor: [
                'rgba(255, 99, 12, 0.2)',
                'rgba(54, 12, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 19, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx9 = document.getElementsByClassName("line-chart-mkt");
        var chartGraph9 = new Chart(ctx9,{
            type:'line',
            data: {
        labels: ['Sem Presença', 'Ponto Aberto', 'Ponto Fechado', 'Férias'],
        datasets: [{
            label: 'STATUS DIARIO DE COLABORADORES',
            data: [0, 5, 0, 0],
            backgroundColor: [
                'rgba(255, 99, 12, 0.2)',
                'rgba(54, 12, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 19, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx10 = document.getElementsByClassName("line-chart");
        var chartGraph10 = new Chart(ctx10,{
            type:'line',
            data: {
        labels: ['Sem Presença', 'Ponto Aberto', 'Ponto Fechado', 'Férias'],
        datasets: [{
            label: 'STATUS DIARIO DE COLABORADORES',
            data: [50, 151, 110, 36],
            backgroundColor: [
                'rgba(255, 99, 12, 0.2)',
                'rgba(54, 12, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 19, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx11 = document.getElementsByClassName("pie-chart-2");
        var chartGraph11 = new Chart(ctx11,{
            type:'pie',
            data: {
        labels: ['Horas Extras'],
        datasets: [{
            data: [156, 191],
            backgroundColor: [
                'rgb(54, 162, 235)',                
                'rgb(255, 205, 86)'           
            ],
           
         
            hoverOffset: 4
                }]
    }, 
});

var ctx12 = document.getElementsByClassName("pie-chart-admin");
        var chartGraph12 = new Chart(ctx12,{
            type:'pie',
            data: {
        labels: ['Horas Extras'],
        datasets: [{
            data: [28, 14],
            backgroundColor: [
                'rgb(54, 162, 235)',                
                'rgb(255, 205, 86)'           
            ],
           
         
            hoverOffset: 4
                }]
    },
   
});

var ctx13 = document.getElementsByClassName("pie-chart-rh");
        var chartGraph13 = new Chart(ctx13,{
            type:'pie',
            data: {
        labels: ['Horas Extras'],
        datasets: [{
            data: [11, 8],
            backgroundColor: [
                'rgb(54, 162, 235)',                
                'rgb(255, 205, 86)'           
            ],
           
         
            hoverOffset: 4
                }]
    },
   
});
var ctx14 = document.getElementsByClassName("pie-chart-com");
        var chartGraph14 = new Chart(ctx14,{
            type:'pie',
            data: {
        labels: ['Horas Extras'],
        datasets: [{
            data: [30, 7],
            backgroundColor: [
                'rgb(54, 162, 235)',                
                'rgb(255, 205, 86)'           
            ],
           
         
            hoverOffset: 4
                }]
    },
   
});

var ctx15 = document.getElementsByClassName("pie-chart-fin");
        var chartGraph15 = new Chart(ctx15,{
            type:'pie',
            data: {
        labels: ['Horas Extras'],
        datasets: [{
            data: [7, 7],
            backgroundColor: [
                'rgb(54, 162, 235)',                
                'rgb(255, 205, 86)'           
            ],
           
         
            hoverOffset: 4
                }]
    },
   
});
var ctx16 = document.getElementsByClassName("pie-chart-prod");
        var chartGraph16 = new Chart(ctx16,{
            type:'pie',
            data: {
        labels: ['Horas Extras'],
        datasets: [{
            data: [49, 151],
            backgroundColor: [
                'rgb(54, 162, 235)',                
                'rgb(255, 205, 86)'           
            ],
           
         
            hoverOffset: 4
                }]
    },
   
});

var ctx17 = document.getElementsByClassName("pie-chart-ti");
        var chartGraph17 = new Chart(ctx17,{
            type:'pie',
            data: {
        labels: ['Horas Extras'],
        datasets: [{
            data: [15, 15],
            backgroundColor: [
                'rgb(54, 162, 235)',                
                'rgb(255, 205, 86)'           
            ],
           
         
            hoverOffset: 4
                }]
    },   
});

var ctx18 = document.getElementsByClassName("pie-chart-mkt");
        var chartGraph18 = new Chart(ctx18,{
            type:'pie',
            data: {
        labels: ['Horas Extras'],
        datasets: [{
            data: [5, 0],
            backgroundColor: [
                'rgb(54, 162, 235)',                
                'rgb(255, 205, 86)'           
            ],
           
         
            hoverOffset: 4
                }]
    },
   
});

var ctx19 = document.getElementsByClassName("pie-chart-3");
        var chartGraph19 = new Chart(ctx19,{
            type:'pie',
            data: {
        labels: ['Atrasos'],
        datasets: [{
            data: [41, 306],
            backgroundColor: [
                'green',                
                ' #FF5F11'           
            ],
           
            hoverOffset: 4
                }]
    },
   
});

var ctx20 = document.getElementsByClassName("pie-chart-4");
        var chartGraph20 = new Chart(ctx20,{
            type:'pie',
            data: {
        labels: ['Faltas'],
        datasets: [{
            data: [11, 335],
            backgroundColor: [
                'rgb(255, 205, 86)',    
                'rgb(75, 192, 192)',            
            ],
           
            hoverOffset: 4
                }]
    },
   
});


   