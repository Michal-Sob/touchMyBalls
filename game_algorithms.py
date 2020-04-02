import random as rnd


def give_balls(number_of_balls=3, colors_of_balls=8):

    balls = []
    for i in range(number_of_balls):
        balls.append(rnd.randrange(1, colors_of_balls + 1))

    return balls


def place_balls(balls: list, board: list):
    pass
