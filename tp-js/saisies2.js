var stdin = process.stdin;
var stdout = process.stdout;
function ask_(question) {
return new Promise ((resolve,reject)=> {
stdin.resume();
stdout.write(question + ": ");
stdin.once('data', function(data) {
data = data.toString().trim();
if(data=="fin")
reject("end/reject");
else
resolve(data);
});
});
}
var x,y,z;
//calcul (x+y)*z après enchaînement lisible (proche séquentiel) de "saisir x" , "saisir y", "saisir z":
ask_("x")
.then((valX)=>{ x=Number(valX); return ask_("y");})
.then((valY)=> { y=Number(valY); let res=x+y ;
console.log("(x+y)=" +res);
return ask_("z");
 })
.then((valZ)=> { z=Number(valZ); let res=(x+y)*z ;
console.log("(x+y)*z=" +res);
process.exit();

 })
.catch((err)=>{console.log(err);process.exit();});