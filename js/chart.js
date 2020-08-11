// var ctx = document.getElementById('myChart');

// var data = {
//     labels: ['GitHub', 'GitLab', 'BitBucket'],
//     datasets: [{
//         data: [45, 30, 25],
//         backgroundColor: [
//             '#313030',
//             '#E24329',
//             '#0747A6',
//         ],
//     }]
// }

// var myChart = new Chart(ctx, {
//     type: 'pie',
//     data: data,
//     options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true,
//                     fontSize: 16
//                 }
//             }]
//         }
//     }
// });

var oilCanvas = document.getElementById("myChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var data = {
    labels: ['GitHub', 'GitLab', 'BitBucket'],
    datasets: [
        {
            data: [45, 30, 25],
            backgroundColor: [
                '#313030',
                '#E24329',
                '#0747A6',
            ]
        }]
};

var pieChart = new Chart(oilCanvas, {
    type: 'pie',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});
