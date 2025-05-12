import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Filter(){
  return(
     <div>
          <InputGroup className='search'>
            <InputGroup.Text>
            </InputGroup.Text>
            <Form.Control className='text' placeholder="Titles, people, genres....." />
            
          </InputGroup>  
     
     </div>
  );
}

