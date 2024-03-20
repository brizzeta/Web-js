const spans = document.querySelectorAll("span");
const li = document.querySelectorAll("li");

spans.forEach((element, index) => { 
    element.addEventListener('mouseover', () => {
        spans[index].style.fontWeight = "bold";
    });

    element.addEventListener('mouseout', () => {
        spans[index].style.fontWeight = "normal";
    });
});

li.forEach(element => { 
    element.addEventListener('click', (e) => {
        e.stopPropagation();
        let child;

        if (element.classList.contains("parent1")) {
            child = document.querySelectorAll(".child1");
        } else if (element.classList.contains("parent2")) {
            child = document.querySelectorAll(".child2");
        } else if (element.classList.contains("parent3")) {
            child = document.querySelectorAll(".child3");
        } else if (element.classList.contains("parent4")) {
            child = document.querySelectorAll(".child4");
        }

        if (child) {
            child.forEach(childElement => {
                childElement.style.display = (childElement.style.display === "none") ? "" : "none";
            });
        }
    });
});
