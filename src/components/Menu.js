import React from 'react';
import css from '../App.css'
import angelFoodCake from '../components/img/angelFoodCake.jpg'

const Menu = ()=>{
    return (

<div class="menu" id="menu">
    <div className="dessert"> 
         <img src={angelFoodCake} alt="hhh"/>
        <p>Angel food cake, or angel cake, is a type of sponge cake made with egg whites, flour, and sugar. A whipping agent, such as cream of tartar, is commonly added. It differs from other cakes because it uses no butter. Its aerated texture comes
            from whipped egg white. Angel food cake originated in the United States and first became popular in the late 19th century. It gained its unique reputation along with its name due to its light and fluffy texture.
        </p> 
    </div> 

    <div className="dessert"> 
    <img src={angelFoodCake} alt=""/>
        <p>Angel food cake, or angel cake, is a type of sponge cake made with egg whites, flour, and sugar. A whipping agent, such as cream of tartar, is commonly added. It differs from other cakes because it uses no butter. Its aerated texture comes
            from whipped egg white. Angel food cake originated in the United States and first became popular in the late 19th century. It gained its unique reputation along with its name due to its light and fluffy texture.
        </p>

    </div>
    <div class="dessert">
    <img src={angelFoodCake} alt=""/>
        <p>Angel food cake, or angel cake, is a type of sponge cake made with egg whites, flour, and sugar. A whipping agent, such as cream of tartar, is commonly added. It differs from other cakes because it uses no butter. Its aerated texture comes
            from whipped egg white. Angel food cake originated in the United States and first became popular in the late 19th century. It gained its unique reputation along with its name due to its light and fluffy texture.</p>
    </div>
    <div class="dessert">
    <img src={angelFoodCake} alt="cake"></img>
        <p>Angel food cake, or angel cake, is a type of sponge cake made with egg whites, flour, and sugar. A whipping agent, such as cream of tartar, is commonly added. It differs from other cakes because it uses no butter. Its aerated texture comes
            from whipped egg white. Angel food cake originated in the United States and first became popular in the late 19th century. It gained its unique reputation along with its name due to its light and fluffy texture.</p>
    </div>
</div>
    )

}  
export default Menu;
