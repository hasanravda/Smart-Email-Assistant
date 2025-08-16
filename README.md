# Smart Email Assistant 🚀

An intelligent email reply generator powered by AI that helps you craft perfect email responses in seconds. Built with Spring Boot backend, React frontend, and includes a magical browser extension for automatic email reply generation!

## ✨ Features

- **AI-Powered Replies**: Generate contextually appropriate email responses using Gemini AI
- **Multiple Tones**: Choose from Professional, Friendly, Casual, and more
- **Browser Extension**: Automatically read emails and paste generated replies (like magic! ✨)
- **REST API**: Easy-to-use API for integration
- **Responsive Frontend**: Clean and intuitive React-based interface
- **Dockerized**: Easy deployment with Docker

## 🏗️ Architecture

- **Backend**: Spring Boot + Gemini AI API
- **Frontend**: React
- **Browser Extension**: JavaScript (Chrome/Firefox compatible)
- **Deployment**: Dockerized and hosted on Render

## 🚀 Live Demo

**Welcome Page**: https://smart-email-assistant-of06.onrender.com/api/email/

Visit the welcome page to:
- Download the browser extension
- View API documentation
- Access developer social links
- See project information and features

**API Endpoint**: https://smart-email-assistant-of06.onrender.com/api/email/generate

## 📋 Prerequisites

- Node.js (latest stable version recommended)
- Java 19 or higher
- Maven
- Docker (optional)
- Gemini API Key

## 🛠️ Installation & Setup

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/hasanravda/Smart-Email-Assistant
   cd Email-Writer-Backend
   ```

2. **Configure Environment Variables**
   
   Create `application.properties` or set environment variables:
   ```properties
   # Environment Variables
   gemini.api.url=${GEMINI_URL}
   gemini.api.key=${GEMINI_KEY}
   
   # Example values:
   # GEMINI_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent
   # GEMINI_KEY=your_gemini_api_key_here
   ```

3. **Run the Backend**
   ```bash
   mvn spring-boot:run
   ```
   
   The backend will start on `http://localhost:8081`

4. **Test the API with Postman**
   
   - Open Postman
   - Create a new POST request
   - URL: `http://localhost:8081/api/email/generate`
   - Headers: `Content-Type: application/json`
   - Body (raw JSON):
   ```json
   {
     "emailContent": "Hi, I am CEO of Google. I found you very much talented, will you join our company? Lets discuss salary! Say yes or no you dont have time",
     "tone": "Professional"
   }
   ```
   - Click Send

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd Email-Writer-React
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the frontend**
   ```bash
   npm start
   ```
   
   The frontend will start on `http://localhost:3000`

### Browser Extension Setup

1. **Navigate to extension directory**
   ```bash
   cd Email-Writer-Extension
   ```

2. **Install the extension**
   - **Chrome**: 
     - Open `chrome://extensions/`
     - Enable "Developer mode"
     - Click "Load unpacked"
     - Select the `Email-Writer-Extension` folder
   
   - **Firefox**:
     - Open `about:debugging`
     - Click "This Firefox"
     - Click "Load Temporary Add-on"
     - Select any file in the `Email-Writer-Extension` folder

3. **Using the Extension** 🎉
   
   - Open **Gmail** in your browser
   - Open any email you want to reply to
   - Click the **Reply** button to open the reply modal
   - You'll see a **"Generate Reply"** button in the compose area
   - Click it to automatically generate and paste the AI reply!
   
   *Note: This extension is specifically designed for Gmail*

## 📡 API Reference

### Welcome Page

**Endpoint**: `GET /api/email/`

**Description**: Beautiful welcome page featuring:
- Project overview and features
- Developer profile and social links
- Browser extension download
- API documentation
- Installation instructions

### Generate Email Reply

**Endpoint**: `POST /api/email/generate`

**Request Body**:
```json
{
    "emailContent": "string",
    "tone": "string"
}
```

**Available Tones**:
- `Professional`
- `Friendly` 
- `Casual`
- `Formal`

**Example Request**:
```json
{
    "emailContent": "Hi, I am CEO of Google. I found you very much talented, will you join our company? Lets discuss salary! Say yes or no you dont have time",
    "tone": "Professional"
}
```

**Example Response**:
```json
{
    "reply": "Thank you for your email and for considering me. While I appreciate the offer, I'm currently not seeking new opportunities. I wish you and Google all the best."
}
```

## 🐳 Docker Deployment

1. **Build Docker image**
   ```bash
   docker build -t smart-email-assistant .
   ```

2. **Run with environment variables**
   ```bash
   docker run -p 8081:8081 \
   -e GEMINI_URL=your_gemini_url \
   -e GEMINI_KEY=your_api_key \
   smart-email-assistant
   ```

## 🌟 How It Works

1. **Input**: Paste the email content you want to reply to
2. **Choose Tone**: Select the appropriate tone for your response
3. **Generate**: AI analyzes the content and generates a contextually appropriate reply
4. **Use**: Copy the generated reply or let the browser extension paste it automatically!

## 🎯 Browser Extension Magic

The browser extension is the crown jewel of this project:

- **Automatic Detection**: Reads email content from your email client
- **One-Click Generation**: Generates replies with a single button click
- **Auto-Paste**: Automatically pastes the generated reply in the compose area
- **Gmail Integration**: Specifically designed and optimized for Gmail

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Gemini AI for powering the intelligent replies
- Render.com for hosting the backend

## 🔮 Future Enhancements

- [ ] Multiple language support
- [ ] Email templates
- [ ] Custom tone training
- [ ] Integration with more email clients
- [ ] Mobile app version

---

**Made with ❤️ and AI magic**

*Turn your email responses from time-consuming to effortless!*