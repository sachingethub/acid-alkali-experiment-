const container1Images = document.querySelectorAll(".container-1 .elements img");
const container2Images = document.querySelectorAll(".container-2 .img-container");


container1Images.forEach((img, index) => {
    img.addEventListener("click", () => {
        // Hide all images in Container 2
        container2Images.forEach(container => {
            container.style.display = "none";
        });
        container2Images[index].style.display = "block";
    });
});

const draggableItems = document.querySelectorAll('.img-div');
const dropBox = document.getElementById('drop-box');

// Allow dragover event on the drop box
dropBox.addEventListener('dragover', (event) => {
    event.preventDefault();
});

// Handle drop event
dropBox.addEventListener('drop', (event) => {
    event.preventDefault();
    const draggedElement = document.querySelector('.dragging');
    const type = draggedElement.getAttribute('data-type');
    if (type === 'correct') {
        // Add the correct item to the box
        dropBox.appendChild(draggedElement);
        dropBox.classList.add('correct');
        setTimeout(() => dropBox.classList.remove('correct'), 1000);
    } else {
        // Wrong item - sound alarm and return item to original position
        alert('Wrong item! Try again.');
        dropBox.classList.add('wrong');
        setTimeout(() => dropBox.classList.remove('wrong'), 1000);
    }
});

// Handle dragstart and dragend events
draggableItems.forEach((item) => {
    item.addEventListener('dragstart', () => {
        item.classList.add('dragging');
    });

    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
    });
});
