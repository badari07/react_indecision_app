import React from 'react';
import Option from './Option';



const Options=(props)=>(
      <div>
      <div className='widget-header'>
          <h3 className='widget-header__title'>your option</h3>
          <button className='button button--link' onClick={props.handleDeleteOption}>remove all</button>  
      </div>
      
        {props.options.length===0 && <p className='widget__massage'>please add an option to get started!</p>}
        {
          props.options.map((cur,index)=>(
            <Option key={cur} 
            optionText={cur}
            count={index + 1}
            handleDelete={props.handleDelete}
            />))
        }

      </div>

    )

  export default Options;