import { Button, Card, CardBody, CardFooter, Image, Stack, Text, Heading, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';

function Cardstest() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
   <div style={{ backgroundColor: 'lightgreen', textAlign: 'center', padding: '40px' }}>
    <h1 style={{ fontWeight: 'bold', fontSize: '10em' }}>Latest News</h1>

    <br />
</div>


      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src='/images/221.jpeg'
          alt='Caffe Latte'
        />

        <Stack>
          <CardBody>
            <Heading size='md'>HOW TO MAKE THE BEST CUP OF COFFEE ON YOUR NEXT CAMPING TRIP</Heading>

            <Text py='2'>
            Pour Over. With a pour over, you will need a carafe, filters, and a goose-neck kettle (or a special portable, single-serving device) for best results. For this simple process, you just need to sit the filter full of ground coffee to the top of the carafe and then slowly pour hot water over the coffee
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant='solid' colorScheme='green' onClick={onOpen}>
            READ MORE
            </Button>
          </CardFooter>
        </Stack>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>READ MORE</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              objectFit='cover'
              maxW='100%'
              src='/images/221.jpeg'
              alt='Caffe Latte'
            />
            <Text py='2'>
            If you are someone who loves to spend time outdoors on frequent camping trips, then you know that you must learn how to savor your sacred cup of coffee in a portable way. The good news is that you can still enjoy a great cup of coffee away from the comforts of home. Kayak Coffee will provide the coffee, and you can prepare it against the backdrop of a breathtaking sunrise. Let's talk about the ways you can still make that perfect cup of coffee on a camping trip.

 

AeroPress
An AeroPress, similar to a French press, is a fast and simple way to brew your coffee. This product is made for life on the go and can be taken anywhere, either inside its own mug with the travel model or in a tote bag with the original model. Just add your ground coffee inside, pour in the heated water, and press the water down through the coffee grinds and into the mug. This coffee maker is touted for being an espresso maker, a drip coffee maker, and a French press all rolled into one. 

Pour Over
With a pour over, you will need a carafe, filters, and a goose-neck kettle (or a special portable, single-serving device) for best results. For this simple process, you just need to sit the filter full of ground coffee to the top of the carafe and then slowly pour hot water over the coffee. As you pour the water, it drips down into the carafe while the grounds remain in the filter. Once you get your desired amount of coffee, you can enjoy the light-bodied taste produced by this method.

Percolator
If you prefer a stronger cup of coffee, then a percolator may be the best option for you.  The heated water is pushed up through a tube and then out of the top onto the ground coffee. It then drips down through the filter, into the coffee reservoir. This is another great way to make the perfect cup of coffee without electricity. Percolators were widely used before automatic coffee makers came to the market.

About The Hot Water
There are a few different ways that you can heat your water at the campsite. A Jetboil is a compact system available in different models that all provide you with a rapid boil, including a special coffee kit version. There are also many other types of portable stoves available for camping enthusiasts. If you want a more natural primitive experience, then you can bring your water to a boil over a campfire.

Order Your Coffee Today
Kayak Coffee is proud to source organic, single-origin, and fair-trade coffee beans, and we'd love to provide the coffee for your next camping trip. You can place a one-time coffee order, or save money with a coffee subscription. Call us at (317) 526-5845 or drop a line for more information. We roast in Carmel, Indiana, but we deliver to your doorstep, anywhere in the United States. 


            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              close
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
      <br></br>
    <h1 className="demo">Blogs</h1>
    <br></br>
    </>
  );
}

export default Cardstest;
