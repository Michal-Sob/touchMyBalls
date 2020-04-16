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


function ballMovement() {
    let balls = document.getElementsByClassName('ball')
    let fields = document.getElementsByClassName("field")

    for (let ball of balls) {
        console.log(balls)
        // balls.addEventListener("click", e => {
        //     if (ball.classList === "ball active") {
        //         ball.className.remove("active")
        //     }
        // })

        ball.addEventListener("click", e => {
            console.log('ball Clicked')
            console.log(ball)
            console.log(ball.classList)
            let activeBall = document.getElementsByClassName("ball active")

            if (ball.classList == "ball active") {
                ball.classList.remove("active");
            } else {
                if (activeBall.length === 0) {
                    ball.className += " active";
                }
            }

            for (let field of fields) {
                field.addEventListener("click", e => {
                    console.log(activeBall)
                    console.log(field.hasChildNodes())
                    console.log(field.firstChild)
                    if (field.hasChildNodes() === false) {
                        field.appendChild(activeBall[0])
                        activeBall[0].classList.remove("active")
                    }
                })
            }
        })
    }

    // field.addEventListener("click", e => {
    //
    // })
}

start()
ballMovement()