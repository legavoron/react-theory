import React from 'react'
import classes from './Car.module.css'
import withClass from '../hoc/withClass';
import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom'


class Car extends React.Component {

    constructor(props) {
        super(props)

        this.inputRef = React.createRef();
    }

    componentDidMount() {
        if(this.props.index === 0) {
            this.inputRef.current.focus();
        }
    }

  render() {
    
    const inputClasses = [classes.input]

    if (this.props.name !== '') {
      inputClasses.push(classes.green)
    } else {
      inputClasses.push(classes.red)
    }

    if (this.props.name.length > 4) {
      inputClasses.push(classes.bold)
    }

    return (
      <React.Fragment>
        <h3>Сar name: {this.props.name}</h3>
        <p>Year: <strong>{this.props.year}</strong></p>
        <input
            ref={this.inputRef}
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </React.Fragment>
    )
  }
}

Car.propTypes = {
    name: propTypes.string,
    year: propTypes.number,
    index: propTypes.number,
    onChangeName: propTypes.func,
    onDelete: propTypes.func
  }

export default withClass(Car, classes.Car)