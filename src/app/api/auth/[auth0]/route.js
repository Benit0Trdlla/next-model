import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';

export const GET = handleAuth();

// export const POST = handleAuth({
//     callback: handleCallback({ redirectUri: 'http://localhost:3000/progress' })
// });
