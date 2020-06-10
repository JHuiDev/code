class Car {
    constructor(number){
        this.num = number
    }
}
class Park {
    constructor(tier){
        this.camera = new Camera();
        this.screen = new Screen();
        this.tier = tier||[];
        this.carList = new Map();
    }
    in(car){
        const info = this.camera.shot(car);
        const i = parseInt(Math.random()*100%100);
        const place = this.tier[0].places[i];
        place.in();
        info.place = place;
        //将汽车的车牌号作为key
        this.carList.set(car.num,info);
    }
    out(car){
        const info = this.carList.get(car.num);
        const place =info.place;
        place.out();
        this.screen.show(car,info.inTime);
        this.carList.delete(car.num);
    }
    emptyNum(){
        return this.tier.map(el=>{
            return `${el.index}层还有${el.empty()}个车位`
        }).join('\n');
    }
}
class Tier {
    constructor(index,places){
        this.index=index;
        this.places = places||[];
    }
    empty(){
        let num = 0;
        this.places.forEach(el=>{
            if(el.empty){
                num = num+1;
            }
        })
        return num ;
    }

}
class Screen {
    constructor(){}
    show(car,inTime){
        console.log("车牌号为：",car.num);
        console.log("停车时长为：",Date.now()- inTime)

    }
}
class Camera {
    constructor() {

    }
    shot(car) {
        return {
            inTime:Date.now(),
            num:car.num,
        }
    }
}
class Place {
    constructor(){
        this.empty = true;
    }
    in(){
        this.empty = false;
    }
    out(){
        this.empty  = true;
    }
}

//测试

const tiers = new Array(3);
for(let i = 0;i<3;i++){
    const places = [];
    for(let j = 0;j<100;j++){
        places[j] = new Place();
    }
    tiers[i] = new Tier(i+1,places);
}
const park = new Park(tiers);
const car1 = new Car(100);
const car2 = new Car(200);
const car3 = new Car(300);
console.log(park.emptyNum());
park.in(car1)

console.log(park.emptyNum());
park.in(car2)
park.out(car1)
park.out(car2)

console.log(park.emptyNum());
park.in(car3);
console.log(park.emptyNum());
park.in(car1);