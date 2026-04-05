import bag1 from "./assets/bag1.jpg"
const bags = [
  {
    id: 0,
    name: "Classic Leather Tote",
    price: 120,
    description: "A spacious and elegant tote made from premium full-grain leather.",
    src: bag1
  },
  {
    id: 1,
    name: "Urban Explorer Backpack",
    price: 85,
    description: "Weather-resistant backpack featuring multiple compartments for tech gear.",
    src: bag1
  },
  {
    id: 2,
    name: "Midnight Suede Clutch",
    price: 45,
    description: "A sleek, minimalist clutch perfect for evening events and formal wear.",
    src: bag1
  },
  {
    id: 3,
    name: "Vintage Canvas Messenger",
    price: 95,
    description: "Retro-inspired messenger bag with brass buckles and adjustable strap.",
    src: bag1
  },
  {
    id: 4,
    name: "Nomad Travel Duffel",
    price: 150,
    description: "Extra-large capacity bag designed for weekend getaways and long hauls.",
    src: bag1
  },
  {
    id: 5,
    name: "Executive Briefcase",
    price: 210,
    description: "Professional hardshell briefcase with a secure combination lock.",
    src: bag1
  },
  {
    id: 6,
    name: "Boho Fringe Satchel",
    price: 65,
    description: "Artisan-crafted satchel with decorative fringe and braided handles.",
    src: bag1
  },
  {
    id: 7,
    name: "Mini Crossbody Pouch",
    price: 35,
    description: "Compact and lightweight pouch for carrying just the essentials.",
    src: bag1
  },
  {
    id: 8,
    name: "Aero Gym Bag",
    price: 55,
    description: "Breathable fabric bag with a dedicated ventilated shoe compartment.",
    src: bag1
  },
  {
    id: 9,
    name: "Chic Quilted Handbag",
    price: 130,
    description: "Timeless quilted pattern with a gold-tone chain shoulder strap.",
    src: bag1
  },
//   {
//     id: 10,
//     name: "Rugged Hiking Rucksack",
//     price: 110,
//     description: "Built for the outdoors with ergonomic support and hydration bladder pocket.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 11,
//     name: "Silk Evening Wristlet",
//     price: 75,
//     description: "Soft silk finish with intricate embroidery for upscale occasions.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 12,
//     name: "Tech Commuter Pack",
//     price: 140,
//     description: "Integrated USB charging port and anti-theft hidden zippers.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 13,
//     name: "Woven Straw Beach Bag",
//     price: 40,
//     description: "Eco-friendly natural straw bag with reinforced cotton lining.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 14,
//     name: "Velvet Party Bucket",
//     price: 80,
//     description: "Luxurious velvet bucket bag with a trendy drawstring closure.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 15,
//     name: "Slim Laptop Sleeve",
//     price: 30,
//     description: "Padded neoprene sleeve that fits up to a 16-inch MacBook.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 16,
//     name: "Sovereign Gold Satchel",
//     price: 250,
//     description: "Limited edition satchel with metallic gold hardware accents.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 17,
//     name: "Utility Belt Bag",
//     price: 50,
//     description: "Hands-free convenience with three secure zip-lock pockets.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 18,
//     name: "Oxford Work Bag",
//     price: 160,
//     description: "Structured design that stays upright, ideal for office documents.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 19,
//     name: "Heritage Camera Bag",
//     price: 115,
//     description: "Shock-proof interior dividers to protect lenses and camera bodies.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 20,
//     name: "Prism Geometric Tote",
//     price: 70,
//     description: "Unique foldable panels that change shape based on contents.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 21,
//     name: "Scout Canvas Sling",
//     price: 48,
//     description: "Lightweight single-strap bag for quick urban trips.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 22,
//     name: "Marble Print Handbag",
//     price: 88,
//     description: "Modern aesthetic featuring a durable vegan leather marble finish.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 23,
//     name: "Double-Handle Shopper",
//     price: 52,
//     description: "Extra-strength handles designed for heavy grocery runs.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 24,
//     name: "Glacier Ice Cooler Bag",
//     price: 60,
//     description: "Insulated interior that keeps beverages cold for up to 12 hours.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 25,
//     name: "Avenue Suede Hobo",
//     price: 105,
//     description: "Slouchy, relaxed silhouette made from buttery soft suede.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 26,
//     name: "Peak Performance Waistpack",
//     price: 38,
//     description: "Reflective strips for safety during nighttime running.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 27,
//     name: "Designer Laptop Case",
//     price: 195,
//     description: "Italian leather case with a plush velvet interior lining.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 28,
//     name: "Solar Charging Pack",
//     price: 180,
//     description: "Equipped with a solar panel to charge your phone on the go.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 29,
//     name: "Denim Daily Bag",
//     price: 42,
//     description: "Upcycled denim bag with reinforced stitching and internal pockets.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 30,
//     name: "Carbon Fiber Hardcase",
//     price: 290,
//     description: "Ultra-lightweight and nearly indestructible carbon fiber shell.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 31,
//     name: "Floral Embroidered Bag",
//     price: 78,
//     description: "Intricate hand-stitched floral patterns on a dark navy base.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 32,
//     name: "Minimalist Foldover",
//     price: 58,
//     description: "Magnetic closure with a clean, hardware-free exterior.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 33,
//     name: "Biker Leather Studded",
//     price: 145,
//     description: "Edgy design with silver studs and heavy-duty zippers.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 34,
//     name: "Transparent Neon Tote",
//     price: 25,
//     description: "Trendy waterproof vinyl bag, perfect for stadium events.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 35,
//     name: "Legacy Doctor Bag",
//     price: 220,
//     description: "Traditional frame opening with a wide, easy-access interior.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 36,
//     name: "Zen Yoga Mat Bag",
//     price: 40,
//     description: "Cylindrical bag with extra space for a towel and water bottle.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 37,
//     name: "Sparkle Sequin Pouch",
//     price: 32,
//     description: "Reversible sequins that change color with a swipe of the hand.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 38,
//     name: "Tweed Office Satchel",
//     price: 110,
//     description: "Classic British tweed paired with brown leather trim.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   },
//   {
//     id: 39,
//     name: "Guardian RFID Wallet",
//     price: 28,
//     description: "Protects your cards from unauthorized scanning and theft.",
//     src: "https://placehold.co/600x600/f5f5f5/333333?text=Premium+Bag"
//   }
];

export default bags;