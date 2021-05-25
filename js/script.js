var ctx = document.getElementsByClassName("bar-chart-1");
        var chartGraph = new Chart(ctx,{
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

var ctx = document.getElementsByClassName("pie-chart-1");
        var chartGraph = new Chart(ctx,{
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
var ctx = document.getElementsByClassName("line-chart-admin");
        var chartGraph = new Chart(ctx,{
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
var ctx = document.getElementsByClassName("line-chart-rh");
        var chartGraph = new Chart(ctx,{
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
var ctx = document.getElementsByClassName("line-chart-com");
        var chartGraph = new Chart(ctx,{
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
var ctx = document.getElementsByClassName("line-chart-fin");
        var chartGraph = new Chart(ctx,{
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
var ctx = document.getElementsByClassName("line-chart-prod");
        var chartGraph = new Chart(ctx,{
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
var ctx = document.getElementsByClassName("line-chart-ti");
        var chartGraph = new Chart(ctx,{
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
var ctx = document.getElementsByClassName("line-chart-mkt");
        var chartGraph = new Chart(ctx,{
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
var ctx = document.getElementsByClassName("line-chart");
        var chartGraph = new Chart(ctx,{
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

var ctx = document.getElementsByClassName("pie-chart-2");
        var chartGraph = new Chart(ctx,{
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
var ctx = document.getElementsByClassName("pie-chart-admin");
        var chartGraph = new Chart(ctx,{
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
var ctx = document.getElementsByClassName("pie-chart-rh");
        var chartGraph = new Chart(ctx,{
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
var ctx = document.getElementsByClassName("pie-chart-com");
        var chartGraph = new Chart(ctx,{
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
var ctx = document.getElementsByClassName("pie-chart-fin");
        var chartGraph = new Chart(ctx,{
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
var ctx = document.getElementsByClassName("pie-chart-prod");
        var chartGraph = new Chart(ctx,{
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
var ctx = document.getElementsByClassName("pie-chart-ti");
        var chartGraph = new Chart(ctx,{
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
var ctx = document.getElementsByClassName("pie-chart-mkt");
        var chartGraph = new Chart(ctx,{
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

var ctx = document.getElementsByClassName("pie-chart-3");
        var chartGraph = new Chart(ctx,{
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

var ctx = document.getElementsByClassName("pie-chart-4");
        var chartGraph = new Chart(ctx,{
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


   