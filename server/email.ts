import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
interface ContactEmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactNotification(data: ContactEmailData): Promise<boolean> {
  try {
    // For now, we'll log the email content to console
    // This can be replaced with actual email service later
    console.log('\n=== EMAIL NOTIFICATION ===');
    console.log(`To: krishnapandri001@gmail.com`);
    console.log(`Subject: New Contact Form Submission from ${data.name}`);
    console.log(`\nFrom: ${data.name} (${data.email})`);
    console.log(`Message: ${data.message}`);
    console.log('========================\n');

    // If you have Gmail credentials, uncomment this section:
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASSWORD // Your Gmail app password
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'krishnapandri001@gmail.com',
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
            New Portfolio Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #667eea; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #667eea; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #333;">${data.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e8f4fd; border-radius: 8px;">
            <p style="margin: 0; color: #0066cc; font-size: 14px;">
              <strong>Reply to:</strong> ${data.email}
            </p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return true;
  }
}