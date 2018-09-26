//city house price data showing different types, price

var salesByYear = [
    {"Year": "2006", "Price": 159970, "Number of Sales": 1668470},
    {"Year": "2007", "Price": 176758, "Number of Sales": 1618880},
    {"Year": "2008", "Price": 185782, "Number of Sales": 916920},
    {"Year": "2009", "Price": 157234, "Number of Sales": 847540},
    {"Year": "2010", "Price": 167469, "Number of Sales": 883520},
    {"Year": "2011", "Price": 167300, "Number of Sales": 882870},
    {"Year": "2012", "Price": 165908, "Number of Sales": 931390},
    {"Year": "2013", "Price": 167716, "Number of Sales": 1067270},
    {"Year": "2014", "Price": 178182, "Number of Sales": 1222910},
    {"Year": "2015", "Price": 190665, "Number of Sales": 1226050},
    {"Year": "2016", "Price": 205404, "Number of Sales": 1233030},
    {"Year": "2017", "Price": 218225, "Number of Sales": 1223650}
];
                        
var ndx = crossfilter(salesByYear);
var yearDate = ndx.dimension(dc.pluck("Year"));
var januaryPrice = yearDate.group().reduceSum(dc.pluck("Price"));
var salesPerYear = yearDate.group().reduceSum(dc.pluck("Number of Sales"));
var earlyDate = yearDate.bottom(1)[0].Year;
var lateDate = yearDate.top(1)[0].Year;

var houseSalesLineChart = dc.lineChart("#house-sales-over-time");
houseSalesLineChart
    .width(500)
    .height(300)
    .margins({top: 30, right: 50, bottom: 30, left: 50})
    .dimension(yearDate)
    .group(salesPerYear)
    .transitionDuration(500)
    .x(d3.time.scale().domain([earlyDate, lateDate]))
    .xAxisLabel("Year")
    .yAxisLabel("Number of Sales")
    .yAxis().ticks(4);
                            
var housePriceLineChart = dc.lineChart("#house-prices-over-time");
housePriceLineChart
    .width(500)
    .height(300)
    .margins({top: 30, right: 50, bottom: 30, left: 50})
    .dimension(yearDate)
    .group(januaryPrice)
    .transitionDuration(500)
    .x(d3.time.scale().domain([earlyDate, lateDate]))
    .xAxisLabel("Year")
    .yAxisLabel("Price in January (£)")
    .yAxis().ticks(4);
                            
dc.renderAll();