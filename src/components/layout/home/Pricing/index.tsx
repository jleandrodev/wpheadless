import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <section
      id="price-section"
      className="w-full py-12 md:py-24 lg:py-32 bg-background"
    >
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h2 className="text-3xl font-bold tracking-tighter">
              Pricing Plans
            </h2>
            <p className="text-muted-foreground">
              Choose the plan that fits your needs.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 xl:gap-8">
          <Card className="flex flex-col p-6 bg-background shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Starter</CardTitle>
              <CardDescription>
                Perfect for individuals and small teams.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="text-4xl font-bold">$9</div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span>5 users</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span>1 GB storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span>Basic analytics</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-1 items-end">
              <Button size="lg" variant="default">
                Get Started
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col p-6 bg-primary text-primary-foreground shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Pro</CardTitle>
              <CardDescription>
                Ideal for growing teams and businesses.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="text-4xl font-bold">$29</div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary-foreground" />
                  <span>20 users</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary-foreground" />
                  <span>10 GB storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary-foreground" />
                  <span>Advanced analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary-foreground" />
                  <span>Advanced analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary-foreground" />
                  <span>Advanced analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary-foreground" />
                  <span>Advanced analytics</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-1 items-end">
              <Button
                size="lg"
                variant="default"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/50"
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col p-6 bg-background shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
              <CardDescription>
                Tailored for large teams and organizations.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="text-4xl font-bold">$99</div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span>Unlimited users</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span>Unlimited storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span>Enterprise-grade analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span>Advanced analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span>Advanced analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span>Advanced analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span>Advanced analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span>Advanced analytics</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-1 items-end">
              <Button size="lg" variant="default">
                Get Started
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props: any) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
