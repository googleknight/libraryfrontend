import React from 'react';
// import PropTypes from 'prop-types';
import ErrorModal from '../ErrorModal/ErrorModal';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import './Container.css';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homepage: false,
      books: [],
    };
  }
  componentDidMount() {
    fetch('/mylibrary/bookswithlikes')
      .then(response => response.json())
      .then((responseObj) => {
        if (responseObj.statusCode === '200') {
          this.setState({
            homepage: true,
            books: responseObj.data,
          });
        }
      });
  }
  getData() {
    fetch('/mylibrary/bookswithlikes')
      .then(response => response.json())
      .then((responseObj) => {
        if (responseObj.statusCode === '200') {
          this.setState({
            homepage: true,
            books: responseObj.data,
          });
        }
      });
  }
  writeInDB() {
    fetch('/mylibrary')
      .then(response => response.json())
      .then((responseObj) => {
        if (responseObj.statusCode === '200') {
          this.getData();
        }
      });
  }
  render() {
    if (this.state.homepage) {
      return (
        <div className="App-Container" />
      );
    }
    return (
      <div className="App-Container">
        <SideBar />
        <Header />
        <div className="Error-Modal-Container">
          <ErrorModal onClick={this.writeInDB} />
        </div>
      </div>
    );
  }
}

export default Container;

// Container.propTypes = {
//   homepage: PropTypes.bool,
//   goToHomePage: PropTypes.func.isRequired,
//   getNotes: PropTypes.func.isRequired,
// };

// Container.defaultProps = {
//   homepage: true,
// };


// const mapDispatchToProps = dispatch => ({
//   goToHomePage: () => dispatch(GoToHomePageAction()),
//   getNotes: notes => dispatch(getNotes(notes)),
// });
// const mapStateToProps = state => ({
//   homepage: state.notes.homepage,
// });

