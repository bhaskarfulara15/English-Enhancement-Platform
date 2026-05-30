-- Create Database
CREATE DATABASE english_app;

USE english_app;

-- Users Table
CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100) UNIQUE,
password VARCHAR(100),
level VARCHAR(20)
);

-- Assignments Table (optional for future use)
CREATE TABLE assignments (
id INT AUTO_INCREMENT PRIMARY KEY,
question TEXT,
correct_answer VARCHAR(100),
level VARCHAR(20)
);

-- Quiz Results Table
CREATE TABLE results (
id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT,
score INT,
type VARCHAR(20),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
