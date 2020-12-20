class Foodtime {
    constructor() {

    }
    config() {
        var foodtimeRef = database.ref('foodtime');
        foodtimeRef.on("value", function (value) {
            foodtime = value.val();
        });
    }

    change(time) {
        database.ref('/').update({
            foodtime: time
        })
    }
    check() {
        var refCheck = database.ref('check');
        refCheck.on("value", function (val) {
            check = val.val();
        });
    }
}