import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const favorites = useRecipeStore(state => state.favorites) || [];
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  // Only show recipes that match the search term
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFavoriteChange = (recipeId, checked) => {
    if (checked) {
      addFavorite(recipeId);
    } else {
      removeFavorite(recipeId);
    }
  };

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <label>
              <input
                type="checkbox"
                checked={Array.isArray(favorites) && favorites.includes(recipe.id)}
                onChange={e => handleFavoriteChange(recipe.id, e.target.checked)}
              />
              Favorite
            </label>
            <Link to={`recipe/${recipe.id}`}>Recipe Details</Link>
          </div>
        ))
      )}
      <Link to="/recommend">Recommendation</Link>
      <Link to="/favorite">Favourite</Link>
    </div>
  );
};

export default RecipeList;
