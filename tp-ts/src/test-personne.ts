import { Personne} from './personne';

let p1 = new Personne();
p1.prenom = "didier";
p1.nom = "defrance";
try{
    p1.age= -5;
}catch(ex:any){
    console.log("exception: " +ex);
}

p1.age=51;
console.log(p1.prenom);

console.log(p1); //ok en typescript
console.log( JSON.stringify(p1) ); //ok en ts et en js