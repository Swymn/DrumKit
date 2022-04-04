/**
 * Cette fonction me permet de faire un son, en fonction du nom passer en paramètre.
 * 
 * @param {*} sound 
 */
function play(sound) {
    new Audio("../sounds/" + sound + ".mp3").play();
}

/**
 * Cette fonction me permet de jouer un son, en passant en paramètre, la class du bouton jouer.
 * En effet, en récupérant la classe, celà me permet de connaître le nom de l'image de fond, qui 
 * à le même nom que l'instrument jouer. Je n'ai juste qu'à récupérer le nom et à le placer en paramètre
 * de la fonction play, au travers de différents split.
 * 
 * @param {*} itemClass
 */
function makeSound(itemClass) {
    let item = getComputedStyle(itemClass, itemClass.classList[0]).backgroundImage;

    item = item.split("/");
    item = item[item.length-1];
    item = item.split(".");
    item = item[0];

    play(item);
}

/**
 * 
 * Cette fonction me permet d'ajouter une clase puis de la retiré au bout de 100 ms, afin d'animer le bouton cliquer,
 * et d'améliorer le visuel.
 * 
 * @param {*} currentKey 
 */
function buttonAnimate(currentKey) {

    let classListActiveButton = document.querySelector(`.${currentKey}`).classList;

    classListActiveButton.add("pressed");

    setTimeout(() => {
        classListActiveButton.remove("pressed");
    }, 100);
}

document.querySelectorAll(".drum").forEach(btn => {
    btn.addEventListener("click", function () {
        makeSound(btn);
        buttonAnimate(btn.textContent);
    });
});

document.addEventListener("keypress", function(event) {
    document.querySelectorAll(".drum").forEach(btn => {
        if (btn.textContent.toLowerCase() === event.key.toLowerCase()) {
            makeSound(btn);
            buttonAnimate(btn.textContent)
        }
    });
});