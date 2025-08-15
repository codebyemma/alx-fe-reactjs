import { useState } from "react";
import recipesData from '../data.json';

const AddRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [preparation, setPreparation] = useState('');
    const [steps, setSteps] = useState('');
    const [recipes, setRecipes] = useState(recipesData);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newError = {};
        if (!title.trim()) newError.title = "Title is required";
        if (!summary.trim()) newError.summary = "Summary is required";
        if (!ingredients.trim()) {
            newError.ingredients = "Ingredients are required";
        } else {
            const word = ingredients.trim().split(/\s+/);
            if (word.length < 2) newError.ingredients = "At least two ingredients are required";
        }
        if (!preparation.trim()) newError.preparation = "Preparation is required";
        if (!steps.trim()) newError.steps = "Steps are required";
        return newError;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newError = validate();
        if (Object.keys(newError).length > 0) {
            setErrors(newError);
            return;
        }
        const newRecipe = {
            id: recipes.length + 1,
            title,
            summary,
            image: "https://via.placeholder.com/150",
            ingredients,
            preparation,
            steps
        };
        setRecipes([...recipes, newRecipe]);
        setTitle('');
        setSummary('');
        setIngredients('');
        setPreparation('');
        setSteps('');
        setErrors({});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    value={title}
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                {errors.title && <div style={{color: 'red'}}>{errors.title}</div>}
            </div>
            <div>
                <input
                    type="text"
                    value={summary}
                    placeholder="Summary"
                    onChange={(e) => setSummary(e.target.value)}
                />
                {errors.summary && <div style={{color: 'red'}}>{errors.summary}</div>}
            </div>
            <div>
                <textarea
                    value={ingredients}
                    placeholder="Ingredients"
                    onChange={(e) => setIngredients(e.target.value)}
                />
                {errors.ingredients && <div style={{color: 'red'}}>{errors.ingredients}</div>}
            </div>
            <div>
                <textarea
                    value={preparation}
                    placeholder="Preparation"
                    onChange={(e) => setPreparation(e.target.value)}
                />
                {errors.preparation && <div style={{color: 'red'}}>{errors.preparation}</div>}
            </div>
            <div>
                <textarea
                    value={steps}
                    placeholder="Steps"
                    onChange={(e) => setSteps(e.target.value)}
                />
                {errors.steps && <div style={{color: 'red'}}>{errors.steps}</div>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddRecipeForm;