import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-24">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Get in Touch
        </h1>
        <p className="text-lg text-muted-foreground">
          Have a question or want to work together? Fill out the form below and
          we'll get back to you as soon as possible.
        </p>
      </div>
      <div className="mt-12 rounded-lg border bg-background p-8 shadow-sm sm:mt-16">
        <form className="grid gap-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Write your message here..."
              className="min-h-[120px]"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
