import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const experience = formData.get('experience') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const resume = formData.get('resume') as File;

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !position ||
      !experience ||
      !coverLetter ||
      !resume
    ) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Convert file to buffer for email attachment
    const resumeBuffer = await resume.arrayBuffer();
    const resumeBase64 = Buffer.from(resumeBuffer).toString('base64');

    // Send email to HR with Resend
    const { data: hrData, error: hrError } = await resend.emails.send(
      {
        from: 'NAN Careers <onboarding@resend.dev>', // Update with your verified domain
        to: [process.env.HR_EMAIL || 'joeladukwarteng@gmail.com'], // HR email address
        subject: `New Job Application - ${position} - ${firstName} ${lastName}`,
        html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #111827; line-height: 1.5;">
        <!-- Header -->
        <div style="padding: 24px 20px; border-bottom: 1px solid #e5e7eb;">
          <h2 style="margin: 0; font-size: 20px; font-weight: 700; color: #0f2669;">New Job Application</h2>
          <p style="margin: 6px 0 0; font-size: 13px; color: #6b7280;">
            A candidate has submitted a new application via the careers page.
          </p>
        </div>

        <!-- Body -->
        <div style="padding: 20px;">
          <!-- Summary Card -->
          <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 18px; border-radius: 10px;">
            <h3 style="margin: 0 0 12px; font-size: 14px; letter-spacing: 0.3px; text-transform: uppercase; color: #0f2669;">
              Applicant Details
            </h3>

            <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; width: 160px; color: #6b7280;">Full Name</td>
                <td style="padding: 8px 0; font-weight: 600; color: #111827;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Email</td>
                <td style="padding: 8px 0;">
                  <a href="mailto:${email}" style="color: #0f2669; text-decoration: none; font-weight: 600;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Phone</td>
                <td style="padding: 8px 0; font-weight: 600; color: #111827;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Position</td>
                <td style="padding: 8px 0; font-weight: 600; color: #111827;">${position}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Experience</td>
                <td style="padding: 8px 0; font-weight: 600; color: #111827;">${experience}</td>
              </tr>
            </table>
          </div>

          <!-- Cover Letter -->
          <div style="margin-top: 18px;">
            <h3 style="margin: 0 0 10px; font-size: 14px; letter-spacing: 0.3px; text-transform: uppercase; color: #0f2669;">
              Cover Letter
            </h3>
            <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 16px;">
              <p style="margin: 0; white-space: pre-wrap; font-size: 14px; color: #111827;">${coverLetter}</p>
            </div>
          </div>

          <!-- Footer Note -->
          <div style="margin-top: 18px; padding-top: 14px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #6b7280; font-size: 12px;">
              Resume is attached to this email.
            </p>
          </div>
        </div>

        <!-- Bottom Footer -->
        <div style="padding: 16px 20px; background-color: #fafafa; border-top: 1px solid #e5e7eb; border-radius: 0 0 10px 10px;">
          <p style="margin: 0; font-size: 12px; color: #6b7280;">
            Sent from your Careers portal • NAN Company Limited
          </p>
        </div>
      </div>
      `,
        attachments: [
          {
            filename: resume.name,
            content: resumeBase64,
          },
        ],
      }
    );

    if (hrError) {
      console.error('Resend error (HR):', hrError);
      return NextResponse.json(
        { error: 'Failed to send application' },
        { status: 500 }
      );
    }

    // Send confirmation email to applicant
    const { error: applicantError } = await resend.emails.send({
      from: 'NAN Careers <onboarding@resend.dev>', // Update with your verified domain
      to: [email],
      subject: 'Application Received - NAN Company Limited',
      html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #111827; line-height: 1.5;">
        <!-- Header -->
        <div style="padding: 24px 20px; border-bottom: 1px solid #e5e7eb;">
          <h2 style="margin: 0; font-size: 20px; font-weight: 700; color: #0f2669;">Application Received</h2>
          <p style="margin: 6px 0 0; font-size: 13px; color: #6b7280;">
            Thank you for your interest in joining NAN Company Limited.
          </p>
        </div>

        <!-- Body -->
        <div style="padding: 20px;">
          <p style="margin: 0 0 12px; font-size: 14px;">Dear ${firstName} ${lastName},</p>

          <p style="margin: 0 0 12px; font-size: 14px;">
            Thank you for applying for the <strong>${position}</strong> position at <strong>NAN Company Limited</strong>.
          </p>

          <p style="margin: 0 0 16px; font-size: 14px;">
            We have received your application and resume. Our HR team will review your submission and contact you regarding next steps.
          </p>

          <!-- Summary Card -->
          <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 18px; border-radius: 10px; margin: 18px 0;">
            <h3 style="margin: 0 0 12px; font-size: 14px; letter-spacing: 0.3px; text-transform: uppercase; color: #0f2669;">
              Application Summary
            </h3>

            <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; width: 160px; color: #6b7280;">Position</td>
                <td style="padding: 8px 0; font-weight: 600; color: #111827;">${position}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Experience Level</td>
                <td style="padding: 8px 0; font-weight: 600; color: #111827;">${experience}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Date Submitted</td>
                <td style="padding: 8px 0; font-weight: 600; color: #111827;">
                  ${new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </td>
              </tr>
            </table>
          </div>

          <p style="margin: 0 0 18px; font-size: 14px;">
            If you have questions, please contact us at
            <a href="mailto:hr@nancompany.com" style="color: #0f2669; text-decoration: none; font-weight: 600;">hr@nancompany.com</a>.
          </p>

          <p style="margin: 0; font-size: 14px;">
            Best regards,<br />
            <strong>NAN Company Limited</strong><br />
            HR Department
          </p>

          <!-- Footer Note -->
          <div style="margin-top: 18px; padding-top: 14px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #6b7280; font-size: 12px;">
              This is an automated confirmation email. Please do not reply to this message.
            </p>
          </div>
        </div>

        <!-- Bottom Footer -->
        <div style="padding: 16px 20px; background-color: #fafafa; border-top: 1px solid #e5e7eb; border-radius: 0 0 10px 10px;">
          <p style="margin: 0; font-size: 12px; color: #6b7280;">
            © ${new Date().getFullYear()} NAN Company Limited. All rights reserved.
          </p>
        </div>
      </div>
      `,
    });

    if (applicantError) {
      console.error('Resend error (Applicant):', applicantError);
      // Don't fail the request if confirmation email fails
      // HR email was sent successfully, which is most important
    }

    return NextResponse.json(
      { message: 'Application submitted successfully', data: hrData },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    );
  }
}
