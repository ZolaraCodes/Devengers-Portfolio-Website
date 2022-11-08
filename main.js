const spotlightEl = document.querySelector("#spotlight");

function handleMouseMove(event) {
    const { clientX, clientY } = event;
    
    spotlightEl.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px,  #ff375a 10px, #000000ee 650px)`;
}

document.addEventListener("mousemove", handleMouseMove)