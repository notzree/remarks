import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";

export default function Component() {
  const auth_link =
    'https://www.facebook.com/dialog/oauth?client_id=736776564648627&display=page&extras={"setup":{"channel":"IG_API_ONBOARDING"}}&redirect_uri=http://localhost:3000&response_type=token&scope=instagram_basic';

  return (
    <div key="1" className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-8 py-6 border-b">
        <div className="flex items-center">
          <ReplyIcon className="w-6 h-6 mr-2" />
          <Link className="text-lg font-bold" href="#">
            remarks
          </Link>
        </div>
        <nav className="flex gap-4">
          <Link className="text-sm font-medium hover:underline" href="#">
            pricing
          </Link>
          <Link
            href={auth_link}
            className={buttonVariants({ variant: "outline" })}
          >
            Sign-in
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="py-24 px-10 text-center">
          <h1 className="text-4xl font-bold">Speak Freely, Not Foully</h1>
          <div className="flex justify-center items-center">
            <p className="mt-6 text-lg text-foreground w-[40rem] text-left">
              remarks uses cutting edge language models to automatically
              moderate your comment section, removing hate speech, spam,
              phishing links, and more. Never worry about moderating your
              comment section again.
            </p>
          </div>
          <Link
            href={auth_link}
            className={buttonVariants({ variant: "outline" })}
          >
            Get Started
          </Link>
        </section>
        <section className="py-24 px-10 bg-background" id="features">
          <h2 className="text-3xl font-bold text-center">features</h2>
          <div className="mt-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-bold">Unified Inbox</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Manage all your social media interactions from a single
                  location.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="text-lg font-bold">Content Scheduler</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Plan and schedule your posts in advance for consistent
                  engagement.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="text-lg font-bold">Performance Analytics</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Get deep insights into your social media performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-24 px-10 text-center">
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
          <p className="mt-6 text-lg text-gray-600">
            Join the thousands of users growing their social media presence with
            MicroSocial.
          </p>
          <Button className="mt-10">Sign Up for Free</Button>
        </section>
      </main>
      <footer className="py-6 px-10 text-center text-sm text-gray-600">
        © remarks. All Rights Reserved.
      </footer>
    </div>
  );
}

function ReplyIcon(props: any) {
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
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  );
}
