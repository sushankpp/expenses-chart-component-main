const chartEl = document.querySelectorAll('.chart');

chartEl.forEach((chart, index) => {
  const graphEl = document.querySelectorAll('.graph');

  chart.addEventListener('click', () => {
    

    chart.classList.toggle('active');
    graphEl[index].classList.toggle('clicked');
  });
});

