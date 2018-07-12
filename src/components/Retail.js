import React from 'react'
import PropTypes from 'prop-types'



const Retail = ({ retail }) => {
        console.log(retail); 
        const {stores = []} = retail;
        return (
        <div>
            <ul>
                {retail.map(store => ( 

                    <li key={store.name}>
                    <a href={store.url} target="_blank" rel="noopener noreferrer">{store.name}</a>                                           
                    </li>
                 ))}
            </ul>    
        </div>
        )
    }  



Retail.propTypes = {
    retail: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            url: PropTypes.string,
        })
    )
}

export default Retail