import { websiteURL } from "@/constants";

export const generateReminderEmail = (name: string) => `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Cardio Reminder - Cardio Track</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f6f9fc;
      margin: 0;
      padding: 0;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 30px auto;
      background-color: #ffffff;
      padding: 30px 40px;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.05);
    }
    h1 {
      font-size: 20px;
      color: #007bff;
    }
    p {
      font-size: 16px;
      line-height: 1.6;
    }
    .btn {
      display: inline-block;
      margin-top: 20px;
      background-color: #007bff;
      color: white;
      padding: 12px 20px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: bold;
    }
    .footer {
      text-align: center;
      font-size: 12px;
      color: #999;
      margin-top: 40px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>👋 Hey ${name},</h1>
    <p>
      We noticed you haven’t logged any cardio sessions today. Staying consistent with your activity helps you stay on track toward your fitness goals.
    </p>
    <p>
      Don’t worry, it only takes a few seconds. Click below to log your session now!
    </p>
    <a class="btn" href="${websiteURL}/new-cardio" target="_blank">
      Log Cardio Session
    </a>
    <p class="footer">
      You’re receiving this email because you’re registered on Cardio Track.  
      <br />
      Want to disable reminders? You can manage your preferences in your profile settings.
    </p>
  </div>
</body>
</html>
`;
