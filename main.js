const spotlightEl = document.querySelector("#spotlight");

function handleMouseMove(event) {
    const { clientX, clientY } = event;
    
    spotlightEl.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #00008b 10%, 20px , #000000ee 350px)`;
}

document.addEventListener("mousemove", handleMouseMove)

