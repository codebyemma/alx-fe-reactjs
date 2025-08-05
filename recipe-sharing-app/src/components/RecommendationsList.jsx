import useRecipeStore from "./recipeStore";

const RecommendationList = () => {
    const recommendations = useRecipeStore(state => state.RecommendationList);

    return (
    <div>
        {recommendations.map(recipe => (
            <div key={recipe.id}>
                <h2>{recipe.title}</h2>
                <p>{recipe.description}</p>
        </div>
    ))}
    </div>
    );
};

export default RecommendationList;