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
async function ask_and_compute_x_plus_y(){
try{
let x,y;
const valX = await ask_("x"); x=Number(valX);
const valY = await ask_("y"); y=Number(valY);
let xPlusY=x+y ;console.log("(x+y)=" +xPlusY);
return xPlusY;
}
catch(e){
console.log(e);
throw new Error("xPlusY-error:"+e);
}
}
async function x_plus_y_mult_z(){
try{ /*
const valX = await ask_("x"); let x=Number(valX);
const valY = await ask_("y"); let y=Number(valY);
let xPlusY=x+y ;console.log("(x+y)=" +xPlusY);
*/
const xPlusY = await ask_and_compute_x_plus_y();
const valZ = await ask_("z"); const z=Number(valZ);
let res=xPlusY * z ;console.log("(x+y)*z=" +res);
}
catch(e){
console.log(e);
}
 process.exit();
}
x_plus_y_mult_z();