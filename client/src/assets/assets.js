// ✅ Centralized image imports for the project
// Just replace the file names once your real images are ready!

import logo from './logo.png';
import profile from './profile.png';
import search_icon from './search_icon.png';
import cart_icon from './cart_icon.png';
import menu_icon from './menu_icon.svg';
import white_arrow_icon from './white_arrow_icon.png';
import main_banner from './main_banner.jpg';
import box_icon from './box_icon.jpeg';
import pete_image from './pete_image.png';
import pvc_image from './pvc_image.png';
import pete_image_1 from './pete_image_1.jpg';
import pete_image_2 from './pete_image_2.jpg';
import pete_image_3 from './pete_image_3.jpeg';
import pete_image_4 from './pete_image_4.jpeg';
import pete_image_5 from './pete_image_5.jpeg';
import pete_image_6 from './pete_image_6.jpeg';
import pvc_image_1 from './pvc_image_1.jpg';
import pvc_image_2 from './pvc_image_2.jpg';
import star_icon from './star_icon.jpeg';
import star_dull_icon from './star_dull_icon.jpeg';
import bottom_banner_image from './a.webp';
import delivery_truck_icon from './delivery_truck_icon.png';
import quality_icon from './quality_icon.png';
import coin_icon from './coin_icon.jpeg';
import refresh_icon from './refresh_icon.png';
import arrow_right_icon_colored from './arrow_right_icon_colored.png';
import remove_icon from './remove_icon.png';
import add_address_image from './add_address_image.jpeg';
import add_icon from './add_icon.png';
import product_list_icon from './product_list_icon.png';
import order_icon from './order_icon.jpeg';
import upload_area from './upload_area.png';
// 🧩 You can add more dummy icons here later as needed
// Example:
// import recycle_icon from './recycle.png';

const assets = {
  logo,
  profile,
  search_icon,
  cart_icon,
  menu_icon,
  white_arrow_icon,
  main_banner,
  box_icon,
  pete_image,
  pvc_image,
  pete_image_1,
  pete_image_2, 
  pete_image_3,
  pete_image_4,
  pete_image_5,
  pete_image_6,
  pvc_image_1,
  pvc_image_2,
  star_icon,
  star_dull_icon,
  bottom_banner_image,
  delivery_truck_icon,
  quality_icon,
  coin_icon,
  refresh_icon,
  arrow_right_icon_colored,
  remove_icon,
  add_address_image,
  add_icon,
  product_list_icon,
  order_icon,
  upload_area,
  // Add more assets here as needed
  // Example:
  // recycle_icon,
};

export const categories = [
  {
    name: 'Pete',
    path: "Plastic_Pete",
    image: assets.pete_image,
    bgColor: '#E0F7FA',
  },
  {
    name: 'PVC',
    path: "Plastic_PVC",
    image: assets.pvc_image,
    bgColor: '#FFF3E0',
  },
];

export const dummyProducts = [
  {
    _id: "gaka35h",
    name: "Recycled PET Bottle",
    category: "Plastic_Pete",
    price: 50000,
    offerPrice: 45000,
    image: [pete_image_1, pete_image_2, pete_image_3, pete_image_4, pete_image_5, pete_image_6],
    description: ["High-quality recycled PET bottles suitable for packaging beverages and other liquids.",
      "Durable and eco-friendly, made from 100% recycled PET material."],
      createdAt: "2024-01-15T10:00:00Z",
      updatedAt: "2024-01-20T12:00:00Z",
      inStock: true,
      rating: 4.5,
  },
  {
    _id: "gaka35i",
    name: "Recycled PVC Sheet",
    category: "Plastic_PVC",
    price: 60000,
    offerPrice: 55000,
    image: [pvc_image_1, pvc_image_2],
    description: ["High-quality recycled PVC sheets suitable for various applications.",
      "Durable and eco-friendly, made from 100% recycled PVC material."],
      createdAt: "2024-01-15T10:00:00Z",
      updatedAt: "2024-01-20T12:00:00Z",
      inStock: true,
      rating: 4.0,
  },
  {
    _id: "gaka35j",
    name: "Recycled PET Container",
    category: "Plastic_Pete",
    price: 70000,
    offerPrice: 65000,
    image: [pete_image_3, pete_image_2],
    description: ["High-quality recycled PET containers suitable for various applications.",
      "Durable and eco-friendly, made from 100% recycled PET material."],
      createdAt: "2024-01-15T10:00:00Z",
      updatedAt: "2024-01-20T12:00:00Z",
      inStock: true,
      rating: 4.8,
  },
  {
    _id: "gaka35k",
    name: "Recycled PVC Pipe",
    category: "Plastic_PVC",  
    price: 80000,
    offerPrice: 75000,
    image: [pvc_image_1, pvc_image_2],
    description: ["High-quality recycled PVC pipes suitable for various applications.",
      "Durable and eco-friendly, made from 100% recycled PVC material."],
      createdAt: "2024-01-15T10:00:00Z",
      updatedAt: "2024-01-20T12:00:00Z",
      inStock: true,
      rating: 4.6,
  },
  {
    _id: "gaka35l",
    name: "Recycled PET Film",
    category: "Plastic_Pete", 
    price: 90000,
    offerPrice: 85000,
    image: [pete_image_1, pete_image_2],
    description: ["High-quality recycled PET films suitable for various applications.",
      "Durable and eco-friendly, made from 100% recycled PET material."],
      createdAt: "2024-01-15T10:00:00Z",
      updatedAt: "2024-01-20T12:00:00Z",
      inStock: true,
      rating: 4.8,
  }
];

export const dummyAddress = [
  {
    id: "addr1",
    name: "Amrutha Kattimani",
    phone: "+91 9876543210",
    street: "123 Green Street, Eco Colony",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560001",
    landmark: "Near Eco Mall",
    type: "Home", // Home / Work / Other
    isDefault: true,
  },
  {
    id: "addr2",
    name: "Amrutha Kattimani",
    phone: "+91 9876543210",
    street: "45 Plastic-Free Avenue",
    city: "Hubballi",
    state: "Karnataka",
    pincode: "580020",
    landmark: "Opposite Replast Center",
    type: "Work",
    isDefault: false,
  }
];


export const features = [
  {
    icon: delivery_truck_icon,
    title: "Fastest_Delivery",
    description: "Plastics delivered in under 1 day",
  },
  {
    icon: quality_icon,
    title: "Best_Quality",
    description: "Top-grade recycled plastics",
  },
  {
    icon: coin_icon,
    title: "Affordable_Prices",
    description: "Competitive pricing on all products",
  }
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url:"#" },
      { text: 'Best Sellers', url:"#" },
      { text: "Offers & Deals", url:"#" },
      { text: "Constant Us", url:"#" },
      { text: "FAQs", url:"#" },
    ],
  },
  {
    title: "Need help?",
    links: [
      { text: "Delivery Information", url: "#" },
      { text: "Return & Refund Policy", url: "#" },
      { text: "Payment Methods", url: "#" },
      { text: "Track your Order", url: "#" },
      { text: "Contact Us", url: "#" }
    ]
  },
  {
    title: "Follow Us",
    links: [
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "YouTube", url: "#" }
    ]
  }
];

export const dummyOrders = [
  {
    _id: "344i5h5673gbffyt3",
    userId: "34938htuhg405849578ee",
    items: [
      {
        product: dummyProducts[3],
        quantity: 2,
        _id: "34787hrr39843y38re",
      },
    ],
    amount: 1200,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2024-02-10T14:30:00Z",
    updatedAt: "2024-02-11T10:00:00Z",
  },
  {
    _id: "98fhg30485htg34938ee",
    userId: "34938htuhg405849578ee",
    items: [
      {
        product: dummyProducts[1],
        quantity: 1,
        _id: "98fhg30485htg34938ee"
      }
    ],
    amount: 800,
    address: dummyAddress[1],
    status: "Order Shipped",
    paymentType: "Cash on Delivery",
    isPaid: false,
    createdAt: "2024-02-12T09:00:00Z",
    updatedAt: "2024-02-13T11:00:00Z",
  }
]
export default assets;
