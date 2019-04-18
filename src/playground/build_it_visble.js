// const details=()=> {
//   visblity=!visblity;
//   run();

// };

// let visblity=true;

// const run=()=>{
// const visible=(
//     <div>
//     <h1>visiablity toggle</h1>
//     <button onClick={details}>{visblity ? 'hide details':'show details'}</button>
//     {visblity && 
//         <p>this is my 1st react</p>
//      }
//     </div>

// );


// const dom=document.getElementById('app');

// ReactDOM.render(visible,dom);

// }

// run();


class VisblityToggle extends React.Component{
  constructor(props){
    super(props);
    this.handleToggleVisiablity=this.handleToggleVisiablity.bind(this);
    this.state={
      visiablity:false
    };
  }

  handleToggleVisiablity(){
    this.setState(prestate=>{

     return{
        visiablity:!prestate.visiablity
      };
    })
  }


  render(){
    return (
          <div>
            <h1>visiablity toggle</h1>
            <button onClick={this.handleToggleVisiablity}>{this.state.visiablity ? 'hide detaile': 'show details'}</button>
                 {this.state.visiablity && 
                       <p>this is my 1st react</p>
              }
          </div>

    )
  }
}

ReactDOM.render(<VisblityToggle/>,document.getElementById('app'));
