# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue encountered when using Firebase's `onAuthStateChanged` method: improper unsubscription, leading to potential memory leaks and unexpected behavior.  The `authBug.js` file showcases the problematic code, while `authBugSolution.js` provides a corrected version.

## Problem

The original code fails to properly unsubscribe from the `onAuthStateChanged` listener, resulting in continued execution even after the component unmounts or the authentication state is no longer needed. This can lead to memory leaks and unexpected behavior.  The `unsubscribe()` function is critical for cleanup.

## Solution

The corrected code ensures proper unsubscription using a cleanup function within the component's `useEffect` hook.  This guarantees that the listener is removed when it's no longer required, preventing potential issues.

## How to Reproduce

1. Clone this repository.
2. Install Firebase and React (if not already installed).
3. Initialize Firebase in your project.
4. Run the code in `authBug.js` and observe the console logs.  Then run the corrected version in `authBugSolution.js` and compare the results.