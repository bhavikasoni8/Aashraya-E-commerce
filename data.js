const products = [
    {
        "id": 1,
        "name": "Desk",
        "category": "Furniture",
        "price": 299.99,
        "img": "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 2,
        "name": "Chandelier",
        "category": "Lighting",
        "price": 129.99,
        "img": "https://images.unsplash.com/photo-1541845657-db7e16cdb80d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNoYW5kZWxpZXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
        "id": 3,
        "name": "Bathroom Set",
        "category": "Bathroom",
        "price": 79.99,
        "img": "https://images.unsplash.com/photo-1625940119840-585d3495dc94?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmF0aHJvb20lMjBzZXR8ZW58MHx8MHx8fDA%3D"
    },
    {
        "id": 4,
        "name": "Sofa",
        "category": "Furniture",
        "price": 599.99,
        "img": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 5,
        "name": "Table Lamp",
        "category": "Lighting",
        "price": 39.99,
        "img": "https://plus.unsplash.com/premium_photo-1681412205156-bb506a4ea970?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 6,
        "name": "Shower Curtain",
        "category": "Bathroom",
        "price": 19.99,
        "img": "https://images.unsplash.com/photo-1599603780100-9a9e42b0489f?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 7,
        "name": "Chair",
        "category": "Furniture",
        "price": 149.99,
        "img": "https://images.unsplash.com/photo-1586158291800-2665f07bba79?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 8,
        "name": "Chandelier",
        "category": "Lighting",
        "price": 89.99,
        "img": "https://images.unsplash.com/photo-1509437142917-63dfe86dcbec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhbmRlbGllcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        "id": 9,
        "name": "Toilet Paper Holder",
        "category": "Bathroom",
        "price": 12.99,
        "img": "https://www.jiomart.com/images/product/original/rvc5xikdla/ymm-decor-unique-toilet-paper-holder-stand-bathroom-tissue-holders-free-standing-product-images-orvc5xikdla-p601817410-0-202305261140.jpg?im=Resize=(1000,1000)"
    },
    {
        "id": 10,
        "name": "Bookshelf",
        "category": "Furniture",
        "price": 129.99,
        "img": "https://plus.unsplash.com/premium_photo-1677517547407-6a0a6cdb2fb0?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 11,
        "name": "Desk Lamp",
        "category": "Lighting",
        "price": 29.99,
        "img": "https://images.unsplash.com/photo-1621447980929-6638614633c8?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 12,
        "name": "Wall Mirror",
        "category": "Bathroom",
        "price": 49.99,
        "img": "https://images.unsplash.com/photo-1606627200742-460b55dd8351?q=80&w=2785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 13,
        "name": "Bedside Table",
        "category": "Furniture",
        "price": 299.99,
        "img": "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 14,
        "name": "Dining Table",
        "category": "Furniture",
        "price": 199.99,
        "img": "https://images.unsplash.com/photo-1689043528099-2ba014dd7c64?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 15,
        "name": "Pendant Light",
        "category": "Lighting",
        "price": 79.99,
        "img": "https://images.unsplash.com/photo-1512418408532-5445158b1445?q=80&w=2552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 16,
        "name": "Soap Dispenser",
        "category": "Bathroom",
        "price": 9.99,
        "img": "https://images.unsplash.com/photo-1645567455251-334ed4702f9b?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 17,
        "name": "File Cabinet",
        "category": "Furniture",
        "price": 89.99,
        "img": "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 18,
        "name": "Coffee Table",
        "category": "Furniture",
        "price": 149.99,
        "img": "https://images.unsplash.com/photo-1619911013257-8f1fbc919fc9?q=80&w=2309&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 19,
        "name": "Floor Lamp",
        "category": "Lighting",
        "price": 59.99,
        "img": "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 20,
        "name": "Towel Rack",
        "category": "Bathroom",
        "price": 24.99,
        "img": "https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]
