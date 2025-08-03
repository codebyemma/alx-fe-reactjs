import useRecipeStore from '../store/recipeStore';
import { BrowserRouter as Router, useParams, Link } from 'react-router-dom';

  const RecipeDetails = () => {
    const { recipeId } = useParams();
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === Number(recipeId))
    );

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <nav>
          <Link to={`/edit/${recipe.id}`}>Edit Recipe</Link>
          <Link to={`/delete/${recipe.id}`}>Delete Recipe</Link>
          <Link to="/">Back to Recipes</Link>
        </nav>

      </div>
    );
  };

  export default RecipeDetails;
