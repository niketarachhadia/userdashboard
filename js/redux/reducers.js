const INIT_USERS_LIST = 'INIT_USERS_LIST';
const SORT_USERS_LIST = 'SORT_USERS_LIST';
const SEARCH_USERS_LIST = 'SEARCH_USERS_LIST';
const MODAL_OPEN = 'MODAL_OPEN';
const MODAL_CLOSE='MODAL_CLOSE';

const initialUsersList={
			usersList:[],
			alphabetsList:[],
			sortByAttribute:'lastName',
			searchTerm:'',
			modalOpen:false,
			modalUser:{}
		}
export function userReducer(state, action){
	state = state || initialUsersList;
	if(action.type==INIT_USERS_LIST){
		return {
			usersList:action.payload.usersList,
			alphabetsList:action.payload.alphabetsList,
			sortByAttribute:action.payload.sortByAttribute,
			searchTerm:action.payload.searchTerm,
			modalOpen:state.modalOpen,
			modalUser:state.modalUser
		}
	}
	if(action.type==SORT_USERS_LIST){
		return {
			usersList:action.payload.usersList,
			alphabetsList:action.payload.alphabetsList,
			sortByAttribute:action.payload.sortByAttribute,
			searchTerm:state.searchTerm,
			modalOpen:state.modalOpen,
			modalUser:state.modalUser
		}
	}
	if(action.type==SEARCH_USERS_LIST){
		return {
			usersList:action.payload.usersList,
			alphabetsList:action.payload.alphabetsList,
			sortByAttribute:state.sortByAttribute,
			searchTerm:action.payload.searchTerm,
			modalOpen:state.modalOpen,
			modalUser:state.modalUser
		}
	}
	if(action.type==MODAL_OPEN || action.type==MODAL_CLOSE){
		return {
			usersList:state.usersList,
			alphabetsList:state.alphabetsList,
			sortByAttribute:state.sortByAttribute,
			searchTerm:state.searchTerm,
			modalOpen:action.payload.modalOpen,
			modalUser:action.payload.modalUser
		}
	}
	return state
}
