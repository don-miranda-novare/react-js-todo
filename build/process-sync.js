import { MyDB } from "./indexedDb.js";

// Track how many times sync has run
let syncExecutionCount = 0;

export async function processSync() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log('Background sync triggered');
  // TODO: Fetch stored profile data from IndexedDB here
  const db = new MyDB();
  const profiles = await db.profile.toArray();

  const documentId = profiles[0].id;
  const newProfile = {
    fields: {
        position: { stringValue: profiles[0].position },
        email: { stringValue: profiles[0].email },
        address: { stringValue: profiles[0].address },
      }
  };
  // Then write to Firestore via fetch or Firebase REST API
  await fetch(`https://firestore.googleapis.com/v1/projects/react-js-todo-8f859/databases/(default)/documents/profile/${documentId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProfile),
  });

  syncExecutionCount++;
  if (syncExecutionCount < 2) {
    await self.registration.sync.register('profile-sync');
  } else {
    console.log('Sync limit reached; not registering further');
  }
}
