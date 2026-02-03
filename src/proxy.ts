import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { NAVIGATION_LINKS } from './enums/navigation'

export function proxy(request: NextRequest) {
    if (request.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL(NAVIGATION_LINKS.DASHBOARD.href, request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/',
}