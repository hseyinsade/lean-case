let shopItemsData = [
    {
      id: "q1",
      name: "Spagetti Bolonez",
      price: 50,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "assets/images/makarna.jpg",
    },
    {
      id: "w1",
      name: "Diet Omlet",
      price: 10,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "assets/images/dietOmlet.jpg",
    },
    {
      id: "e1",
      name: "Steak",
      price: 25,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "assets/images/akdenizBiftegi.jpg",
    },
    {
      id: "r1",
      name: "Salad",
      price: 30,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "assets/images/salad.jpg",
    },
  ];

let modalItemsData = [
    {
        id: "c1",
        name: "Spagetti Bolonez",
        campaign: "2nd product 50% off",
        active:false,
        rule:{
          min:2,
          shopItemId:"q1",
        },
        discount: 25,
    },
    {
        id: "c2",
        name: "Diet Omlet",
        campaign: "Buy 3, Pay 2",
        active:false,
        rule:{
          min:3,
          shopItemId:"w1",
        },
        discount: 10,
    },
];