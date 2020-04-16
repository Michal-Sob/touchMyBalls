function start() {

let button = document.getElementById('add_balls');
button.addEventListener('click',randomballs);
button.addEventListener('click',ballcheck);

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
 function ballcheck() {
     let reds = document.getElementsByClassName('color1');
     let len = Object.keys(reds).length;
     for (let i=1;i<len+1;i++){

     }

 }
}

start()