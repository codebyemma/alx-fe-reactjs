import { useState } from "react";
import recipesData from '../data.json';

const AddRecipeForm = () => {
    const [ titles, setTitle ] = useState('');
    const [ summarys, setSummary ] = useState('');
    const [ ingredients, setIngredient ] = useState('');
    const [ preparations, setPreparation ] = useState('');
    const [ recipe, setRecipes ] = useState(recipesData);

    const validate = () => {
        const newError = {};
        if(!titles.trim()) {
            newError.titles = "Title is required";
        }
        if(!summarys.trim()) {
            newError.summarys = "Summary is required";
        }
        if(!ingredients.trim()) {
            newError.ingredients = "Ingredients are required";
        } else {
            const word = ingredients.trim().split(/\s+/);
            if (word.length < 2) {
                newError.ingredients = "At least two ingredients are required";
            }
        }
        if(!preparations.trim()) {
            newError.preparations = "Preparations are required";
        }
        return newError;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecipe = {
            id: recipe.length + 1,
            title: titles,
            summary: summarys,
            image: "https://via.placeholder.com/150",
            ingredient: ingredients,
            preparation: preparations
        };
        const newError = validate();
        if (Object.keys(newError).length > 0) {
            console.log(newError);
            return;
        }
        setRecipes([...recipe, newRecipe]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={titles}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)} 
            />
            <input 
            type="text"
            value={summarys}
            placeholder="Summary"
            onChange={(e) => setSummary(e.target.value)}
            />
            <input 
            type="textarea"
            value={ingredients}
            placeholder="Ingrident"
            onChange={(e) => setIngredient(e.target.value)}
            />
            <input 
            type="textarea"
            value={preparations}
            placeholder="Preparation"
            onChange={(e) => setPreparation(e.target.value)}
            />
            <button type="submit">submit</button>
        </form>
    );
};

export default AddRecipeForm;