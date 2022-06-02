$(".Part-Two-Yes").hide();
$(".Part-Two-No").hide();
$(".Story-Ending-Yes").hide();
$(".Story-Ending-No").hide();
$(".Yes-button").hide();
$(".No-button").hide();
$(".go-ahead-button").hide();
$(".The-Question").hide();
$(".Cereal-button").hide();
$(".Milk-button").hide();
$(".The-right-answer").hide();
$(".Money-Pic").hide();
$(".Final-Pic").hide();
$(".The-final-decision").hide();
$(".The-wrong-answer").hide();

$(".yes-button").click(function() {
    $(".Part-Two-Yes").show();
    $(".go-ahead-button").show();
    $(".Beginning").hide();
    $(".Part-Two-No").hide();
    $(".yes-button").hide();
    $(".no-button").hide();
});
$(".no-button").click(function() {
    $(".Part-Two-No").show();
    $(".Part-Two-Yes").hide();
    $(".Beginning").hide();
    $(".Yes-button").show();
    $(".No-button").show();
    $(".yes-button").hide();
    $(".no-button").hide();
});
$(".no-button").hover(function() {
    $(".no-button").css("border", "2px solid black");
});
$(".yes-button").hover(function() {
    $(".yes-button").css("border", "2px solid black");
});
$(".No-button").hover(function() {
    $(".No-button").css("border", "2px solid black");
});
$(".Yes-button").hover(function() {
    $(".Yes-button").css("border", "2px solid black");
});
$(".Reset-button").hover(function() {
    $(".Reset-button").css("border", "2px solid black");
});
$(".go-ahead-button").hover(function() {
    $(".go-ahead-button").css("border", "2px solid black");
});
$(".Milk-button").hover(function() {
    $(".Milk-button").css("border", "2px solid black");
});
$(".Cereal-button").hover(function() {
    $(".Cereal-button").css("border", "2px solid black");
});
$(".go-ahead-button").hover(function() {
    $(".go-ahead-button").css("border", "2px solid black");
});
$(".Yes-button").click(function() {
    $(".Story-Ending-Yes").fadeIn();
    $(".Beginning").hide();
    $(".Part-Two-No").hide();
    $(".yes-button").hide();
    $(".no-button").hide();
    $(".Yes-button").hide();
    $(".No-button").hide();
});
$(".No-button").click(function() {
    $(".Yes-button").hide();
    $(".No-button").hide();
    $(".Part-Two-No").hide();
    $(".yes-button").hide();
    $(".no-button").hide();
    $(".Story-Ending-No").show();
});
$(".go-ahead-button").click(function() {
    $(".The-Question").fadeIn();
    $(".Cereal-button").fadeIn();
    $(".Milk-button").fadeIn();
    $(".Part-Two-Yes").hide();
    $(".go-ahead-button").hide();
});
$(".Cereal-button").click(function() {
    $(".The-Question").fadeOut();
    $(".Cereal-button").fadeOut();
    $(".Milk-button").fadeOut();
    $(".The-right-answer").show();
    $(".Money-Pic").show();
    $(".Money").show();
});
$(".Milk-button").click(function() {
    $(".The-wrong-answer").show();
    $(".The-Question").hide();
    $(".Cereal-button").hide();
    $(".Milk-button").hide();
});
$(".Money").dblclick(function() {
    $(".Money-Pic").fadeOut();
    $(".Money").fadeOut();
});
$(".Reset-button").click(function() {
    $(".Beginning").show();
    $(".yes-button").show();
    $(".no-button").show();
    $(".Part-Two-Yes").hide();
    $(".Part-Two-No").hide();
    $(".Story-Ending-Yes").hide();
    $(".Story-Ending-No").hide();
    $(".go-ahead-button").hide();
    $(".Yes-button").hide();
    $(".No-button").hide();
    $(".The-Question").hide();
    $(".Cereal-button").hide();
    $(".Milk-button").hide();
    $(".The-right-answer").hide();
    $(".Money-Pic").hide();
    $(".The-wrong-answer").hide();
});