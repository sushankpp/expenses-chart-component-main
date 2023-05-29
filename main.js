const chartEl = document.querySelectorAll('.chart');

chartEl.forEach((chart, index) => {
  const graphEl = document.querySelectorAll('.graph');

  chart.addEventListener('click', () => {
    chartEl.forEach((chart, i) => {
      chart.classList.remove('active');
      graphEl[i].classList.remove('clicked');
    });

    chart.classList.add('active');
    graphEl[index].classList.add('clicked');
  });
});

