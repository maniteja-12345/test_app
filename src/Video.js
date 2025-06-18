import './App.css';

export default function Video({title , id, image}){
    function addToCart(){
        
    }

    return (
        <div className="container" key={id}> 
            <img  className='image' src={image} alt={id}></img>
            <div key={id}>{title}</div>
            <button  onClick={addToCart}>Add to Cart</button>
        
        </div>
    )
}
