import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import EditRecipeForm from './components/EditRecipeForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import RecipeDetails from './components/RecipeDetails';
import useRecipeStore from './components/recipeStore';
import DeleteRecipe from './components/DeleteRecipeButton';
import SearchBar from './components/SearchBar';
import RecommendationList from './components/RecommendationsList';
import FavoritesList from './components/FavoritesList';

function App() {
  const recipe = useRecipeStore(state => state.recipe);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><SearchBar /><AddRecipeForm /><RecipeList /></>} />
        <Route path="/edit/:recipeId" element={<EditRecipeForm />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/delete/:recipeId" element={<DeleteRecipe />} />
        <Route path="/recommend" element={<RecommendationList />} />
        <Route path="favourite" element={<FavoritesList />} />
      </Routes>
    </Router>
  )
}

export default App;
