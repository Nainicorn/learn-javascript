function splitter(element) {
    let resizer = document.createElement("div");
    resizer.className = "resizer";

    // Query the element
    const leftSide = element.children[0];
    leftSide.after(resizer);

    // The current position of mouse
    let x = 0;

    // Width of left side
    let leftWidth = 0;
    let resizerWidth = resizer.getBoundingClientRect().width;
    console.log(resizerWidth);

    // Handle the mousedown event
    // that's triggered when user drags the resizer
    const mouseDownHandler = function (e) {
        // Get the current mouse position
        x = e.clientX;
        leftWidth = leftSide.getBoundingClientRect().width;
        // console.log(leftWidth, leftSide.clientWidth);

        // Attach the listeners to `document`
        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - x;

        const newLeftWidth =
            ((leftWidth + dx - resizerWidth) * 100) /
            resizer.parentNode.getBoundingClientRect().width;

        // console.log(newLeftWidth);
        leftSide.style.pointerEvents = "none";
        leftSide.style.width = `${newLeftWidth}%`;
    };

    const mouseUpHandler = function () {
        // Remove the handlers of `mousemove` and `mouseup`
        leftSide.style.removeProperty("pointer-events");
        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);
    };
    // Attach the handler
    resizer.addEventListener("mousedown", mouseDownHandler);
}
