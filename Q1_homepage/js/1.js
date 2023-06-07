bg1 = document.getElementById('bg1');
bg2 = document.getElementById('bg2');
bg3 = document.getElementById('bg3');
bg4 = document.getElementById('bg4');
bg5 = document.getElementById('bg5');
bg1.addEventListener('click', function onClick(event) {
  document.body.style.background = 'rgb(255, 99, 71)';
});

bg2.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'rgb(127, 0, 255)';
  });

bg3.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'rgb(124,252,0)';
  });

bg4.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'rgb(150,75,0)';
  });

bg5.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'rgb(245,222,179)';
  });
