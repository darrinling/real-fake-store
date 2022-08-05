const db = require("./connection");
const { User, Product, Category } = require("../models");
// transfer images by models.

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Planetary Needs" },
    { name: "Spaceship Supplies" },

    // { name: "Communications" },
    // { name: "Just for fun" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Orbital Debris Protector",
      description:
        "This orbital debris hat protects you from flying debris off meteorites",
      image: "umbrellahat.jpg",
      category: categories[0]._id,
      price: 12.99,
    },
    {
      name: "Bacon Strips Bandages",
      description:
        "Bacon Strips Bandages will keep the hunger away when having to travel for several hours. One lick will kick the hunger pangs for up to 40 minutes",
      image: "bacon-bandages.webp",
      category: categories[1]._id,
      price: 6.79,
    },
    {
      name: "Spaceship French Fry Holder",
      description:
        "This tray slides into your spaceships cup holder to secure french fry cartons and keeps them from floating away with our gravitational force technology, those fries won't float away from you.",
      image: "fries.jpg",
      category: categories[0]._id,
      price: 8.95,
    },
    {
      name: "Scroggy Socks ",
      description:
        "SCROGGY SOCKS! Tired of scroggies nipping at your heals? These scroggy socks will deter those little critters with its innovative technology so you can walk around your ship or planet without severe scroggy bites!",
      image: "mullet.jpg",
      category: categories[1]._id,
      price: 11.99,
    },
    {
      name: "The Official BS Button",
      description:
        "This straight talking BS Button allows you to send BS to other ships whenever you see it!",
      image: "bullshit.jpg",
      category: categories[0]._id,
      price: 12.15,
    },
    {
      name: "Chia Pet Bob Ross ",
      description:
        "The Chia pet's luscious green coat can absorb foul odors, so go ahead and it one rip.",
      image: "chiapet.jpg",
      category: categories[1]._id,
      price: 19.99,
    },
    {
      name: "Emergency Underpants",
      description:
        "The Emergency Underpants are perfect for travel and are compact enough to bring anywhere on your ship or planetary stops.",
      image: "underpants.jpg",
      category: categories[0]._id,
      price: 6.17,
    },
    {
      name: "The Sleep Inducer",
      description:
        "Perfect for inducing sleep even when you're not sleepy. Great for shutting up the prisoners on your ship too! Buy plenty for all.",
      image: "pillow.jpg",
      category: categories[0]._id,
      price: 98.0,
    },
    {
      name: "Viking Steel Slicer",
      description:
        "Great for slicing pizza but can be used for slicing just about anything, alien limbs, scroggies, and so much more!",
      image: "pizzaaxe.webp",
      category: categories[0]._id,
      price: 129.95,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
