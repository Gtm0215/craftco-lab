# CraftCo Lab

A beautiful e-commerce website for handmade art pieces and creative prints.

## Features

- 🎨 Handmade paintings & creative prints
- 🛒 Shopping cart functionality
- 📱 Responsive design
- 🎯 Featured products showcase
- 📞 Customer support integration
- ❓ FAQ section
- 📧 Newsletter subscription

## Tech Stack

**Frontend:**
- Next.js 16.1.6
- React 19.2.3
- Tailwind CSS
- TypeScript

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

### Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account

### Setup

1. Clone the repository
```bash
git clone https://github.com/your-username/craftco-lab.git
cd craftco-lab
```

2. Install dependencies
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client && npm install

# Install server dependencies
cd ../server && npm install
```

3. Environment Setup
```bash
# Copy environment files
cd server
cp .env.example .env

# Edit .env with your MongoDB connection string
```

4. Start the application
```bash
# Start the server
cd server && npm run dev

# In another terminal, start the client
cd client && npm run dev
```

## Project Structure

```
craftco-lab/
├── client/              # Next.js frontend
│   ├── app/            # App router pages
│   ├── context/        # React context providers
│   ├── public/         # Static assets
│   └── styles/         # Global styles
├── server/             # Node.js backend
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   └── uploads/        # File uploads
└── README.md
```

## API Endpoints

- `GET /api/products` - Get all products
- `POST /api/products` - Add new product

## Deployment

### Vercel (Frontend)
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `out` (if using static export)

### Render (Backend)
1. Connect your GitHub repository to Render
2. Use the provided `render.yaml` configuration
3. Set environment variables in Render dashboard

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License