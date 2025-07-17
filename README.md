# Dummy Data Generator

**Author:** Zain Ikram
**Date:** July 2025

## Project Description

Dummy Data Generator is a simple web application that generates data for 10 employees and stores it in a local MongoDB database. Each time you click the **Generate Data** button, the existing employee documents in the database are replaced with newly generated records.

### Technologies Used

* HTML
* CSS
* JavaScript (Frontend)
* Node.js
* Express.js
* Mongoose
* MongoDB

---

## Folder Structure

```
├── public
│   ├── main.html
│   ├── style.css
│   └── script.js
├── models
│   └── employee.js
├── app.js
```

---

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/dummy-data-generator.git
   cd dummy-data-generator
   ```

2. **Arrange Files**
   Make sure to create the following folders and place the relevant files:

   * `public` → Contains `main.html`, `style.css`, `script.js`
   * `models` → Contains `employee.js`

3. **Connect to MongoDB Local Server**
   Ensure MongoDB is running on your local machine.

4. **Install Dependencies**

   ```bash
   npm install
   npm install --global nodemon
   ```

5. **Run the Application**

   ```bash
   nodemon app.js
   ```

6. **Access the Frontend**
   Open your browser and go to:

   ```
   http://localhost:3000
   ```

---

## How It Works

* When you click the **Generate Data** button:

  * A message appears: “Data generated successfully.”
  * 10 new employee documents are created.
  * The old documents in the `employeesData` collection of the `test` database are deleted.
  * The new employee data is displayed on the frontend as a list.
