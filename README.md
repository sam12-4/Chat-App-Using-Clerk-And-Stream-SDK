# ChatApp

This is a modern, fully-functional chat application built using [Clerk](https://clerk.dev) for user authentication and [Stream SDK](https://getstream.io) for chat functionality. The app is designed to provide a seamless chat experience with features like real-time messaging, user management, and customizable UI components.

## Features

- **Authentication with Clerk:**
  - User registration and login.
  - Secure session management.
  - User profile customization.

- **Real-time Messaging with Stream SDK:**
  - Instant messaging with other users.
  - Support for group chats and private messaging.

- **Modern UI/UX:**
  - Responsive design for desktop and mobile devices.
  - Customizable chat themes.

- **Scalable Architecture:**
  - Built using Next.js for fast performance and scalability.

## Technologies Used

- [Next.js](https://nextjs.org) - React framework for server-side rendering and static site generation.
- [Clerk](https://clerk.dev) - Authentication and user management.
- [Stream SDK](https://getstream.io) - Chat APIs and real-time messaging.
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework for styling.

## Getting Started

To run the project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org) installed on your machine.
- A Clerk account and API keys.
- A Stream account and API keys.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chatapp.git
   cd chatapp
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api
   CLERK_API_KEY=your-clerk-api-key
   STREAM_API_KEY=your-stream-api-key
   STREAM_SECRET=your-stream-secret
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Folder Structure

```
.
├── app
│   ├── page.js        # Main chat page
│   ├── components     # UI components
│   └── utils          # Helper functions
├── public             # Static assets
├── styles             # Tailwind CSS configuration
└── .env.local         # Environment variables
```

## Deployment

This app can be deployed on [Vercel](https://vercel.com):

1. Push your code to GitHub.
2. Connect your GitHub repository to Vercel.
3. Set up environment variables in the Vercel dashboard.
4. Deploy the app with a single click.

For more details, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).


## Contributions

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- [Clerk](https://clerk.dev) for authentication services.
- [Stream](https://getstream.io) for real-time chat APIs.
- [Tailwind CSS](https://tailwindcss.com) for styling.

## Contact

For questions or feedback, feel free to reach out:
- GitHub: [@yourusername](https://github.com/sam12-4)
- Email: sameerh64h@gmail.com
