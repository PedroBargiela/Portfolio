import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto flex h-full flex-grow items-center justify-center px-4 py-12 md:py-20">
      <div className="text-center">
        <p className="text-4xl font-bold text-primary sm:text-6xl">404</p>
        <h1 className="mt-4 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Go back home
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/contact">Contact support</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
