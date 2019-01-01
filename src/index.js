import React from 'react';
import ReactDOM from 'react-dom';
import './Reset.css';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';



const DirectoryView = (props) => (
    <div>
    <SearchForm searchVal={props.searchVal} handleChange={props.handleChange} clickHandler={props.clickHandler}/>
    {props.selectedRecipes.map((recipe, i) => <RecipeCard name={recipe.name} id={recipe.id} clickHandler={props.recipeHandler} key={i}/>)}
    </div>
);

const DetailView = (props) => (
    <div>
        <p>{props.recipe.name}</p>
        <ol>
            {props.recipe.ingredients.map((ingredients, i) => <li key={i}>{ingredients}</li>)}
        </ol>
        <ol>
            {props.recipe.instructions.map((instructions, i) => <ol key={i}>{instructions}</ol>)}
        </ol>
    </div>
)

const SearchForm = (props) => (
    <form>
        <input value = {props.searchVal} onChange={props.handleChange} />
        {/* <button>Search</button> */}
        <button className="btn btn-primary" onClick={props.clickHandler}>Search</button>
    </form>
);

const RecipeCard = (props) => (
    <div>
        <p onClick={() => props.clickHandler(props.id)}>{props.name}</p>
    </div>
);

/* <RecipeCard /> */
    //     {<h2>Recipe Results:</h2>
    //      {props.recipeList.map((recipe, i) => (
    //          <RecipeCard id={recipe.id}
    //          name={recipe.name}
    //          ingredients={recipe.ingredients}
    //          instructions={recipe.instructions}
    //          key={i} 
    //     />))} }
    //     {<button onClick={props.handler}> </button> }

class App extends React.Component {
    state = {
        recipes: [
            {id: 1, name: 'Chicken Noodle Soup', ingredients: ['noodles', 'chicken', 'broth', 'carrots'], instructions: ['open can', 'pour contents into sauce pan', 'heat contents over medium heat until desired temperature reached']},
            {id: 2, name: 'Beef Noodle Soup', ingredients: ['noodles', 'beef', 'broth', 'carrots'], instructions: ['open can', 'pour contents into sauce pan', 'heat contents over medium heat until desired temperature reached']},
            {id: 3, name: 'Beef Stew', ingredients: ['beef', 'broth', 'carrots', 'potato'], instructions: ['open can', 'pour contents into sauce pan', 'heat contents over medium heat until desired temperature reached']},
            {id: 4, name: 'Chicken Noodle Soup', ingredients: ['noodles', 'chicken broth', 'carrots'], instructions: ['open can', 'pour contents into sauce pan', 'heat contents over medium heat until desired temperature reached']},
            {id: 5, name: 'Chicken Noodle Soup', ingredients: ['noodles', 'chicken broth', 'carrots'], instructions: ['open can', 'pour contents into sauce pan', 'heat contents over medium heat until desired temperature reached']},
            {id: 6, name: 'Chicken Noodle Soup', ingredients: ['noodles', 'chicken broth', 'carrots'], instructions: ['open can', 'pour contents into sauce pan', 'heat contents over medium heat until desired temperature reached']},
            {id: 7, name: 'Chicken Noodle Soup', ingredients: ['noodles', 'chicken broth', 'carrots'], instructions: ['open can', 'pour contents into sauce pan', 'heat contents over medium heat until desired temperature reached']},
            {id: 8, name: 'Chicken Noodle Soup', ingredients: ['noodles', 'chicken broth', 'carrots'], instructions: ['open can', 'pour contents into sauce pan', 'heat contents over medium heat until desired temperature reached']},
            {id: 9, name: 'Chicken Noodle Soup', ingredients: ['noodles', 'chicken broth', 'carrots'], instructions: ['open can', 'pour contents into sauce pan', 'heat contents over medium heat until desired temperature reached']},
            {id: 10, name:'Chicken Noodle Soup', ingredients: ['noodles', 'chicken broth', 'carrots'], instructions: ['open can', 'pour contents into sauce pan', 'heat contents over medium heat until desired temperature reached']},
            {id: 11, name:'Chicken Noodle Soup', ingredients: ['noodles', 'chicken broth', 'carrots'], instructions: ['open can', 'pour contents into sauce pan', 'heat contents over medium heat until desired temperature reached']},
            {id: 12, name: 'Chicken Noodle Soup', ingredients: ['noodles', 'chicken broth', 'carrots'], instructions: ['open can', 'pour contents into sauce pan', 'heat contents over medium heat until desired temperature reached']},
            {id: 13, name: 'Chicken Noodle Soup', ingredients: ['noodles', 'chicken broth', 'carrots'], instructions: ['open can', 'pour contents into sauce pan', 'heat contents over medium heat until desired temperature reached']},
            {id: 14, name: 'Chicken Noodle Soup', ingredients: ['noodles', 'chicken broth', 'carrots'], instructions: ['open can', 'pour contents into sauce pan', 'heat contents over medium heat until desired temperature reached']},
            {id: 15, name: 'Chicken Noodle Soup', ingredients: ['noodles', 'chicken broth', 'carrots'], instructions: ['open can', 'pour contents into sauce pan', 'heat contents over medium heat until desired temperature reached']},
        ],
        searchVal: '',
        selectedRecipes: [],
        chosenRecipe: {
            id: '',
            name: '',
            ingredients: [],
            instructions: []
        }
    }

    handleChange = (event) => { //Setting state with the search value
        console.log(event.target.value); //Only need this for change handlers
        this.setState({ searchVal: event.target.value });
    }

    selectedRecipes = (event) => { //Setting state based on search function
        event.preventDefault();
        this.setState({ selectedRecipes: this.state.recipes.filter(recipe => recipe.name.toLowerCase().includes(this.state.searchVal.toLowerCase())) });
    }
    
    chooseRecipe = (id) => {
        console.log(id);
        this.setState({chosenRecipe: this.state.recipes.find(recipe => recipe.id === id)})
    }

    render() {
        return (
            <div>
                <DirectoryView
                recipes = {this.state.recipes} 
                searchVal ={this.state.searchVal}
                handleChange={this.handleChange}
                selectedRecipes={this.state.selectedRecipes}
                clickHandler={this.selectedRecipes}
                recipeHandler={this.chooseRecipe}
                />
                {/* <DetailView recipe={this.state.recipes[1]}/> */}
                <DetailView recipe={this.state.chosenRecipe}/>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
