// MongoDB initialization script
// This script creates the application database and user

db = db.getSiblingDB('idurar-erp-crm');

// Create application user with read/write permissions
db.createUser({
  user: 'idurar_user',
  pwd: 'idurar_password',
  roles: [
    {
      role: 'readWrite',
      db: 'idurar-erp-crm'
    }
  ]
});

// Create initial collections and indexes if needed
print('Database idurar-erp-crm initialized successfully');