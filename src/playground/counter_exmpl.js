// let count=0;


// const add=()=>{
//   count++;
//   renderCounterApp();
//   console.log('add',count)}
// const minus=()=>{
//   count--;
//   renderCounterApp();

//   console.log('minusone',count)};
// const reset=()=>{
//   count=0;
//   renderCounterApp();
//   console.log('reset',count)}


// function renderCounterApp(){

//   const temp2=(
//   <div>
//       <h1>count:{count}</h1>
//       <button onClick={add}>+1</button>
//       <button onClick={minus}>-1</button>
//       <button onClick={reset}>reset</button>

//   </div>
// );

// const dom = document.getElementById("app");

// ReactDOM.render(temp2, dom);

// }

// renderCounterApp();



class Counter extends React.Component{
  constructor(props){
    super(props);
    this.HandleAddOne=this.HandleAddOne.bind(this);
    this.HandleMinusOne=this.HandleMinusOne.bind(this);
    this.HandleReset=this.HandleReset.bind(this);
    this.state={
      count:0
    };

  }


  componentDidMount(){
   const Scount =localStorage.getItem('number');
   const count=parseInt(Scount,10);

   if(!isNaN(count)){
     this.setState(()=>({count:count}))
   }
  
  }

  componentDidUpdate(preProps,preState){
    if(preState.count!== this.state.count){
      localStorage.setItem('number',this.state.count)
    }

  }

  HandleAddOne(){
    this.setState(prevState =>{
      return {
        count:prevState.count + 1
      };
    });

  };


  HandleMinusOne(){
    this.setState(prevState=>{
      return {
        count:prevState.count - 1
      };
    });

  };

  HandleReset(){
    this.setState(()=>{
      return {
        count:0
      }
    })

  }
  render(){
  
    return (
      <div>
        <h1>count:{this.state.count}</h1>
        <button onClick={this.HandleAddOne} >+1</button>
        <button onClick={this.HandleMinusOne}>-1</button>
        <button onClick={this.HandleReset}>reset</button>


      </div>

    )
  }
}


  ReactDOM.render(<Counter/>,document.getElementById('app'));






















