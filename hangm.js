var HangM = {};

HangM.dictionary = ["computer", "transistor", "lumberjack", "bandwagon", "bookworm"];

HangM.play = function() {

    var getStatu = function(word, given) {

        var statu = "";

        for (w in word) {
            var wo = word[w];
            var now = "_";

            for (g in given) {
                var gi = given[g];

                if (wo === gi) {
                    now = given[g];
                    break;
                }
            }
            statu += now;
        }

        return statu;
    }

    var given = [];
    var lives = 8;
    var word = this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
    var statu = getStatu(word, given);

    while (statu.indexOf("_") !== -1 && lives !== 0) {
        var l = prompt(statu + ". gimme a letter.");

        given.push(l);

        statu = getStatu(word, given);

        if (word.indexOf(l) === -1) {
            lives--;
            if (lives === 0) {
                alert("word was " + word + ". you DED.")
                break;
            } else {

                alert("wrong. lifes left: " + lives.toString());
            }
        } else {

            if (statu.indexOf("_") === -1) {
                alert("you lived. happily. everafter.")
                break;
            }
        }
    }
}
