# IDURAR ERP CRM - Docker Setup

This docker-compose setup will deploy the complete IDURAR ERP CRM stack including:

- **Frontend**: React-based web interface (Port 3000)
- **Backend**: Node.js API server (Port 8888)  
- **Database**: MongoDB 7.0 (Port 27017)

## Quick Start

1. **Clone and navigate to the project:**
   ```bash
   git clone <repository-url>
   cd idurar-erp-crm
   ```

2. **Start the entire stack:**
   ```bash
   docker-compose up -d
   ```

3. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8888
   - MongoDB: localhost:27017

## Environment Variables

Create a `.env` file in the project root for optional configurations:

```bash
# Email Service (Resend)
RESEND_API_KEY=your-resend-api-key
FROM_EMAIL=noreply@yourdomain.com

# AWS S3 (for file uploads)
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_REGION=us-east-1
AWS_S3_BUCKET=your-s3-bucket-name

# OpenAI (for AI features)
OPENAI_API_KEY=your-openai-api-key
```

## Default Credentials

- **MongoDB Root User**: `admin` / `password123`
- **MongoDB App User**: `idurar_user` / `idurar_password`

## Development

### Build Images
```bash
docker-compose build
```

### View Logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f frontend
docker-compose logs -f backend
docker-compose logs -f mongodb
```

### Stop Services
```bash
docker-compose down
```

### Stop with Data Removal
```bash
docker-compose down -v
```

## Health Checks

All services include health checks:
- Frontend: HTTP check on port 80
- Backend: API health check on `/api/health`
- Database: MongoDB ping command

## Data Persistence

- **MongoDB data**: Stored in `mongodb_data` volume
- **File uploads**: Stored in `uploads_data` volume

## Production Deployment

For production deployment:

1. Change default passwords in `docker-compose.yml`
2. Set strong `JWT_SECRET` environment variable
3. Configure proper domain names in `APP_URL` and `BACKEND_URL`
4. Set up SSL/TLS certificates
5. Configure backup strategy for MongoDB data

## Troubleshooting

### Frontend not loading
```bash
docker-compose logs frontend
```

### Backend API errors
```bash
docker-compose logs backend
```

### Database connection issues
```bash
docker-compose logs mongodb
```

### Rebuild specific service
```bash
docker-compose up -d --build backend
```

## Ports Used

- **3000**: Frontend web interface
- **8888**: Backend API server
- **27017**: MongoDB database

Ensure these ports are available on your host system.