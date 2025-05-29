import httpService from './http';

const BASE_URL = '/ms-licensing';

export const msLicensingService = {
  // Get all files
  getFiles: async () => {
    try {
      return await httpService.get(`${BASE_URL}/files`);
    } catch (error) {
      console.error('Error fetching files:', error);
      throw error;
    }
  },

  // Upload a new file
  uploadFile: async (formData) => {
    try {
      return await httpService.post(`${BASE_URL}/files`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  },

  // Delete a file
  deleteFile: async (fileId) => {
    try {
      console.log(`Attempting to delete file with ID: ${fileId}`);
      const response = await httpService.delete(`${BASE_URL}/files/${fileId}`);
      console.log('Delete response:', response);
      return response;
    } catch (error) {
      console.error(`Error deleting file ${fileId}:`, error);
      throw error;
    }
  },

  // Get file details
  getFileDetails: async (fileId) => {
    try {
      return await httpService.get(`${BASE_URL}/files/${fileId}`);
    } catch (error) {
      console.error(`Error fetching file details for ${fileId}:`, error);
      throw error;
    }
  },

  // Update file details
  updateFileDetails: async (fileId, data) => {
    try {
      return await httpService.put(`${BASE_URL}/files/${fileId}`, data);
    } catch (error) {
      console.error(`Error updating file ${fileId}:`, error);
      throw error;
    }
  },
};

export default msLicensingService; 