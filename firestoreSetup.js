import { db } from './firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

// Function to add a new product
const addProduct = async (product) => {
    try {
        const docRef = await addDoc(collection(db, "products"), product);
        console.log("Product added with ID:", docRef.id);
    } catch (error) {
        console.error("Error adding product:", error);
    }
};

// Function to add a new category
const addCategory = async (category) => {
    try {
        const docRef = await addDoc(collection(db, "categories"), category);
        console.log("Category added with ID:", docRef.id);
    } catch (error) {
        console.error("Error adding category:", error);
    }
};

// Function to add a new user
const addUser = async (user) => {
    try {
        const docRef = await addDoc(collection(db, "users"), user);
        console.log("User added with ID:", docRef.id);
    } catch (error) {
        console.error("Error adding user:", error);
    }
};

// Function to add a new order
const addOrder = async (order) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), order);
        console.log("Order added with ID:", docRef.id);
    } catch (error) {
        console.error("Error adding order:", error);
    }
};

export { addProduct, addCategory, addUser, addOrder };
