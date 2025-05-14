const ctx = document.getElementById('attendanceChart').getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Absent', 'Present'],
        datasets: [{
          data: [28.2, 65.8],
          backgroundColor: ['#3f51b5', '#ffa000'],
          borderWidth: 4,
          cutout: '70%',
        }]
      },
      options: {
        plugins: {
          legend: { display: false }
        }
      }
    });