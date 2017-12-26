# Create Sharpie class
# We should know about each sharpie their color (which should be a string), width (which will be a floating point number), ink_amount (another floating point number)  # nopep8
# When creating one, we need to specify the color and the width
# Every sharpie is created with a default 100 as ink_amount
# We can use() the sharpie objects
# which decreases inkAmount


class Sharpie(object):
    def __init__(self, color, width):
        self.color = color
        self.width = float(width)
        self.ink_amount = 100

    def use(self):
        self.ink_amount -= 1


sharpie_no1 = Sharpie("blue", 7.26)
print(sharpie_no1.width)

sharpie_no1.use()
print(sharpie_no1.ink_amount)
