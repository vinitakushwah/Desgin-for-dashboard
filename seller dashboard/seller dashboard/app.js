
const labels = [
    'January',
    'febraray',
    'March',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: [
      'rgb(16, 16, 16)', //black color code
       'rgb(0, 209, 90)' ,//green color code
       'rgb(254, 170, 0)', //yellow color code
    ],

      borderColor: 'transparent' ,
      data: [60, 15, 20],
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );


  // sidebar open and close
  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }