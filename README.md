---# 🍽️ Pick-A-Platter – AWS-Powered Serverless Food Selector

Pick-A-Platter is a serverless web application that allows users to create customized meal combinations by selecting items across four categories: **starter**, **main course**, **dessert**, and **drinks**. The project is built entirely on AWS using a modern, scalable, and cost-effective architecture.

---

## 🚀 Features

- Static website hosted on **Amazon S3**
- JavaScript form validation to ensure proper item selection
- Serverless backend using **API Gateway**, **AWS Lambda**, and **DynamoDB**
- Structured data storage for each user's order
- Fully scalable and serverless architecture

---

## 🧱 Architecture Overview

1. **Frontend**:  
   - Static HTML/CSS/JS website hosted on **Amazon S3**  
   - Users select one item from each meal category  
   - JavaScript validates input before submission  

2. **API Gateway**:  
   - Receives HTTP POST requests from the form  
   - Triggers the Lambda function  

3. **AWS Lambda (Python)**:  
   - Parses the submitted data  
   - Validates and formats it  
   - Stores the order details in **DynamoDB**  

4. **DynamoDB**:  
   - Stores user name, phone number, and selected meal items in a structured format

---

## 🛠️ Technologies Used

- **Amazon S3** – Static website hosting  
- **JavaScript** – Form validation  
- **AWS API Gateway** – REST API endpoint  
- **AWS Lambda (Python)** – Backend logic  
- **AWS DynamoDB** – NoSQL data storage

---


---

## ✅ How to Use

1. Open the hosted website URL (from your S3 bucket).
2. Fill in your name and phone number.
3. Select one item from each meal category.
4. Click **Submit** – your choices are validated and sent to the backend.
5. Data is stored securely in DynamoDB.

---

## 📦 Deployment Notes

- Ensure that CORS is enabled on API Gateway.
- Grant appropriate IAM roles for Lambda to access DynamoDB.
- Use AWS CLI or Management Console to configure the S3 bucket as a static website.

---

## 📽️ Demo
https://github.com/user-attachments/assets/41f5351d-7c61-433e-8601-6c1d12422e87


