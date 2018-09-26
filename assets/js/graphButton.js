/*These functions display different charts (number of sales or prices) depending on which button is clicked*/

$(document).ready(function() {
    $("#price-button").on("click", function() {
		$(".price-chart").css("display", "block");
		$(".sales-chart").css("display", "none");
	});
	$("#sales-button").on("click", function() {
		$(".price-chart").css("display", "none");
		$(".sales-chart").css("display", "block");
	});
});