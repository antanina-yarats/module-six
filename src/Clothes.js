import { Link } from 'react-router-dom';

function Clothes({bridge}) {

    return (
        <div className="products">
           {bridge.map( element => {
            const{id, name, searchTerm, price, image} = element;
            return (
                <div key={id} className="product-card">
                    <div>
                    <Link to={`/about/${element.title}`}>
                    <img src={image} width="300px" height="400px" alt="pic"/>
                    </Link>  
                    </div>

                    <div>
                     <p>{name}</p>
                     <p>{searchTerm}</p>
                     <p>{price}</p>
                     <p></p>
                    </div>

                </div>
            )
           })}
        </div>
    )
}

export default Clothes;