export const categories = [
  {
    id: 1,
    name: "Pizza",
    image: require("../../assets/images/categories/icons8-pizza-96.png"),
  },
  {
    id: 2,
    name: "Burger",
    image: require("../../assets/images/categories/icons8-hamburger-96.png"),
  },
  {
    id: 3,
    name: "Italian",
    image: require("../../assets/images/categories/icons8-tropical-fish-96.png"),
  },
  {
    id: 4,
    name: "Chinese",
    image: require("../../assets/images/categories/icons8-tropical-drink-96.png"),
  },
  {
    id: 5,
    name: "Noodles",
    image: require("../../assets/images/categories/icons8-spaghetti-96.png"),
  },
  {
    id: 6,
    name: "Sweets",
    image: require("../../assets/images/categories/icons8-cupcake-emoji-96.png"),
  },
];

export const featured = {
  id: 1,
  title: "Fast Food Feast",
  description: "Craving some fast food? Check out these top picks!",
  restaurants: [
    {
      id: 1,
      name: "McDonald's",
      image: require("../../assets/images/restaurants/papajohns.jpg"),
      stars: 4.5,
      reviews: 30,
      category: "Fast Food",
      address: "123 Main Street",
      description:
        "Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.",
      dishes: [
        {
          id: 1,
          name: "Big Mac",
          description:
            "Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.",
          price: 5.99,
          stars: 4.7,
          image: require("../../assets/images/restaurants/papajohns.jpg"),
        },
        {
          id: 2,
          name: "Mc Chicken Nuggets",
          description:
            "Crispy chicken nuggets served with your choice of dipping sauce.",
          price: 4.49,
          stars: 4.3,
          image: require("../../assets/images/restaurants/papajohns.jpg"),
        },
        {
          id: 3,
          name: "Chicken Sandwich",
          description: "Crispy chicken filet, pickles, and mayo on a soft bun.",
          price: 4.99,
          stars: 4.5,
          image: require("../../assets/images/restaurants/papajohns.jpg"),
        },
      ],
    },
    {
      id: 2,
      name: "KFC",
      image: require("../../assets/images/restaurants/papajohns.jpg"),
      stars: 4.6,
      reviews: 20,
      category: "Fast Food",
      address: "123 Main Street",
      description:
        "Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.",
      dishes: [
        {
          id: 1,
          name: "Fried Chicken Bucket",
          description:
            "A bucket of our famous fried chicken, crispy on the outside and tender inside.",
          price: 12.99,
          stars: 4.8,
          image: require("../../assets/images/restaurants/papajohns.jpg"),
        },
        {
          id: 2,
          name: "Chicken Sandwich",
          description: "Crispy chicken filet, pickles, and mayo on a soft bun.",
          price: 4.99,
          stars: 4.5,
          image: require("../../assets/images/restaurants/papajohns.jpg"),
        },
      ],
    },
    {
      id: 3,
      name: "Burger King",
      image: require("../../assets/images/restaurants/papajohns.jpg"),
      stars: 4.2,
      reviews: 25,
      category: "Fast Food",
      address: "123 Main Street",
      description:
        "Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.",
      dishes: [
        {
          id: 1,
          name: "Whopper",
          description:
            "Flame-grilled beef patty, lettuce, tomato, pickles, onions, ketchup, and mayo.",
          price: 6.49,
          stars: 4.6,
          image: require("../../assets/images/restaurants/papajohns.jpg"),
        },
        {
          id: 2,
          name: "Chicken Fries",
          description:
            "Crispy chicken fries with your choice of dipping sauce.",
          price: 3.99,
          stars: 4.4,
          image: require("../../assets/images/restaurants/papajohns.jpg"),
        },
      ],
    },
    {
      id: 4,
      name: "Subway",
      image: require("../../assets/images/restaurants/papajohns.jpg"),
      stars: 4.3,
      reviews: 90,
      category: "Fast Food",
      address: "123 Main Street",
      description:
        "Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.",
      dishes: [
        {
          id: 1,
          name: "Turkey Sub",
          description:
            "Freshly baked bread, tender turkey slices, and your choice of veggies and condiments.",
          price: 7.49,
          stars: 4.7,
          image: require("../../assets/images/categories/icons8-tropical-fish-96.png"),
        },
        {
          id: 2,
          name: "Veggie Delite",
          description:
            "A sub packed with crisp vegetables and a light drizzle of your favorite sauce.",
          price: 5.99,
          stars: 4.2,
          image: require("../../assets/images/restaurants/papajohns.jpg"),
        },
      ],
    },
  ],
};
