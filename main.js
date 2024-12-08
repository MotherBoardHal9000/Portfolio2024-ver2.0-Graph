let wave = document.getElementById('wave');
let circleGraph = document.getElementById('circleGraph');
let candleGraph = document.getElementById('candleGraph');


window.onload =candleGraph.style.opacity = '1'; 
window.onload = circleGraph.style.opacity = '1';
window.onload = wave.style.opacity = '1';



window.addEventListener("scroll",function(addEventListener){
    let value = window.scrollY;
    wave.style.transform = `translateY(${value * 0.85}px)`
    circleGraph.style.transform = `translateY(${value * 0.45}px)`
    candleGraph.style.transform = `translateY(${value * 0.25}px)`
    console.log("scroll");
    window.requestAnimationFrame
    
})
