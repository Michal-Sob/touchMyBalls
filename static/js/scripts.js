function start() {

let button = document.getElementById('add_balls');
button.addEventListener('click',randomballs);

 function randomballs(){

   for (let i=0; i<3; i++){
       let fields = document.getElementsByClassName('field');
       let len = Object.keys(fields).length;
       let random = Math.floor(Math.random()*(len-1)+1);
       let ballfield = fields[random];
       let randomcolor = Math.floor(Math.random()*(5)+1);
       ballfield.classList.replace('field',`color${randomcolor}`);
   }
 }
}

start()