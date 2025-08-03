import useRecipeStore from './recipeStore';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const EditRecipeForm = () => {
    const {recipeId} = useParams();
    const navigate = useNavigate();
    const currentRecipe = useRecipeStore(state => 
        state.recipes.find(r => r.id === Number(recipeId)));
    const updateRecipe = useRecipeStore(state => state.updateRecipe)
    const [title, setTitle] = useState(currentRecipe ? currentRecipe.title : '');
    const [description, setDescription] = useState(currentRecipe ? currentRecipe.description : '');

    const handleclick = (event) => {
        event.preventDefault();
        updateRecipe({ id: currentRecipe.id, title, description });
        setTitle('');
        setDescription('');
        navigate("/");
    };

    if (!currentRecipe) {
        return <div>Recipe not found.</div>;
    }
    return (
        <form onSubmit={handleclick}>
            <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={currentRecipe.title}
            />
            <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={currentRecipe.description}
            />
            <button type="submit">Update recipe</button>
        </form>
    );

};

export default EditRecipeForm;