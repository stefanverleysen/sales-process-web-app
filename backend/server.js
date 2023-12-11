require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer'); // Import multer
const AWS = require('aws-sdk'); // Import AWS SDK
const app = express();

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection using the environment variable
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to the database!");
})
.catch(err => {
    console.error("Cannot connect to the database!", err);
    process.exit();
});

// Configure AWS SDK
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

// Multer configuration for file uploads
const upload = multer({
    storage: multer.memoryStorage(), // Use memory storage
    limits: { fileSize: 5 * 1024 * 1024 } // Limit file size (example: 5MB)
});

app.get('/test', (req, res) => {
  res.send('Test route is working');
});

// Endpoint for profile updates including file upload
app.post('/updateProfile', upload.single('profilePhoto'), async (req, res) => {
    const file = req.file;

    if (file) {
        const uploadParams = {
            Bucket: 'salesmappers3', // Replace with your bucket name
            Key: `profile-pictures/${file.originalname}`, // File name in S3
            Body: file.buffer,
            ACL: 'public-read' // Adjust ACL as per your requirement
        };

        try {
            const s3Response = await s3.upload(uploadParams).promise();
            console.log("File uploaded successfully. S3 Response:", s3Response);

            // Handle other profile update logic here
            res.status(200).send('Profile updated successfully');
        } catch (error) {
            console.error("Error uploading file:", error);
            res.status(500).send('Error uploading file');
        }
    } else {
        res.status(400).send('No file uploaded');
    }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
