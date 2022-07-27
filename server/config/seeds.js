const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  // // const categories = await Category.insertMany([
  // //   { name: 'Food' },
  // //   { name: 'Household Supplies' },
  // //   { name: 'Electronics' },
  // //   { name: 'Books' },
  // //   { name: 'Toys' }
  // // ]);

  // console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Umbrella Hat',
      description:
        'This fun umbrella hat use very little space for portable travel.Stylish and functional accessories, practical design keeps you dry while keeping your hands free',
      image: 'xxxxxx',
      //category: categories[0]._id,
      price: 12.99,
      },
    {
      name: 'Bacon Strips Bandages',
      description:
        'Ouch! That smarts! Treat your minor cuts, scrapes and scratches with the incredible healing power of meat',
      image: 'xxxxxxx',
      //category: categories[0]._id,
      price: 6.79,
    },
    {
      name: 'Car French Fry Holder',
      //category: categories[1]._id,
      description:
        'This tray slides into your cup holder to secure french fry cartons that normally do not fit properly. Respect where respect is due.',
      image: 'xxxxxx',
      price: 8.95,
    },
    {
      name: 'American Mullet Socks ',
      //category: categories[1]._id,
      description:
        'MULLET SOCKS GO WITH EVERYTHING Like a real mullet, these fake mullet hair socks go with everything. Suit and tie? Yoga pants and hoodie? Check and check! Mullet Socks are always the perfect fit for any look!',
      image: 'XXXX',
      price: 11.99 ,
    },
    {
      name: 'The Official BS Button',
      //category: categories[1]._id,
      description:
        'This straight talking BS Button allows you to call BS whenever you see it! Simply press the red buzzer to make it light up, buzz loudly and announce, That was BS! or shout, BS detected, take precautions! over a wailing siren.',
      image: 'XXXXX',
      price: 12.15,
    },
    {
      name: ':Chia Pet Bob Ross ',
      //category: categories[2]._id,
      description:
        'FULL GROWTH 1-2 WEEKS: In just a few short weeks your chia pet will achieve maximum growth and enjoy a luscious green coat.',
      image: 'xxxx',
      price: 19.99,
    },
    {
      name: 'Emergency Underpants',
     // category: categories[2]._id,
      description:
        'The Emergency Underpants come in a 3" x 1-1/2" x 3/4" tin and contain one pair of disposable unisex underpants.Fits most adults.',
      image: 'xxxxxx',
      price: 6.17,
    },
    {
      name: ':Ostrichpillow ',
      //category: categories[3]._id,
      description:
        ' DREAM IN STYLE | The revolutionary sensation OSTRICHPILLOW ORIGINAL is the ultimate immersive travel pillow! Use it for a power nap, lounging at home, or wherever you may be, without moving an inch. Just slip it on and you are off to dreamland.',
      image: 'xxxxxx',
      price: 98.00,
    },
    {
      name: 'Viking Steel Pizza',
      //category: categories[4]._id,
      description: 'CUT YOUR PIZZA LIKE A KING : Just a single glance is enough to see why our pizza axes are miles ahead of your competitors!',
      image: 'xxxx',
      price: 129.95,
    },
   ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
