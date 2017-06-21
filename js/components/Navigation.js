import React from 'react';
import { Navbar,FormGroup,FormControl,Button, Radio,ControlLabel,Row,Col} from 'react-bootstrap';

const Navigation = ({searchText,sortOrder,onSearchChangeFunc,onRadioChangeFunc}) => (
	
  <Navbar>
	<Navbar.Header>
	  <Navbar.Brand>
		<a href="#">User Dashboard</a>
	  </Navbar.Brand>
	  <Navbar.Toggle />
	</Navbar.Header>
	<Navbar.Collapse>
	  <Navbar.Form>
		<FormGroup>
		  <FormControl type="text" placeholder="Search" value={searchText} onChange={onSearchChangeFunc}/>
		</FormGroup>
		{'     '}
		<FormGroup>
			<ControlLabel>Sort Order:</ControlLabel>
		  <Radio name="SortOrder" value={'lastName'} checked={sortOrder=='lastName'} inline onChange={onRadioChangeFunc}>
			Last Name
		  </Radio>
		  {' '}
		  <Radio name="SortOrder" value={'firstName'} checked={sortOrder=='firstName'} inline onChange={onRadioChangeFunc}>
			First Name
		  </Radio>
		</FormGroup>
	  </Navbar.Form>
	</Navbar.Collapse>
  </Navbar>
		 
);

export default Navigation;