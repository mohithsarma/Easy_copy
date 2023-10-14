// let cursorX = event.clientX;
// let cursorY = event.clientY;

// let element = document.elementFromPoint(cursorX, cursorY);
// let elementText = element.textContent;

// if (element !== null) {
//     console.log(element);
//   }

  document.addEventListener('click', function(event) {
    let cursorX = event.clientX;
    let cursorY = event.clientY;
  
    const element = document.elementFromPoint(cursorX, cursorY);
    const elementText = element.textContent;
    // copyText(elementText);.
    navigator.clipboard.writeText(elementText);
    if (element !== null) {
      console.log(element,elementText);
    }
  });
  