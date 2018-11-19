//city house price data showing different types, price
                    
var cityPriceData = [
    {"City Name": "Belfast", "House Type": "Detached", "Price": 381987, "Number of Sales": 283},
    {"City Name": "Belfast", "House Type": "Semi-Detached", "Price": 182474, "Number of Sales": 522},
    {"City Name": "Belfast", "House Type": "Terraced", "Price": 109178, "Number of Sales": 378},
    {"City Name": "Belfast", "House Type": "Flats", "Price": 137457, "Number of Sales": 334},
    {"City Name": "Glasgow", "House Type": "Detached", "Price": 300716, "Number of Sales": 997},
    {"City Name": "Glasgow", "House Type": "Semi-Detached", "Price": 185356, "Number of Sales": 1192},
    {"City Name": "Glasgow", "House Type": "Terraced", "Price": 151361, "Number of Sales": 1215},
    {"City Name": "Glasgow", "House Type": "Flats", "Price": 132944, "Number of Sales": 5303},
    {"City Name": "London", "House Type": "Detached", "Price": 1060037, "Number of Sales": 2931},
    {"City Name": "London", "House Type": "Semi-Detached", "Price": 705310, "Number of Sales": 8038},
    {"City Name": "London", "House Type": "Terraced", "Price": 717616, "Number of Sales": 14248},
    {"City Name": "London", "House Type": "Flats", "Price": 508553, "Number of Sales": 24345},
    {"City Name": "Edinburgh", "House Type": "Detached", "Price": 479979, "Number of Sales": 335}, 
    {"City Name": "Edinburgh", "House Type": "Semi-Detached", "Price": 303057, "Number of Sales": 384},
    {"City Name": "Edinburgh", "House Type": "Terraced", "Price": 315995, "Number of Sales": 501},
    {"City Name": "Edinburgh", "House Type": "Flats", "Price": 215450, "Number of Sales": 4341},
    {"City Name": "Southampton", "House Type": "Detached", "Price": 425796, "Number of Sales": 1368},
    {"City Name": "Southampton", "House Type": "Semi-Detached", "Price": 280394, "Number of Sales": 1414},
    {"City Name": "Southampton", "House Type": "Terraced", "Price": 237416, "Number of Sales": 1243},
    {"City Name": "Southampton", "House Type": "Flats", "Price": 167725, "Number of Sales": 1152},
    {"City Name": "Plymouth", "House Type": "Detached", "Price": 335871, "Number of Sales": 512}, 
    {"City Name": "Plymouth", "House Type": "Semi-Detached", "Price": 205329 , "Number of Sales": 1029},
    {"City Name": "Plymouth", "House Type": "Terraced", "Price": 175629, "Number of Sales": 1505},
    {"City Name": "Plymouth", "House Type": "Flats", "Price": 133465, "Number of Sales": 520},
    {"City Name": "Bristol", "House Type": "Detached", "Price": 456547, "Number of Sales": 1715}, 
    {"City Name": "Bristol", "House Type": "Semi-Detached", "Price": 320648, "Number of Sales": 2924},
    {"City Name": "Bristol", "House Type": "Terraced", "Price": 288140, "Number of Sales": 3725},
    {"City Name": "Bristol", "House Type": "Flats", "Price": 240919, "Number of Sales": 2332},
    {"City Name": "Swansea", "House Type": "Detached", "Price": 250589, "Number of Sales": 827}, 
    {"City Name": "Swansea", "House Type": "Semi-Detached", "Price": 147364, "Number of Sales": 1110},
    {"City Name": "Swansea", "House Type": "Terraced", "Price": 118830, "Number of Sales": 904},
    {"City Name": "Swansea", "House Type": "Flats", "Price": 132887, "Number of Sales": 231},
    {"City Name": "Manchester", "House Type": "Detached", "Price": 290457, "Number of Sales": 1270},
    {"City Name": "Manchester", "House Type": "Semi-Detached", "Price": 199203, "Number of Sales": 4415},
    {"City Name": "Manchester", "House Type": "Terraced", "Price": 149443, "Number of Sales": 3665},
    {"City Name": "Manchester", "House Type": "Flats", "Price": 166995, "Number of Sales": 1882},
    {"City Name": "Birmingham", "House Type": "Detached", "Price": 373271, "Number of Sales": 955}, 
    {"City Name": "Birmingham", "House Type": "Semi-Detached", "Price": 202126, "Number of Sales": 3598},
    {"City Name": "Birmingham", "House Type": "Terraced", "Price": 160068, "Number of Sales": 3593},
    {"City Name": "Birmingham", "House Type": "Flats", "Price": 141473, "Number of Sales": 1672},
    {"City Name": "Newcastle", "House Type": "Detached", "Price": 332689, "Number of Sales": 837}, 
    {"City Name": "Newcastle", "House Type": "Semi-Detached", "Price": 183742, "Number of Sales": 1459},
    {"City Name": "Newcastle", "House Type": "Terraced", "Price": 168529, "Number of Sales": 1262},
    {"City Name": "Newcastle", "House Type": "Flats", "Price": 128749, "Number of Sales": 763},
    {"City Name": "Hull", "House Type": "Detached", "Price": 239533, "Number of Sales": 604}, 
    {"City Name": "Hull", "House Type": "Semi-Detached", "Price": 142057, "Number of Sales": 1196},
    {"City Name": "Hull", "House Type": "Terraced", "Price": 105363, "Number of Sales": 1614},
    {"City Name": "Hull", "House Type": "Flats", "Price": 85240, "Number of Sales": 178},
    {"City Name": "Norwich", "House Type": "Detached", "Price": 334873, "Number of Sales": 1977}, 
    {"City Name": "Norwich", "House Type": "Semi-Detached", "Price": 233295, "Number of Sales": 1398},
    {"City Name": "Norwich", "House Type": "Terraced", "Price": 210674, "Number of Sales": 1248},
    {"City Name": "Norwich", "House Type": "Flats", "Price": 148387, "Number of Sales": 550},
    {"City Name": "Northampton", "House Type": "Detached", "Price": 369371, "Number of Sales": 1296},
    {"City Name": "Northampton", "House Type": "Semi-Detached", "Price": 231771, "Number of Sales": 1162},
    {"City Name": "Northampton", "House Type": "Terraced", "Price": 196907, "Number of Sales": 1212},
    {"City Name": "Northampton", "House Type": "Flats", "Price": 133656, "Number of Sales": 395},
];

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
    // variable containing the collection of data
    
    //Data for the bar graphs and the bar charts
    var dataCollection = crossfilter(cityPriceData);
    //Data for the line graphs which contain the data over time
    var yearSalesPriceData = crossfilter(salesByYear);
                            
    //variables to be used
                            
    var cityName = dataCollection.dimension(dc.pluck("City Name"));
    var houseType = dataCollection.dimension(dc.pluck("House Type"));
    var totalHouseSalesPerCity = cityName.group().reduceSum(dc.pluck("Number of Sales"));
    var totalHouseSalesPerType = houseType.group().reduceSum(dc.pluck("Number of Sales"));
    var houseTypePrice = dataCollection.dimension(dc.pluck("Price"));
                            
    //variable and function for finding the average house prices per city.
        
    var averageHousePricePerCity = averagingData(cityName);
    var averageHousePricePerType = averagingData(houseType);
    
    /*Variables to be used for the line graph*/
    
    var yearDate = yearSalesPriceData.dimension(dc.pluck("Year"));
    var januaryPrice = yearDate.group().reduceSum(dc.pluck("Price"));
    var salesPerYear = yearDate.group().reduceSum(dc.pluck("Number of Sales"));
    var earlyDate = yearDate.bottom(1)[0].Year;
    var lateDate = yearDate.top(1)[0].Year;
    
    /*Creating the charts*/
    
    //Large bar chart for the average price bar chart. This is connected to the house type average price bar chart.
        
        var averagePriceChart = dc.barChart("#average-house-price-bar-chart");                        
        averagePriceChart
            .width(600)
            .height(400)
            .margins({top: 0, right: 50, bottom: 60, left: 70})
            .dimension(cityName)
            .group(averageHousePricePerCity)
            .valueAccessor(function (d) {
                return d.value.average;
            })
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("City Name")
            .yAxisLabel("Average Price (£)")
            .elasticY(true)
            .yAxis().ticks(4)
            
        //House price per type bar chart
        var houseTypePriceBarChart = dc.barChart("#house-type-price-bar-chart");
        houseTypePriceBarChart
            .width(300)
            .height(420)
            .margins({top: 0, right: 50, bottom: 60, left: 70})
            .dimension(houseType)
            .group(averageHousePricePerType)
            .valueAccessor(function (d) {
                return d.value.average;
            })
            .transitionDuration(500)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("House Type")
            .yAxisLabel("Price (£)")
            .elasticY(true)
            .yAxis().ticks(4);
        
        //Large bar chart for the number of sales. This is connected to the pie chart for number of house type sales.    
        var salesNumberChart = dc.barChart("#house-sales-bar-chart");
        salesNumberChart
            .width(600)
            .height(400)
            .margins({top: 0, right: 50, bottom: 60, left: 70})
            .dimension(cityName)
            .group(totalHouseSalesPerCity)
            .transitionDuration(500)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("City Name")
            .yAxisLabel("Number of homes sold")
            .elasticY(true)
            .yAxis().ticks(4);
                
        //house type pie chart
        var houseTypeSalesPieChart = dc.pieChart("#house-type-pie-chart");
        houseTypeSalesPieChart
            .height(300)
            .width(300)
            .radius(135)
            .transitionDuration(1500)
            .dimension(houseType)
            .group(totalHouseSalesPerType);
            
        //Line chart for sales of houses over the last few years
        var houseSalesLineChart = dc.lineChart("#house-sales-over-time");
        houseSalesLineChart
            .width(500)
            .height(300)
            .margins({top: 0, right: 50, bottom: 60, left: 70})
            .dimension(yearDate)
            .group(salesPerYear)
            .transitionDuration(500)
            .x(d3.time.scale().domain([earlyDate, lateDate]))
            .xAxisLabel("Year")
            .yAxisLabel("Number of Sales")
            .yAxis().ticks(4);
            
        //Line chart for the price of houses over the last few years
        var housePriceLineChart = dc.lineChart("#house-prices-over-time");
        housePriceLineChart
            .width(500)
            .height(300)
            .margins({top: 0, right: 50, bottom: 60, left: 70})
            .dimension(yearDate)
            .group(januaryPrice)
            .transitionDuration(500)
            .x(d3.time.scale().domain([earlyDate, lateDate]))
            .xAxisLabel("Year")
            .yAxisLabel("Price in January (£)")
            .yAxis().ticks(4);
                                                            
    dc.renderAll();