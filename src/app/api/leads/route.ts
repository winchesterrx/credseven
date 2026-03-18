import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // System log simulator for leads API
        console.log('\n==================================');
        console.log('--- 🚀 NEW LEAD CAPTURED ---');
        console.log(`👤 Name:     ${data.nome}`);
        console.log(`📱 WhatsApp: ${data.whatsapp}`);
        console.log(`✉️ Email:    ${data.email}`);
        console.log('==================================\n');

        return NextResponse.json(
            { success: true, message: 'Lead saved successfully.' },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, message: 'Bad request.' },
            { status: 400 }
        );
    }
}
