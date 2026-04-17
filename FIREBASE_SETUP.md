# Firebase Integration Guide

## Overview
Your 90-Day Interview Prep Planner now uses Firebase for authentication and cloud storage, enabling:
- ✅ **Multi-device sync** - Access your progress from any device
- ✅ **Google Sign-In** - Secure authentication
- ✅ **Real-time updates** - Changes sync instantly across devices
- ✅ **Cloud backup** - Your data is safely stored in the cloud

## What Changed

### Before (localStorage)
- Data stored only in browser
- No sync across devices
- Lost if browser cache cleared

### After (Firebase)
- Data stored in cloud (Firestore)
- Syncs across all devices
- Persistent and secure
- Automatic migration from localStorage

## Firebase Services Used

### 1. Firebase Authentication
- **Provider**: Google Sign-In
- **Purpose**: Secure user authentication
- **Location**: Firebase Console → Authentication

### 2. Cloud Firestore
- **Database**: NoSQL document database
- **Structure**: 
  ```
  users/
    {userId}/
      - day: number
      - completed: object
      - notesByDay: object
      - codeByDay: object
      - watchedResources: object
      - calendarFilter: string
      - completedDays: object
      - lastUpdated: timestamp
  ```
- **Location**: Firebase Console → Firestore Database

## Files Added/Modified

### New Files
1. **src/firebase.js** - Firebase configuration and initialization
2. **src/AuthProvider.jsx** - Authentication context provider
3. **src/firebaseService.js** - Firestore data operations
4. **src/LoginScreen.jsx** - Google Sign-In UI
5. **src/AppWithFirebase.jsx** - Firebase integration wrapper

### Modified Files
1. **src/main.jsx** - Wrapped app with AuthProvider
2. **src/App.jsx** - Updated to use Firebase data instead of localStorage
3. **src/styles.css** - Added login and user header styles

## How It Works

### 1. User Authentication Flow
```
User visits app → LoginScreen shown → Click "Sign in with Google" 
→ Google OAuth popup → User authenticates → Redirected to app
```

### 2. Data Loading Flow
```
User logs in → Check Firestore for existing data
→ If found: Load from Firestore
→ If not found: Check localStorage → Migrate to Firestore
→ Subscribe to real-time updates
```

### 3. Data Saving Flow
```
User makes changes → Debounced save (1 second delay)
→ Save to Firestore → Real-time sync to other devices
```

## Security Rules (To Be Added)

Currently in **test mode** (open for 30 days). Before production, update Firestore rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

This ensures users can only access their own data.

## Testing the Integration

### 1. First Time User
1. Open http://localhost:5185
2. Click "Sign in with Google"
3. Authenticate with your Google account
4. Your localStorage data (if any) will be migrated to Firebase
5. Start using the app normally

### 2. Multi-Device Sync
1. Sign in on Device A
2. Make some changes (complete tasks, add notes)
3. Sign in on Device B with the same Google account
4. See your changes synced automatically!

### 3. Real-Time Updates
1. Open app in two browser tabs
2. Make changes in Tab 1
3. Watch Tab 2 update automatically (within 1-2 seconds)

## Deployment Considerations

### Environment Variables
The Firebase config is currently in `src/firebase.js`. For production, consider using environment variables:

```javascript
// vite.config.js
export default {
  define: {
    'import.meta.env.VITE_FIREBASE_API_KEY': JSON.stringify(process.env.VITE_FIREBASE_API_KEY),
    // ... other config
  }
}
```

### Vercel Deployment
1. Add Firebase config as environment variables in Vercel dashboard
2. Deploy as usual: `vercel --prod`
3. Firebase will work automatically

## Troubleshooting

### Issue: "Failed to load your data"
- **Cause**: Firestore not enabled or network issue
- **Solution**: Check Firebase Console → Firestore Database is enabled

### Issue: "Failed to sign in"
- **Cause**: Google Auth not enabled
- **Solution**: Firebase Console → Authentication → Enable Google provider

### Issue: Data not syncing
- **Cause**: Firestore rules too restrictive
- **Solution**: Check Firestore rules allow read/write for authenticated users

### Issue: "Permission denied"
- **Cause**: Firestore security rules blocking access
- **Solution**: Update rules to allow authenticated users

## Data Migration

### Automatic Migration
When a user signs in for the first time, the app automatically:
1. Checks for existing localStorage data
2. If found, migrates it to Firestore
3. Keeps localStorage as backup (not actively used)

### Manual Migration
If you need to manually migrate data:
```javascript
import { migrateLocalStorageToFirestore } from './firebaseService';
await migrateLocalStorageToFirestore(userId);
```

## Cost Considerations

### Firebase Free Tier (Spark Plan)
- **Firestore**: 1 GB storage, 50K reads/day, 20K writes/day
- **Authentication**: Unlimited
- **Hosting**: 10 GB storage, 360 MB/day transfer

### Estimated Usage
- **Per user per day**: ~100 reads, ~50 writes
- **Storage per user**: ~10-50 KB
- **Free tier supports**: ~500 active daily users

## Next Steps

1. ✅ Test the integration locally
2. ⏳ Update Firestore security rules
3. ⏳ Deploy to Vercel
4. ⏳ Test multi-device sync in production
5. ⏳ Monitor Firebase usage in console

## Support

For Firebase-specific issues:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Firebase Console](https://console.firebase.google.com)

For app-specific issues:
- Check browser console for errors
- Verify Firebase config in `src/firebase.js`
- Ensure Firestore and Authentication are enabled