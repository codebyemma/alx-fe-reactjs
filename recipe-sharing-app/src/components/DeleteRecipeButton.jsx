import useRecipeStore from "../store/recipeStore";
import { useParams, useNavigate } from "react-router-dom";

const DeleteRecipe = () => {
    const { recipeId } = useParams();
    const navigate = useNavigate();
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === Number(recipeId))
    );
    if (!recipe) {
    return <div>Recipe not found.</div>;
    }
    const handleDelete = () => {
        deleteRecipe(Number(recipeId));
        navigate("/");
    };
    return (
        <div>
            <h1>Are you sure you want to delete this recipe?</h1>
            <p>This action cannot be undone.</p>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default DeleteRecipe;