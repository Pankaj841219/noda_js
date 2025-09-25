//  class Village{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     getVillage(){

//     }
//  }

//  let village=new Village('kvgh',52);
//  console.log(village.name);
//  console.log(village.age);






// class Company{
//     constructor (name,age){
//        this. name=name;
//         this.age=age;
//     }
// }
// let personCompany=new Company("pankaj",20); 

// console.log(personCompany.name);
// console.log(personCompany.age);




class PrimeNumber{
    getPrime(){
        for(let a=1;a<=100;a++){
            let c=0
            for(let b=1;b<=a;b++){
                if(a%b==0){
                    c++;
                }
            }
            if(c<=2){
                console.log(a +" is prime");
            }
            else{
                console.log(a +" is not prime");
            }

        }
    }
}
let primeNum=new PrimeNumber();
primeNum.getPrime();