import dish3 from "../../Images/dish4.jpg"
import dish1 from "../../Images/dish2.jpg"
import dish2 from "../../Images/dish3.jpg"
import dish4 from "../../Images/dish1.jpg"
import pizza1 from '../../Images/pizza1.jpg'
import pizza2 from '../../Images/pizza2.jpg'
import pizza3 from '../../Images/pizza3.jpg'
import pizza4 from '../../Images/pizza4.jpg'
import pizza5 from '../../Images/pizza5.jpg'

import { ADD_PRODUCT, ADD_PRODUCT_SAVE_DETAIL } from '../constant'
const INITIAL_STATE = {
    foodDetail: [
        {
            id: 1,
            active: true,
            title: "Bundles",
            items: [
                {
                    id: 1,
                    title: "Family Bundles",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum  dummy text.",
                    price: 70,
                    image: dish1,
                },
                {
                    id: 2,
                    title: "Italian food",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum  dummy text.",
                    price: 80,
                    image: dish2
                },
                {
                    id: 3,
                    title: "Mexican food",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum dummy text.",
                    price: 90,
                    image: dish3
                },
                {
                    id: 4,
                    title: "South Indian",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum dummy text.",
                    price: 100,
                    image: dish4
                }
            ]
        },
        {
            id: 2,
            title: "Starters",
            active: false,
            items: [
                {
                    id: 1,
                    title: "Tomato Soup",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum  dummy text.",
                    price: 70,
                    image: dish1,
                },
                {
                    id: 2,
                    title: "Mozzarella sticks",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum  dummy text.",
                    price: 80,
                    image: dish2
                },
                {
                    id: 3,
                    title: "Manchurian",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum dummy text.",
                    price: 90,
                    image: dish3
                },
                {
                    id: 4,
                    title: "Vegetable Salad",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum dummy text.",
                    price: 100,
                    image: dish4
                }
            ]
        },
        {
            id: 3,
            title: "Main Dishes",
            active: false,
            items: [
                {
                    id: 1,
                    title: "Roast Full Dish",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum  dummy text.",
                    price: 70,
                    image: dish1,
                },
                {
                    id: 2,
                    title: "Bread & doughs",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum  dummy text.",
                    price: 80,
                    image: dish2
                },
                {
                    id: 3,
                    title: "Vegetable sides",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum dummy text.",
                    price: 90,
                    image: dish3
                },
                {
                    id: 4,
                    title: "South Indian",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum dummy text.",
                    price: 100,
                    image: dish4
                }
            ]
        },
        {
            id: 4,
            title: "Sides",
            active: false,
            items: [
                {
                    id: 1,
                    title: "Family Bundles",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum  dummy text.",
                    price: 70,
                    image: dish1,
                },
                {
                    id: 2,
                    title: "Italian food",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum  dummy text.",
                    price: 80,
                    image: dish2
                },
                {
                    id: 3,
                    title: "Mexican food",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum dummy text.",
                    price: 90,
                    image: dish3
                },
                {
                    id: 4,
                    title: "South Indian",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum dummy text.",
                    price: 100,
                    image: dish4
                }
            ]
        },
        {
            id: 5,
            title: "Desert",
            active: false,
            items: [
                {
                    id: 1,
                    title: "Ice Cream",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum  dummy text.",
                    price: 70,
                    image: dish1,
                },
                {
                    id: 2,
                    title: "Italian Desert",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum  dummy text.",
                    price: 80,
                    image: dish2
                },
                {
                    id: 3,
                    title: "Mexican Desert",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum dummy text.",
                    price: 90,
                    image: dish3
                },
                {
                    id: 4,
                    title: "South Desert",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum dummy text.",
                    price: 100,
                    image: dish4
                }
            ]
        }
    ],
    cartDetail: [],
    pizzaList: [
        {
            id: 1,
            title: "Vegetable Pizza",
            image: pizza3,
            description:"Extra cheese,double salami,mushrooms....",
            price: 80
        },
        {
            id: 2,
            title: "Cheese Pizza",
            image: pizza2,
            description:"Extra cheese,double salami,mushrooms....",
            price: 80
        },
        {
            id: 3,
            title: "Margherita  Pizza",
            image: pizza1,
            description:"Extra cheese,double salami,mushrooms....",
            price: 80
        },
        {
            id: 4,
            title: "Delight  Pizza",
            image: pizza4,
            description:"Extra cheese,double salami,mushrooms....",
            price: 80
        },
        {
            id: 5,
            title: "Classic  Pizza",
            image: pizza5,
            description:"Extra cheese,double salami,mushrooms....",
            price: 80
        }
    ],
    extraItemList:[
        {
            id:1,
            title:"French Fries",
            price:20,
            checked:false
        },
        {
            id:2,
            title:"Green Salad",
            price:30,
            checked:false
        },
        {
            id:3,
            title:"Tomato Soup",
            price:40,
            checked:false
        }
    ]
};

const AppDetail = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_PRODUCT_SAVE_DETAIL:
            return {
                ...state,
                ...action.payload,
                cartDetail: [...state.cartDetail, action.cartDetail]
            }
        case ADD_PRODUCT:
            return {
                ...state,
            }

        default:
            return state
    }
}
export default AppDetail;