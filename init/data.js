const travelPackages = [
    {
      title: "Explore the Wonders of Kerala",
      description: "Discover the serene backwaters and lush greenery of Kerala. Enjoy houseboat stays, visit tea plantations, and experience traditional Kathakali performances.",
      image: "https://images.unsplash.com/photo-1592726129696-4eadb95126e6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 7000,
      location: "Alleppey, Kerala",
      country: "India"
    },
    {
      title: "Rajasthan Desert Adventure",
      description: "Experience the vibrant culture of Rajasthan with a desert safari. Ride camels, explore historic forts, and enjoy traditional Rajasthani cuisine.",
      image: "https://plus.unsplash.com/premium_photo-1664303582996-95c220d4f3d3?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 6500,
      location: "Jaisalmer, Rajasthan",
      country: "India"
    },
    {
      title: "Goa Beach Extravaganza",
      description: "Relax on the pristine beaches of Goa. Enjoy water sports, beach parties, and explore the Portuguese heritage of Old Goa.",
      image: "https://plus.unsplash.com/premium_photo-1666286956135-0fb603dad5cf?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 10000,
      location: "North Goa",
      country: "India"
    },
    {
      title: "Himalayan Trekking Expedition",
      description: "Embark on a thrilling trekking adventure in the Himalayas. Experience breathtaking views, stay in mountain lodges, and enjoy the natural beauty of the region.",
      image: "https://images.unsplash.com/photo-1711094282126-73bfb874c515?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 15000,
      location: "Manali, Himachal Pradesh",
      country: "India"
    },
    {
      title: "Cultural Heritage Tour of Varanasi",
      description: "Immerse yourself in the spiritual and cultural richness of Varanasi. Visit ancient temples, witness Ganga Aarti, and explore bustling markets.",
      image: "https://images.unsplash.com/photo-1684121784712-48d0e3800e43?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 6500,
      location: "Varanasi, Uttar Pradesh",
      country: "India"
    },
    {
      title: "Luxury Experience in Mumbai",
      description: "Experience the cosmopolitan charm of Mumbai. Enjoy luxury accommodations, fine dining, and explore landmarks like the Gateway of India and Marine Drive.",
      image: "https://plus.unsplash.com/premium_photo-1681550097108-187abe10d445?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 12000,
      location: "Mumbai, Maharashtra",
      country: "India"
    },
    {
      title: "Golden Triangle Tour",
      description: "Explore India's Golden Triangle: Delhi, Agra, and Jaipur. Visit iconic landmarks like the Taj Mahal, Red Fort, and Amber Fort, and immerse in India's rich history.",
      image: "https://images.unsplash.com/photo-1523131328515-865dbf27fe0f?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 14000,
      location: "Delhi, Agra, Jaipur",
      country: "India"
    },
    {
      title: "Sikkim Serenity Tour",
      description: "Discover the tranquil beauty of Sikkim. Visit Buddhist monasteries, enjoy views of the Kanchenjunga mountain range, and explore the lush landscapes.",
      image: "https://images.unsplash.com/photo-1662551392187-768334a36d4e?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 13000,
      location: "Gangtok, Sikkim",
      country: "India"
    },
    {
      title: "Andaman Islands Escape",
      description: "Relax on the pristine beaches of the Andaman Islands. Snorkel in crystal-clear waters, explore coral reefs, and enjoy serene island life.",
      image: "https://images.unsplash.com/photo-1642498232612-a837df233825?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 17000,
      location: "Port Blair, Andaman and Nicobar Islands",
      country: "India"
    },
    {
      title: "Kolkata Cultural Journey",
      description: "Experience the cultural vibrancy of Kolkata. Visit historical landmarks, enjoy the city's art scene, and taste delectable Bengali cuisine.",
      image: "https://images.unsplash.com/photo-1675787126269-cacf91e22a34?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 9000,
      location: "Kolkata, West Bengal",
      country: "India"
    },
    {
      title: "Udaipur Royal Retreat",
      description: "Indulge in the royal splendor of Udaipur. Stay in heritage hotels, visit majestic palaces, and cruise on Lake Pichola.",
      image: "https://images.unsplash.com/photo-1634720564985-5cf184d8eca9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 11000,
      location: "Udaipur, Rajasthan",
      country: "India"
    },
    {
      title: "Nainital Lakeside Retreat",
      description: "Enjoy a peaceful getaway by the serene Naini Lake. Explore nearby attractions, including Snow View Point, Naina Devi Temple, and the beautiful hill station atmosphere.",
      image: " https://images.unsplash.com/photo-1610715936287-6c2ad208cdbf?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 8000,
      location: "Nainital, Uttarakhand",
      country: "India"
    },
    {
      title: "Coorg Coffee Plantation Stay",
      description: "Relax amidst the coffee plantations of Coorg. Enjoy nature walks, explore waterfalls, and indulge in authentic Coorgi cuisine in the lush hills of Karnataka.",
      image: " https://images.unsplash.com/photo-1617036923184-81c847930849?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60 ",
      price: 7500,
      location: "Coorg, Karnataka",
      country: "India"
    },
    {
      title: "Ranthambore Wildlife Safari",
      description: "Experience the thrill of a wildlife safari in Ranthambore National Park. Spot tigers, leopards, and other wildlife in their natural habitat.",
      image: "https://images.unsplash.com/photo-1680140979890-101e2798dddf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 7000,
      location: "Ranthambore, Rajasthan",
      country: "India"
    },
    {
      title: "Ooty Hill Station Escape",
      description: "Escape to the scenic hill station of Ooty. Visit the famous Botanical Gardens, ride the Nilgiri Mountain Railway, and relax by the peaceful Ooty Lake.",
      image: "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/avalanche-hills-ooty-1656333416_e2680b8680086972e69d.webp",
      price: 6900,
      location: "Ooty, Tamil Nadu",
      country: "India"
    },
    {
      title: "Darjeeling Tea Garden Tour",
      description: "Explore the tea plantations of Darjeeling, with panoramic views of the Himalayas. Visit the iconic Tiger Hill and take a ride on the Darjeeling Himalayan Railway.",
      image: "https://images.unsplash.com/photo-1653291566519-235fe9b692c1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 7000,
      location: "Darjeeling, West Bengal",
      country: "India"
    },
    {
      title: "Majuli Island Cultural Experience",
      description: "Visit the largest river island in the world and experience Assam's unique culture. Explore monasteries, witness traditional festivals, and learn about local crafts.",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Doriya_River_of_Majuli.jpg",
      price: 8000,
      location: "Majuli, Assam",
      country: "India"
    },
    {
      title: "Khajuraho Temple Exploration",
      description: "Explore the famous UNESCO World Heritage site of Khajuraho and its intricate temple architecture. Discover the rich history and cultural heritage of Madhya Pradesh.",
      image: "https://images.unsplash.com/photo-1671375159250-8f81a29e54e7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 9500,
      location: "Khajuraho, Madhya Pradesh",
      country: "India"
    },
    {
      title: "Shillong Adventure Getaway",
      description: "Visit the Scotland of the East - Shillong, Meghalaya. Enjoy stunning landscapes, waterfalls, and explore caves while experiencing the rich tribal culture.",
      image: "https://images.unsplash.com/photo-1665248919075-246d0ac9a912?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 8600,
      location: "Shillong, Meghalaya",
      country: "India"
    },
    {
      title: "Konkan Coastal Escape",
      description: "Explore the picturesque Konkan coast with its pristine beaches, historic forts, and mouthwatering seafood. Perfect for a relaxing seaside getaway.",
      image: "https://images.unsplash.com/photo-1698900228432-4a739e3eb16c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 9000,
      location: "Ratnagiri, Maharashtra",
      country: "India"
    },
    {
      title: "Gokarna Yoga and Beach Retreat",
      description: "Unwind at the peaceful beaches of Gokarna while practicing yoga and meditation. A perfect retreat for relaxation and rejuvenation by the Arabian Sea.",
      image: "https://images.unsplash.com/photo-1693210061424-49909f0bead6?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 7200,
      location: "Gokarna, Karnataka",
      country: "India"
    },
    {
      title: "Rann of Kutch Festival Experience",
      description: "Witness the stunning white desert of the Rann of Kutch during the Rann Utsav. Enjoy cultural performances, traditional crafts, and local delicacies.",
      image: "https://images.unsplash.com/photo-1669015881702-951de590db31?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 8500,
      location: "Kutch, Gujarat",
      country: "India"
    },
    {
      title: "Bandhavgarh Tiger Safari",
      description: "Explore Bandhavgarh National Park, one of India's top wildlife reserves, known for its high tiger population. Perfect for wildlife enthusiasts and photographers.",
      image: "https://images.unsplash.com/photo-1718546067294-8d12489b59c9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 6700,
      location: "Bandhavgarh, Madhya Pradesh",
      country: "India"
    },
    {
      title: "Hampi Heritage Tour",
      description: "Step into history with a tour of Hampi's ancient ruins, a UNESCO World Heritage site. Explore the Vijayanagara Empire's temples, palaces, and stunning landscapes.",
      image: "https://images.unsplash.com/photo-1572461274864-191affced839?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 7800,
      location: "Hampi, Karnataka",
      country: "India"
    },
    {
      title: "Spiti Valley Road Trip",
      description: "Explore the remote and rugged beauty of Spiti Valley. Drive through high-altitude landscapes, visit ancient monasteries, and experience the region’s unique culture.",
      image: "https://plus.unsplash.com/premium_photo-1674044615725-c96113850354?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 8500,
      location: "Spiti Valley, Himachal Pradesh",
      country: "India"
    },
    {
      title: "Rishikesh Yoga and Adventure",
      description: "Visit the yoga capital of the world, Rishikesh. Participate in yoga sessions, meditate by the Ganga River, and indulge in adventure activities like river rafting.",
      image: "https://images.unsplash.com/photo-1683827620425-684afc5ca945?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 8000,
      location: "Rishikesh, Uttarakhand",
      country: "India"
    },
    {
      title: "Khajjiar Mini Switzerland Experience",
      description: "Escape to Khajjiar, known as the mini-Switzerland of India. Surrounded by deodar forests, enjoy horse riding, picnics, and scenic views of the Dhauladhar mountains.",
      image: "https://images.unsplash.com/photo-1647364147271-90897257f460?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 8300,
      location: "Khajjiar, Himachal Pradesh",
      country: "India"
    },
    {
      title: "Chilika Lake Bird Watching",
      description: "Visit the largest coastal lagoon in India and a paradise for bird watchers. During the winter season, Chilika Lake hosts migratory birds from around the world.",
      image: "https://images.unsplash.com/photo-1633530541201-139b32fa4ffa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 7200,
      location: "Chilika Lake, Odisha",
      country: "India"
    },
    {
      title: "Auli Skiing Adventure",
      description: "Enjoy a winter adventure in Auli, one of India's top skiing destinations. Perfect for beginners and seasoned skiers alike, with stunning views of the Himalayan peaks.",
      image: "https://plus.unsplash.com/premium_photo-1661871501204-7b4ec1a91079?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 9600,
      location: "Auli, Uttarakhand",
      country: "India"
    },
    {
      title: "Ganga Sagar Island Pilgrimage",
      description: "Experience the spiritual significance of Ganga Sagar, where the Ganga River meets the Bay of Bengal. Participate in religious rituals and enjoy the tranquil beach atmosphere.",
      image: "https://images.unsplash.com/photo-1701361754202-1e09ad58304b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
      price: 7000,
      location: "Ganga Sagar, West Bengal",
      country: "India"
    },
  ];

  module.exports = {data: travelPackages};
  