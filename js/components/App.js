import React, { Component } from 'react';
import {connect} from 'react-redux';
import Navigation from './Navigation';
import UserGrid from './UserGrid';
import { Row,Panel,Col} from 'react-bootstrap';
import {initUsersList,changeSortOrder,searchData,modalOpen,modalClose} from '../redux/actions'

class App extends Component{
  constructor(props) {
    super(props);
	const promise=this.props.dispatch(
            initUsersList()
        );
	promise.then(function(data){
			console.log("Data: "+data)
		}.bind(this));
  }
  radioChange(e){
	  let sortByAttribute=e.currentTarget.value;
	  const promise=this.props.dispatch(
            changeSortOrder(this.props.usersList,sortByAttribute)
        );
  }
  searchChange(e){
	  let searchTerm=e.currentTarget.value;
	  const promise=this.props.dispatch(
            searchData(this.props.usersList,searchTerm,this.props.sortByAttribute)
        );
  }
  modalOpen(user){
	  const promise=this.props.dispatch(
            modalOpen(user)
        );
  }
  modalClose(){
	  const promise=this.props.dispatch(
            modalClose()
        );
  }
  render() {
    return (
		<Row>
		<Col mdOffset={2} lgOffset={2} sm={12} md={8} lg={8}>
			<Panel>
			  <Row>
				<Navigation searchText={this.props.searchTerm} sortOrder={this.props.sortByAttribute} onSearchChangeFunc={this.searchChange.bind(this)} onRadioChangeFunc={this.radioChange.bind(this)} />
			  </Row>
			  <Row>
				<UserGrid alphabetsArr={this.props.alphabetsList} userArr={this.props.usersList} sortByAttribute={this.props.sortByAttribute} modalClickFunc={this.modalOpen.bind(this)} modalCloseFunc={this.modalClose.bind(this)} modalOpen={this.props.modalOpen} modalUser={this.props.modalUser}/>
			  </Row>
			</Panel>
		</Col>
		</Row>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
		usersList:state.userReducer.usersList,
		alphabetsList:state.userReducer.alphabetsList,
		sortByAttribute:state.userReducer.sortByAttribute,
		searchTerm:state.userReducer.searchTerm,
		modalOpen:state.userReducer.modalOpen,
		modalUser:state.userReducer.modalUser
  }
}
const Container = connect(mapStateToProps)(App);
export default Container;