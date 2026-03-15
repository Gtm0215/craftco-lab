# Deployment Guide

This guide will help you deploy CraftCo Lab to either Vercel (frontend) or Render (backend).

## Option 1: Deploy to Vercel (Recommended for Frontend)

### Prerequisites
- Vercel account
- GitHub repository connected to Vercel

### Steps

1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in and connect your GitHub repository
   - Import the `client` directory as a new project

2. **Configure Environment Variables**
   - In Vercel dashboard, go to Settings > Environment Variables
   - Add the following variables:
     ```
     NEXT_PUBLIC_API_URL=https://your-backend-url.com
     ```

3. **Build Settings**
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: Leave empty (Vercel handles this automatically)
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy" and wait for the build to complete
   - Your frontend will be live at `https://your-project.vercel.app`

## Option 2: Deploy to Render (Backend)

### Prerequisites
- Render account
- MongoDB Atlas cluster

### Steps

1. **Connect to Render**
   - Go to [render.com](https://render.com)
   - Sign in and click "New Web Service"
   - Connect your GitHub repository

2. **Configure Service**
   - Name: `craftco-server`
   - Region: Choose closest to your users
   - Branch: `main`

3. **Build Settings**
   - Build Command: `npm install`
   - Start Command: `npm run dev`

4. **Environment Variables**
   - Add the following variables:
     ```
     NODE_ENV=production
     PORT=10000
     MONGODB_URI=your-mongodb-connection-string
     ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for the deployment to complete
   - Your backend will be live at `https://your-service.onrender.com`

## Option 3: Deploy Both (Full Stack)

### Frontend (Vercel)
Follow Option 1, but set the API URL to your Render backend:
```
NEXT_PUBLIC_API_URL=https://your-render-service.onrender.com
```

### Backend (Render)
Follow Option 2.

## Environment Variables Reference

### Frontend (Vercel)
- `NEXT_PUBLIC_API_URL` - Your backend API URL

### Backend (Render)
- `NODE_ENV` - Set to `production`
- `PORT` - Port number (Render uses dynamic ports)
- `MONGODB_URI` - Your MongoDB connection string

## Troubleshooting

### CORS Issues
If you encounter CORS errors, ensure your backend allows requests from your frontend domain:
```javascript
app.use(cors({
  origin: ['https://your-frontend.vercel.app', 'http://localhost:3000']
}))
```

### MongoDB Connection
- Use MongoDB Atlas for production
- Ensure your IP is whitelisted in MongoDB Atlas
- Use environment variables for connection strings

### Build Errors
- Check Node.js version compatibility
- Ensure all dependencies are properly installed
- Verify environment variables are set correctly

## Production Checklist

- [ ] Environment variables configured
- [ ] MongoDB Atlas cluster set up
- [ ] CORS properly configured
- [ ] Error handling implemented
- [ ] SSL/HTTPS enabled
- [ ] Custom domain configured (optional)
- [ ] Monitoring and logging set up

## Support

For deployment issues, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Render Documentation](https://render.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)