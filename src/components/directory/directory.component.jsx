import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections : [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',                                      // We pass size because we want last
                  id: 4,                                              // two components to appear big and use css for the same.
                },                                                    // using this size property.
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                }
              ]
        }
    }
    render(){
        return(
            <div className = 'directory-menu'>
                {
                    this.state.sections.map(({title,imageUrl,id,size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size = {size} />
                    ))
                }
            </div>
        )
    }
}


export default Directory;
