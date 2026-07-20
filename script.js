const resorts = {

    Maldives: [
        {
            name: "Ocean Pearl Maldives Resort",
            rating: "4.9 ⭐",
            price: "₹45,000/night"
        },
        {
            name: "Azure Paradise Island Resort",
            rating: "4.8 ⭐",
            price: "₹55,000/night"
        },
        {
            name: "Coral Crown Luxury Villas",
            rating: "4.7 ⭐",
            price: "₹38,000/night"
        },
        {
            name: "Sunset Lagoon Retreat",
            rating: "4.9 ⭐",
            price: "₹60,000/night"
        },
        {
            name: "The Maldives Royal Escape",
            rating: "5.0 ⭐",
            price: "₹75,000/night"
        }
    ],


    Bali: [
        {
            name: "Bali Emerald Bay Resort",
            rating: "4.8 ⭐",
            price: "₹25,000/night"
        },
        {
            name: "Ubud Forest Haven Resort",
            rating: "4.7 ⭐",
            price: "₹18,000/night"
        },
        {
            name: "Ocean Breeze Bali Villas",
            rating: "4.9 ⭐",
            price: "₹35,000/night"
        },
        {
            name: "Royal Lotus Bali Retreat",
            rating: "4.8 ⭐",
            price: "₹40,000/night"
        },
        {
            name: "The Tropical Pearl Resort",
            rating: "4.6 ⭐",
            price: "₹22,000/night"
        }
    ],


    Dubai: [
        {
            name: "Dubai Golden Sands Palace",
            rating: "5.0 ⭐",
            price: "₹80,000/night"
        },
        {
            name: "Palm Horizon Luxury Resort",
            rating: "4.9 ⭐",
            price: "₹70,000/night"
        },
        {
            name: "Desert Crown Arabian Retreat",
            rating: "4.7 ⭐",
            price: "₹45,000/night"
        },
        {
            name: "Skyline Dubai Grand Resort",
            rating: "4.9 ⭐",
            price: "₹65,000/night"
        },
        {
            name: "Royal Mirage Oasis Dubai",
            rating: "5.0 ⭐",
            price: "₹95,000/night"
        }
    ],


    Japan: [
        {
            name: "Tokyo Sakura Grand Resort",
            rating: "4.8 ⭐",
            price: "₹35,000/night"
        },
        {
            name: "Kyoto Imperial Garden Stay",
            rating: "4.9 ⭐",
            price: "₹50,000/night"
        },
        {
            name: "Mount Fuji Serenity Resort",
            rating: "4.7 ⭐",
            price: "₹30,000/night"
        },
        {
            name: "Zen Harmony Japan Retreat",
            rating: "4.8 ⭐",
            price: "₹42,000/night"
        },
        {
            name: "Cherry Blossom Luxury Villas",
            rating: "4.9 ⭐",
            price: "₹55,000/night"
        }
    ],


    India: [
        {
            name: "Royal Kerala Backwater Resort",
            rating: "4.9 ⭐",
            price: "₹20,000/night"
        },
        {
            name: "Goa Ocean Breeze Retreat",
            rating: "4.8 ⭐",
            price: "₹18,000/night"
        },
        {
            name: "Rajasthan Palace Heritage Resort",
            rating: "5.0 ⭐",
            price: "₹40,000/night"
        },
        {
            name: "Kashmir Valley Paradise Resort",
            rating: "4.8 ⭐",
            price: "₹25,000/night"
        },
        {
            name: "Coorg Misty Mountain Resort",
            rating: "4.7 ⭐",
            price: "₹15,000/night"
        }
    ]

};



const searchBtn = document.getElementById("searchBtn");

const destination = document.getElementById("destination");

const resortList = document.getElementById("resortList");



searchBtn.addEventListener("click", function(){

    let place = destination.value;


    resortList.innerHTML = "";


    if(resorts[place]){


        resorts[place].forEach(function(resort){


            let card = document.createElement("div");

            card.className = "destination-card";


            card.innerHTML = `

                <h3>${resort.name}</h3>

                <p>Rating: ${resort.rating}</p>

                <p>Price: ${resort.price}</p>

                <button>
                    Book Now
                </button>

            `;


            resortList.appendChild(card);


        });


    }

    else{

        resortList.innerHTML = 
        "<h3>Please select a destination first 🌍</h3>";

    }


});
