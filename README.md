✈️ Flight Booking Management System

📌 Project Overview

The Flight Booking Management System is a DBMS-based application developed to manage flight schedules, passenger information, bookings, payments, and ticket details efficiently.

The system uses a structured relational database to store and manage flight and passenger records while maintaining relationships between flights, customers, bookings, and payments. It demonstrates core database concepts such as relational schema design, primary and foreign keys, constraints, normalization, SQL queries, joins, and transaction management.

🚀 Key Features

✈️ Flight Management

Add and manage flight details
Store flight number, source, destination, date, and time
Maintain available seat information
Search and retrieve flight details
👤 Passenger Management

Store passenger details
Maintain passenger contact information
Manage passenger records efficiently
🎫 Booking Management

Create new flight bookings
Associate passengers with flights
Maintain booking date and booking status
Retrieve booking details using SQL queries
Update and cancel bookings
💳 Payment Management

Store payment information related to bookings
Maintain payment status
Retrieve payment and booking information using relational queries
🗄️ Database Design


The system is designed using a relational database model with separate tables for major entities such as:

Passenger
Flight
Booking
Payment
Airport / Location

Relationships between these entities are maintained using primary keys and foreign keys.

🔑 DBMS Concepts Used
Relational Database Design
ER Model
Relational Schema
Primary Key
Foreign Key
NOT NULL / UNIQUE / CHECK Constraints
Normalization
CRUD Operations
SQL Queries
SELECT, INSERT, UPDATE, DELETE
WHERE, ORDER BY, GROUP BY
Aggregate Functions
INNER JOIN / LEFT JOIN
Subqueries
Transactions
Referential Integrity
🛠️ Technology

Database: MySQL

Query Language: SQL

Database Design: ER Diagram · Relational Schema · Normalization

Tools: MySQL Workbench / MySQL Command Line

Keep only the tools and DBMS concepts that you actually used.

📊 Database Workflow
Passenger
    ↓
Search Flight
    ↓
Select Flight
    ↓
Create Booking
    ↓
Store Passenger + Flight + Booking Details
    ↓
Process Payment
    ↓
Update Booking Status
    ↓
Generate / Retrieve Booking Details
