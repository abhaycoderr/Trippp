import { ToastAndroid } from 'react-native';

const errorMessages: Record<string, string> = {
    'auth/invalid-email': 'Invalid email address. Please enter a valid email.',
    'auth/invalid-credential': 'Invalid credentials. Please check your email and password.',
    'auth/user-disabled': 'This user account has been disabled. Please contact support.',
    'auth/user-not-found': 'No user found with this email. Please sign up first.',
    'auth/wrong-password': 'Incorrect password. Please try again.',
    'auth/email-already-in-use': 'This email address is already in use. Please use a different email.',
    'auth/weak-password': 'Password is too weak. Please use a stronger password.',
    // Add more specific cases as needed
};

const defaultErrorMessage = 'An unknown error occurred. Please try again later.';

// Get the error message based on the error code
export const getErrorMessage = (errorCode: string): string => {
    return errorMessages[errorCode] || defaultErrorMessage;
};

// Show the error message as a toast
export const showErrorToast = (message: string): void => {
    ToastAndroid.show(message, ToastAndroid.LONG);
};

// Handle Firebase Auth error by displaying the appropriate message
export const handleFirebaseAuthError = (error: { code: string; message?: string }, showToast = true): void => {
    const errorCode = error.code || 'unknown';
    const errorMessage = getErrorMessage(errorCode);

    if (showToast) {
        showErrorToast(errorMessage);
    }

    // console.error(errorCode, errorMessage);
};
