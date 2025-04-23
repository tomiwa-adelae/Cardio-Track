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

export const generateSessionEmail = (name: string) => `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Cardio Logged Successfully</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background-color: #f4f6f8;
      padding: 0;
      margin: 0;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 30px auto;
      background-color: #fff;
      padding: 40px 30px;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    h1 {
      font-size: 24px;
      color: #28a745;
    }
    p {
      font-size: 16px;
      line-height: 1.6;
    }
    .highlight {
      background-color: #e6f7e6;
      padding: 10px;
      border-left: 4px solid #28a745;
      margin: 20px 0;
      font-weight: 500;
    }
    .btn {
      display: inline-block;
      margin-top: 25px;
      background-color: #007bff;
      color: #fff;
      padding: 12px 20px;
      border-radius: 5px;
      text-decoration: none;
      font-weight: bold;
    }
    .footer {
      font-size: 12px;
      color: #aaa;
      text-align: center;
      margin-top: 40px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Great Job, ${name}!</h1>
    <p>You’ve successfully logged a cardio session today. Way to keep your momentum going!</p>

    <div class="highlight">
      📈 Consistency is key — your heart and body thank you for showing up today.
    </div>

    <p>Don’t forget to check your dashboard for updated stats and progress insights.</p>

    <a class="btn" href="${websiteURL}/dashboard" target="_blank">
      View My Dashboard
    </a>

    <p class="footer">
      You’re receiving this email because you’re part of Cardio Track.<br/>
      Keep moving. Keep improving.
    </p>
  </div>
</body>
</html>

`;

export const generateWarningEmail = (
	name: string,
	averageHeartRate: string
) => `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Heart Rate Alert</title>
    <style>
      body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f7f8fa;
        margin: 0;
        padding: 0;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 30px auto;
        background-color: #ffffff;
        padding: 40px 30px;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      }
      h1 {
        font-size: 22px;
        color: #e63946;
      }
      p {
        font-size: 16px;
        line-height: 1.6;
      }
      .highlight {
        background-color: #fff3f3;
        padding: 12px;
        border-left: 4px solid #e63946;
        font-weight: bold;
        margin: 20px 0;
      }
      .btn {
        display: inline-block;
        margin-top: 20px;
        background-color: #007bff;
        color: white;
        padding: 12px 20px;
        border-radius: 5px;
        text-decoration: none;
        font-weight: 600;
      }
      .footer {
        text-align: center;
        font-size: 12px;
        color: #aaa;
        margin-top: 40px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Health Alert: Unusual Heart Rate Detected</h1>
      <p>Hi ${name},</p>

      <p>We've noticed that your <strong>average heart rate</strong> across your cardio sessions is currently:</p>

      <div class="highlight">
        ${averageHeartRate} BPM
      </div>

      <p>This is <strong>outside the normal range</strong> of 60–100 BPM for most adults. While this might be temporary due to intense sessions or natural body fluctuations, it’s something worth monitoring.</p>

      <p>If you're feeling unwell or this persists, we strongly recommend speaking with a healthcare professional for proper evaluation.</p>

      <a class="btn" href="${websiteURL}/progress" target="_blank">View Your Stats</a>

      <p class="footer">
        You’re receiving this message because you are actively using the Cardio Track platform. <br/>
        Stay safe. Stay consistent. 💙
      </p>
    </div>
  </body>
</html>

`;
