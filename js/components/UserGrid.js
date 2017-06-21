import React from 'react';
import { Row,Panel,Col,Modal,Button,Image} from 'react-bootstrap';
import UserThumbnail from './UserThumbnail';

const UserGrid = ({alphabetsArr,userArr,sortByAttribute,modalClickFunc,modalCloseFunc,modalOpen,modalUser}) => (
  
	<Col>
  {
	  alphabetsArr.map((alphabet,index)=>{
		  return <Panel header={alphabet} key={index}>
			<Row >
			
		  {
			  userArr.filter((user)=>{return user[sortByAttribute].startsWith(alphabet) && user.display}).map((user,uIndex)=>{
				  return <Col sm={12} md={2} lg={2} key={uIndex}>
						<UserThumbnail user={user} onClickFunc={modalClickFunc} modalOpen={modalOpen} modalUser={modalUser}/>
						</Col>
			  })
		  }
			
			</Row>
		  </Panel>
	  })
  }
		<Modal show={modalOpen} bsSize="small" aria-labelledby="contained-modal-title-sm" onHide={modalCloseFunc}>
          <Modal.Header closeButton>
            <Modal.Title>{modalUser.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             <Panel>
				<Row><Image src={modalUser.imageUri} responsive /></Row>
				<Row><b>{modalUser.dob}</b></Row>
				<Row><b>{modalUser.city}</b></Row>
			  </Panel>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={modalCloseFunc}>Close</Button>
          </Modal.Footer>
        </Modal>
	</Col>
  
);

export default UserGrid;