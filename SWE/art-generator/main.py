import turtle

# set up the turtle screen
screen = turtle.Screen()
screen.bgcolor("#333")

# set up the turtle pen
pen = turtle.Turtle()
pen.speed(0)
pen.hideturtle()

# set up the font style and size
pen.penup()
pen.goto(-350, 0)
pen.color("#ffffff")
pen.write("Luna hacks", font=("Arial", 100, "bold"))

# set up the drawing pen
pen.pendown()
pen.pensize(5)
pen.color("#ffffff")

# draw a circle around the text
pen.penup()
pen.goto(0, 0)
pen.pendown()
pen.circle(350)

# hide the turtle cursor
turtle.done()