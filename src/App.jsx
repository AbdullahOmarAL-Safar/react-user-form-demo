import React, {useState} from 'react';
import './index.css'; 

function App() {
  const [name, setName] = useState("");
  const [quantity, setQuant] = useState();
  const [comment, setComment] = useState();
  const [payment, setPayment] = useState();

  function handleCommentChange(event){
    setComment(event.target.value);
  }

  function handleQuantityChange(event){
    setQuant(event.target.value);
  }

  function handleNameChange(event){
    setName(event.target.value);
  }

  function handlePymentChange(event){
    setPayment(event.target.value);
  }

  return(
    <div className="form-container">
      <h2 className="form-title">User Form</h2>

      <label className="form-label">Name:</label>
      <input className="form-input" value={name} onChange={handleNameChange} />
      <p className="form-result">Name: {name}</p>

      <label className="form-label">Age:</label>
      <input className="form-input" value={quantity} onChange={handleQuantityChange} type='number'/>
      <p className="form-result">Age: {quantity}</p>

      <label className="form-label">Comment:</label>
      <textarea className="form-textarea" value={comment} onChange={handleCommentChange} placeholder="Enter your comment here" />
      <p className="form-result">Comment: {comment}</p>

      <label className="form-label">Payment Method:</label>
      <select className="form-select" value={payment} onChange={handlePymentChange}>
        <option value="">Select an Option</option>
        <option value="Visa">Visa</option>
        <option value="Master Card">Master Card</option>
      </select>
      <p className="form-result">Payment: {payment}</p>
    </div>
  );
}

export default App;
