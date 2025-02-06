const colors = [
  '#ef5777',
  '#575fcf',
  '#4bcffa',
  '#34e7e4',
  '#0be881',
  '#f53b57',
  '#3c40c6',
  '#0fbcf9',
  '#00d8d6',
  '#05c46b',
  '#ffc048',
  '#ffdd59',
  '#ff5e57',
  '#d2dae2',
  '#485460',
  '#ffa801',
  '#ffd32a',
  '#ff3f34',
];

const direction = [ 'to left', 'to right', 'to top', 'to bottom'];

function randomBackground() {
  const firstColor = colors[Math.floor(Math.random() * colors.length)];
  const secondColor = colors[Math.floor(Math.random() * colors.length)];
  const randomDirection = direction[Math.floor(Math.random() * direction.length)];

  if(firstColor === secondColor) {
    return randomBackground();
  }

  document.body.style.background = `linear-gradient(${randomDirection}, ${firstColor}, ${secondColor})`;
}

randomBackground();
