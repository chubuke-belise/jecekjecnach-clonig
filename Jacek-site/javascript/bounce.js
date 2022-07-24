let bounceLetter = function () {
    this.classList.add("bouncer");
    setTimeout(function () {
        this.classList.remove("bouncer");
    }.bind(this), 1000);
};

(function () {
    let bouncerLetterList = document.querySelectorAll(".bouncing-el>span");
    for (let i = 0; i < bouncerLetterList.length; i++) {
        bouncerLetterList[i].addEventListener("mouseover", bounceLetter.bind(bouncerLetterList[i]));
    }
})();
 