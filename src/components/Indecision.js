import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';



class Indecision extends React.Component {
  state ={
      options:[],
      selectedOption:undefined
    };
 
  handleDeleteOption =()=>{
this.setState(()=>({options:[]}));
}

handleDelete=(optionToRemove)=>{
  this.setState((preState)=>({
    options: preState.options.filter(option => optionToRemove !== option)
  }));
}


  handlePick=()=>{
          const random= Math.floor(Math.random() * this.state.options.length);
          const option=this.state.options[random];
          this.setState(()=>({selectedOption:option}))

  }

  handleAddOption=(option)=>{
     if(!option){
      return 'Enter the valid value to add item'
    }else if(this.state.options.indexOf(option) > -1){
      return 'This item already exit'
    }

    this.setState((prestate)=>({options:prestate.options.concat(option)}));
  }

handleModal=()=>{
  this.setState(()=>({selectedOption:undefined}))


}

  componentDidMount(){
   try{
   const json=localStorage.getItem('options');
   const options=JSON.parse(json);
if(options){
        this.setState(()=>({options:options}));
}
 }
catch(e){
  console.log(e)
}
 }

 componentDidUpdate(preProps,preState){
   if(preState.options.length !== this.state.options.length){
     const json=JSON.stringify(this.state.options);
     localStorage.setItem('options',json);
   }
   
 }

 componentWillMount(){

 }


  render(){
    const subTitle = 'put yours life in the hands of a computer';
   

    return (
      <div>
        <Header subTitle={subTitle}/>
        <div className='container'>
          <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
          <div className='widget'>
            <Options options={this.state.options} 
            handleDeleteOption={this.handleDeleteOption} 
            handleDelete={this.handleDelete}/>
            <AddOption handleAddOption={this.handleAddOption}/>

          </div>
          
        </div>
      
        <OptionModal handleModal={this.handleModal} selectedOption={this.state.selectedOption}/>
      </div>

    )
  }
}

export default Indecision;