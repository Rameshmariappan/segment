import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select'
import Form from 'react-bootstrap/Form';
const Segment = () => {
  const options = [
    { value: 'first_name', label: 'First Name' },
    { value: 'last_name', label: 'Last Name' },
    { value: 'gender', label: 'Gender' },
    { value: 'account_name', label: 'Account Name' },
    { value: 'age', label: 'Age' },
    { value: 'city', label: 'City' },
    { value: 'state', label: 'State' }
  ]

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [option,setOption]=useState(options)
    const [selectvalue,setSelectValue]=useState([{}])
const onChange =(e)=>{
   setSelectValue(selectvalue => [...selectvalue, {value: e.value, label: e.label}])
 }

  
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>Primary</Button>  
        <Modal show={show} onHide={handleClose} size="lg"         aria-labelledby="example-modal-sizes-title-lg"
>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
           
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>name</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                {(selectvalue && selectvalue.length > 1 )&&
                  selectvalue.map((index,item)=>{
                    return (
                      <Select key={index} options={option}  isClearable={true} />
                    )
                  })}
                
                <Select options={option}  isClearable={true} onChange={(e)=>onChange(e)} value={selectvalue}/>
            </Form>
           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> 
    </div>
  )
}

export default Segment