function dragElement(elmnt, dragPoint = null) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (dragPoint == null) {
        elmnt.onmousedown = dragging;
    } else {
        dragPoint.onmousedown = dragging;
    }
  
    function dragging(e) {
        e = e || window.event;
        e.preventDefault();
        posBeforeX = e.clientX;
        posBeforeY = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        newPositionX = posBeforeX - e.clientX;
        newPositionY = posBeforeY - e.clientY;
        posBeforeX = e.clientX;
        posBeforeY = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - newPositionY) + "px";
        elmnt.style.left = (elmnt.offsetLeft - newPositionX) + "px";
    }
  
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}