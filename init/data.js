const travelPackages = [
  {
    title: "Explore the Wonders of Kerala",
    description: "Discover the serene backwaters and lush greenery of Kerala. Enjoy houseboat stays, visit tea plantations, and experience traditional Kathakali performances.",
    image: [
      "https://images.unsplash.com/photo-1592726129696-4eadb95126e6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",

      "https://images.unsplash.com/photo-1593417033852-66b46de814b8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",

      "https://images.unsplash.com/photo-1701523945170-600f13233771?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",

      "https://images.unsplash.com/photo-1704365159740-ab1f3556044a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",

      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 7000,
    location: "Alleppey, Kerala",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 400,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 1300,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 2500, 
        availability: true
      }
    ]
  },
  {
    title: "Rajasthan Desert Adventure",
    description: "Experience the vibrant culture of Rajasthan with a desert safari. Ride camels, explore historic forts, and enjoy traditional Rajasthani cuisine.",
    image: ["https://plus.unsplash.com/premium_photo-1664303582996-95c220d4f3d3?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",

      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",

      "https://images.unsplash.com/photo-1635929620316-d34cecc5639b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",

      "https://images.unsplash.com/photo-1705861145803-9f7ad1559bc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",

      "https://plus.unsplash.com/premium_photo-1718570257124-fb658d3c6f30?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    price: 6500,
    location: "Jaisalmer, Rajasthan",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 500,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 2500,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 3500, 
        availability: true
      }
    ]
  },
  {
    title: "Goa Beach Extravaganza",
    description: "Relax on the pristine beaches of Goa. Enjoy water sports, beach parties, and explore the Portuguese heritage of Old Goa.",
    image: ["https://plus.unsplash.com/premium_photo-1666286956135-0fb603dad5cf?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",

      "https://images.unsplash.com/photo-1642922835816-e2ac68db5c42?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",

      "https://images.unsplash.com/photo-1541738679621-172e4575a81d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",

      "https://images.unsplash.com/photo-1713777072955-f9e9d0657df4?q=80&w=1145&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      
      "https://images.unsplash.com/photo-1644501038013-d8d61df1ebba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"

    ],
    price: 10000,
    location: "North Goa",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 500,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 2000,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 3500, 
        availability: true
      }
    ]
  },
  {
    title: "Himalayan Trekking Expedition",
    description: "Embark on a thrilling trekking adventure in the Himalayas. Experience breathtaking views, stay in mountain lodges, and enjoy the natural beauty of the region.",
    image: ["https://images.unsplash.com/photo-1711094282126-73bfb874c515?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1644902560705-740850bc47b8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",

      "https://images.unsplash.com/photo-1522506209496-4536d9020ec4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",

      "https://images.unsplash.com/photo-1680442794210-18aaefe1bc11?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",

      "https://images.unsplash.com/photo-1536028943632-1b302c2761b3?q=80&w=997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 15000,
    location: "Manali, Himachal Pradesh",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 500,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 1500,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 2600, 
        availability: true
      }
    ]
  },
  {
    title: "Cultural Heritage Tour of Varanasi",
    description: "Immerse yourself in the spiritual and cultural richness of Varanasi. Visit ancient temples, witness Ganga Aarti, and explore bustling markets.",
    image: ["https://images.unsplash.com/photo-1684121784712-48d0e3800e43?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1665413791167-6718dcf36773?q=80&w=1029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1665413793441-13aedeb062d3?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1701619878991-716d8fbb319f?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",

      "https://images.unsplash.com/photo-1646288744226-a2e3a06bfb10?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 6500,
    location: "Varanasi, Uttar Pradesh",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 500,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 1500,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 3000, 
        availability: true
      }
    ]
  },
  {
    title: "Luxury Experience in Mumbai",
    description: "Experience the cosmopolitan charm of Mumbai. Enjoy luxury accommodations, fine dining, and explore landmarks like the Gateway of India and Marine Drive.",
    image: ["https://plus.unsplash.com/premium_photo-1681550097108-187abe10d445?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1660145416818-b9a2b1a1f193?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      " https://images.unsplash.com/photo-1718733227385-20c0ba5074b1?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1679840829046-80ea54fd019b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    price: 12000,
    location: "Mumbai, Maharashtra",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 1600,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 2500,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 4000, 
        availability: true
      }
    ]
  },
  {
    title: "Golden Triangle Tour",
    description: "Explore India's Golden Triangle: Delhi, Agra, and Jaipur. Visit iconic landmarks like the Taj Mahal, Red Fort, and Amber Fort, and immerse in India's rich history.",
    image: ["https://images.unsplash.com/photo-1523131328515-865dbf27fe0f?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1679301429776-08887a5e26d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1667849521402-efb9b61ddf73?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1705861144413-f02e38354648?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1650355719397-a6f09db66464?q=80&w=931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 14000,
    location: "Delhi, Agra, Jaipur",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 1200,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 2000,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 3300, 
        availability: true
      }
    ]
  },
  {
    title: "Sikkim Serenity Tour",
    description: "Discover the tranquil beauty of Sikkim. Visit Buddhist monasteries, enjoy views of the Kanchenjunga mountain range, and explore the lush landscapes.",
    image: ["https://images.unsplash.com/photo-1662551392187-768334a36d4e?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1600402808924-9c591a6dace8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1634400118017-7ca0f1ed1588?q=80&w=1028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1721884486403-e18ad5535876?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1689343075610-aa77066f3df5?q=80&w=1029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 13000,
    location: "Gangtok, Sikkim",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 500,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 1400,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 2500, 
        availability: true
      }
    ]
  },
  {
    title: "Andaman Islands Escape",
    description: "Relax on the pristine beaches of the Andaman Islands. Snorkel in crystal-clear waters, explore coral reefs, and enjoy serene island life.",
    image: ["https://images.unsplash.com/photo-1642498232612-a837df233825?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1640618792277-b91f3199f6a8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1579317363558-3b0cacdd70dc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1641719508492-bca560e49506?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1640718835374-6116a99c6e6c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 17000,
    location: "Port Blair, Andaman and Nicobar Islands",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 700,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 2000,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 3500, 
        availability: true
      }
    ]
  },
  {
    title: "Kolkata Cultural Journey",
    description: "Experience the cultural vibrancy of Kolkata. Visit historical landmarks, enjoy the city's art scene, and taste delectable Bengali cuisine.",
    image: ["https://images.unsplash.com/photo-1675787126269-cacf91e22a34?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1677307816181-1446ab18913e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?q=80&w=1014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1597912056183-a6dd34171178?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1597220397294-0d95abb2031c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 9000,
    location: "Kolkata, West Bengal",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 600,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 1900,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 3300, 
        availability: true
      }
    ]
  },
  {
    title: "Udaipur Royal Retreat",
    description: "Indulge in the royal splendor of Udaipur. Stay in heritage hotels, visit majestic palaces, and cruise on Lake Pichola.",
    image: ["https://images.unsplash.com/photo-1634720564985-5cf184d8eca9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",

      "https://images.unsplash.com/photo-1715628253914-072d4fc1ee33?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1715628253481-a88f5869dfad?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1718797054890-e58742729f2d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1675176681617-28125b9aecf9?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 11000,
    location: "Udaipur, Rajasthan",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 500,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 1600,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 3000, 
        availability: true
      }
    ]
  },
  {
    title: "Nainital Lakeside Retreat",
    description: "Enjoy a peaceful getaway by the serene Naini Lake. Explore nearby attractions, including Snow View Point, Naina Devi Temple, and the beautiful hill station atmosphere.",
    image: [" https://images.unsplash.com/photo-1610715936287-6c2ad208cdbf?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1643263905101-d0b6fb15281c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1599580439735-0ea7db16f346?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1667029838861-2fe3a590a1d2?q=80&w=936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1620902459224-c4bb00278144?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 8000,
    location: "Nainital, Uttarakhand",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 500,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 1400,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 2900, 
        availability: true
      }
    ]
  },
  {
    title: "Coorg Coffee Plantation Stay",
    description: "Relax amidst the coffee plantations of Coorg. Enjoy nature walks, explore waterfalls, and indulge in authentic Coorgi cuisine in the lush hills of Karnataka.",
    image: [" https://images.unsplash.com/photo-1617036923184-81c847930849?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/flagged/photo-1592544858330-7ac10a0468e5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1605105777592-c3430a67d033?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1694537623072-a1172819c577?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1710891437634-85ad1b1f0a88?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 7500,
    location: "Coorg, Karnataka",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 600,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 1500,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 2900, 
        availability: true
      }
    ]
  },
  {
    title: "Ranthambore Wildlife Safari",
    description: "Experience the thrill of a wildlife safari in Ranthambore National Park. Spot tigers, leopards, and other wildlife in their natural habitat.",
    image: ["https://images.unsplash.com/photo-1680140979890-101e2798dddf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1675235994031-19857accf254?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1674579686013-33b94c4fcf1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1709727934810-e9089d02465b?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1711976661267-5516aad60930?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 7000,
    location: "Ranthambore, Rajasthan",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 1500,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 2000,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 3000, 
        availability: true
      }
    ]
  },
  {
    title: "Ooty Hill Station Escape",
    description: "Escape to the scenic hill station of Ooty. Visit the famous Botanical Gardens, ride the Nilgiri Mountain Railway, and relax by the peaceful Ooty Lake.",
    image: [
      "https://images.unsplash.com/photo-1633931698758-f59cdaf042a2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/avalanche-hills-ooty-1656333416_e2680b8680086972e69d.webp",
      
      "https://images.unsplash.com/photo-1622040256403-313e14cad531?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1584043760783-561c60c88e7c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1588356295620-3a53c9e50ba9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 6900,
    location: "Ooty, Tamil Nadu",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 1500,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 3000,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 5000, 
        availability: true
      }
    ]
  },
  {
    title: "Darjeeling Tea Garden Tour",
    description: "Explore the tea plantations of Darjeeling, with panoramic views of the Himalayas. Visit the iconic Tiger Hill and take a ride on the Darjeeling Himalayan Railway.",
    image: ["https://images.unsplash.com/photo-1653291566519-235fe9b692c1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1626082894338-f7209f7ce9f0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1671711852974-3244db893ef9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1696426886039-a3b5c8774e3d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1640778291016-319ee72dfac3?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 7000,
    location: "Darjeeling, West Bengal",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 800,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 2000,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 4000, 
        availability: true
      }
    ]
  },
  {
    title: "Majuli Island Cultural Experience",
    description: "Visit the largest river island in the world and experience Assam's unique culture. Explore monasteries, witness traditional festivals, and learn about local crafts.",
    image: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/3d/f0/ca/misty-mornings-at-ygdrasill.jpg?w=800&h=-1&s=1",
      "https://upload.wikimedia.org/wikipedia/commons/c/cb/Doriya_River_of_Majuli.jpg",
      "https://th-i.thgim.com/public/migration_catalog/article14916926.ece/alternates/LANDSCAPE_1200/HY13MAJULI",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/55/99/6c/cottage-view.jpg?w=800&h=-1&s=1",
     
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/05/00/28/majuli-assam-india-brahmaputra.jpg?w=800&h=-1&s=1"

    ],
    price: 8000,
    location: "Majuli, Assam",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 300,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 1300,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 2500, 
        availability: true
      }
    ]
  },
  {
    title: "Khajuraho Temple Exploration",
    description: "Explore the famous UNESCO World Heritage site of Khajuraho and its intricate temple architecture. Discover the rich history and cultural heritage of Madhya Pradesh.",
    image: ["https://images.unsplash.com/photo-1671375159250-8f81a29e54e7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1671375159250-b5c5fca0183a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1722787700361-8f71385b485b?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1681181753651-315b07b2b2de?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1672215051407-6e05138da3a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 9500,
    location: "Khajuraho, Madhya Pradesh",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 300,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 1300,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 2300, 
        availability: true
      }
    ]
  },
  {
    title: "Shillong Adventure Getaway",
    description: "Visit the Scotland of the East - Shillong, Meghalaya. Enjoy stunning landscapes, waterfalls, and explore caves while experiencing the rich tribal culture.",
    image: ["https://images.unsplash.com/photo-1665248919075-246d0ac9a912?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1712087595185-f210e21d4d76?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1700637238997-22393b88d1c4?q=80&w=1051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1624090350769-2c7961dd7b6d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1625826415766-001bd75aaf52?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 8600,
    location: "Shillong, Meghalaya",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 500,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 1500,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 3000, 
        availability: true
      }
    ]
  },
  {
    title: "Konkan Coastal Escape",
    description: "Explore the picturesque Konkan coast with its pristine beaches, historic forts, and mouthwatering seafood. Perfect for a relaxing seaside getaway.",
    image: ["https://images.unsplash.com/photo-1698900228432-4a739e3eb16c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1667807876919-3a493bd565a3?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1634965078396-9a74038cba9f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1611337765360-1fb5b41b69ce?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1712472257804-d3432279061d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 9000,
    location: "Ratnagiri, Maharashtra",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 400,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 1500,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 3000, 
        availability: true
      }
    ]
  },
  {
    title: "Gokarna Yoga and Beach Retreat",
    description: "Unwind at the peaceful beaches of Gokarna while practicing yoga and meditation. A perfect retreat for relaxation and rejuvenation by the Arabian Sea.",
    image: ["https://images.unsplash.com/photo-1693210061424-49909f0bead6?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1620987327682-1b8581fe5567?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1610976965828-697421ce26b6?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1554787990-fd7a431e3b0a?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1567098628209-d182949882b0?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 7200,
    location: "Gokarna, Karnataka",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 500,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 1600,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 2700, 
        availability: true
      }
    ]
  },
  {
    title: "Rann of Kutch Festival Experience",
    description: "Witness the stunning white desert of the Rann of Kutch during the Rann Utsav. Enjoy cultural performances, traditional crafts, and local delicacies.",
    image: ["https://images.unsplash.com/photo-1669015881702-951de590db31?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1664150543913-66f20bf84ba9?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1667753192478-5bc54c333e62?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1669015881702-951de590db31?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1706013722524-b3b8c6ec687a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 8500,
    location: "Kutch, Gujarat",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 100,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 1100,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 3000, 
        availability: true
      }
    ]
  },
  {
    title: "Bandhavgarh Tiger Safari",
    description: "Explore Bandhavgarh National Park, one of India's top wildlife reserves, known for its high tiger population. Perfect for wildlife enthusiasts and photographers.",
    image: ["https://images.unsplash.com/photo-1718546067294-8d12489b59c9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1551438580-4bf2817421f3?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1497267768519-238277df24b0?q=80&w=846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1624707369652-7fe9af8f7f58?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1554380726-5bd6b17b42e5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 6700,
    location: "Bandhavgarh, Madhya Pradesh",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 800,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 1800,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 2800, 
        availability: true
      }
    ]
  },
  {
    title: "Hampi Heritage Tour",
    description: "Step into history with a tour of Hampi's ancient ruins, a UNESCO World Heritage site. Explore the Vijayanagara Empire's temples, palaces, and stunning landscapes.",
    image: ["https://images.unsplash.com/photo-1572461274864-191affced839?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1616671832048-a8becc25bb13?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1689947674001-f9a8a08f0480?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1689946727836-78a9f36987c0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1689946727918-86aa5c584447?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 7800,
    location: "Hampi, Karnataka",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 500,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 2000,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 3000, 
        availability: true
      }
    ]
  },
  {
    title: "Spiti Valley Road Trip",
    description: "Explore the remote and rugged beauty of Spiti Valley. Drive through high-altitude landscapes, visit ancient monasteries, and experience the region’s unique culture.",
    image: ["https://plus.unsplash.com/premium_photo-1674044615725-c96113850354?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1693122962494-37d883197098?q=80&w=882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1691735214703-310c6594c6a8?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1639776020915-922f56acf66d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://plus.unsplash.com/premium_photo-1661878621391-a53da02f1098?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 8500,
    location: "Spiti Valley, Himachal Pradesh",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 1000,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 2000, 
        availability: true
      }
    ]
  },
  {
    title: "Rishikesh Yoga and Adventure",
    description: "Visit the yoga capital of the world, Rishikesh. Participate in yoga sessions, meditate by the Ganga River, and indulge in adventure activities like river rafting.",
    image: ["https://images.unsplash.com/photo-1683827620425-684afc5ca945?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1683219151464-bfa270e6ba58?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1603867106100-0d2039fc8757?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1596021688656-35fdc9ed0274?q=80&w=1043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1650551823793-6e358b9d74a4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 8000,
    location: "Rishikesh, Uttarakhand",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 1500,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 3000, 
        availability: true
      }
    ]
  },
  {
    title: "Khajjiar Mini Switzerland Experience",
    description: "Escape to Khajjiar, known as the mini-Switzerland of India. Surrounded by deodar forests, enjoy horse riding, picnics, and scenic views of the Dhauladhar mountains.",
    image: ["https://images.unsplash.com/photo-1647364147271-90897257f460?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600491001617-36f4e8005cc1?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1589702413183-ca141958b7c5?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1637896175022-7165f16fb523?q=80&w=929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1654414885585-51e8c4ad9f7b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 8300,
    location: "Khajjiar, Himachal Pradesh",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 500,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 1000,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 3000, 
        availability: true
      }
    ]
  },
  {
    title: "Chilika Lake Bird Watching",
    description: "Visit the largest coastal lagoon in India and a paradise for bird watchers. During the winter season, Chilika Lake hosts migratory birds from around the world.",
    image: ["https://images.unsplash.com/photo-1633530541201-139b32fa4ffa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1626605584182-d0377df681e8?q=80&w=968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1718137955631-84bfa90f9f96?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1718696070982-20e85093bca4?q=80&w=1111&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://plus.unsplash.com/premium_photo-1664302982993-38751fb85ba7?q=80&w=868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    price: 7200,
    location: "Chilika Lake, Odisha",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 600,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 1500,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 2500, 
        availability: true
      }
    ]
  },
  {
    title: "Auli Skiing Adventure",
    description: "Enjoy a winter adventure in Auli, one of India's top skiing destinations. Perfect for beginners and seasoned skiers alike, with stunning views of the Himalayan peaks.",
    image: ["https://plus.unsplash.com/premium_photo-1661871501204-7b4ec1a91079?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1550854317-10deac0a98a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://plus.unsplash.com/premium_photo-1664302791901-52c6159eaf78?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1565992441121-4367c2967103?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1626188638270-54b85a7deceb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 9600,
    location: "Auli, Uttarakhand",
    country: "India",   
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 500,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 1000,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 2000, 
        availability: true
      }
    ]
  },
  {
    title: "Ganga Sagar Island Pilgrimage",
    description: "Experience the spiritual significance of Ganga Sagar, where the Ganga River meets the Bay of Bengal. Participate in religious rituals and enjoy the tranquil beach atmosphere.",
    image: ["https://images.unsplash.com/photo-1701361754202-1e09ad58304b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1700902531225-be48288f211a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1703584347678-73ad79f3636d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1703584345268-5416c6b0830c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      "https://images.unsplash.com/photo-1721544608294-fb8a28f1d832?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
    ],
    price: 7000,
    location: "Ganga Sagar, West Bengal",
    country: "India",
    packSizes: [
      {
        size: "1 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "2 person",
        additionalPrice: 0,
        availability: true
      },
      {
        size: "3 person",
        additionalPrice: 1100,
        availability: true
      },
      {
        size: "5 person",
        additionalPrice: 2500, 
        availability: true
      }
    ]
  },
];

module.exports = { data: travelPackages };
