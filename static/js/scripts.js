function start() {

let button = document.getElementById('add_balls');
// button.addEventListener('click',randomballs);
// button.addEventListener('click',ballcheck);


 function randomballs(){

   for (let i=0; i<3; i++){
       let fields2 = document.querySelectorAll("[data-ball='0']");
       let len = Object.keys(fields2).length;
       let random = Math.floor(Math.random()*(len-1));
       let ballfield = fields2[random];
       ballfield.dataset.ball = 1;

       let randomcolor = Math.floor(Math.random()*(5)+1);
       let newball = document.createElement("div");

       newball.classList.add(`ball`);
       newball.classList.add(`color${randomcolor}`);
       ballfield.appendChild(newball);
       newball.addEventListener("click", ballMovement)
   }
   // ballMovement()
 }


 function ballcheck() {
     let reds = document.getElementsByClassName('color1');
     let len = Object.keys(reds).length;
     for (let i=1;i<len+1;i++){

     }
 }

 function ballMovement() {
    let balls = document.getElementsByClassName("ball")
    let fields = document.getElementsByClassName("field")
    let activeBall = document.getElementsByClassName("active")
    console.log(balls)
    for (let ball of balls) {

        ball.addEventListener("click", e => {
            console.log(ball.classList)

            if (ball.classList.contains("active")) {
                console.log(activeBall.length)
                ball.classList.remove("active");
            }
            else {
                if (activeBall.length === 0) {
                    ball.classList += " active";
                }
            }

            for (let field of fields) {
                field.addEventListener("click", e => {

                    if (!field.hasChildNodes()) {
                        field.appendChild(activeBall[0])
                        activeBall[0].classList.remove("active")
                        randomballs()
                        ballcheck()
                    }
                })
            }
        })
    }
}
randomballs()
ballcheck()
ballMovement()

}

function ballListener() {

}


start()
// ballMovement()