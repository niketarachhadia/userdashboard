import fetch from 'isomorphic-fetch'
const INIT_USERS_LIST = 'INIT_USERS_LIST';
const SORT_USERS_LIST = 'SORT_USERS_LIST';
const SEARCH_USERS_LIST = 'SEARCH_USERS_LIST';
const MODAL_OPEN = 'MODAL_OPEN';
const MODAL_CLOSE='MODAL_CLOSE';
const API_URL='https://randomapi.com/api/83d1da4342b88e17826fc8e391a1fedc?';
function sortUsers(array,sortByAttribute){
	return array.sort((a,b)=>{
		a[sortByAttribute]<b[sortByAttribute]
	})
}

function processData(usersList,sortByAttribute){
	let alphabetsList=[]
	if (usersList!==undefined && usersList.length>0){
		usersList.map((user)=>{
			let userName=user[sortByAttribute]
			if(user.display && userName != undefined && userName.trim().length>0){
				let firstChar=userName.trim().charAt(0).toUpperCase();
				if(alphabetsList.indexOf(firstChar)<0){
					alphabetsList.push(firstChar)
				}
			}
			user.name=user.firstName+ " "+ user.lastName
		})
		usersList=sortUsers(usersList,sortByAttribute)
		alphabetsList=alphabetsList.sort()
	}else{
		usersList=[]
	}
	return [usersList,alphabetsList]
}
function searchDataInternal(usersList,searchTerm){
	searchTerm=searchTerm.toUpperCase().trim()
	if(searchTerm.length==0){
		return usersList.map((user)=>{
			user.display=true
			return user
		})
	}
	return usersList.map((user)=>{
		if(user.name.toUpperCase().indexOf(searchTerm)<0){
			user.display=false
		}else{
			user.display=true
		}
		return user
	})
}

export function initUsersListSuccess(usersList){	
	usersList.map((user)=>{
		user["display"]=true
	})
	const processedData=processData(usersList,"lastName")
	return {
		type:INIT_USERS_LIST,
		payload:{
			usersList:processedData[0],
			alphabetsList:processedData[1],
			sortByAttribute:"lastName",
			searchTerm:''
		}		
	}
}

export function initUsersList(){
	return dispatch => {
		let url=API_URL
		url=url+"results=25&key=CCM6-T67D-32BJ-0VG8"
	   return fetch(url, (response) => { 
		 if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
	   }).then(function(response) {
            return response.json();
        }).then(function(data) {
			return dispatch( initUsersListSuccess(data.results));
		})
	 }
		
}

export function changeSortOrder(usersList,sortByAttribute){
	const processedData=processData(usersList,sortByAttribute)	
	return {
		type:SORT_USERS_LIST,
		payload:{
			usersList:processedData[0],
			alphabetsList:processedData[1],
			sortByAttribute:sortByAttribute
		}		
	}
}

export function searchData(usersList,searchTerm,sortByAttribute){
	usersList=searchDataInternal(usersList,searchTerm)
	const processedData=processData(usersList,sortByAttribute)
	return {
		type:SEARCH_USERS_LIST,
		payload:{
			usersList:processedData[0],
			alphabetsList:processedData[1],
			searchTerm:searchTerm
		}		
	}
}

export function modalOpen(user){
	return {
		type:MODAL_OPEN,
		payload:{
			modalOpen:true,
			modalUser:user
		}		
	}
}

export function modalClose(){
	return {
		type:MODAL_CLOSE,
		payload:{
			modalOpen:false,
			modalUser:{}
		}		
	}
}
