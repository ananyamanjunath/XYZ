-- Create the vencer_innovia database if it doesn't exist
CREATE DATABASE IF NOT EXISTS vencer_innovia;

-- Use the vencer_innovia database
USE vencer_innovia;

-- Create a table for user accounts
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    profile_picture VARCHAR(255),
    first_name VARCHAR(255),
    last_name VARCHAR(255)
);

-- Create a table for contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL
);
