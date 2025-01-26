import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase'; // Import your Firebase auth instance

const MyComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log('User is signed in:', user.uid);
      } else {
        // User is signed out
        console.log('User is signed out');
        navigate('/login');
      }
    });
    // Cleanup function
    return () => {
      unsubscribe();
    };
  }, []);

  // ... rest of your component

  return (
    // ... your JSX
  );
};

export default MyComponent;