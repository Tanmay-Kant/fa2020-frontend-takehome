/*'use strict';

const Table = () => {

    const URL = 'https://founders-takehome-api.herokuapp.com/api/fetch'
	let foods = [];
	const getRows = (item)=> {
	return item.map((key, index)=>{
	return <td key={index}> {key.name}</td>
	})
	} 
	
	fetch(URL)
  .then(response => response.json())
  .then(data => {
  foods = data.foods;
  console.log(foods)
  });
 TDLR ^^^^ this was all experimentation that clearly didn't work
  */
    /*
    ^^^^
        TODO:

        Make a GET request to `https://founders-takehome-api.herokuapp.com/api/fetch` (initialized as `URL`)
        Process response data into an HTML table

        Feel free to delegate to as many components as you like or make Table a class-based components.
    */

   /* return (
        <section>
            <table>
                {/* Table Contents *}
                <tr>
                <getRows data={foods}/>
                </tr>
            </table>
        </section>
    )
    More not working stuff from earlier iterations
} */

class Table extends React.Component {
    state = {
        foods: []
    }
    //used componentDidMount since it loads first
    componentDidMount() {
        fetch('https://founders-takehome-api.herokuapp.com/api/fetch')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    foods: data.foods
                })
            });
    }
    render() {
        return (
            <table>
                <tbody>
                    {this.state.foods.map((food, index) =>
                        <tr key={index}>
                            <td>{food.calories}</td>
                            <td>{food.carbohydrates}</td>
                            <td>{food.name}</td>
                            <td>{food.quantity}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
}

const domContainer = document.querySelector('#table');
ReactDOM.render(<Table />, domContainer);