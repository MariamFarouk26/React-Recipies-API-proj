

 import { SimpleGrid, Button, Card, CardBody, CardFooter, CardHeader, Text, Heading, useDisclosure, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import React, { useState } from 'react'; // Import React if not already imported

function Blog_cards() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardText, setCardText] = useState("");

  // Function to handle opening the modal and setting the selected card
  const handleViewClick = (card, text) => {
    setSelectedCard(card);
    setCardText(text);
    onOpen();
  };

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        {/* Card 1 */}
        <Card>
          <Image src="/images/blog_card1.jpeg" alt="Image 1" />
          <CardHeader>
            <Heading size='md'>Creamy vegan sun-dried tomato and broccolini gnocchi</Heading>
          </CardHeader>
          <CardBody>
            <Text>Creamy vegan sun-dried tomato and broccolini gnocchi</Text>
          </CardBody>
          <CardFooter>
            <Button onClick={() => handleViewClick(1,"Step 1 Put the kettle on.Step 2 While the kettle boils, crush the garlic and cut the broccolini stalks in half lengthways. Heat a deep frying pan over medium-high heat. Step 3 Pour the boiling water into a large saucepan over high heat. (Don’t fill too high or it will take too long to boil again.) Add the gnocchi and cook until gnocchi rise to the surface, adding the peas and broccolini in the last minute of cooking. Drain.Step 4 Once the frying pan is hot, pour in the reserved sun-dried tomato oil. Add the garlic and cook, stirring, for 30 seconds. Add the flour. Cook, stirring, for 30 seconds. Remove from heat and gradually whisk in the almond milk until well combined. Return to a medium heat and cook, stirring constantly, until the mixture boils. Simmer for 3 minutes or until the sauce thickens slightly. Season.Step 5 Add the gnocchi mixture and tomato strips to the sauce and stir to combine. Divide among serving bowls, season and top with basil.")}>READ MORE</Button>
          </CardFooter>
        </Card>

        {/* Card 2 */}
        <Card>
          <Image src="/images/blog_card_2.jpeg" alt="Image 2" />
          <CardHeader>
            <Heading size='md'>45 Easy Breakfast Ideas to Fuel Your Busy Mornings</Heading>
          </CardHeader>
          <CardBody>
            <Text>The best way to start your morning off on the right foot</Text>
          </CardBody>
          <CardFooter>
            <Button onClick={() => handleViewClick(2,"The best way to start your morning off on the right foot is with a delicious breakfast. Whether its a long, leisurely A.M. meal with the family (brunch recipes anyone?) or a speedy on-the-go breakfast while you're on your way to work, the first dish of the day is of course an important one. Our best breakfast ideas run the gamut from easy to epic, but one thing's for sure: They're all delicious. If you're looking for simple breakfast ideas that you can whip up on even the busiest mornings, we've gathered plenty of make-ahead meals and recipes that take under 15 minutes to put together. In the mood for a healthy breakfast food? Bake up veggie- and protein-packed breakfasts such as egg bites or build a beautiful yogurt bowl topped with raspberry chia jam and crunchy granola. Or have a low-calorie, balanced breakfast fueled with healthy fats, fibrous carbs and packed with protein. If a sweet breakfast is your speed, dive into a fluffy stack of homemade pancakes drizzled with maple syrup or a delicious chocolate bran muffin that uses up your bumper crop of zucchini. Plus breakfast recipes with eggs go way beyond your basic fry. Try a creamy scramble garnished with smoked trout or a sausage, egg and cheese leveled up with spicy peppers. No matter how your breakfast tastes, you'll find a recipe that makes the most important meal of the day extra delicious.")}>READ MORE</Button>
          </CardFooter>
        </Card>

        {/* Card 3 */}
        <Card>
          <Image src="/images/blog_card_3.jpeg" alt="Image 3" />
          <CardHeader>
            <Heading size='md'>Best Egg Recipes That Go Way Beyond Breakfast</Heading>
          </CardHeader>
          <CardBody>
            <Text>Eggs are an incredibly versatile ingredient</Text>
          </CardBody>
          <CardFooter>
            <Button onClick={() => handleViewClick(3,"Eggs are an incredibly versatile ingredient. From a fluffy omelet stuffed with all of your favorite veggies, to creamy scrambled eggs for a speedy breakfast and even perfect hard-boiled eggs that you've meal prepped for a fast and filling addition to lunch, they are a protein-packed powerhouse. And these egg recipes will prove why you should always keep a carton on hand. If you're stumped on breakfast ideas, cracking a couple of eggs into a frying pan is a good place to start. Add a fried egg to a crunchy piece of toast, in a breakfast sandwich, or alongside tortillas tossed in homemade salsa verde for a fresh and hearty chilaquiles recipe. Plus think beyond the most important meal of the day. Eggs also deserve a starring role in any dinner. Thanks to their quick cooking, you can serve up a protein-rich weeknight dinner in well under 30 minutes. Not only do eggs make an epic mealtime addition, but they can also star as a crowd-pleasing appetizer (pimiento cheese deviled eggs, anyone?).So look no further for a roster of brilliant brunch ideas — like custardy quiches and casseroles — and simple suppers starring the incredible, nutritious egg.")}>READ MORE</Button>
          </CardFooter>
        </Card>

        {/* Card 4 */}
        <Card>
          <Image src="/images/blog_card_4.jpeg" alt="Image 4" />
          <CardHeader>
            <Heading size='md'>Healthy Friday Night Movie Snacks</Heading>
          </CardHeader>
          <CardBody>
            <Text>Sugar-free mango and coconut balls</Text>
          </CardBody>
          <CardFooter>
            <Button onClick={() => handleViewClick(4,"Step 1 Use kitchen scissors to cut the mango into small (about 1.5cm) pieces. Place in a heatproof bowl and pour 125 ml (½ cup) of boiling water. Set aside for 10-15 minutes, stirring occasionally, or until mango has softened and water absorbed.Step 2 Place the shredded coconut in a frying pan and stir over medium heat for about 3 minutes or until golden. Transfer to a plate to cool.Step 3 Process the oats a food processor until well chopped. Add the cashews, desiccated coconut, lime zest, vanilla, a pinch of salt and mango (with any water that may not have absorbed). Process until well combined.Step 4 Roll level tablespoons of the mixture into balls. Roll in toasted coconut to lightly coat. Store in an airtight container for up to 1 week.")}>READ MORE</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>

      {/* Modal for displaying details */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedCard && (
              <>
                <Image src={`/images/blog_card_${selectedCard}.jpeg`} alt={`Image ${selectedCard}`} />
                <Heading size="md">Customer dashboard</Heading>
                <Text>{cardText}</Text>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Blog_cards;
