import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import SHOP_DATA from '../../pages/shop/shop.data.js'

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
  	super()
  	this.state ={
  		sections: SHOP_DATA
  	} 	
  }


  render() {
  	const { sections } = this.state
	  return (
	  		<div className='directory-menu'>
	  			{ sections.map(section => {
	  				return <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size}/>
	  			})		
	  			}
	      	</div>
	  	)
  }
}

export default Directory