const travelGears = [
    {
        name: "Durable Hiking Backpack",
        description: "A spacious and durable hiking backpack designed for comfort during outdoor adventures.",
        image: [
            "https://www.rei.com/media/6f8bd33b-e10f-4844-8c9a-f4cd98505b1e?size=2000",
            "https://www.rei.com/media/c4a40885-d97f-4d06-8ce8-75d145d24e66?size=2000",
            "https://www.rei.com/media/1c57d75b-df09-4168-936c-adce4751003c?size=2000",
            "https://www.rei.com/media/aef16d5f-e5b9-4ef6-8cc5-ab7d6aa6b161?size=2000",
            "https://www.rei.com/media/2bb44009-960d-4f84-acbb-1fff3c873b0f?size=2000"
        ],
        price: 6999
    },
    {
        name: "Waterproof Travel Jacket",
        description: "Stay dry and stylish with this lightweight, waterproof jacket perfect for unpredictable weather.",
        image: [
            "https://www.rei.com/media/855ebc2c-1550-4f57-b206-9b626458b39b?size=2000",
            "https://www.rei.com/media/24f34332-d24b-46ea-a014-a3d47baab829?size=2000",
            "https://www.rei.com/media/dda2f354-616f-4967-828c-eb0b7f30a18e?size=2000",
            "https://www.rei.com/media/977beeee-955a-49c3-9bca-bb2cb597cd1d?size=2000"
        ],
        price: 3499
    },
    {
        name: "Portable Camping Stove",
        description: "A compact and efficient camping stove for all your outdoor cooking needs.",
        image: [
            "https://www.rei.com/media/5ab1134f-d86e-47ef-98d1-fcc7c631574c?size=2000",
            "https://www.rei.com/media/6c7dfa46-2d7f-4d92-99b0-cf6e34c08998?size=2000",
            "https://www.rei.com/media/d71f73da-1cf7-473e-8826-67a2e6e48486?size=2000",
            "https://www.rei.com/media/39082566-4fe8-4de3-b8b5-130ec012f394?size=2000"
        ],
        price: 2499
    },
    {
        name: "Multi-Tool Survival Kit",
        description: "This all-in-one survival kit includes a multi-tool, flashlight, and first aid essentials.",
        image: [
            "https://www.rei.com/media/f3f43555-94e2-4a7b-b457-2f4984c0375f?size=2000",
           "https://www.rei.com/media/6b031c1d-a081-457e-8ffc-a9e01a12eeaf?size=2000"
        ],
        price: 2999
    },
    {
        name: "Travel Packing Cubes",
        description: "Organize your luggage efficiently with these versatile packing cubes.",
        image: [
            "https://www.rei.com/media/fe954f98-2c69-4286-9182-17ba0362c976?size=2000",
            "https://www.rei.com/media/6031a3cd-496e-4ca0-a7e2-b122c39a2c74?size=2000",
            "https://www.rei.com/media/28f5c3c5-9c72-4c08-a36e-949f96f9e324?size=2000",
            "https://www.rei.com/media/96fb8bc0-5522-4980-a5bb-97fc58d95f48?size=2000"
            ,"https://www.rei.com/media/45157ecf-ea1d-4387-bb90-94cdbd4a3a42?size=2000"
        ],
        price: 1999
    },
    {
        name: "Travel Pillow",
        description: "Comfortable travel pillow for long journeys.",
        image: [
            "https://www.rei.com/media/da4be21e-e8ab-4545-91ee-63be52b247ce?size=2000",
            "https://www.rei.com/media/4ff623e7-7430-42f3-a2e8-a0d1d2d03c74?size=2000",
            "https://www.rei.com/media/10c38ec7-a724-4cde-a82e-b017a08d079c?size=2000",
            "https://www.rei.com/media/ad5f8648-591f-45d0-a14c-40251adc7d39?size=2000",
            "https://www.rei.com/media/5db2dab1-65a9-4c0e-a21a-7f97a7fa8202?size=2000"
        ],
        price: 2500
    },
    {
        name: "Portable power station",
        description: "High-capacity portable charger to keep your devices powered.",
        image: [
            "https://www.rei.com/media/faba5e00-7730-4753-8c52-2e358c343eae?size=2000",
            "https://www.rei.com/media/f3eddecc-949f-4438-8af6-16e0418ca6ef?size=2000",
            "https://www.rei.com/media/040831a7-9b90-4942-9222-ced15fba442f?size=2000",
            "https://www.rei.com/media/307f9a9c-0ed3-4433-8574-fab9f4b614eb?size=2000",
            "https://www.rei.com/media/a0d232a9-4d06-45b8-abb5-f3f29dd99f7b?size=2000",
            "https://www.rei.com/media/21d84593-cde1-4fff-bcef-83a711c8d578?size=2000"
        ],
        price: 6999
    },
 
    {
        name: "Travel Water Bottle",
        description: "Insulated water bottle that keeps drinks cold for hours.",
        image: [
            "https://www.rei.com/media/77de2e5a-a19a-426f-8916-6cdb9cd1dd79?size=2000",
            "https://www.rei.com/media/84827950-4a60-4537-a477-e5c174e745ff?size=2000",
            "https://www.rei.com/media/75d6b6e8-8e78-4d9c-804e-d0f4d50e50ce?size=2000"
        ],
        price: 899
    },
    {
        "name": "Renegade Evo GTX Mid Hiking Boots - Men's",
        "description": "Built for long hikes and tough terrain, these waterproof hiking boots offer support and traction in all conditions.",
        "image": [
            "https://www.rei.com/media/7033f0f1-706e-4010-9fb4-52c6488d1f30?size=2000",
            "https://www.rei.com/media/52984ff8-1dd2-4f79-b480-58d4fc14df54?size=2000",
            "https://www.rei.com/media/e27694c1-3177-4544-9743-54c327eb7e62?size=2000",
            "https://www.rei.com/media/e2ed0b8f-adaa-4ec7-b4d2-b6082a1ebeb9?size=2000",
            "https://www.rei.com/media/64e3758c-8caa-47af-8fe7-78139ddc0120?size=2000",
        ],
        "price": 3999
    },
    
    {
        "name": "Big Agnes Copper Spur HV UL2 Tent",
        "description": "This ultralight, 2-person tent offers excellent weather protection, ample interior space, and easy setup for your next camping adventure.",
        "image": [
            "https://www.rei.com/media/5cc96c95-6941-45f8-bce4-a90c4a42ad0f?size=2000",
            "https://www.rei.com/media/14e4d1be-3b6f-4dc0-a601-a1899a2d8bea?size=2000",
            "https://www.rei.com/media/14a96c3a-e0c6-4512-9c63-79b58487c758?size=2000",
            "https://www.rei.com/media/a596cbaf-154b-4911-a7ad-a323a357153d?size=2000",
            "https://www.rei.com/media/37004a6e-544a-402b-a776-bc1c7d4aa537?size=2000"
        ],
        "price": 5499
    },
    {
        "name": "Sawyer MINI Water Filter",
        "description": "A compact, lightweight water filter perfect for hiking and camping. Filters up to 100,000 gallons of water, providing safe drinking water wherever you go.",
        "image": [
            "https://www.rei.com/media/742038c0-0145-4410-930d-f4b4f926a8f8?size=2000",
            "https://www.rei.com/media/e2c5020e-d679-4db8-9f79-2f10a7b60326?size=2000",
            "https://www.rei.com/media/b3fa0d6a-e7d9-4c61-81a2-fea78690188b?size=2000"
        ],
        "price": 3499
    },
    {
        "name": "Therm-a-Rest NeoAir XTherm Sleeping Pad",
        "description": "Ultra-light and compact, this sleeping pad offers exceptional warmth and comfort for cold weather camping and hiking.",
        "image": [
            "https://www.rei.com/media/62b2c20a-21e1-414e-9703-e47a977b9b28?size=2000",
            "https://www.rei.com/media/96709c29-8893-442a-9d8c-761810d1dd13?size=2000",
            "https://www.rei.com/media/e638329d-fd6e-4a36-8ee7-c89a01813b62?size=2000",
            "https://www.rei.com/media/97c532f8-453d-46a1-9ea3-1dea71f8ca6d?size=2000",
            "https://www.rei.com/media/88977ffa-1e64-4225-b73a-0ba176b9899f.jpg?size=1075"
        ],
        "price": 2799
    },
    {
        "name": "Sea to Summit Ultra-Sil Daypack Rain Cover",
        "description": "Keep your backpack and gear protected from the rain with this ultra-lightweight, durable rain cover designed for all types of backpacks.",
        "image": [
            "https://www.rei.com/media/f92c6c94-60ae-47f8-a62e-d1a7891bbbd8?size=2000",
            "https://www.rei.com/media/1c08a0ae-c03c-4419-b33a-bfa7da92b703?size=2000",
            "https://www.rei.com/media/15d394c9-60e6-486a-8863-f66fbcad7ebe.jpg?size=1075",
            "https://www.rei.com/media/814b090f-21a5-42b6-81bc-703b4cc0c6b0.jpg?size=1075",
            "https://www.rei.com/media/a7e25de1-a6a7-401b-919a-a8a1d125e730.jpg?size=1075"
        ],
        "price": 999
    },
    {
        "name": "Therm-a-Rest Questar 20 Sleeping Bag",
        "description": "Lightweight, compressible, and designed for cold weather, this sleeping bag keeps you warm and cozy during your adventures in nature.",
        "image": [
            "https://www.rei.com/media/e77f9456-af6c-42af-ae31-4c2fb3f789bd?size=2000",
            "https://www.rei.com/media/c23b50de-1d28-43e7-9f1e-acfa5e912044?size=2000",
            "https://www.rei.com/media/4384e55b-fd94-4a7b-b140-14193f67e25d?size=2000",
            "https://www.rei.com/media/738bad5f-0255-4576-ace0-f9bdd6907a5d?size=2000",
            "https://www.rei.com/media/d5f349b5-3356-481c-a653-435319a7c1d6?size=2000"
        ],
        "price": 2499
    },
    {
        "name": "Anker 160W PowerPort Solar Charger",
        "description": "Charge your devices anywhere with this powerful, portable solar charger. Perfect for backpacking, camping, or long outdoor trips.",
        "image": [
            "https://www.rei.com/media/5181a0b0-f1a4-4698-9ae4-fc3d3352171c?size=2000",
            "https://www.rei.com/media/6ea64ad3-258c-4753-846a-61d8c684ae3b?size=2000",
            "https://www.rei.com/media/bb8898cf-236b-40c0-8618-98b754ca0102?size=2000",
            "https://www.rei.com/media/253a7091-c4c3-4b87-8c08-4d72a88bd652?size=2000",
        
        ],
        "price": 2599
    }
    
    
        
    
];

module.exports = { data: travelGears };
