document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/top-gross/?year=2022')
        .then(response => response.json())
        .then(data => {
            const labels = data.map(movie => movie.title);
            const values = data.map(movie => movie.gross);

            new Chart(document.getElementById('topGrossChart'), {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Top Gross Movies',
                        data: values,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
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
        });

    fetch('/api/top-voted/')
        .then(response => response.json())
        .then(data => {
            const labels = data.map(movie => movie.title);
            const values = data.map(movie => movie.votes);

            new Chart(document.getElementById('topVotedChart'), {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Top Voted Movies',
                        data: values,
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        borderColor: 'rgba(153, 102, 255, 1)',
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
        });

    fetch('/api/top-rated/?year=2022')
        .then(response => response.json())
        .then(data => {
            const labels = data.map(movie => movie.title);
            const values = data.map(movie => movie.rating);

            new Chart(document.getElementById('topRatedChart'), {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Top Rated Movies',
                        data: values,
                        backgroundColor: 'rgba(255, 159, 64, 0.2)',
                        borderColor: 'rgba(255, 159, 64, 1)',
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
        });
});
