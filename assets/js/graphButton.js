/*These functions display different charts (number of sales or prices) depending on which button is clicked*/

$(document).ready(function() {
    $("#price-button").on("click", function() {
		$(".price-charts").addClass("active");
		$(".sales-charts").removeClass("active");
		$("#price-section-title").addClass("active");
		$("#sales-section-title").removeClass("active");
	});
	$("#sales-button").on("click", function() {
		$(".price-charts").removeClass("active");
		$(".sales-charts").addClass("active");
		$("#price-section-title").removeClass("active");
		$("#sales-section-title").addClass("active");
	});
	$("#hide-button").on("click", function() {
		$(".price-charts").removeClass("active");
		$(".sales-charts").removeClass("active");
		$("#price-section-title").removeClass("active");
		$("#sales-section-title").removeClass("active");
	});
});