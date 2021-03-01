import SignUp from '../components/Signup';
import { connect } from "react-redux";

// allows us to use pieces of our state as props in our component 
const mapStateToProps = ( state ) => {
  return{
    user: state.user
  }
};

// biends the dispatch of the store to our actions, that can be passed into our component as props
const mapDispatchToProps = ( dispatch ) => {
  return {
    setUser: ( info ) => { dispatch(newUser( payload ))}
  }
};

export default connect( mapStateToProps, mapDispatchToProps )( SignUp );
// export default Signup