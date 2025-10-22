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
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
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
      
      ${(data.utm_source || data.utm_medium || data.utm_campaign) ? `
      <h3>UTM parametry (kampaně):</h3>
      <ul>
        ${data.utm_source ? `<li><strong>Zdroj:</strong> ${data.utm_source}</li>` : ''}
        ${data.utm_medium ? `<li><strong>Médium:</strong> ${data.utm_medium}</li>` : ''}
        ${data.utm_campaign ? `<li><strong>Kampaň:</strong> ${data.utm_campaign}</li>` : ''}
        ${data.utm_term ? `<li><strong>Klíčové slovo:</strong> ${data.utm_term}</li>` : ''}
        ${data.utm_content ? `<li><strong>Obsah:</strong> ${data.utm_content}</li>` : ''}
      </ul>
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
      
      <div style="text-align: left; margin: 20px 0;">
        <img src="https://kleedo-website.vercel.app/images/email-thumbnail.jpg" alt="Kleedo - AI Recepční" style="max-width: 400px; height: auto; border-radius: 8px;">
      </div>
      
      <p>Formulář s informacemi o Vašá firmě už je u našeho týmu, který vás bude brzy kontaktovat ohledně pilotu Kleedo 🥳💚!</p>
      
      <h3>Jen pro shrnutí:</h3>
      <ul>
        <li><strong>Název Vaší firmy:</strong> ${data.company || 'Neuvedeno'}</li>
        <li><strong>V jakém odvětví podnikáte:</strong> ${data.businessType}</li>
      </ul>
      
      <p>Pokud byste měli jakékoliv další otázky, rádi vám pomůžeme! Stačí napsat na info@kleedo.app 💬</p>
      
      <p>S pozdravem,<br>Tým Kleedo 💚</p>
    `

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: data.email,
      subject: 'Potvrzení přijetí vašeho požadavku do pilotu - Kleedo 💚',
      html: confirmationHtml,
    })

    // Log lead data with UTM parameters (you might want to save to database here)
    console.log('New lead received:', {
      ...data,
      timestamp: new Date().toISOString(),
      utm_params: {
        utm_source: data.utm_source,
        utm_medium: data.utm_medium,
        utm_campaign: data.utm_campaign,
        utm_term: data.utm_term,
        utm_content: data.utm_content
      }
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
