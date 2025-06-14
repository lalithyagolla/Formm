import { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API}/api/feedback`, formData);
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Feedback Form</h2>
      {submitted ? <p>Thank you for your feedback!</p> :
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required /><br />
        <input name="email" placeholder="Email" onChange={handleChange} required /><br />
        <textarea name="message" placeholder="Message" onChange={handleChange} required /><br />
        <button type="submit">Submit</button>
      </form>}
    </div>
  );
}

export default App;
