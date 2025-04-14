import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { path, token } = body;
    
    // Check if the request contains the correct secret token
    const expectedToken = process.env.REVALIDATION_TOKEN;
    if (token !== expectedToken) {
      return NextResponse.json(
        { message: 'Invalid token' },
        { status: 401 }
      );
    }

    // Revalidate the specific path
    if (path) {
      revalidatePath(path);
      return NextResponse.json({ revalidated: true, path });
    }

    // If no path is provided, return an error
    return NextResponse.json(
      { message: 'No path provided' },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error revalidating', error },
      { status: 500 }
    );
  }
} 