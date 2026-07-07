// Sales Chart Example
const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Monthly Sales ($)',
      data: [5000, 7000, 8000, 6500, 9000, 10730],
      backgroundColor: '#3498db'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

// Example refresh button
document.getElementById('refresh').addEventListener('click', () => {
  alert("Data refreshed!");
});
