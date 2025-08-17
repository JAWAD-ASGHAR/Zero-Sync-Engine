# Zero-Sync-Engine

**⚠️ This is a test project** - A simple demonstration and testing environment for [Rocicorp Zero](https://github.com/rocicorp/zero)'s sync engine capabilities. This project is designed to help developers understand and experiment with Zero's real-time synchronization features.

## 🎯 Purpose

This repository serves as a **test bed** for:
- Testing Zero's sync engine functionality
- Experimenting with real-time data synchronization
- Learning how to implement Zero in a Next.js application
- Understanding local-first database concepts
- Prototyping collaborative features

**Note**: This is not intended for production use - it's purely for educational and testing purposes.

## 🚀 Features

- **Real-time synchronization** - Changes are instantly reflected across all connected clients
- **Offline-first architecture** - Works seamlessly even when offline
- **Type-safe database** - Built with TypeScript for better development experience
- **Modern UI** - Clean, responsive interface built with Tailwind CSS
- **Zero configuration** - Simple setup with minimal dependencies

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Database**: Rocicorp Zero (local-first, sync-enabled database)
- **Styling**: Tailwind CSS
- **Development**: ESLint, Turbopack

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Zero Server](https://github.com/rocicorp/zero) (for data synchronization)

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd Zero-Sync-Engine
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example environment file and configure it:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration (see [Environment Variables](#environment-variables) section).

### 4. Start the Zero server

You'll need to run a Zero server for data synchronization. Follow the [Zero documentation](https://github.com/rocicorp/zero) to set up your server.

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Zero Server Configuration
ZERO_SERVER_URL=http://localhost:4848
ZERO_USER_ID=your-user-id

# Next.js Configuration (optional)
NEXT_PUBLIC_APP_NAME=Zero-Sync-Engine
```

### Environment Variables Explained

- `ZERO_SERVER_URL`: The URL of your Zero server for data synchronization
- `ZERO_USER_ID`: Unique identifier for the current user
- `NEXT_PUBLIC_APP_NAME`: Public application name (optional)

## 📁 Project Structure

```
Zero-Sync-Engine/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── public/                # Static assets
├── schema.ts              # Zero database schema
├── zero.ts                # Zero client configuration
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🗄️ Database Schema

The application uses a simple message-based schema for testing purposes:

```typescript
const messages = table('messages')
  .columns({
    id: number(),
    body: string(),
  })
  .primaryKey('id');
```

## 🎯 Usage

1. **Adding Messages**: Click the "Insert" button to add a new message
2. **Real-time Updates**: Messages appear instantly across all connected clients
3. **Offline Support**: The app continues to work offline and syncs when reconnected

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

### Adding New Features

1. **Database Changes**: Update the schema in `schema.ts`
2. **UI Components**: Add new components in the `app/` directory
3. **Styling**: Use Tailwind CSS classes for styling

## 🔒 Permissions

The current implementation uses `ANYONE_CAN_DO_ANYTHING` permissions for simplicity. In production, you should implement proper authentication and authorization.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Rocicorp Zero](https://github.com/rocicorp/zero) for the amazing local-first database
- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Zero documentation](https://github.com/rocicorp/zero)
2. Open an issue in this repository
3. Reach out to the community

---

**Happy testing! 🧪**