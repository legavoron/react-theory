import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
// import Counter from './Counter/Counter';
import About from './About/About';
import Cars from './Cars/Cars';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";


export const ClickedContext = React.createContext(false);

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      clicked: false,
      cars: [
        {name: 'Ford', year: 2018},
        {name: 'Audi', year: 2016},
        {name: 'Mazda', year: 2010}
      ], 
      pageTitle: 'React components',
      showCars: false,
      showAbout: false
    } 
  }
  

  onChangeName = (name, index) => {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;

    this.setState({
      cars
    })
  }

  toogleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);

    this.setState({cars})
  }

  
  render() {
    const divStyle = {
      textAlign: 'center'
    }
    
    let cars = this.state.cars.map((car, index) => {
          return (
               <Car 
                key={index}
                name={car.name}
                year={car.year}
                index={index}
                onChangeName={event => this.onChangeName(event.target.value, index)}
                onDelete={this.deleteHandler.bind(this, index)}
              />
          )
    })
    
    return (
      <div style={divStyle}>

        <nav className='nav'>
          <ul>
            <li>
              <NavLink to="/" className={(navData) => navData.isActive ? "active" : ""}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={(navData) => navData.isActive ? "active" : "" }>About</NavLink>
            </li>
            <li>
              <NavLink to="/cars">Cars</NavLink>
            </li>
          </ul>
        </nav>

        <div style={{width: '300px', border: '1px solid black', margin: '0 auto', borderRadius: '5px'}}>
          <h3>This page is {this.state.showAbout ? 'True' : 'False'}</h3>
          <button style={{margin: '15px 0'}} onClick={()=> this.setState({showAbout: !this.state.showAbout})}>Click</button>
        </div>

          <Routes>
            <Route path="/"  element={ <h1>Hello World</h1>} />
            {
              this.state.showAbout ? <Route path="/about"  element={<About/>} /> : null
            }
            <Route path="/cars"  element={<Cars carsList={cars}/>} />
          </Routes>
         
      </div>
    )
  }
}




export default App;


// let cars = null

    // if (this.state.showCars) {
    //   cars = this.state.cars.map((car, index) => {
    //     return (
    //       <ErrorBoundary key={index}>
    //         <Car 
    //           name={car.name}
    //           year={car.year}
    //           index={index}
    //           onChangeName={event => this.onChangeName(event.target.value, index)}
    //           onDelete={this.deleteHandler.bind(this, index)}
    //       />
    //       </ErrorBoundary>
          
    //     )
    //   })





    {/* <h1>{this.props.title}</h1>
       
        <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider>
        
        <hr/>
        <button 
          style={{marginTop: '20px'}}
          onClick={this.toogleCarsHandler}>
            Toogle Cars
        </button>

        <button onClick={() => this.setState({clicked: true})}>Change Click</button>
        <div style={{
          width: 300,
          margin: '0 auto',
          paddingTop: '20px'
        }}>
          {cars}
        </div> */}