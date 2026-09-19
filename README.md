# The Courtyard Café & Stay

Premium café, restaurant and boutique-stay demo built with React + Vite and Firebase.

## Stack
- React + Vite
- Firebase Authentication
- Cloud Firestore
- Vercel
- Lucide React

## Firebase setup

1. Create a Firebase project.
2. Add a Web App in Firebase Project Settings.
3. Enable **Authentication → Sign-in method → Email/Password**.
4. Create a **Cloud Firestore** database.
5. Deploy the rules from `firestore.rules`.
6. Add these Vercel environment variables:

```
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
```

The values come from Firebase Project Settings → Your apps → Web app config.

## Admin setup

After creating the first user account, create this Firestore document manually:

**Collection:** `admins`  
**Document ID:** the user's Firebase Auth UID

Example:

```json
{
  "active": true
}
```

That user will see the Admin Dashboard and can confirm/cancel bookings.

## Data model

- `users/{uid}`
- `admins/{uid}`
- `bookings/{bookingId}`
- `contactMessages/{messageId}`

Bookings are linked to the authenticated user's UID. Firestore rules prevent one customer from reading another customer's bookings.

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and fill in the Firebase Web App values.

## Deployment

Push to GitHub and deploy with Vercel. Add the same Firebase environment variables in **Vercel → Project Settings → Environment Variables**, then redeploy.

This is a portfolio/demo hospitality project. Business information, reviews, prices and contact details are fictional.
