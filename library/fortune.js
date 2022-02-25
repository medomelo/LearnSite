const fortuneCookies = [
    "^_^Conquer your fears or they will conquer you.",
    "Rivers need springs.^_^",
    "Do not fear what you don't know^_^.",
    "^_^You will have a pleasant surprise.",
    "Whenever possible, keep it simple^_^.",
    ];
exports.getFortune = function() {
    let idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx];
    };