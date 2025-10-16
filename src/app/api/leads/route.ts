import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_PORT === '465', // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

interface LeadData {
  businessType: string
  name: string
  email: string
  phone: string
  company?: string
  message?: string
  source: string
  timestamp: string
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.businessType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email notification
    const emailHtml = `
      <h2>Nový lead z Kleedo webu</h2>
      <p><strong>Zdroj:</strong> ${data.source}</p>
      <p><strong>Čas:</strong> ${data.timestamp ? new Date(data.timestamp).toLocaleString('cs-CZ') : new Date().toLocaleString('cs-CZ')}</p>
      
      <h3>Informace o firmě:</h3>
      <ul>
        <li><strong>Typ podniku:</strong> ${data.businessType}</li>
        <li><strong>Název firmy:</strong> ${data.company || 'Neuvedeno'}</li>
      </ul>
      
      <h3>Kontaktní údaje:</h3>
      <ul>
        <li><strong>Jméno:</strong> ${data.name}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Telefon:</strong> ${data.phone}</li>
      </ul>
      
      ${data.message ? `
      <h3>Dodatečné informace:</h3>
      <p>${data.message}</p>
      ` : ''}
      
      <hr>
      <p><em>Lead byl automaticky odeslán z webu Kleedo.</em></p>
    `

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.LEAD_EMAIL || process.env.SMTP_USER,
      subject: `Nový lead: ${data.company || 'Bez názvu firmy'} (${data.businessType})`,
      html: emailHtml,
    })

    // Send confirmation email to lead
    const confirmationHtml = `
      <h2>Děkujeme za váš zájem o Kleedo!</h2>
      
      <div style="text-align: center; margin: 20px 0;">
        <img src="https://kleedo-website.vercel.app/images/email-thumbnail.jpg" alt="Kleedo - AI Recepční" style="max-width: 200px; height: auto; border-radius: 8px;">
      </div>
      
      <p>Vážený/á ${data.name},</p>
      
      <p>děkujeme za vyplnění formuláře. Váš požadavek byl úspěšně odeslán a náš tým vás bude kontaktovat do 24 hodin.</p>
      
      <h3>Shrnutí vašeho požadavku:</h3>
      <ul>
        <li><strong>Firma:</strong> ${data.company || 'Neuvedeno'}</li>
        <li><strong>Typ podniku:</strong> ${data.businessType}</li>
      </ul>
      
      <p>Mezitím si můžete prohlédnout naše ceny nebo se podívat na často kladené otázky.</p>
      
      <p>S pozdravem,<br>Tým Kleedo</p>
    `

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: data.email,
      subject: 'Potvrzení vašeho požadavku do pilotu - Kleedo',
      html: confirmationHtml,
    })

    // Log lead data (you might want to save to database here)
    console.log('New lead received:', {
      ...data,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
