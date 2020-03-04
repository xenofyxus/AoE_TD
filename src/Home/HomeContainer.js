import HomePresentation from '../Presentational/HomePresentation';
import {connect} from 'react-redux';

const numDispatchToProps = (dispatch) => 
        ({setNum: x=>dispatch({type: 'SET_NO_GUESTS', numberOfGuests: x})});
const mapStateToProps = state => 
        ({dishes: state.dishes, num: state.numberOfGuests});

const HomeContainer = connect( mapStateToProps, numDispatchToProps)
                    (HomePresentation);

export {HomeContainer};