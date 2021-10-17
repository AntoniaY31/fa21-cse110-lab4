let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(const elem in statistics){
    if(elem.charAt(0) == 'r' || statistics[elem]%2 ==1){
        console.log(statistics[elem]);
    }
}