import React from 'react'
import PropTypes from 'prop-types'



const Retail = ({ retail }) => 

(
        
        <div>
            <li>
                {retail.map(store => (  
                    <ul key={store.name}>
                    <a href={store.url} target="_blank" rel="noopener noreferrer">{store.name}</a>                                           
                    </ul>
                 ))}
            </li>    
            <h1>hi</h1>
        </div>

    )

Retail.propTypes = {
    retail: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            url: PropTypes.string,
        })
    )
}

export default Retail