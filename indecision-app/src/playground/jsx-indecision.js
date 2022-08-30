//jsx
// if statements
// ternary statements
// logical and operators

const app = {
    title: 'Indecision App',
    subTitle: 'Putting my life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) =>{
    // error handling?
    e.preventDefault();

    // e.target will point to the event that the form started on
    // .elements contains list of elements indexed by name, option
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }

};

const appRoot = document.getElementById('app');

const removeAll = () => {
    app.options = [];
    render();
};

const numbers = [55, 101, 1000];

const makeDecision = () =>{
    const randNum = Math.floor(Math.random(0, 1) * app.options.length);
    const option = app.options[randNum];
    alert(option);
};



const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {(app.subTitle) && <p>{app.subTitle}</p>}
            {(app.options.length > 0) ? <p>Here are your options: </p> : 'No Options'}
            <p>{app.options.length}</p>

            <button disabled={(app.options.length == 0)} onClick={makeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>

            {
                /*numbers.map((number) => {
                    return <p key={number}>Number: {number}</p>
                })*/
            }

            <ol>
                {app.options.map((option)=>{
                    return <li key={option}>{option}</li>
                    
                    })
                }
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'></input>
                <button>Add Option</button>
            
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};


render();