// src/pages/ManageCertificates.js
import React, { useContext, useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';
import { PortfolioContext } from '../context/PortfolioContext';

const ManageCertificates = () => {
  const { portfolio, setPortfolio } = useContext(PortfolioContext);
  const [newCertificate, setNewCertificate] = useState('');
  const [editingCertificate, setEditingCertificate] = useState(null);
  const [updatedCertificate, setUpdatedCertificate] = useState('');

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await axiosInstance.get('/certificates');
        setPortfolio((prevState) => ({
          ...prevState,
          certificates: response.data,
        }));
      } catch (error) {
        console.error('Error fetching certificates:', error);
      }
    };
    fetchCertificates();
  }, [setPortfolio]);

  const handleAddCertificate = async () => {
    if (!newCertificate) return; // Validate input
    try {
      const response = await axiosInstance.post('/certificates', { name: newCertificate });
      setPortfolio((prevState) => ({
        ...prevState,
        certificates: [...prevState.certificates, response.data],
      }));
      setNewCertificate('');
    } catch (error) {
      console.error('Error adding certificate:', error);
    }
  };

  const handleEditCertificate = (certificate) => {
    setEditingCertificate(certificate);
    setUpdatedCertificate(certificate.name);
  };

  const handleUpdateCertificate = async () => {
    if (!updatedCertificate) return; // Validate input
    try {
      const response = await axiosInstance.put(`/certificates/${editingCertificate._id}`, { name: updatedCertificate });
      setPortfolio((prevState) => ({
        ...prevState,
        certificates: prevState.certificates.map((certificate) =>
          certificate._id === editingCertificate._id ? response.data : certificate
        ),
      }));
      setEditingCertificate(null);
      setUpdatedCertificate('');
    } catch (error) {
      console.error('Error updating certificate:', error);
    }
  };

  const handleDeleteCertificate = async (id) => {
    try {
      await axiosInstance.delete(`/certificates/${id}`);
      setPortfolio((prevState) => ({
        ...prevState,
        certificates: prevState.certificates.filter((certificate) => certificate._id !== id),
      }));
    } catch (error) {
      console.error('Error deleting certificate:', error);
    }
  };

  return (
    <div>
      <h2>Manage Certificates</h2>
      <input
        type="text"
        value={newCertificate}
        onChange={(e) => setNewCertificate(e.target.value)}
        placeholder="Enter new certificate"
      />
      <button onClick={handleAddCertificate}>Add Certificate</button>

      {editingCertificate && (
        <div>
          <input
            type="text"
            value={updatedCertificate}
            onChange={(e) => setUpdatedCertificate(e.target.value)}
            placeholder="Update certificate"
          />
          <button onClick={handleUpdateCertificate}>Update Certificate</button>
        </div>
      )}

      <ul>
        {portfolio.certificates.map((certificate) => (
          <li key={certificate._id}>
            {certificate.name}
            <button onClick={() => handleEditCertificate(certificate)}>Edit</button>
            <button onClick={() => handleDeleteCertificate(certificate._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageCertificates;
