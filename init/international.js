const internationalTravelPackages = [
    {
        title: "Discover the Beauty of Bali",
        description: "Experience the stunning beaches, cultural temples, and vibrant nightlife in Bali. Enjoy water sports, explore the rice terraces, and relax in luxury resorts.",
        image: "https://images.unsplash.com/photo-1699911104023-bcdadf9e2567?q=80&w=1132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
        price: 12000,
        location: "Bali",
        country: "Indonesia"
    },
    {
        title: "Explore the Magic of Paris",
        description: "Visit the City of Light, Paris. Explore the Eiffel Tower, Notre-Dame, and the Louvre Museum. Stroll along the Seine River and enjoy world-class cuisine.",
        image: "https://plus.unsplash.com/premium_photo-1719430569503-338fc89eb21f?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
        price: 20000,
        location: "Paris",
        country: "France"
    },
    {
        title: "Adventure in the Amazon Rainforest",
        description: "Experience a thrilling adventure in the Amazon Rainforest. Discover diverse wildlife, go on river cruises, and explore local indigenous cultures.",
        image: "https://images.unsplash.com/photo-1534861542011-27e852f7c9f5?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
        price: 15000,
        location: "Amazon Rainforest",
        country: "Brazil"
    },
    {
        title: "Safari in the Serengeti",
        description: "Witness the great migration and the Big Five on a safari in the Serengeti. Stay in luxury lodges and enjoy a once-in-a-lifetime wildlife experience.",
        image: "https://images.unsplash.com/photo-1528275646751-ff237d1cd935?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
        price: 18000,
        location: "Serengeti",
        country: "Tanzania"
    },
    {
        title: "Tokyo City Lights Tour",
        description: "Explore the vibrant city of Tokyo, Japan. Visit iconic landmarks such as the Tokyo Tower, Senso-ji Temple, and Shibuya Crossing. Enjoy Japanese cuisine and shopping.",
        image: "https://images.unsplash.com/photo-1617870435601-4a5d43be4bd7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
        price: 22000,
        location: "Tokyo",
        country: "Japan"
    },
    {
        title: "Experience the Northern Lights in Iceland",
        description: "Catch the magical Northern Lights in Iceland. Explore glaciers, volcanic landscapes, and relax in the Blue Lagoon’s geothermal waters.",
        image: "https://plus.unsplash.com/premium_photo-1720020552789-c4ef7c59e5fc?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
        price: 25000,
        location: "Reykjavik",
        country: "Iceland"
    },
    {
        title: "New Zealand Adventure",
        description: "Embark on a thrilling journey in New Zealand. Explore the Hobbiton set, hike through national parks, and enjoy adventure sports in Queenstown.",
        image: "https://images.unsplash.com/photo-1507097634215-e82e6b518529?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
        price: 23000,
        location: "Queenstown",
        country: "New Zealand"
    },
    {
        title: "Swiss Alps Skiing Experience",
        description: "Ski through the picturesque Swiss Alps. Stay in charming alpine villages, enjoy après-ski activities, and experience world-class skiing and snowboarding.",
        image: "https://images.unsplash.com/photo-1615462939429-4610c9c5f895?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
        price: 26000,
        location: "Zermatt",
        country: "Switzerland"
    },
    {
        title: "Greek Islands Hopping",
        description: "Sail through the stunning Greek Islands. Visit Santorini, Mykonos, and Crete. Enjoy crystal-clear waters, Mediterranean cuisine, and explore ancient ruins.",
        image: "https://images.unsplash.com/photo-1718994061057-b74b5c3f58d6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
        price: 24000,
        location: "Santorini",
        country: "Greece"
    },
    {
        title: "The Wonders of Egypt",
        description: "Explore the ancient pyramids, visit the Sphinx, and cruise along the Nile River. Discover Egypt's rich history and culture with a guided tour of iconic sites.",
        image: "https://images.unsplash.com/photo-1600520611035-84157ad4084d?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
        price: 21000,
        location: "Cairo",
        country: "Egypt"
    },
    {
        title: "Dubai Luxury Getaway",
        description: "Indulge in luxury in Dubai. Visit the Burj Khalifa, shop in high-end malls, relax in opulent resorts, and enjoy thrilling desert safaris.",
        image: "https://images.unsplash.com/photo-1651467606797-e1c660cf3fda?q=80&w=893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
        price: 27000,
        location: "Dubai",
        country: "United Arab Emirates"
    },
    {
        title: "Canadian Rockies Adventure",
        description: "Explore the stunning beauty of the Canadian Rockies. Hike through Banff National Park, see the turquoise waters of Lake Louise, and enjoy wildlife spotting.",
        image: "https://images.unsplash.com/photo-1678401695092-53460c9a1a76?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
        price: 22000,
        location: "Banff",
        country: "Canada"
    }

  ];

  module.exports = {data: internationalTravelPackages};



  [
    {
        title: "Explore the Wonders of Santorini",
        description: "Enjoy breathtaking sunsets, white-washed houses, and the crystal-clear Aegean Sea in Santorini. Visit ancient ruins, savor local cuisine, and unwind in luxury accommodations.",
        image: "https://images.unsplash.com/photo-1533684830666-1362d3b9e7a1?q=80&w=1132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 15000,
        location: "Santorini",
        country: "Greece"
    },
    {
        title: "Adventure in the Swiss Alps",
        description: "Discover majestic mountain landscapes, stunning hiking trails, and exhilarating winter sports in the Swiss Alps. Experience the charm of Alpine villages and indulge in Swiss chocolate.",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 18000,
        location: "Swiss Alps",
        country: "Switzerland"
    },
    {
        title: "Safari Adventure in Serengeti",
        description: "Experience an unforgettable wildlife safari in the Serengeti. Witness the Great Migration, explore vast savannas, and stay in luxury lodges surrounded by nature.",
        image: "https://images.unsplash.com/photo-1563306406-7d1d74e11b57?q=80&w=1132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 22000,
        location: "Serengeti",
        country: "Tanzania"
    },
    {
        title: "Cultural Escape to Kyoto",
        description: "Discover the rich cultural heritage of Kyoto with its temples, shrines, and gardens. Experience traditional tea ceremonies, stroll through bamboo forests, and enjoy seasonal festivals.",
        image: "https://images.unsplash.com/photo-1556739563-7514570ebc24?q=80&w=1132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 14000,
        location: "Kyoto",
        country: "Japan"
    },
    {
        title: "Relax on the Beaches of the Maldives",
        description: "Escape to the serene beaches of the Maldives. Enjoy pristine white sands, crystal-clear waters, and luxury overwater villas. Perfect for a romantic getaway or relaxing retreat.",
        image: "https://images.unsplash.com/photo-1519565461193-19430983eace?q=80&w=1132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 25000,
        location: "Maldives",
        country: "Maldives"
    }
]
