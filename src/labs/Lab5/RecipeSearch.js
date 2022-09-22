import React from "react";

export default class RecipeSearch extends React.Component {
    state = {
        recipes: [
            "Pumpkin Pie",
            "Apple Pie",
            "Blueberry Cobbler",
            "Pumpkin Bread",
            "Snickerdoodle Cookies",
            "Gingerbread Cookies",
            "Apple Cider Donuts",
            "Cinnamon Rolls",
            "Cinnamon Pie",
            "Pumpkin Muffin",
            "Coffee Cake",
            "Apple Cider"
        ],
        searchTerm: ""
    };

    render() {
        //pull out matching recipe from search term
        let matchingRecipes = this.state.recipes.filter((recipe) => {
            return recipe.toLocaleUpperCase().includes(this.state.searchTerm.toLocaleUpperCase());
        });

        let recipesList = matchingRecipes.map((recipe) => {
            return <li>{recipe}</li>;
        }); 

        return(  
            <div className="recipes">
                <h2>Recipes</h2>
                <input value={this.state.searchTerm}
                       onChange={ (event) => { 
                         this.updateSearch(event);
                        }} />
                <ul>{recipesList}</ul>
            </div>
          );
    
    };

    updateSearch(event) {
        this.setState({ searchTerm: event.target.value });
    };
    
}