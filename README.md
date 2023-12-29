This app uses NextJs, react, Typescript and supabase.

## Getting Started

The program starts with

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## About the requirements

- Register
- login
- protected route

##

There is a landing page that features a navbar, and on the navbar, we have 'register' and 'login' buttons. When you register, you need to first verify your email. After you verify it, you can then log in and gain access to the protected route.

[//]: # "TODO: Please add instructions about adding NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local"

### Environment Variables

To run this project, you need to set up the following environment variables in your `.env.local` file. It's crucial to keep this information confidential and not share it publicly.

1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables, replacing the placeholder values with your actual configurations:

```env
# Sample Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-url.com
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anonymous-key


**Note:** Keep your `.env.local` file confidential. Do not share it publicly or commit it to version control. It contains sensitive information that should only be accessible to authorized individuals.
```
