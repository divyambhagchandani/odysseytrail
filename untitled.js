function drawStar(t, e) {
    ctx.beginPath(), ctx.moveTo(t, e), ctx.lineTo(t + 2, e + 2), ctx.strokeStyle = "#E1F5FE", ctx.stroke()
}

function moveStars() {
    setInterval(function() {
        ctx.clearRect(0, 0, $(this).width(), $(this).height());
        for (var t = 0; starCount > t; t++) stars[t][0] = stars[t][0] <= 0 ? canvas.width : stars[t][0] += xIncrement, stars[t][1] = stars[t][1] >= canvas.height ? 0 : stars[t][1] += yIncrement, drawStar(stars[t][0], stars[t][1])
    }, 10)
}
var canvas = $("canvas#stars")[0];
canvas.height = $(window).height(), canvas.width = $(window).width();
for (var ctx = canvas.getContext("2d"), starCount = 69, stars = new Array(starCount), i = 0; starCount > i; i++) stars[i] = new Array(2), stars[i][0] = Math.floor(Math.random() * canvas.width) + 1, stars[i][1] = Math.floor(Math.random() * canvas.height) + 1;
var i = 0;
moveStars();
var xIncrement = -.08,
    yIncrement = .08;
$(function() {
    var t = setInterval(function() {
        -1.2 > xIncrement || yIncrement > 1.2 ? clearInterval(t) : (xIncrement *= 1.1, yIncrement *= 1.1)
    }, 100)
});
var countDownDate = new Date("Nov 20, 2017 00:00:00").getTime(),
    x = setInterval(function() {
        var t = (new Date).getTime(),
            e = countDownDate - t,
            n = Math.floor(e / 864e5),
            a = Math.floor(e % 864e5 / 36e5),
            r = Math.floor(e % 36e5 / 6e4),
            s = Math.floor(e % 6e4 / 1e3);
        document.getElementById("days").textContent = n, document.getElementById("days").innerText = n, document.getElementById("hours").textContent = a, document.getElementById("minutes").textContent = r, document.getElementById("seconds").textContent = s, 0 > e && (clearInterval(x), document.getElementById("demo").innerHTML = "EXPIRED")
    }, 1e3);