class Gamestate {
    constructor() {

    }
    async config() {
        var gamestateRef = database.ref('gamestate');
        gamestateRef.on("value", await function (val) {
            gameState = val.val();
        });
    }

    change(state) {
        database.ref('/').update({
            gamestate: state
        });
    }
}