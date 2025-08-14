import { useState } from "react";
import recipesData from '../data.json';

const AddRecipeForm = () => {
    const [ titles, setTitle ] = useState('');
    const [ summarys, setSummary ] = useState('');
    const [ ingredients, setIngredient ] = useState('');
    const [ preparations, setPreparation ] = useState('');
    const [ recipe, setRecipes ] = useState(recipesData);

    const handleClick = () => {
        const newRecipe = {
            id: recipe.length + 1,
            title: titles,
            summary: summarys,
            image: "https://via.placeholder.com/150",
            ingredient: ingredients,
            preparation: preparations
        };
        setRecipes([...recipe, newRecipe]);
    };

    return (
        <form>
            <input
            type="text"
            value={titles}
            placeholder="Title"
            onChange={setTitle((e) => e.target.value)} 
            />
            <input 
            type="text"
            value={summarys}
            placeholder="Summary"
            onChange={setSummary((e) => e.target.value)}
            />
            <input 
            type="textarea"
            value={ingredients}
            placeholder="Ingrident"
            onChange={setIngredient((e) => e.target.value)}
            />
            <input 
            type="textarea"
            value={preparations}
            placeholder="Preparation"
            onChange={setPreparation((e) => e.target.value)}
            />
            <button onClick={handleClick}>submit</button>
        </form>
    );
};

export default AddRecipeForm;