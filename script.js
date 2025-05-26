function showScreen(screenId) {
            // Hide all screens
            document.querySelectorAll('.screen').forEach(screen => {
                screen.classList.remove('active');
            });
            
            // Show requested screen
            document.getElementById(screenId).classList.add('active');
            document.getElementById(screenId).classList.add('fade-in');
        }
        
        // Initialize charts when document is loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Progress Chart (Dashboard)
            const progressCtx = document.getElementById('progressChart').getContext('2d');
            new Chart(progressCtx, {
                type: 'line',
                data: {
                    labels: ['2nd 2024 - 2025', '2024', '2024', '2025'],
                    datasets: [{
                        label: 'GPA',
                        data: [3.4, 3.8, 3.6, 3.75],
                        borderColor: '#1d99f3',
                        tension: 0.2,
                        fill: false
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 2.0,
                            max: 4.0
                        }
                    }
                }
            });
            
            // Grade Distribution Chart
            const gradeCtx = document.getElementById('gradeChart').getContext('2d');
            new Chart(gradeCtx, {
                type: 'doughnut',
                data: {
                    labels: ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C'],
                    datasets: [{
                        data: [12, 5, 3, 2, 1, 0, 0],
                        backgroundColor: [
                            '#1d99f3',
                            '#3daee9',
                            '#9b59b6',
                            '#8e44ad',
                            '#27ae60',
                            '#2ecc71',
                            '#f39c12'
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'right',
                        }
                    }
                }
            });
            
            // GPA History Chart
            const gpaHistoryCtx = document.getElementById('gpaHistoryChart').getContext('2d');
            new Chart(gpaHistoryCtx, {
                type: 'bar',
                data: {
                    labels: ['2nd 2024 - 2025', '2024', '2024', '2025'],
                    datasets: [{
                        label: 'Semester GPA',
                        data: [3.4, 3.8, 3.6, 3.75],
                        backgroundColor: [
                            'rgba(29, 153, 243, 0.7)',
                            'rgba(29, 153, 243, 0.7)',
                            'rgba(29, 153, 243, 0.7)',
                            'rgba(29, 153, 243, 0.7)'
                        ],
                        borderColor: [
                            '#1d99f3',
                            '#1d99f3',
                            '#1d99f3',
                            '#1d99f3'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 2.0,
                            max: 4.0
                        }
                    }
                }
            });
        });