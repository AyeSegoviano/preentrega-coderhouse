import { Link } from 'react-router-dom'


const Item = ({ id, name, img, description, price }) => {
   
    return (

        <div className="section-container">
    <div className="card-container">
        <div className="card">
                <img className="card-img-top" src={img} alt={name} />
            <div className="card-body">
                 <h3 className="card-title">{name}</h3>
                 <p className="card-text">{description}</p>

                 <button className="btn-ver-receta">
                 <Link to={ `/detail/${id}` } className="btn-ver-receta">Ver detalle</Link>
                    </button>
            </div>
        </div>
    </div> 
</div>
    );
};


export default Item;