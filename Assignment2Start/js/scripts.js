document.addEventListener("DOMContentLoaded", function() {
    const customNumberInput = document.getElementById("customNumber");
    const customColorButton = document.querySelector(".custColor");
    const randomColorButton = document.querySelector(".randColor");
    const imageSelect = document.getElementById("imageSelect");
    const imageDisplay = document.getElementById("imageDisplay");
    const studentIdParagraph = document.getElementById("myStudentId");

    // Change custom color button functionality
    customColorButton.addEventListener("click", function() {
        changeColor(parseInt(customNumberInput.value));
    });

    // Change random color button functionality
    randomColorButton.addEventListener("click", function() {
        const randomValue = Math.floor(Math.random() * 100) + 1;
        customNumberInput.value = randomValue;
        changeColor(randomValue);
    });

    // Function to change background color and display student ID
    function changeColor(value) {
        let color = "";
        if (value < 0 || value > 100) {
            color = "red";
        } else if (value >= 0 && value < 20) {
            color = "green";
        } else if (value >= 20 && value < 40) {
            color = "blue";
        } else if (value >= 40 && value < 60) {
            color = "orange";
        } else if (value >= 60 && value < 80) {
            color = "purple";
        } else if (value >= 80 && value <= 100) {
            color = "yellow";
        }
        document.body.style.backgroundColor = color;
        studentIdParagraph.textContent = "Student ID: 200594023"; 
    }

    function addList() {
        const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"]; 
        images.forEach(function(image) {
            let option = document.createElement("option");
            option.text = image;
            option.value = image;
            imageSelect.add(option);
        });
    }

    addList(); 

    imageSelect.addEventListener("change", function() {
        const selectedImage = imageSelect.value;
        if (selectedImage) {
            imageDisplay.src = "img/" + selectedImage;
        } else {
            imageDisplay.src = "";
        }
    });
});
