class Indecision extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOption=this.handleDeleteOption.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
    this.handlePick=this.handlePick.bind(this);
    this.handleAddOption=this.handleAddOption.bind(this);
    
    this.state={
      options:[]
    }
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

  handleDeleteOption(){
this.setState(()=>({options:[]}));
}

handleDelete(optionToRemove){
  this.setState((preState)=>({
    options: preState.options.filter(option => optionToRemove !== option)
  }));
}


  handlePick(){
          const random= Math.floor(Math.random() * this.state.options.length);
          const option=this.state.options[random];
          alert(option);

  }

  handleAddOption(option){
     if(!option){
      return 'enter the valid value to add item'
    }else if(this.state.options.indexOf(option) > -1){
      return 'this item alreadyexit'
    }

    this.setState((prestate)=>({options:prestate.options.concat(option)}));
  }

  render(){
    const subTitle = 'put yours life in code';
   

    return (
      <div>
        <Header subTitle={subTitle}/>
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
        <Options options={this.state.options} 
        handleDeleteOption={this.handleDeleteOption} 
        handleDelete={this.handleDelete}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>

    )
  }
}

const  Header=(props)=> {
    return (
        <div>
          <h1>{props.title}</h1>
          {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
)
  }

  Header.defaultProps={
    title:'indecision'
  }


const Action=(props)=>{

    return (
        <button onClick={props.handlePick} 
        disabled={!props.hasOptions}
        >what should i do</button>
    )
  }


const Options=(props)=>{
  
    return(
      <div>
      <button onClick={props.handleDeleteOption}>remove all</button>
        {props.options.length===0 && <p>please add an option to get started!</p>}
        {
          props.options.map(cur=>(
            <Option key={cur} 
            optionText={cur}
            handleDelete={props.handleDelete}
            />))
        }

      </div>

    )

  }


const Option = (props)=>{
      return(
      <div>
        { props.optionText }
        <button onClick={(e)=>{
          props.handleDelete(props.optionText)
        }} >X</button>        
      </div>
    )

  }

class AddOption extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOption=this.handleAddOption.bind(this);
    this.state={
      error:undefined
    }
  }
  handleAddOption(e){
    e.preventDefault();

    const option=e.target.elements.option.value.trim();
   const error= this.props.handleAddOption(option);
   
   this.setState(()=>({error:error}))


    if(!error){
          e.target.elements.option.value = '';
    }
    
  }

  render(){
    return(
      <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input type='text' name='option'></input>
          <button> add option</button>
          </form>
      </div>

    )

  }
}




ReactDOM.render(<Indecision/>,document.getElementById('app'));