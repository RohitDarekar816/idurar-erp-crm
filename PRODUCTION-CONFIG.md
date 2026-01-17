# Production Deployment Configuration

## Updated Configuration

The application has been configured for production deployment:

### Frontend Configuration
- **Production URL**: https://erp.afintrix.com
- **API Base URL**: https://api.erp.afintrix.com/api/

### Backend Configuration
- **Backend URL**: https://api.erp.afintrix.com
- **App URL**: https://erp.afintrix.com

### Docker Environment Variables
```
# Frontend
VITE_DEV_REMOTE=remote
VITE_BACKEND_SERVER=https://api.erp.afintrix.com

# Backend
APP_URL=https://erp.afintrix.com
BACKEND_URL=https://api.erp.afintrix.com
DATABASE=mongodb://admin:password123@mongodb:27017/idurar-erp-crm?authSource=admin
```

### Required for Production

1. **SSL/TLS Certificates**: Configure SSL certificates for HTTPS
2. **Reverse Proxy**: Set up nginx reverse proxy for API domain
3. **CORS Configuration**: Update CORS for production domains
4. **Environment Variables**: Ensure all production env vars are set

### Deployment Notes

- Frontend runs on ports 80 (HTTP) and 443 (HTTPS)
- Backend API should be served on https://api.erp.afintrix.com
- Database connection string will need to be updated for production MongoDB
- Update any hardcoded localhost references in configuration

### SSL Configuration (Required)

For production, you'll need to:

1. Obtain SSL certificates for erp.afintrix.com and api.erp.afintrix.com
2. Configure nginx with SSL termination
3. Update CORS settings to allow production domains
4. Set up proper domain DNS records

This configuration is ready for your production deployment.