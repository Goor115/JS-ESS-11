let b = document.querySelector("#showButton");
b.addEventListener("click", function () {
    const form = document.forms[0];
    for (let i = 0; i < form.elements.length; i++) {
        const element = form.elements[i];
        if (element.type != "button") {
            console.log(element.name + " = " + element.value);
        }
    }
});