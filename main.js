let wave = document.getElementById('wave');
let circleGraph = document.getElementById('circleGraph');
let candleGraph = document.getElementById('candleGraph');




window.addEventListener("scroll",function(addEventListener){
    let value = window.scrollY;
    wave.style.transform = `translateY(${value * 0.85}px)`
    wave.style.transform= "(45deg);"
    circleGraph.style.transform = `translateY(${value * 0.45}px)`
    candleGraph.style.transform = `translateY(${value * 0.25}px)`
    console.log("scroll");
    
})
