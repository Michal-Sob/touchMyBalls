function ballMovement() {
    let balls = document.getElementsByClassName('ball')

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

            if (ball.classList == "ball active") {
                ball.classList.remove("active")
            }
            else {
                ball.className += " active"
            }
        })
    }
}

ballMovement()