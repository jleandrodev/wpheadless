import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Component() {
  return (
    <footer className="bg-muted text-muted-foreground py-8 mt-12 border-t-4 border-t-zinc-400">
      <div className="container max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
          <div className="flex flex-col items-start gap-6">
            <Link
              href="#"
              className="flex items-center gap-2"
              prefetch={false}
            ></Link>
            <p className="text-sm max-w-[300px] leading-relaxed">
              Acme Inc is a leading provider of innovative solutions for
              businesses of all sizes.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            <div className="grid gap-4">
              <h4 className="text-lg font-semibold">Company</h4>
              <nav className="grid gap-2">
                <Link href="#" className="hover:underline" prefetch={false}>
                  About
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Services
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Careers
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Contact
                </Link>
              </nav>
            </div>
            <div className="grid gap-4">
              <h4 className="text-lg font-semibold">Legal</h4>
              <nav className="grid gap-2">
                <Link href="#" className="hover:underline" prefetch={false}>
                  Terms of Service
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Cookie Policy
                </Link>
              </nav>
            </div>
          </div>
          <div className="grid gap-6">
            <div>
              <h4 className="text-lg font-semibold">Newsletter</h4>
              <form className="mt-4 flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex items-center gap-4 mt-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                  prefetch={false}
                >
                  <TwitterIcon className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                  prefetch={false}
                >
                  <FacebookIcon className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                  prefetch={false}
                >
                  <InstagramIcon className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                  prefetch={false}
                >
                  <LinkedinIcon className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16 lg:mt-20 border-t border-muted pt-6 md:pt-8 lg:pt-10 text-sm text-center">
          <p>&copy; 2024 Advisor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
