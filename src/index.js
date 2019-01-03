import React from 'react';
import ReactDOM from 'react-dom';
import './Reset.css';
import './index.css';
import logo from './assets/cutlery-circle.png';
// import App from './App';
// import * as serviceWorker from './serviceWorker';



const Header = (props) => (
    <div className="header">
        <img src={logo} alt="Cutlery"></img>
        <h1>Recipe App</h1> 
    </div>
);

const DirectoryView = (props) => (
    <div className="directoryContainer">
        <SearchForm searchVal={props.searchVal} handleChange={props.handleChange} clickHandler={props.clickHandler} />
        {props.selectedRecipes.map((recipe, i) => <RecipeCard name={recipe.name} id={recipe.id} clickHandler={props.recipeHandler} key={i} />)}
    </div>
);

const DetailView = (props) => (
    <div className="detailview">
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
    <div>
        <form>
            <input className="input" placeholder="Search for recipe.."value={props.searchVal} onChange={props.handleChange} />
            {/* <button>Search</button> */}
            <button className="button" onClick={props.clickHandler}>SEARCH</button>
        </form>
    </div>
);

const RecipeCard = (props) => (
    <div className="recipecard">
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
            { id: 1, name: 'Gluten-Free Chicken and Vegetable Soup', ingredients: ['2 boneless skinless chicken breasts', '1 large golden yam (white sweet potato), peeled and chopped', '2 carrots, peeled and chopped', '1 onion, chopped', '2 bay leaves', '1 tbs dry parsley', '1 tsp dry thyme', '1 tsp turmeric', '1 tsp salt', '8 cups of chicken broth', 'fresh ground black pepper for serving'], instructions: ['1. Place chicken breasts, sweet potato, carrots, onion, bay leaves, parsley, thyme, turmeric, and salt to slow cooker.', '2. Add chicken broth. Stir.', '3. Cover and cook on low for 8-10 hours, or on high for 4-5 hours.', '4. Uncover, take out and shred chicken, and place back into the slow cooker.  Stir and serve with fresh ground pepper.'] },
            { id: 2, name: 'Whole30 Beef Stew', ingredients: ['2 lbs beef stew meat', '2 tbsp arrowroot powder', '1/2 tbsp + 1 tsp salt', '1 tsp + 1/2 tsp ground black pepper', '1 1/2 tbsp cooking fat', '1 large onion diced', '1 large carrot minced', '1 stalk celery minced', '4 cloves garlic minced', '2 tbsp tomato paste', '2 bay leaves', '1 tsp dried thyme leaves', '2 tablespoons balsamic vinegar', '2 cups chicken broth', '4 medium potatoes scrubbed and cut into 2-inch chunks', '1/4 cup fresh parsley leaves, coarsely chopped'], instructions: ['1. Pat beef dry with paper towels. In a large bowl, mix arrowroot, 1/2 tbsp salt, and 1 tsp black pepper. Add the beef and toss until coated.', '2. Heat a Dutch oven or soup pot over medium-high heat. Add the cooking fat and allow to melt, then add the beef and brown on all sides. Give the meat plenty of breathing room so it forms a nice crust; you might have to cook it in two batches. As it browns, remove the meat to a bowl.', '3. When the meat is browned, add the onion, carrot, celery, and garlic to the same pan. (If it’s dry, add another teaspoon or two of cooking fat). Sauté the vegetables until they’re soft and golden, about 10 minutes. Add the tomato paste, 1 tsp salt, 1/2 tsp black pepper, bay leaves, and thyme. Cook, stirring often, about 2 minutes. Pour in the vinegar and broth; stir to combine, then add the beef and accumulated juices to the pot. Cover and simmer 1 hour.', '4. Add the potatoes to the pot and simmer another hour, until the meat and potatoes are tender.', '5. Simmer uncovered 5-10 minutes to thicken the gravy, then sprinkle with minced parsley before serving.'] },
            { id: 3, name: 'Turkey Tacos', ingredients: ['1 lb ground turkey', '1 head romaine lettuce', '1 avacado', '1 red bell pepper chopped', '1 bunch green onions', '1 tbsp chili powder', '1/4 tsp garlic powder', '1/8 tsp onion powder', '1/4 tsp crushed red pepper flakes', '1/4 tsp dried oregano', '1/2 tsp paprika', '1/2 tsp ground cumin', '1/2 tsp sea salt', '1/2 tsp black pepper', 'cilantro for garnish'], instructions: ['1. Brown turkey in skillet and add spices.', '2. Separate Romaine lettuce leaves and layer with taco meat, green onions, red pepper, sliced avacado and cilantro.', '3. Serve with hot sauce or salsa if desired.'] },
            { id: 4, name: 'Cranberry Walnut Chicken Salad', ingredients: ['1 1/4 cups cooked chopped chicken breast', '1/2 cup toasted walnuts chopped', '6 tbsp unsweetened dried cranberries', '1 large stalk celery finely chopped', '1/2 medium white onion finely chopped', '2 tbsp chopped fresh parsley leaves', '1/2 cup plain greek yogurt', '1 tbsp organic raw unfiltered apple cide vinegar', '1 tsp raw honey', '1/4 tsp salt', '1/8 tsp black pepper'], instructions: ['Toss together all ingredientsin a large bowl; serve chilled.'] },
            { id: 5, name: 'Paleo Chili', ingredients: ['2 lbs extra lean ground beef', '1 cauliflower head minced', '1 small red bell pepper diced', '1 small yellow bell pepper diced', '1 large yellow onion chopped', '1 large tomato chopped', '4 medium garlic cloves minced', '46 ounces vegetable juice', '2 tbsp olive oil', '3 tbsp ground cumin', '3 tbsp dried oregano', '3 tbsp chili powder', '1 tsp paprika', '1/2 tsp ground pepper', '1 tsp sea salt', '2 tbsp coconut aminos'], instructions: ['In a large skillet brown the ground beef over high heat together with the onions.', 'Then transfer the ground beef to a large soup pot.', 'Next, saute the diced peppers until slightly carmalized then transfer to the soup pot.', 'Saute the minced califlower until slightly softened but not mushy and transfer to the soup pot.', 'Combine all remaining ingredients in the soup pot and cook until soup reaches desired consistency.'] },
            { id: 6, name: 'Whole30 Breakfast Hash', ingredients: ['2 sweet potatos cut into cubes', '1 red bell pepper chopped', '1 yellow onion chopped', '4 aidells chicken and apple sausages', 'olive oil', 'salt', 'pepper'], instructions: ['Preheat oven to 420', 'Place chopped potatoes and vegetables on a sheet pan and drizzle with enough olive oil to coat.', 'Season with salt and pepper', 'Place sausages on the same sheet pan', 'Cook at 420 for 30 to 45 minutes until done'] },
            { id: 7, name: 'Whole30 Paleo Shepherd\'s Pie', ingredients: ['3 tbsp avocado oil or ghee', '1/2 cup yellow onions diced', '4 carrots diced', '6 garlic cloves minced', '2 red bell peppers diced', '16 ounces mushrooms sliced', '2 pounds grass-fed ground beef', '1 tsp sea salt', '1/2 tsp black pepper', '1 tsp onion powder', '1 tsp ground ginger', '1 cup bone broth', '6 oz tomato paste', '1/2 tsp fish sauce', 'sea salt and black pepper to taste', '2 lbs large white sweet potatoes', '8 garlic cloves peeled', '1/4 cup canned cocunut milk', '2 tbsp EVOO'], instructions: ['Ground Beef Mixture:', '1. Melt the oil in a large enameled cast-iron pot or saucepan over medium-high heat.', '2. Add the onions and carrots. Stir fry for 5-7 minutes until onions are translucent. Add the garlic cloves and stir frequently for 30 seconds, making sure it does not burn. Add in bell peppers and mushrooms. Cook for another 5 minutes with the lid on, until mushrooms begin to release water.', '3. Add the other tablespoon of oil and ground beef, along with the salt, pepper & seasonings. Cook over medium heat, stirring regularly to break up the meat well, until all of the moisture has evaporated and some pieces are starting to develop a brown color.', '4. Add in the tomato paste, bone broth and fish sauce. Stir well to combine and set aside.', 'Sweet Potato Mash:', '1. Preheat the oven to 350 degrees Fahrenheit and adjust the oven rack to the middle position. Wash and dry sweet potatoes. Peel and cut into 1-inch pieces.', '2. Bring cold water to a boil in a large saucepan. Add the potatoes, garlic and about 2 teaspoons salt. Cook at a rolling simmer until potatoes are fork tender. This will take about 15 minutes.', '3. Drain potatoes and garlic, reserving about 1 cup of the cooking liquid. Mash potatoes and garlic together. Add in the coconut milk and mix in the olive oil and thin to desired consistency with reserved cooking liquid. Check for salt and pepper seasoning. Spread the potato mash over the meat mixture.', '4. Bake for 30 minutes and let cool for 10 minutes. Garnish with chopped parsley and a bit more of drizzled olive oil and serve!'] },
            { id: 8, name: 'Fajita Bowls with Cauliflower Rice', ingredients: ['1 tsp minced garlic', '1 lb lean ground beef, turkey or chicken', '1/2 small yellow onion minced', '1 red bell pepper chopped', '1 yellow bell pepper chopped', '1 green bell pepper chopped', '1 orange bell pepper chopped', '1 lime sliced into 4 wedges for garnish', 'handful of chopped fresh cilantro for garnish', 'fajita seasoning:', '2 tsp chili powder', '1 tsp ground cumin', '1 tsp garlic powder', '1 tsp paprika', '1/2 tsp salt', '1/4 tsp black pepper', 'cauliflower rice', '2 tbsp olive oil', '4 cups raw cauliflower rice', 'salt as needed'], instructions: ['1. In a small bowl, add fajita seasoning ingredients. Mix with a small whisk and set aside.', '2. In a large skillet add garlic, ground beef and onion. Bring pan to medium high heat. Stir and cook, crumbling the beef as you cook. When beef is almost finished, add in fajita seasoning and bell peppers. Stir while cooking so that all the ingredients are evenly coated in seasoning. Cook until peppers are tender, onions are translucent, and beef is fully cooked. Remove from heat.', '3. In a separate skillet, prepare the cauliflower rice. Add in oil and bring to medium high heat. Add in cauliflower rice and cook until cauliflower is tender. Season with salt as needed.', '4. When rice and beef have cooled, divide the cauliflower rice evenly across four containers. Then add ground beef fajitas mixture over rice, dividing evenly. Store lime and cilantro in a separate container or bag. Store in fridge or freezer. When ready to eat, re-heat food. Garnish with chopped cilantro. Squeeze fresh lime juice over food.'] },
            { id: 9, name: 'Cauliflower Bread Buns', ingredients: ['3 cups finely riced cauliflower', '2 large eggs', '1/2 cup shredded parmesan cheese', '2 tbsp almond flour', '2 tbsp coconut flour', '1/2 tsp baking powder', '1/2 tsp dry Italian seasoning herb blend', '1 tsp white sesame seeds'], instructions: ['1. Preheat oven to 400°F. In a large bowl, combine cauliflower, eggs, cheese, almond flour, coconut flour, baking powder, italian seasoning. Mix with a large spoon until everything is thoroughly mixed. The mixture should be wet but not liquid.', '2. Grease the cavities of a muffin top pan. If you don\'t own a muffin top pan, you can also make free-form ones on a baking sheet lined with parchment paper or silicone baking mat.', '3. Measure out 1/2 cup lightly packed cauliflower mix. Dump onto muffin mold or onto a baking sheet and press down on the middle with the palm of your hand. If you are using muffin top pan, evenly spread the cauliflower across the mold and compact it down slightly with your knuckles or fingers so that the crumbs of the bread will be tight. If using a baking sheet, press down on the mixture with the palm of your hand and then spread and shape to form a round disc 4 inches wide and slightly more than 1/2 inch high. Compact down the cauliflower mix gently with your fingers or knuckles so that the crumbs of the cauliflower buns will be tight. Sprinkle tops of bread buns with sesame seeds.', '4. Bake for 20-25 minutes or until tops are golden and cauliflower breads are completely cooked. Use a thin spatula to gently loosen the bottoms of the cauliflower breads (I recommend using a good silicone cookie spatula which usually has a very thin edge that glides easily underneath.) Allow breads to cool slightly before eating.'] },
            { id: 10, name: 'Lemon Garlic Butter Steak and Zucchini Noodles', ingredients: ['1 1/2 lb flank steak sliced against the grain', '4 medium zucchini', '2 tbsp olive oil', '4 garlic cloves, minced', '2 tbsp ghee', '1 lemon, juice and zest', '1/4 cup low-sodium chicken broth', '1/4 cup chopped parsley', '1/4 tsp crushed red pepper flakes', 'Salt and fresh cracked pepper to taste', '1/3 cup coconut amino', '1/4 cup lemon juice', '1/2 cup olive oil', '1 tbsp Sriracha sauce (or any hot chili sauce)'], instructions: ['1. Combine marinade ingredients: Coconut aminos, lemon juice, olive oil and sriracha sauce in an airtight container or a Ziploc bag. Add steak strips to the marinade, seal and marinate in the refrigerator for 30 minutes to one hour.', '2. In the meantime, wash and trim the ends of the zucchini. Using a spiralizer, make the zucchini noodles, then set aside.', '3. Bring the steak to room temperature and heat oil in a large skillet over medium-high heat — reserve the juices of the marinade for later. Add the steak strips in one layer and season with salt and pepper. Cook for one minute without stirring.', '4. Add minced garlic, then stir the steak for another minute or two to cook the other side. Remove the steak from the skillet and set aside to a plate.', '5. In the same skillet, add ghee, lemon juice and zest, red pepper flakes, chicken broth, and remaining marinade juices. Bring to a simmer and allow to reduce for 2-3 minutes, stirring regularly.', '6. Stir in fresh parsley, add the zucchini noodles and toss for two to three minutes to cook it up. Allow the cooking juices to reduce for one minute if the zucchini renders too much water. Add the steak strips back to the pan and stir for another minute. Serve immediately.'] },
            { id: 11, name: 'Breakfast Egg Muffins', ingredients: ['1 tbsp olive oil', '1 large sweet onion chopped', '1 green pepper chopped', '1 red pepper chopped', '12 large eggs whisked', '1/2 tsp black pepper', '1/2 tsp salt'], instructions: ['1. Prehead oven to 350F', '2. Saute onions in olive oil over medium-high heat for 2-3 minutes. Add peppers and continue cooking for another 2-3 minutes.', '3. While onions/peppers are cooking, whisk eggs in large bowl.', '4. Once onions/peppers are cooked, remove from heat and let cool for a few minutes.  Dump onions/peppers in egg bowl (once cooled) and combined well.  Season with salt and pepper.', '5. Coat a large muffin pan with olive oil or coconut oil. Fill each muffin cup with 1/4 cup of egg mixture.', '6. Place in oven for 10-15 minutes. Remove once the tops are fluffy and golden brown. Pop them out with a butter knife or thin spatula.'] },
            { id: 12, name: 'Brownies by Bikini Body Mommy', ingredients: ['2 1/2 cups shreeded sweet potato', '2 whole eggs', '2 tsp vanilla extract', '1/2 cup raw honey melted in microwave if its too thick', '1/2 cup EVOO', '1 tbsp gluten free baking powder', '1/2 tbsp baking soda', '3/4 cup unsweetened cocoa powder', '2 tbsp coconut flour'], instructions: ['1. Preheat oven to 365 F. Make sure oven is hot before putting brownies in.', '2. Combine shredded sweet potato, eggs, vanilla, honey and olive oil in large mixing bowl, stir together until incorporated. Add baking powder and baking soda. Stir. Add cocoa powder. Stir. Add coconut flour a little at a time until mixed.', '3. Once mixed, pour mixture into square greased baking pan.', '4. Cook 25-30 minutes. Remove and cool for 5-10 minutes then cut into squares.'] },
            { id: 13, name: 'Baked Simple Salmon', ingredients: ['8 oz wild salmon', '1/2 lemon sliced thin', '1/2 tbs capers', 'salt and peper to taste', '1/2 tbs fresh thyme', 'olive oil for drizzling'], instructions: ['Line a rimmed baking sheet with parchment paper and place salmon, skin side down, on prepared baking sheet.', 'Generously season salmon with salt and pepper', 'Arrange capers on the salmon, and top with sliced lemon and thyme.', 'Place baking sheet in a cold oven, then turn heat to 400 degrees. Bake for 25 minutes. Serve immediately.'] },
            { id: 14, name: 'Paleo Mayo', ingredients: ['1 egg', '1 tbsp dijion mustard', '1/2 cup avacado oil'], instructions: ['1. In a blender add egg and mustard. Mix until combined.', '2. With the blender running on low, slowly add the oil until mixture is thick and creamy.', '3. Store in glass container in refrigerator.'] },
            { id: 15, name: 'Salad Dressing', ingredients: ['1 cup EVOO', '1/4 cup balsamic vinegar', '1 garlic clove minced', '1 tsp raw honey', '1 tbsp lemon juice', '1 tsp sea salt', '1/2 tsp fresh ground black pepper', '1 tsp dried herbs of choice (basil, thyme, chives, rosemary, oregano, tarragon)'], instructions: ['1. Whisk vinegar, mustard, garlic, honey, lemon juice until blended.', '2. Gradually add olive oil while whisking.', '3. Add salt, pepper and herbs to taste.', '4. Store in refrigerator.'] },
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
        this.setState({ chosenRecipe: this.state.recipes.find(recipe => recipe.id === id) })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="content">
                    <div>
                        <DirectoryView
                            recipes={this.state.recipes}
                            searchVal={this.state.searchVal}
                            handleChange={this.handleChange}
                            selectedRecipes={this.state.selectedRecipes}
                            clickHandler={this.selectedRecipes}
                            recipeHandler={this.chooseRecipe}
                        />
                    </div>
                    {/* <DetailView recipe={this.state.recipes[1]}/> */}
                    <div>
                        <div>
                            <DetailView recipe={this.state.chosenRecipe} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
