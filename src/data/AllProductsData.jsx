import CocaCola from "../assets/images/drinks-images/coca-cola-classic.jpeg";
import MountainDew from "../assets/images/drinks-images/Mountain Dew Citrus.webp";
import PepsiCola from "../assets/images/drinks-images/Pepsi Cola.jpeg";
import Milo from "../assets/images/drinks-images/milos.jpeg";
import DrPepper from "../assets/images/drinks-images/Diet Dr Pepper Soda.jpg";
import SpriteCaffeine from "../assets/images/drinks-images/Sprite Caffeine-Free Lemon Lime Soda Pop.jpeg";
import GreatValueSweet from "../assets/images/drinks-images/Great Value.jpeg";
import SToK from "../assets/images/drinks-images/SToK.webp";
import Lipton from "../assets/images/drinks-images/Lipton Green Tea.jpeg";
import CanadaDry from "../assets/images/drinks-images/Canada Dry Ginger.jpg";
import DrPepperZero from "../assets/images/drinks-images/Dr Pepper Zero Sugar.jpeg";
import DietDrPepper from "../assets/images/drinks-images/Diet Dr Pepper Soda.jpg";
import AquafinaPurified from "../assets/images/drinks-images/Aquafina Purified.jpeg";
import PureLife from "../assets/images/drinks-images/Pure Life Purified.jpg";
import SamsCola from "../assets/images/drinks-images/Sams Cola Soda.jpeg";
import RedBull from "../assets/images/drinks-images/Red Bull.jpg";
import Anw from "../assets/images/drinks-images/A&W Caffeine-Free.png";
import PepsiSoda from "../assets/images/drinks-images/pepsi.jpeg";
import GreatValue from "../assets/images/drinks-images/Great Value.jpeg";
import Sunkist from "../assets/images/drinks-images/Sunkist Orange.jpeg";
import GreatValueTwist from "../assets/images/drinks-images/Great Value Twist Up.jpeg";
import FantaOrange from "../assets/images/drinks-images/Fanta Orange Soda.jpeg";
//Pasta
import ChickenAlfredo from "../assets/images/pasta-images/Chicken Alfredo.jpeg";
import AllaGricia from "../assets/images/pasta-images/Pasta Alla Gricia.jpeg";
import SheetPan from "../assets/images/pasta-images/Sheet-Pan Burrata Caprese Gnocchi.jpeg";
import AllaVodka from "../assets/images/pasta-images/Penne Alla Vodka.jpeg";
import BakedSpaghetti from "../assets/images/pasta-images/Baked Spaghetti.jpeg";
import PotatoGnocchi from "../assets/images/pasta-images/Cacio e Pepe Potato Gnocchi.jpeg";
import BakedZiti from "../assets/images/pasta-images/Ultimate Baked Ziti.jpeg";
import CacioPepe from "../assets/images/pasta-images/Cacio e Pepe.jpeg";
import PastaPuttanesca from "../assets/images/pasta-images/Pasta Puttanesca.jpeg";
import ItalianPastaSalad from "../assets/images/pasta-images/Italian Pasta Salad.jpeg";
import Lasagna from "../assets/images/pasta-images/Lasagna Roll Ups.jpeg";
import ToastedRavioli from "../assets/images/pasta-images/Toasted Ravioli.jpeg";
import OrecchietteBroccoli from "../assets/images/pasta-images/Orecchiette with Broccoli Rabe.jpeg";
import LambRagu from "../assets/images/pasta-images/Lamb Ragù.jpeg";
import LasagnaBolognese from "../assets/images/pasta-images/Lasagna Bolognese.jpeg";
import LemonRicotta from "../assets/images/pasta-images/Lemon Ricotta Pasta.jpeg";
import StuffedRigatoni from "../assets/images/pasta-images/Stuffed Rigatoni.jpeg";
import FiveCheese from "../assets/images/pasta-images/Five-Cheese Ziti Al Forno.jpeg";
import ChickenFlorentine from "../assets/images/pasta-images/Chicken Florentine Pasta.jpeg";
import MacCheese from "../assets/images/pasta-images/Italian Mac and Cheese.jpeg";
//Pizza
import CheesePizza from "../assets/images/cheese-pizza-375.jpg";
import VeggiePizza from "../assets/images/veggie-pizza.jpg";
import PepperoniPizza from "../assets/images/pepperoni-pizza.jpg";
import MeatPizza from "../assets/images/meat-pizza.jpg";
import MargheritaPizza from "../assets/images/margherita-pizza.jpg";
import BBQPizza from "../assets/images/BBQ-chicken-pizza.jpg";
import AllaPalla from "../assets/images/pizza-alla-pala.jpg";
import Prosciutto from "../assets/images/Prosciutto-e-Funghi-Pizza.jpeg";
import DetroitStyle from "../assets/images/Detroit-Style-pizza.jpeg";
import GarlicFingers from "../assets/images/Garlic-Fingers-pizza.jpeg";
import StLous from "../assets/images/St-Louis-Style-Pizza.jpg";
import Rustica from "../assets/images/Pizza-Rustica.jpg";
import Genovese from "../assets/images/Genovese.jpeg";
import Efichi from "../assets/images/Pizza-e-fichi.jpeg";
import Apizza from "../assets/images/Apizza.jpg";
import StuffedPizza from "../assets/images/Stuffed-Pizza.jpg";
import Pugliese from "../assets/images/Pugliese.jpeg";
import TomatoPie from "../assets/images/Tomato-Pie.jpeg";
import Fugaza from "../assets/images/fugazza.jpeg";
import DiZucca from "../assets/images/di-zucca.jpeg";
import Fugazeta from "../assets/images/Fugazzeta.jpeg";
import Carbonara from "../assets/images/carbonara.jpeg";
import GranmaPie from "../assets/images/Grandma-Pie.jpeg";
import Padellino from "../assets/images/padellino.jpeg";
import CaliforniaStyle from "../assets/images/California-Style.jpeg";
import Fritta from "../assets/images/fritta.jpeg";
import Romana from "../assets/images/romana.jpeg";
import ThinCrust from "../assets/images/Thin-Crust.jpeg";
import GreekStyle from "../assets/images/Greek-Style.jpeg";
import PizzaRomana from "../assets/images/PizzaRomana.jpeg";

export const allProductsData = [
    {
        id: "cheese-pizza",
        ItemImg: CheesePizza,
        ItemName: "Cheese Pizza",
        ItemIngredients:
            "Pizza dough, pizza sauce, provolone cheese, mozzarella.",
        ItemPrice: (2).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },

    {
        id: "veggie-pizza",
        ItemImg: VeggiePizza,
        ItemName: "Veggie Pizza",
        ItemIngredients:
            "Pizza sauce, Onion, Capsicum, Pineapple, Ginger, Hotshot sauce, Coriander, Garlic sauce, Butter sauce, Cheese.",
        ItemPrice: (9).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "pepperoni-pizza",
        ItemImg: PepperoniPizza,
        ItemName: "Pepperoni Pizza",
        ItemIngredients:
            "Pizza crust yeast, pepperoni, tomato paste, mozzarella cheese, sugar.",
        ItemPrice: (5).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "meat-pizza",
        ItemImg: MeatPizza,
        ItemName: "Meat Pizza",
        ItemIngredients:
            "Sausage, pizza dough, bacon, pizza sauce, red pepper flakes.",
        ItemPrice: (10).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "margherita-pizza",
        ItemImg: MargheritaPizza,
        ItemName: "Margherita Pizza",
        ItemIngredients:
            "Pizza dough, tomato sauce, fresh mozzarella, olive oil, basil leaves.",
        ItemPrice: (8).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "bbq-chicken-pizza",
        ItemImg: BBQPizza,
        ItemName: "BBQ Chicken Pizza",
        ItemIngredients:
            "Rotisserie chicken, pizza dough, bbq sauce, smoked cheddar cheese, mozzarella cheese.",
        ItemPrice: (10).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "alla-pala-pizza",
        ItemImg: AllaPalla,
        ItemName: "Pizza alla pala",
        ItemIngredients: "Cheese, cherry tomatoes, arugula, olive oil, yeast.",
        ItemPrice: (12).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "prosciutto-e-funghi-pizza",
        ItemImg: Prosciutto,
        ItemName: "Prosciutto e Funghi Pizza",
        ItemIngredients:
            "Italian sausage meat, truffle oil, pizza dough, san marzano tomatoes, bocconcini cheese.",
        ItemPrice: (8).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "detroit-style-pizza",
        ItemImg: DetroitStyle,
        ItemName: "Detroit-Style Pizza",
        ItemIngredients:
            "Pizza dough, pizza sauce, brick cheese, rapid rise yeast, olive oil.",
        ItemPrice: (11).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "garlic-fingers",
        ItemImg: GarlicFingers,
        ItemName: "Garlic Fingers",
        ItemIngredients:
            "Bread flour, mozzarella cheese, butter, olive oil, instant yeast.",
        ItemPrice: (7).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "st-ouis-style-pizza",
        ItemImg: StLous,
        ItemName: "St. Louis-Style Pizza",
        ItemIngredients:
            "Liquid smoke, swiss cheese, white cheddar cheese, light corn syrup, pizza sauce.",
        ItemPrice: (13).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "rustica-pizza",
        ItemImg: Rustica,
        ItemName: "Pizza Rustica",
        ItemIngredients: "Prosciutto, pepperoni, mozzarella, crust, eggs.",
        ItemPrice: (13).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "pesto-genovese-pizza",
        ItemImg: Genovese,
        ItemName: "Pizza pesto Genovese",
        ItemIngredients:
            "Pine nuts, baby potatoes, snow pea shoots, lemon, buffalo mozzarella.",
        ItemPrice: (13).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "e-fichi-pizza",
        ItemImg: Efichi,
        ItemName: "Pizza e fichi",
        ItemIngredients:
            "Coconut flour, truffle oil, fig jam, cheese, prosciutto.",
        ItemPrice: (12).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "apizza-pizza",
        ItemImg: Apizza,
        ItemName: "Apizza",
        ItemIngredients:
            "Ricotta cheese, tomato sauce, fresh basil pesto, fresh mozzarella cheese, semolina flour.",
        ItemPrice: (11).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "stuffed-pizza",
        ItemImg: StuffedPizza,
        ItemName: "Stuffed Pizza",
        ItemIngredients:
            "Hot italian sausage, sweet italian sausage, pizza dough, red pepper flakes, olive oil.",
        ItemPrice: (13).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "pugliese-pizza",
        ItemImg: Pugliese,
        ItemName: "Pugliese Pizza",
        ItemIngredients:
            "Sloppy joe, banana peppers, ground beef, pizza dough, ricotta cheese.",
        ItemPrice: (9).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "tomato-pie",
        ItemImg: TomatoPie,
        ItemName: "Tomato Pie",
        ItemIngredients:
            "Pizza dough, san marzano, red pepper flakes, pizza stone, olive oil.",
        ItemPrice: (15).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "fugazza",
        ItemImg: Fugaza,
        ItemName: "Fugazza",
        ItemIngredients:
            "Mozzarella cheese, sugar, dry yeast, all purpose flour.",
        ItemPrice: (10).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "fiori-di-zucca",
        ItemImg: DiZucca,
        ItemName: "Pizza fiori di zucca",
        ItemIngredients:
            "Zucchini blossoms, pizza dough, buffalo mozzarella, olive oil.",
        ItemPrice: (8).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "fugazzeta",
        ItemImg: Fugazeta,
        ItemName: "Fugazzeta",
        ItemIngredients:
            "Feta cheese, mozzarella cheese, parmesan cheese, olive oil, yeast.",
        ItemPrice: (9).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "carbonara-pizza",
        ItemImg: Carbonara,
        ItemName: "Pizza Carbonara",
        ItemIngredients:
            "Refrigerated pizza crust, monterey jack cheese, parmesan cheese, butter, chicken bouillon.",
        ItemPrice: (8).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "grandma-pie",
        ItemImg: GranmaPie,
        ItemName: "Grandma Pie",
        ItemIngredients:
            "Dark brown sugar, san marzano tomatoes, tomato paste, bread flour, red pepper flakes.",
        ItemPrice: (11).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "pizza-al-padellino",
        ItemImg: Padellino,
        ItemName: "Pizza al padellino",
        ItemIngredients:
            "Mozzarella cheese, prosciutto di parma, dough, baby arugula, black pepper",
        ItemPrice: (10).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "california-style-pizza",
        ItemImg: CaliforniaStyle,
        ItemName: "California-Style Pizza",
        ItemIngredients:
            "Feta cheese, marinated artichoke hearts, pizza crust, red bell pepper, red onion.",
        ItemPrice: (15).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "pizza-fritta",
        ItemImg: Fritta,
        ItemName: "Pizza fritta",
        ItemIngredients:
            "Ricotta cheese, tomato sauce, tipo 00, neapolitan pizza base, mozzarella cheese.",
        ItemPrice: (8).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "pinsa-romana",
        ItemImg: Romana,
        ItemName: "Pinsa romana",
        ItemIngredients:
            "Rice flour, olive oil, plain flour, sea salt, dried yeast.",
        ItemPrice: (5).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "chicago-thin-crust-pizza",
        ItemImg: ThinCrust,
        ItemName: "Chicago Thin Crust Pizza",
        ItemIngredients:
            "Sweet italian sausage, semolina flour, pizza sauce, giardiniera, sugar.",
        ItemPrice: (13).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "greek-style-pizza",
        ItemImg: GreekStyle,
        ItemName: "Greek-Style Pizza",
        ItemIngredients:
            "White cheddar, sauce, tomato paste, bread flour, red pepper flakes.",
        ItemPrice: (8).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "pizza-romana",
        ItemImg: PizzaRomana,
        ItemName: "Pizza Romana",
        ItemIngredients:
            "Fresh mozzarella, bread flour, tomato, olive oil, yeast",
        ItemPrice: (11).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "cheese-pizza-second",
        ItemImg: CheesePizza,
        ItemName: "Cheese Pizza",
        ItemIngredients:
            "Pizza dough, pizza sauce, provolone cheese, mozzarella.",
        ItemPrice: (2).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },

    {
        id: "veggie-pizza-second",
        ItemImg: VeggiePizza,
        ItemName: "Veggie Pizza",
        ItemIngredients:
            "Pizza sauce, Onion, Capsicum, Pineapple, Ginger, Hotshot sauce, Coriander, Garlic sauce, Butter sauce, Cheese.",
        ItemPrice: (9).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "pepperoni-pizza-second",
        ItemImg: PepperoniPizza,
        ItemName: "Pepperoni Pizza",
        ItemIngredients:
            "Pizza crust yeast, pepperoni, tomato paste, mozzarella cheese, sugar.",
        ItemPrice: (5).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "meat-pizza-second",
        ItemImg: MeatPizza,
        ItemName: "Meat Pizza",
        ItemIngredients:
            "Sausage, pizza dough, bacon, pizza sauce, red pepper flakes.",
        ItemPrice: (10).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "margherita-pizza-second",
        ItemImg: MargheritaPizza,
        ItemName: "Margherita Pizza",
        ItemIngredients:
            "Pizza dough, tomato sauce, fresh mozzarella, olive oil, basil leaves.",
        ItemPrice: (8).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "bbq-chicken-pizza-second",
        ItemImg: BBQPizza,
        ItemName: "BBQ Chicken Pizza",
        ItemIngredients:
            "Rotisserie chicken, pizza dough, bbq sauce, smoked cheddar cheese, mozzarella cheese.",
        ItemPrice: (10).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "alla-pala-pizza-second",
        ItemImg: AllaPalla,
        ItemName: "Pizza alla pala",
        ItemIngredients: "Cheese, cherry tomatoes, arugula, olive oil, yeast.",
        ItemPrice: (12).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "prosciutto-e-funghi-pizza-second",
        ItemImg: Prosciutto,
        ItemName: "Prosciutto e Funghi Pizza",
        ItemIngredients:
            "Italian sausage meat, truffle oil, pizza dough, san marzano tomatoes, bocconcini cheese.",
        ItemPrice: (8).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "detroit-style-pizza-second",
        ItemImg: DetroitStyle,
        ItemName: "Detroit-Style Pizza",
        ItemIngredients:
            "Pizza dough, pizza sauce, brick cheese, rapid rise yeast, olive oil.",
        ItemPrice: (11).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "garlic-fingers-second",
        ItemImg: GarlicFingers,
        ItemName: "Garlic Fingers",
        ItemIngredients:
            "Bread flour, mozzarella cheese, butter, olive oil, instant yeast.",
        ItemPrice: (7).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "st-ouis-style-pizza-second",
        ItemImg: StLous,
        ItemName: "St. Louis-Style Pizza",
        ItemIngredients:
            "Liquid smoke, swiss cheese, white cheddar cheese, light corn syrup, pizza sauce.",
        ItemPrice: (13).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "rustica-pizza-second",
        ItemImg: Rustica,
        ItemName: "Pizza Rustica",
        ItemIngredients: "Prosciutto, pepperoni, mozzarella, crust, eggs.",
        ItemPrice: (13).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "pesto-genovese-pizza-second",
        ItemImg: Genovese,
        ItemName: "Pizza pesto Genovese",
        ItemIngredients:
            "Pine nuts, baby potatoes, snow pea shoots, lemon, buffalo mozzarella.",
        ItemPrice: (13).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "e-fichi-pizza-second",
        ItemImg: Efichi,
        ItemName: "Pizza e fichi",
        ItemIngredients:
            "Coconut flour, truffle oil, fig jam, cheese, prosciutto.",
        ItemPrice: (12).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "apizza-pizza-second",
        ItemImg: Apizza,
        ItemName: "Apizza",
        ItemIngredients:
            "Ricotta cheese, tomato sauce, fresh basil pesto, fresh mozzarella cheese, semolina flour.",
        ItemPrice: (11).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "stuffed-pizza-second",
        ItemImg: StuffedPizza,
        ItemName: "Stuffed Pizza",
        ItemIngredients:
            "Hot italian sausage, sweet italian sausage, pizza dough, red pepper flakes, olive oil.",
        ItemPrice: (13).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "pugliese-pizza-second",
        ItemImg: Pugliese,
        ItemName: "Pugliese Pizza",
        ItemIngredients:
            "Sloppy joe, banana peppers, ground beef, pizza dough, ricotta cheese.",
        ItemPrice: (9).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "tomato-pie-second",
        ItemImg: TomatoPie,
        ItemName: "Tomato Pie",
        ItemIngredients:
            "Pizza dough, san marzano, red pepper flakes, pizza stone, olive oil.",
        ItemPrice: (15).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "fugazza-second",
        ItemImg: Fugaza,
        ItemName: "Fugazza",
        ItemIngredients:
            "Mozzarella cheese, sugar, dry yeast, all purpose flour.",
        ItemPrice: (10).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "fiori-di-zucca-second",
        ItemImg: DiZucca,
        ItemName: "Pizza fiori di zucca",
        ItemIngredients:
            "Zucchini blossoms, pizza dough, buffalo mozzarella, olive oil.",
        ItemPrice: (8).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "fugazzeta-second",
        ItemImg: Fugazeta,
        ItemName: "Fugazzeta",
        ItemIngredients:
            "Feta cheese, mozzarella cheese, parmesan cheese, olive oil, yeast.",
        ItemPrice: (9).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "carbonara-pizza-second",
        ItemImg: Carbonara,
        ItemName: "Pizza Carbonara",
        ItemIngredients:
            "Refrigerated pizza crust, monterey jack cheese, parmesan cheese, butter, chicken bouillon.",
        ItemPrice: (8).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "grandma-pie-second",
        ItemImg: GranmaPie,
        ItemName: "Grandma Pie",
        ItemIngredients:
            "Dark brown sugar, san marzano tomatoes, tomato paste, bread flour, red pepper flakes.",
        ItemPrice: (11).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "pizza-al-padellino-second",
        ItemImg: Padellino,
        ItemName: "Pizza al padellino",
        ItemIngredients:
            "Mozzarella cheese, prosciutto di parma, dough, baby arugula, black pepper",
        ItemPrice: (10).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "california-style-pizza-second",
        ItemImg: CaliforniaStyle,
        ItemName: "California-Style Pizza",
        ItemIngredients:
            "Feta cheese, marinated artichoke hearts, pizza crust, red bell pepper, red onion.",
        ItemPrice: (15).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "pizza-fritta-second",
        ItemImg: Fritta,
        ItemName: "Pizza fritta",
        ItemIngredients:
            "Ricotta cheese, tomato sauce, tipo 00, neapolitan pizza base, mozzarella cheese.",
        ItemPrice: (8).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "pinsa-romana-second",
        ItemImg: Romana,
        ItemName: "Pinsa romana",
        ItemIngredients:
            "Rice flour, olive oil, plain flour, sea salt, dried yeast.",
        ItemPrice: (5).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "chicago-thin-crust-pizza-second",
        ItemImg: ThinCrust,
        ItemName: "Chicago Thin Crust Pizza",
        ItemIngredients:
            "Sweet italian sausage, semolina flour, pizza sauce, giardiniera, sugar.",
        ItemPrice: (13).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "greek-style-pizza-second",
        ItemImg: GreekStyle,
        ItemName: "Greek-Style Pizza",
        ItemIngredients:
            "White cheddar, sauce, tomato paste, bread flour, red pepper flakes.",
        ItemPrice: (8).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "pizza-romana-second",
        ItemImg: PizzaRomana,
        ItemName: "Pizza Romana",
        ItemIngredients:
            "Fresh mozzarella, bread flour, tomato, olive oil, yeast",
        ItemPrice: (11).toFixed(2),
        Category: "Pizza",
        attributes: [
            {
                id: "size",
                name: "size",
                items: [
                    { id: "small", value: "small", slices: "6" },
                    { id: "medium", value: "medium", slices: "8" },
                    { id: "large", value: "large", slices: "10" },
                    { id: "x-large", value: "x-large", slices: "12" },
                ],
            },
        ],
    },
    {
        id: "chicken-alfredo",
        ItemImg: ChickenAlfredo,
        ItemName: "Chicken Alfredo",
        ItemIngredients:
            "Skinless chicken breast, heavy cream, olive oil, parmigiano reggiano, black pepper.",
        ItemPrice: (2).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "pasta-alla-gricia",
        ItemImg: AllaGricia,
        ItemName: "Pasta Alla Gricia",
        ItemIngredients:
            "Rigatoni pasta, pancetta, olive oil, pecorino romano, black pepper.",
        ItemPrice: (9).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "sheet-pan-burrata-caprese-gnocchi",
        ItemImg: SheetPan,
        ItemName: "Sheet-Pan Burrata Caprese Gnocchi",
        ItemIngredients:
            "Penne pasta, sour cream, rotisserie chicken, cherry tomatoes, curly kale.",
        ItemPrice: (5).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "penne-alla-vodka",
        ItemImg: AllaVodka,
        ItemName: "Penne Alla Vodka",
        ItemIngredients:
            "Tomato sauce, penne, heavy cream, red pepper flakes, butter.",
        ItemPrice: (10).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "baked-spaghetti",
        ItemImg: BakedSpaghetti,
        ItemName: "Baked Spaghetti",
        ItemIngredients:
            "Ground beef, spaghetti, olive oil, crushed tomatoes, basil.",
        ItemPrice: (8).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "cacio-e-pepe-potato-gnocchi",
        ItemImg: PotatoGnocchi,
        ItemName: "Cacio e Pepe Potato Gnocchi",
        ItemIngredients:
            "Green beans, potato gnocchi, green peas, pecorino romano cheese, black pepper.",
        ItemPrice: (10).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "ultimate-baked-ziti",
        ItemImg: BakedZiti,
        ItemName: "Ultimate Baked Ziti",
        ItemIngredients:
            "Bulk italian sausage, ricotta cheese, tomato sauce, red pepper flakes, mozzarella cheese.",
        ItemPrice: (12).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "cacio-e-pepe",
        ItemImg: CacioPepe,
        ItemName: "Cacio e Pepe",
        ItemIngredients: "Spaghetti, parmesan, butter, black pepper.",
        ItemPrice: (8).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "pasta-puttanesca",
        ItemImg: PastaPuttanesca,
        ItemName: "Pasta Puttanesca",
        ItemIngredients:
            "Spaghetti, kalamata olives, red pepper flakes, capers, diced tomatoes.",
        ItemPrice: (11).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "italian-pasta-salad",
        ItemImg: ItalianPastaSalad,
        ItemName: "Italian Pasta Salad",
        ItemIngredients:
            "Bell peppers, fresh mozzarella pearls, honey, dijon mustard, rotini.",
        ItemPrice: (7).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "lasagna-roll-ups",
        ItemImg: Lasagna,
        ItemName: "Lasagna Roll Ups",
        ItemIngredients:
            "Ricotta cheese, lasagna noodles, homemade marinara sauce, frozen spinach, parmesan cheese.",
        ItemPrice: (13).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "toasted-ravioli",
        ItemImg: ToastedRavioli,
        ItemName: "Toasted Ravioli",
        ItemIngredients:
            "Frozen cheese ravioli, jar spaghetti sauce, bread crumbs, parmesan cheese, egg.",
        ItemPrice: (13).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "orecchiette-with-broccoli-rabe",
        ItemImg: OrecchietteBroccoli,
        ItemName: "Orecchiette with Broccoli Rabe",
        ItemIngredients:
            "Broccoli rabe, andouille sausage links, orecchiette, lemon, red pepper flakes.",
        ItemPrice: (13).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "lamb-ragu",
        ItemImg: LambRagu,
        ItemName: "Lamb Ragù",
        ItemIngredients:
            "Lamb shoulder, gnocchi, red wine, heavy cream, tomato paste.",
        ItemPrice: (12).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "lasagna-bolognese",
        ItemImg: LasagnaBolognese,
        ItemName: "Lasagna Bolognese",
        ItemIngredients:
            "Ground italian sausage, ground beef, ground pork, bolognese sauce, lasagna noodles.",
        ItemPrice: (11).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "lemon-ricotta-pasta",
        ItemImg: LemonRicotta,
        ItemName: "Lemon Ricotta Pasta",
        ItemIngredients:
            "Spaghetti, ricotta, lemon, red pepper flakes, parmesan.",
        ItemPrice: (13).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "stuffed-rigatoni",
        ItemImg: StuffedRigatoni,
        ItemName: "Stuffed Rigatoni",
        ItemIngredients:
            "Ground turkey, rigatoni pasta, red pepper, mozzarella, parmesan.",
        ItemPrice: (9).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "five-cheese-ziti-al-forno",
        ItemImg: FiveCheese,
        ItemName: "Five-Cheese Ziti Al Forno",
        ItemIngredients:
            "Alfredo sauce, ricotta cheese, ziti pasta, marinara sauce, fontina cheese.",
        ItemPrice: (15).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "chicken-florentine-pasta",
        ItemImg: ChickenFlorentine,
        ItemName: "Chicken Florentine Pasta",
        ItemIngredients:
            "Skinless chicken breasts, linguine pasta, chicken broth, butter, baby spinach.",
        ItemPrice: (10).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "italian-mac-and-cheese",
        ItemImg: MacCheese,
        ItemName: "Italian Mac and Cheese",
        ItemIngredients:
            "Italian sausage, pasta, cheese sauce, cream, baby spinach.",
        ItemPrice: (8).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "chicken-alfredo-second",
        ItemImg: ChickenAlfredo,
        ItemName: "Chicken Alfredo",
        ItemIngredients:
            "Skinless chicken breast, heavy cream, olive oil, parmigiano reggiano, black pepper.",
        ItemPrice: (2).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "pasta-alla-gricia-second",
        ItemImg: AllaGricia,
        ItemName: "Pasta Alla Gricia",
        ItemIngredients:
            "Rigatoni pasta, pancetta, olive oil, pecorino romano, black pepper.",
        ItemPrice: (9).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "sheet-pan-burrata-caprese-gnocchi-second",
        ItemImg: SheetPan,
        ItemName: "Sheet-Pan Burrata Caprese Gnocchi",
        ItemIngredients:
            "Penne pasta, sour cream, rotisserie chicken, cherry tomatoes, curly kale.",
        ItemPrice: (5).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "penne-alla-vodka-second",
        ItemImg: AllaVodka,
        ItemName: "Penne Alla Vodka",
        ItemIngredients:
            "Tomato sauce, penne, heavy cream, red pepper flakes, butter.",
        ItemPrice: (10).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "baked-spaghetti-second",
        ItemImg: BakedSpaghetti,
        ItemName: "Baked Spaghetti",
        ItemIngredients:
            "Ground beef, spaghetti, olive oil, crushed tomatoes, basil.",
        ItemPrice: (8).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "cacio-e-pepe-potato-gnocchi-second",
        ItemImg: PotatoGnocchi,
        ItemName: "Cacio e Pepe Potato Gnocchi",
        ItemIngredients:
            "Green beans, potato gnocchi, green peas, pecorino romano cheese, black pepper.",
        ItemPrice: (10).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "ultimate-baked-ziti-second",
        ItemImg: BakedZiti,
        ItemName: "Ultimate Baked Ziti",
        ItemIngredients:
            "Bulk italian sausage, ricotta cheese, tomato sauce, red pepper flakes, mozzarella cheese.",
        ItemPrice: (12).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "cacio-e-pepe-second",
        ItemImg: CacioPepe,
        ItemName: "Cacio e Pepe",
        ItemIngredients: "Spaghetti, parmesan, butter, black pepper.",
        ItemPrice: (8).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "pasta-puttanesca-second",
        ItemImg: PastaPuttanesca,
        ItemName: "Pasta Puttanesca",
        ItemIngredients:
            "Spaghetti, kalamata olives, red pepper flakes, capers, diced tomatoes.",
        ItemPrice: (11).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "italian-pasta-salad-second",
        ItemImg: ItalianPastaSalad,
        ItemName: "Italian Pasta Salad",
        ItemIngredients:
            "Bell peppers, fresh mozzarella pearls, honey, dijon mustard, rotini.",
        ItemPrice: (7).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "lasagna-roll-ups-second",
        ItemImg: Lasagna,
        ItemName: "Lasagna Roll Ups",
        ItemIngredients:
            "Ricotta cheese, lasagna noodles, homemade marinara sauce, frozen spinach, parmesan cheese.",
        ItemPrice: (13).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "toasted-ravioli-second",
        ItemImg: ToastedRavioli,
        ItemName: "Toasted Ravioli",
        ItemIngredients:
            "Frozen cheese ravioli, jar spaghetti sauce, bread crumbs, parmesan cheese, egg.",
        ItemPrice: (13).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "orecchiette-with-broccoli-rabe-second",
        ItemImg: OrecchietteBroccoli,
        ItemName: "Orecchiette with Broccoli Rabe",
        ItemIngredients:
            "Broccoli rabe, andouille sausage links, orecchiette, lemon, red pepper flakes.",
        ItemPrice: (13).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "lamb-ragu-second",
        ItemImg: LambRagu,
        ItemName: "Lamb Ragù",
        ItemIngredients:
            "Lamb shoulder, gnocchi, red wine, heavy cream, tomato paste.",
        ItemPrice: (12).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "lasagna-bolognese-second",
        ItemImg: LasagnaBolognese,
        ItemName: "Lasagna Bolognese",
        ItemIngredients:
            "Ground italian sausage, ground beef, ground pork, bolognese sauce, lasagna noodles.",
        ItemPrice: (11).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "lemon-ricotta-pasta-second",
        ItemImg: LemonRicotta,
        ItemName: "Lemon Ricotta Pasta",
        ItemIngredients:
            "Spaghetti, ricotta, lemon, red pepper flakes, parmesan.",
        ItemPrice: (13).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "stuffed-rigatoni-second",
        ItemImg: StuffedRigatoni,
        ItemName: "Stuffed Rigatoni",
        ItemIngredients:
            "Ground turkey, rigatoni pasta, red pepper, mozzarella, parmesan.",
        ItemPrice: (9).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "five-cheese-ziti-al-forno-second",
        ItemImg: FiveCheese,
        ItemName: "Five-Cheese Ziti Al Forno",
        ItemIngredients:
            "Alfredo sauce, ricotta cheese, ziti pasta, marinara sauce, fontina cheese.",
        ItemPrice: (15).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "chicken-florentine-pasta-second",
        ItemImg: ChickenFlorentine,
        ItemName: "Chicken Florentine Pasta",
        ItemIngredients:
            "Skinless chicken breasts, linguine pasta, chicken broth, butter, baby spinach.",
        ItemPrice: (10).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },
    {
        id: "italian-mac-and-cheese-second",
        ItemImg: MacCheese,
        ItemName: "Italian Mac and Cheese",
        ItemIngredients:
            "Italian sausage, pasta, cheese sauce, cream, baby spinach.",
        ItemPrice: (8).toFixed(2),
        Category: "Pasta",
        attributes: [],
    },

    {
        id: "coca-cola-original-soda-pop",
        ItemImg: CocaCola,
        ItemName: "Coca-Cola Original Soda Pop",
        ItemPrice: (1).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },

    {
        id: "mountain-dew-citrus-soda-pop",
        ItemImg: MountainDew,
        ItemName: "Mountain Dew Citrus Soda Pop",
        ItemPrice: (2).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "pepsi-cola-soda-pop",
        ItemImg: PepsiCola,
        ItemName: "Pepsi Cola Soda Pop",
        ItemPrice: (1).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "milos-famous-sweet-tea",
        ItemImg: Milo,
        ItemName: "Milo’s Famous Sweet Tea",
        ItemPrice: (1).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "dr-pepper-soda",
        ItemImg: DrPepper,
        ItemName: "Dr Pepper Soda",
        ItemPrice: (1).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "sprite-caffeine-free-lemon-lime-soda-pop",
        ItemImg: SpriteCaffeine,
        ItemName: "Sprite Caffeine-Free Lemon Lime Soda Pop",
        ItemPrice: (2).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "great-value-sweet-brewed-iced-tea",
        ItemImg: GreatValueSweet,
        ItemName: "Great Value Sweet Brewed Iced Tea",
        ItemPrice: (2).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "stok-cold-brew-coffee-black-iunsweetened",
        ItemImg: SToK,
        ItemName: "SToK Cold Brew Coffee, Black Unsweetened",
        ItemPrice: (3).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "lipton-green-tea-citrus-iced-tea",
        ItemImg: Lipton,
        ItemName: "Lipton Green Tea Citrus Iced Tea",
        ItemPrice: (2).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "canada-dry-ginger-ale-soda",
        ItemImg: CanadaDry,
        ItemName: "Canada Dry Ginger Ale Soda",
        ItemPrice: (2).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "dr-pepper-zero-sugar-soda",
        ItemImg: DrPepperZero,
        ItemName: "Dr Pepper Zero Sugar Soda",
        ItemPrice: (2).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "diet-dr-pepper-soda",
        ItemImg: DietDrPepper,
        ItemName: "Diet Dr Pepper Soda",
        ItemPrice: (1).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "aquafina-purified-bottled-drinking-water",
        ItemImg: AquafinaPurified,
        ItemName: "Aquafina Purified Bottled Drinking Water",
        ItemPrice: (2).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "pure-life-purified-water",
        ItemImg: PureLife,
        ItemName: "Pure Life Purified Water",
        ItemPrice: (1).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "sams-cola-soda-pop",
        ItemImg: SamsCola,
        ItemName: "Sams Cola Soda Pop",
        ItemPrice: (1).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "red-bull-energy-drink",
        ItemImg: RedBull,
        ItemName: "Red Bull Energy Drink",
        ItemPrice: (2).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "a-w-caffeine-free-low-sodium-root-beer-soda-pop",
        ItemImg: Anw,
        ItemName: "A&W Caffeine-Free, Low Sodium Root Beer Soda Pop",
        ItemPrice: (3).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "pepsi-soda-pop",
        ItemImg: PepsiSoda,
        ItemName: "Pepsi Soda Pop",
        ItemPrice: (3).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "great-value-cream-soda-pop",
        ItemImg: GreatValue,
        ItemName: "Great Value Cream Soda Pop",
        ItemPrice: (3).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "sunkist-orange-soda",
        ItemImg: Sunkist,
        ItemName: "Sunkist Orange Soda",
        ItemPrice: (1).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "great-value-twist-up-lemon-lime-soda-pop",
        ItemImg: GreatValueTwist,
        ItemName: "Great Value Twist Up Lemon Lime Soda Pop",
        ItemPrice: (2).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "fanta-orange-soda",
        ItemImg: FantaOrange,
        ItemName: "Fanta Orange Soda",
        ItemPrice: (1).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "coca-cola-original-soda-pop-second",
        ItemImg: CocaCola,
        ItemName: "Coca-Cola Original Soda Pop",
        ItemPrice: (1).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },

    {
        id: "mountain-dew-citrus-soda-pop-second",
        ItemImg: MountainDew,
        ItemName: "Mountain Dew Citrus Soda Pop",
        ItemPrice: (2).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "pepsi-cola-soda-pop-second",
        ItemImg: PepsiCola,
        ItemName: "Pepsi Cola Soda Pop",
        ItemPrice: (1).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "milos-famous-sweet-tea-second",
        ItemImg: Milo,
        ItemName: "Milo’s Famous Sweet Tea",
        ItemPrice: (1).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "dr-pepper-soda-second",
        ItemImg: DrPepper,
        ItemName: "Dr Pepper Soda",
        ItemPrice: (1).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "sprite-caffeine-free-lemon-lime-soda-pop-second",
        ItemImg: SpriteCaffeine,
        ItemName: "Sprite Caffeine-Free Lemon Lime Soda Pop",
        ItemPrice: (2).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "great-value-sweet-brewed-iced-tea-second",
        ItemImg: GreatValueSweet,
        ItemName: "Great Value Sweet Brewed Iced Tea",
        ItemPrice: (2).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "stok-cold-brew-coffee-black-iunsweetened-second",
        ItemImg: SToK,
        ItemName: "SToK Cold Brew Coffee, Black Unsweetened",
        ItemPrice: (3).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "lipton-green-tea-citrus-iced-tea-second",
        ItemImg: Lipton,
        ItemName: "Lipton Green Tea Citrus Iced Tea",
        ItemPrice: (2).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "canada-dry-ginger-ale-soda-second",
        ItemImg: CanadaDry,
        ItemName: "Canada Dry Ginger Ale Soda",
        ItemPrice: (2).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "dr-pepper-zero-sugar-soda-second",
        ItemImg: DrPepperZero,
        ItemName: "Dr Pepper Zero Sugar Soda",
        ItemPrice: (2).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "diet-dr-pepper-soda-second",
        ItemImg: DietDrPepper,
        ItemName: "Diet Dr Pepper Soda",
        ItemPrice: (1).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "aquafina-purified-bottled-drinking-water-second",
        ItemImg: AquafinaPurified,
        ItemName: "Aquafina Purified Bottled Drinking Water",
        ItemPrice: (2).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "pure-life-purified-water-second",
        ItemImg: PureLife,
        ItemName: "Pure Life Purified Water",
        ItemPrice: (1).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "sams-cola-soda-pop-second",
        ItemImg: SamsCola,
        ItemName: "Sams Cola Soda Pop",
        ItemPrice: (1).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "red-bull-energy-drink-second",
        ItemImg: RedBull,
        ItemName: "Red Bull Energy Drink",
        ItemPrice: (2).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "a-w-caffeine-free-low-sodium-root-beer-soda-pop-second",
        ItemImg: Anw,
        ItemName: "A&W Caffeine-Free, Low Sodium Root Beer Soda Pop",
        ItemPrice: (3).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "pepsi-soda-pop-second",
        ItemImg: PepsiSoda,
        ItemName: "Pepsi Soda Pop",
        ItemPrice: (3).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "great-value-cream-soda-pop-second",
        ItemImg: GreatValue,
        ItemName: "Great Value Cream Soda Pop",
        ItemPrice: (3).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "sunkist-orange-soda-second",
        ItemImg: Sunkist,
        ItemName: "Sunkist Orange Soda",
        ItemPrice: (1).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "great-value-twist-up-lemon-lime-soda-pop-second",
        ItemImg: GreatValueTwist,
        ItemName: "Great Value Twist Up Lemon Lime Soda Pop",
        ItemPrice: (2).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
    {
        id: "fanta-orange-soda-second",
        ItemImg: FantaOrange,
        ItemName: "Fanta Orange Soda",
        ItemPrice: (1).toFixed(2),
        Category: "Drinks",
        attributes: [],
    },
];
