(function () {
    calculateHourDegrees();
    calculateMinuteDegrees();
    calculateSeconds();
    calculateLines();
    calculateLinesdias();

    
 })();

 function linearMap(value, min, max, newMin, newMax) {
    return newMin + (newMax - newMin) * (value - min) / (max - min);
}



function calculateHourDegrees() {
    const currentHour = new Date().getHours() - 12;
    const angle = linearMap(currentHour, 0, 12, 0, 360);
    document.querySelector(".hours").style.transform = `rotate(${angle}deg)`;
  }

  function calculateMinuteDegrees() {
    const currentMinutes = new Date().getMinutes();
    const angle = linearMap(currentMinutes, 0, 60, 0, 360);
    document.querySelector(".minutes").style.transform = `rotate(${angle}deg)`;
  }
  
  function calculateSeconds() {
    const currentMinutes = new Date().getSeconds();
    const angle = linearMap(currentMinutes, 0, 60, 0, 360);
    document.querySelector(".seconds").style.transform = `rotate(${angle}deg)`;
  }
  (function () {
    setInterval(() => {
     calculateHourDegrees();
     calculateMinuteDegrees();
     calculateSeconds();
     calculardia()
    }, 1000);
  })();

  function calculateLines() {
    const lines = document.querySelectorAll(".line");
    const numberLines = lines.length;
    for (let i = 0; i < numberLines; i++) {
      const line = lines[i];
      const angle = linearMap(i, 0, numberLines, 0, 360);
      line.style.transform = `rotate(${angle}deg)`;
    }
  }

  function calculateLinesdias() {
    const dias = document.querySelectorAll(".dia");
    const numberLines = dias.length;
    for (let i = 0; i < numberLines; i++) {
      const line = dias[i];
      const angle = linearMap(i, 0, numberLines, 0, 360);
      line.style.transform = `rotate(${angle}deg)`;
    }
  }

  function calculardia() {
    const currentday = new Date().getDay()-1;
    const angle = linearMap(currentday, 0, 7, 0, 360);
    document.querySelector(".manecilladias").style.transform = `rotate(${angle}deg)`;
  }

 