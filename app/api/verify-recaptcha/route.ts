import { NextResponse } from 'next/server';

// reCAPTCHA verification endpoint
export async function POST(request: Request) {
    try {
        const { token } = await request.json();
        if (!token) {
            return NextResponse.json({ success: false, error: 'Missing token' }, { status: 400 });
        }

        const secret = process.env.RECAPTCHA_SECRET_KEY;
        if (!secret) {
            return NextResponse.json({ success: false, error: 'Server not configured' }, { status: 500 });
        }

        const verifyResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                secret,
                response: token,
            }),
        });

        const data = await verifyResponse.json();
        const threshold = 0.5;

        if (data.success && (data.score ?? 0) >= threshold) {
            return NextResponse.json({ success: true, score: data.score });
        }

        return NextResponse.json({ success: false, score: data.score ?? 0, error: 'Verification failed' }, { status: 400 });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Unexpected error' }, { status: 500 });
    }
}