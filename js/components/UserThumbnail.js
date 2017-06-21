import React from 'react';
import { Panel,Row,Image} from 'react-bootstrap';

const ThubNail = ({user,onClickFunc}) => (
  <Panel onClick={ () =>onClickFunc(user) }>
	<Row><Image src={user.imageUri} responsive /></Row>
	<Row>{user.name}</Row>
	<Row>{user.dob}</Row>
	<Row>{user.city}</Row>
  </Panel>
);

export default ThubNail;