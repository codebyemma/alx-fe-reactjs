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
        const newErrors = {};
        if (!title.trim()) newErrors.title = "Title is required";
        if (!summary.trim()) newErrors.summary = "Summary is required";
        if (!ingredients.trim()) {
            newErrors.ingredients = "Ingredients are required";
        } else {
            const words = ingredients.trim().split(/\s+/);
            if (words.length < 2) newErrors.ingredients = "At least two ingredients are required";
        }
        if (!preparation.trim()) newErrors.preparation = "Preparation time is required";
        if (!steps.trim()) newErrors.steps = "Steps are required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const newRecipe = {
            id: recipes.length + 1,
            title,
            summary,
            image: "https://via.placeholder.com/150",
            ingredients,
            preparation,
            steps,
        };

        setRecipes([...recipes, newRecipe]);
        // Reset form fields
        setTitle('');
        setSummary('');
        setIngredients('');
        setPreparation('');
        setSteps('');
        setErrors({});
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Add New Recipe</h2>

            {/* Title */}
            <div className="flex flex-col">
                <label htmlFor="title" className="text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    placeholder="e.g. Spaghetti Carbonara"
                    onChange={(e) => setTitle(e.target.value)}
                    className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.title ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                />
                {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
            </div>

            {/* Summary */}
            <div className="flex flex-col">
                <label htmlFor="summary" className="text-sm font-medium text-gray-700 mb-1">Summary</label>
                <input
                    id="summary"
                    type="text"
                    value={summary}
                    placeholder="A quick description of the dish"
                    onChange={(e) => setSummary(e.target.value)}
                    className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.summary ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                />
                {errors.summary && <p className="mt-1 text-sm text-red-600">{errors.summary}</p>}
            </div>

            {/* Ingredients */}
            <div className="flex flex-col">
                <label htmlFor="ingredients" className="text-sm font-medium text-gray-700 mb-1">Ingredients</label>
                <textarea
                    id="ingredients"
                    value={ingredients}
                    placeholder="List ingredients, one per line or separated by spaces"
                    rows="3"
                    onChange={(e) => setIngredients(e.target.value)}
                    className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.ingredients ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                />
                {errors.ingredients && <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>}
            </div>

            {/* Preparation Time */}
            <div className="flex flex-col">
                <label htmlFor="preparation" className="text-sm font-medium text-gray-700 mb-1">Preparation Time (minutes)</label>
                <input
                    id="preparation"
                    type="text"
                    value={preparation}
                    placeholder="e.g. 30"
                    onChange={(e) => setPreparation(e.target.value)}
                    className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.preparation ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                />
                {errors.preparation && <p className="mt-1 text-sm text-red-600">{errors.preparation}</p>}
            </div>

            {/* Steps */}
            <div className="flex flex-col">
                <label htmlFor="steps" className="text-sm font-medium text-gray-700 mb-1">Steps</label>
                <textarea
                    id="steps"
                    value={steps}
                    placeholder="Describe the cooking steps..."
                    rows="5"
                    onChange={(e) => setSteps(e.target.value)}
                    className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.steps ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                />
                {errors.steps && <p className="mt-1 text-sm text-red-600">{errors.steps}</p>}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Add Recipe
            </button>
        </form>
    );
};

export default AddRecipeForm;