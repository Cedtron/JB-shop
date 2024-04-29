const productsData = {
    "categories": [
      {
        "name": "Food",
        "image": "https://example.com/food.jpg",
        "products": [
          {
            "id": "1",
            "name": "Organic Apples",
            "image": "p1.jpg",
            "description": "Fresh, crisp organic apples for a healthy snack.",
            "price": 5000,
            "currency": "UGX",
            "featured": true
          },
          {
            "id": "2",
            "name": "Grass-fed Beef",
            "image": "beef.jpg",
            "description": "Premium grass-fed beef, perfect for grilling or roasting.",
            "price": 15000,
            "currency": "UGX",
            "featured": false
          },
          {
            "id": "3",
            "name": "Artisanal Rice",
            "image": "rice.jpg",
            "description": "Handcrafted artisanal rice for a gourmet dining experience.",
            "price": 10000,
            "currency": "UGX",
            "featured": false
          },
          {
            "id": "4",
            "name": "Fresh Bread Loaf",
            "image": "bread.jpg",
            "description": "Warm, freshly baked bread loaf straight from the oven.",
            "price": 7000,
            "currency": "UGX",
            "featured": false
          },
          {
            "id": "5",
            "name": "Organic Avocado",
            "image": "avo.jpg",
            "description": "Creamy organic avocados, ideal for salads or guacamole.",
            "price": 3000,
            "currency": "UGX",
            "featured": false
          }
        ]
      },
      {
        "name": "Textiles",
        "image": "https://example.com/textiles.jpg",
        "products": [
          {
            "id": "6",
            "name": "Cotton T-shirt",
            "image": "p10.png",
            "description": "Classic cotton t-shirt, comfortable and stylish.",
            "price": 25000,
            "currency": "UGX",
            "featured": true
          },
          {"id": "7",
            "name": "Silk Scarf",
            "image": "s1.jpg",
            "description": "Luxurious silk scarf, perfect for adding a touch of elegance to any outfit.",
            "price": 35000,
            "currency": "UGX",
            "featured": false
          },
          {
            "id": "8",
            "name": "Denim Jeans",
            "image": "jeans.jpg",
            "description": "Classic denim jeans, durable and versatile for everyday wear.",
            "price": 40000,
            "currency": "UGX",
            "featured": false
          },
          {
            "id": "9",
            "name": "Knit Sweater",
            "image": "sweater.jpg",
            "description": "Cozy knit sweater, perfect for staying warm in chilly weather.",
            "price": 45000,
            "currency": "UGX",
            "featured": false
          },
          {"id": "10",
            "name": "Leather Bag",
            "image": "bag.jpg",
            "description": "Stylish leather bag, ideal for carrying essentials with flair.",
            "price": 60000,
            "currency": "UGX",
            "featured": false
          }
        ]
      },
      {
        "name": "Hardware",
        "image": "https://example.com/hardware.jpg",
        "products": [
          {
            "id": "11",
            "name": "Power Drill",
            "image": "p3.jpg",
            "description": "High-performance power drill for precise drilling tasks.",
            "price": 75000,
            "currency": "UGX",
            "featured": true
          },
          {"id": "12",
            "name": "Tool Set",
            "image": "tools.jpg",
            "description": "Comprehensive tool set with all the essentials for DIY projects.",
            "price": 120000,
            "currency": "UGX",
            "featured": false
          },
          {"id": "13",
            "name": "Circular Saw",
            "image": "saw.jpg",
            "description": "Heavy-duty circular saw for cutting through various materials.",
            "price": 90000,
            "currency": "UGX",
            "featured": false
          },
          {"id": "14",
            "name": "Screwdriver Set",
            "image": "sw.jpg",
            "description": "Versatile screwdriver set for assembling furniture or repairing appliances.",
            "price": 30000,
            "currency": "UGX",
            "featured": false
          },
          {"id": "15",
            "name": "Hammer",
            "image": "hammer.jpg",
            "description": "Sturdy hammer for driving nails and general construction tasks.",
            "price": 20000,
            "currency": "UGX",
            "featured": false
          }
        ]
      },
      {
        "name": "Academia",
        "image": "https://example.com/academia.jpg",
        "products": [
          {"id": "16",
            "name": "Scientific Calculator",
            "image": "p2.jpg",
            "description": "Advanced scientific calculator for mathematical calculations.",
            "price": 40000,
            "currency": "UGX",
            "featured": true
          },
          {"id": "17",
            "name": "Textbooks Bundle",
            "image": "books.jpg",
            "description": "Bundle of essential textbooks for various academic subjects.",
            "price": 150000,
            "currency": "UGX",
            "featured": false
          },
          {"id": "18",
            "name": "Lab Equipment Set",
            "image": "lset.jpg",
            "description": "Complete set of laboratory equipment for conducting experiments.",
            "price": 250000,
            "currency": "UGX",
            "featured": false
          },
          {"id": "19",
            "name": "Notebook",
            "image": "book.jpg",
            "description": "High-quality notebook for taking notes during lectures or meetings.",
            "price": 10000,
            "currency": "UGX",
            "featured": false
          },
          {"id": "20",
            "name": "Drawing Tablet",
            "image": "dt.jpg",
            "description": "Digital drawing tablet for graphic design and digital art.",
            "price": 80000,
            "currency": "UGX",
            "featured": false
          },
          {"id": "21",
            "name": "MTC Set",
            "image": "sett.jpg",
            "description": "Complete set of Mathematical Tables for easy reference and learning.",
            "price": 50000,
            "currency": "UGX",
            "featured": false
          }
        ]
      },
      {
        "name": "Electronics",
        "image": "https://example.com/electronics.jpg",
        "products": [
          {"id": "22",
            "name": "SmartTv",
            "image": "smartTv.jpg",
            "description": "Feature-packed smartTV with a high-resolution display and powerSpeaker.",
            "price": 80000,
            "currency": "UGX",
            "featured": true
          },
          {"id": "23",
            "name": "Laptop",
            "image": "laptop.jpeg",
            "description": "Thin and lightweight laptop with fast processing speed and long battery life.",
            "price": 150000,
            "currency": "UGX",
            "featured": false
          },
          {"id": "24",
            "name": "Wireless Headphones",
            "image": "headphones.jpg",
            "description": "Bluetooth wireless headphones with noise-canceling technology for immersive audio experience.",
            "price": 60000,
            "currency": "UGX",
            "featured": false
          },
          {"id": "24",
            "name": "Smartwatch",
            "image": "watch.jpg",
            "description": "Sleek smartwatch with fitness tracking features and customizable watch faces.",
            "price": 70000,
            "currency": "UGX",
            "featured": false
          },
          {"id": "25",
            "name": "Digital Camera",
            "image": "camera.jpg",
            "description": "High-resolution digital camera with zoom lens and advanced shooting modes.",
            "price": 120000,
            "currency": "UGX",
            "featured": false
          }
        ]
      },
      {
        "name": "Phones",
        "image": "https://example.com/phones.jpg",
        "products": [
          {"id": "26",
            "name": "Samsung S24",
            "image": "s24.jpg",
            "description": "Cutting-edge flagship smartphone with the latest technology, high-resolution display, and advanced camera features.",
            "price": 1200000,
            "currency": "UGX",
            "featured": true
          },
          {"id": "27",
            "name": "Sony xperia 10",
            "image": "sony.jpg",
            "description": "A powerful mid-range smartphone with a balance of performance and affordability, suitable for everyday use.",
            "price": 600000,
            "currency": "UGX",
            "featured": false
          },
          {"id": "28",
            "name": "Tecno POP5",
            "image": "pop.jpg",
            "description": "An affordable budget smartphone with essential features for basic communication and tasks.",
            "price": 300000,
            "currency": "UGX",
            "featured": false
          },
          {"id": "29",
            "name": "Iphone 15",
            "image": "iphone.jpg",
            "description": "Compact and lightweight smartphone with a small form factor, ideal for one-handed use.",
            "price": 400000,
            "currency": "UGX",
            "featured": false
          },
          {"id": "30",
            "name": "Asus R",
            "image": "rog.jpg",
            "description": "A high-performance gaming smartphone optimized for immersive gaming experiences with fast processors and high-refresh-rate displays.",
            "price": 1500000,
            "currency": "UGX",
            "featured": false
          }
        ]
      }
    ]
  }