//Function to create variables averaging 

function averagingData(item) {
        
    var averageHousePriceItem = item.group().reduce(
                                
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
    )
    return averageHousePriceItem;    
};