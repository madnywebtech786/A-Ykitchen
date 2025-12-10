import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    // Extract files
    const files = formData.getAll('images');

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Process attachments
    const attachments = [];
    for (const file of files) {
      if (file && file.size > 0) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        attachments.push({
          filename: file.name,
          content: buffer,
          contentType: file.type,
        });
      }
    }

    // Email template with brand colors
    const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f5f5f5;
    }
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
    }
    .header {
      background: linear-gradient(135deg, #be1f27 0%, #f31e24 100%);
      padding: 40px 30px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .header::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
      animation: rotate 20s linear infinite;
    }
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .header h1 {
      color: #ffffff;
      font-size: 28px;
      font-weight: 800;
      margin: 0;
      position: relative;
      z-index: 1;
      text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    .header p {
      color: rgba(255,255,255,0.95);
      font-size: 14px;
      margin-top: 8px;
      position: relative;
      z-index: 1;
    }
    .content {
      padding: 40px 30px;
    }
    .section {
      background: #f9fafb;
      border-left: 4px solid #be1f27;
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 8px;
    }
    .section-title {
      color: #be1f27;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 8px;
    }
    .section-content {
      color: #333;
      font-size: 16px;
      line-height: 1.6;
    }
    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 20px;
    }
    .info-item {
      background: #ffffff;
      border: 2px solid #e5e7eb;
      border-radius: 12px;
      padding: 16px;
      transition: all 0.3s ease;
    }
    .info-item:hover {
      border-color: #be1f27;
      box-shadow: 0 4px 6px rgba(190, 31, 39, 0.1);
    }
    .info-label {
      color: #6b7280;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .info-value {
      color: #111827;
      font-size: 16px;
      font-weight: 600;
    }
    .message-box {
      background: #ffffff;
      border: 2px solid #e5e7eb;
      border-radius: 12px;
      padding: 20px;
      margin-top: 20px;
    }
    .message-box p {
      color: #374151;
      font-size: 15px;
      line-height: 1.7;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .attachments {
      background: #fef3f2;
      border: 2px dashed #f31e24;
      border-radius: 12px;
      padding: 20px;
      margin-top: 20px;
      text-align: center;
    }
    .attachments-title {
      color: #be1f27;
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    .attachments-count {
      background: #be1f27;
      color: white;
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 12px;
    }
    .footer {
      background: #111827;
      padding: 30px;
      text-align: center;
    }
    .footer p {
      color: #9ca3af;
      font-size: 13px;
      margin: 4px 0;
    }
    .footer a {
      color: #f31e24;
      text-decoration: none;
      font-weight: 600;
    }
    .footer a:hover {
      color: #be1f27;
    }
    .divider {
      height: 2px;
      background: linear-gradient(90deg, transparent 0%, #be1f27 50%, transparent 100%);
      margin: 30px 0;
    }
    .icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      background: #be1f27;
      border-radius: 50%;
      margin-right: 4px;
    }
    @media only screen and (max-width: 600px) {
      .info-grid {
        grid-template-columns: 1fr;
      }
      .header h1 {
        font-size: 24px;
      }
      .content {
        padding: 30px 20px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Header -->
    <div class="header">
      <h1>🎯 New Contact Form Submission</h1>
      <p>A&Y Cabinets LTD - Kitchen & Bathroom Specialists</p>
    </div>

    <!-- Content -->
    <div class="content">
      <!-- Contact Information Grid -->
      <div class="info-grid">
        <div class="info-item">
          <div class="info-label">
            <span class="icon"></span>
            Name
          </div>
          <div class="info-value">${name}</div>
        </div>
        <div class="info-item">
          <div class="info-label">
            <span class="icon"></span>
            Email
          </div>
          <div class="info-value">${email}</div>
        </div>
      </div>

      <div class="info-grid">
        <div class="info-item">
          <div class="info-label">
            <span class="icon"></span>
            Phone
          </div>
          <div class="info-value">${phone}</div>
        </div>
        <div class="info-item">
          <div class="info-label">
            <span class="icon"></span>
            Received
          </div>
          <div class="info-value">${new Date().toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}</div>
        </div>
      </div>

      <div class="divider"></div>

      <!-- Message Section -->
      <div class="section">
        <div class="section-title">📝 Message Details</div>
      </div>
      <div class="message-box">
        <p>${message}</p>
      </div>

      <!-- Attachments Section -->
      ${attachments.length > 0 ? `
      <div class="attachments">
        <div class="attachments-title">
          📎 Attachments Included
          <span class="attachments-count">${attachments.length}</span>
        </div>
        <p style="color: #6b7280; font-size: 13px; margin-top: 8px;">
          ${attachments.map(att => att.filename).join(', ')}
        </p>
      </div>
      ` : ''}
    </div>

    <!-- Footer -->
    <div class="footer">
      <p style="font-weight: 600; color: #f31e24; font-size: 14px; margin-bottom: 8px;">
        A&Y Cabinets LTD
      </p>
      <p>Unit 4122 3961 52nd Ave NE, Calgary AB, T3J 0J8</p>
      <p>
        <a href="tel:+14038909222">403-890-9222</a> |
        <a href="tel:+14039669190">403 966 9190</a>
      </p>
      <p>
        <a href="mailto:aykitchencabinets@gmail.com">aykitchencabinets@gmail.com</a>
      </p>
      <p style="margin-top: 16px; font-size: 11px;">
        This email was sent from your website contact form.
      </p>
    </div>
  </div>
</body>
</html>
    `;

    // Send email
    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
      attachments: attachments,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
