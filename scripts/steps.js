(() => {
  let container = document.getElementById("steps");
  let wrapper = document.createElement("div");
  let index = 1;
  data.steps.forEach((indivStep) => {
    if (index == 9 || index == 1) {
      let optionalHeading = document.createElement("h1");
      optionalHeading.innerHTML = `${indivStep.type} steps:`;
      wrapper.appendChild(optionalHeading);
    }
    let newStep = document.createElement("span");
    newStep.innerHTML = `
    <input id="checkbox${index}" type="checkbox" value="${index}" onClick="updateBar(${index})">
      <span class="indivStep">
        ${index}. ${indivStep.step}
        <span>
          Step ${index} explanation:<br>${indivStep.title}
        </span>
      </span>
    </input>
    <br><br>
    `;
    wrapper.appendChild(newStep);
    index++;
  });
  let progressBarHeader = document.createElement("h1");
  progressBarHeader.innerHTML = `Progress <small>(only includes required steps)</small>:`;
  wrapper.appendChild(progressBarHeader);
  container.appendChild(wrapper);
})();

function updateBar(index) {
  document.getElementById(`checkbox${index}`).setAttribute(`disabled`, true);
  document.getElementById(`checkbox${index}`).setAttribute(`checked`, true);
  if (index <= data.steps.length) {
    document
      .getElementById(`theActualBar`)
      .setAttribute(`value`, (index / 8) * 100);
    for (let j = index; j === 1; j--) {
      document.getElementById(`checkbox${j}`).setAttribute(`disabled`, true);
      document.getElementById(`checkbox${j}`).setAttribute(`checked`, true);
    }
  }
}

var tooltips = document.querySelectorAll(".indivStep span");

window.onmousemove = function (e) {
  var x = e.clientX + "px",
    y = e.clientY + "px";
  for (var i = 0; i < tooltips.length; i++) {
    tooltips[i].style.top = y;
    tooltips[i].style.left = x;
  }
};
