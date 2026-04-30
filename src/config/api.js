// API Configuration
const API_BASE_URL = 'https://edushield-backend-13.onrender.com/api';

// Helper function to make API calls
export const apiCall = async (endpoint, method = 'GET', data = null, token = null) => {
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Add token if provided
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  // Add body if data provided
  if (data) {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'API request failed');
  }

  return response.json();
};

// API endpoints
export const API_ENDPOINTS = {
  // Auth endpoints
  LOGIN: '/auth/login',
  REGISTER_SCHOOL: '/auth/register/school',
  REGISTER_STUDENT: '/auth/register/student',
  
  // School endpoints
  SCHOOL_PROFILE: '/school/profile',
  SCHOOL_DASHBOARD: '/school/dashboard',
  
  // Student endpoints
  STUDENT_PROFILE: '/student/profile',
  STUDENT_DASHBOARD: '/student/dashboard',
};