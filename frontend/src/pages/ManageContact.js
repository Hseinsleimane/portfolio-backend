import React, { useContext, useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';
import { PortfolioContext } from '../context/PortfolioContext';

const ManageContact = () => {
  const { portfolio, setPortfolio } = useContext(PortfolioContext);
  const [contactData, setContactData] = useState({
    email: '',
    phone: '',
    message: '',
  });
  const [editingContact, setEditingContact] = useState(false);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await axiosInstance.get('/contact');
        setContactData(response.data);
        setPortfolio((prevState) => ({
          ...prevState,
          contact: response.data,
        }));
      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };
    fetchContact();
  }, [setPortfolio]);

  const handleEditContact = () => {
    setEditingContact(true);
  };

  const handleUpdateContact = async () => {
    try {
      const response = await axiosInstance.put('/contact', contactData);
      setPortfolio((prevState) => ({
        ...prevState,
        contact: response.data,
      }));
      setEditingContact(false);
    } catch (error) {
      console.error('Error updating contact data:', error);
    }
  };

  return (
    <div>
      <h2>Manage Contact Information</h2>
      
      {editingContact ? (
        <div>
          <p>
            <textarea
              value={contactData.message}
              onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
              className="bg-gray-900 text-white p-2 m-2 w-full"
              placeholder="Enter your message"
            />
          </p>
          <p className="py-2">
            <input
              type="text"
              value={contactData.email}
              onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
              className="bg-gray-900 text-white p-2 m-2"
              placeholder="Enter your email"
            />
          </p>
          <p className="py-2">
            <input
              type="text"
              value={contactData.phone}
              onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
              className="bg-gray-900 text-white p-2 m-2"
              placeholder="Enter your phone number"
            />
          </p>
          <button onClick={handleUpdateContact} className="bg-indigo-600 py-2 px-4 rounded">
            Update Contact Info
          </button>
        </div>
      ) : (
        <div>
          <p>{contactData.message}</p>
          <p>Email: {contactData.email}</p>
          <p>Phone: {contactData.phone}</p>
          <button onClick={handleEditContact} className="bg-indigo-600 py-2 px-4 rounded">
            Edit Contact Info
          </button>
        </div>
      )}
    </div>
  );
};

export default ManageContact;
