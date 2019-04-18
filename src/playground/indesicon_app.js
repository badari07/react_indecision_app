
const app= {
  title:'indedecion app',
  subtitle:'put your lifr in code!',
  options:[]
};

const onFormSubmit=(e)=>{
const option=e.target.elements.option.value;
if(option){
  app.options.push(option);
  e.target.elements.option.value='';
}

    e.preventDefault();

    render();
}

const onMakeDecision=()=>{
  const random= Math.floor(Math.random() * app.options.length);
  const option=app.options[random];
  alert(option);

}

const remove=()=>{
  app.options=[];
  render();
};

const render=()=>{
  const temp=(
    <div>
        <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'here is your options': 'no options'}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length===0}  onClick={onMakeDecision}>what should i do</button>
      <button onClick={remove}>remove all</button>
      <ol>
       {
        app.options.map(cur=> <li key={cur}>{cur}</li>)
       }
      </ol>
    <form onSubmit={onFormSubmit}>
    <input type='text' name='option'></input>
    <button>add option</button>

    </form>
    </div>
  );
  const dom=document.getElementById('app');

  ReactDOM.render(temp,dom);

  }

  render();