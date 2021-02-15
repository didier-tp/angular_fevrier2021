export class Personne {
    taille : number ; //en cm 
    constructor(public prenom : string =" ?" ,
                public nom : string =" ?" ,
                private _age : number= 0){
                    this.taille=0;
                }
    public get age() : number {
        return this._age;
    }

    public set age(a : number)  {
        if(a>=0)
           this._age = a;
        else 
           throw "age negatif interdit";
    }
}
