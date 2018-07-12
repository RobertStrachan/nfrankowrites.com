import React from 'react'
import config from '../../data/SiteConfig'



const RetailLinks = ({
  retailIndex
}) => {

    const links = config.retailLinks[retailIndex].stores;
    const stores = links.map((links) =>
        <li><a href={links.url} target="_blank" rel="noopener noreferrer">{links.store}</a></li>

    );


    return (
        <div>
        <h1>Buy My Books</h1>
        <ul>{stores}</ul>
        </div>

    )

}

export default RetailLinks