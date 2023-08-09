import { useState } from 'react';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formState),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setStatus(await res.text());
    } catch (error) {
      console.error(error);
      setStatus('Failed to send message.');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required style={{ display: 'block', width: '100%' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required style={{ display: 'block', width: '100%' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input type="text" name="subject" placeholder="Subject" onChange={handleChange} required style={{ display: 'block', width: '100%' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <textarea name="message" placeholder="Message" onChange={handleChange} required style={{ display: 'block', width: '100%' }} />
        </div>
        <button type="submit">Send Message</button>
        <p>{status}</p>
      </form>
    </div>
  );
  
}
