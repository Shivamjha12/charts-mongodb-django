var xmlhttp = new XMLHttpRequest();
let url = 'http://127.0.0.1:8000/api';
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var inte = data.map(function(elem){
            return elem.intensity;
        });
        var likeh = data.map(function(elem){
            return elem.likelihood;
        });
        var year = data.map(function(elem){
            return elem.start_year;
        });
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: year,
                datasets: [{
                    label: 'Intesity',
                    data: inte,
                    backgroundColor: [
                        '#000000'
                    ],
                    borderColor: [
                        '#000000'
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
console.log(inte);

const ctx1 = document.getElementById('myChart1').getContext('2d');
const myChart1 = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: year,
                datasets: [{
                    label: 'Intesity',
                    data: inte,
                    backgroundColor: [
                        '#007fff'
                    ],
                    borderColor: [
                        '#000000'
                    ],
                    borderWidth: 1,
                    tension: 0.4,
                    fill: true,
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

const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
            type: 'doughnut',
            data: {
                datasets: [{
                    label: 'Intesity',
                    data: inte,
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
       
    }
}
