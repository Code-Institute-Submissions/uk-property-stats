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
                        
    // variable containing the collection of datas
                            
    var ndx = crossfilter(cityPriceData);
                            
    //variables to be used
                            
    var cityName = ndx.dimension(dc.pluck('City Name'));
    var houseType = ndx.dimension(dc.pluck('House Type'));
    //var totalHouseSalesPerCity = cityName.group().reduceSum(dc.pluck('Number of Sales'));
    var totalHouseSalesPerType = houseType.group().reduceSum(dc.pluck('Number of Sales'));
    var houseTypePrice = ndx.dimension(dc.pluck('Price'));
    var averagePriceChart = dc.barChart('#average-house-price-bar-chart');
                            
    //variable and function for finding the average house prices per city. Average house price bar chart                       
                            
    var averageHousePricePerCity = cityName.group().reduce(
                                
        function (p, v) {
            p.count++;
            p.total += v.Price;
            p.average = p.total / p.count;
            return p;
        },
                                
        function (p, v) {
            p.count--;
            if (p.count == 0) {
                p.total = 0;
                p.average = 0;
            } else {
                p.total -= v.Price;
                p.average = p.total / p.count;
            }
            return p;
        },
                                
        function () {
            return { count: 0, total: 0, average: 0 };
        }
    );
                            
    averagePriceChart
        .width(850)
        .height(430)
        .margins({top: 30, right: 50, bottom: 30, left: 50})
        .dimension(cityName)
        .group(averageHousePricePerCity)
        .valueAccessor(function (d) {
            return d.value.average;
        })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('City Name')
        .yAxisLabel('Average Price (£)')
        .elasticY(true)
        .yAxis().ticks(4);
                            
    //variables for finding the total number of home sales per type. This is used in the stacked chart. Stacked chart showing number of house sales per type
                            
    var totalHouseSalesDetached = cityName.group().reduceSum(function (d) {
        if (d.houseType === "Detached") {
            return +d.totalHouseSalesPerType;
        } else {
            return 0;
        }
    });
                            
    var totalHouseSalesSemiDetached = cityName.group().reduceSum(function (d) {
        if (d.houseType === "Semi-Detached") {
            return +d.totalHouseSalesPerType;
        } else {
            return 0;
        }
    });
                            
    var totalHouseSalesTerraced= cityName.group().reduceSum(function (d) {
        if (d.houseType === "Terraced") {
            return +d.totalHouseSalesPerType;
        } else {
            return 0;
        }
    });
                            
    var totalHouseSalesFlats = cityName.group().reduceSum(function (d) {
        if (d.houseType === "Flats") {
            return +d.totalHouseSalesPerType;
        } else {
            return 0;
        }
    });
    
    var stackedNumberChart = dc.barChart("#house-sales-bar-chart");
    stackedNumberChart
        .width(850)
        .height(430)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(cityName)
        .group(totalHouseSalesDetached, "Detached")
        .stack(totalHouseSalesSemiDetached, "Semi-Detached")
        .stack(totalHouseSalesTerraced, "Terraced")
        .stack(totalHouseSalesFlats, "Flats")
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .legend(dc.legend().x(100).y(20).itemHeight(15).gap(5))
        .xAxisLabel('City Name')
        .yAxisLabel('Number of homes sold')
        .elasticY(true)
        .yAxis().ticks(4);
    
    //house type pie chart
                                
    dc.pieChart("#house-type-pie-chart")
        .height(350)
        .radius(150)
        .transitionDuration(1500)
        .dimension(houseType)
        .group(totalHouseSalesPerType);
                                
    //house price per type bar chart
                            
    dc.barChart("#house-type-price-bar-chart")
        .height(400)
        .width(400)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(houseType)
        .group(houseTypePrice)
        .transitionDuration(1500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('House Type')
        .yAxisLabel('Price')
        .yAxis().ticks(4);
                                                    
    dc.renderAll();