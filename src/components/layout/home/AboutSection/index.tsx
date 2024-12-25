/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ptxanKBJPOp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Component() {
  return (
    <section
      id="about-section"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Us
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are a team of passionate individuals dedicated to creating
              innovative solutions that empower our clients to thrive in the
              digital age. Our mission is to redefine the way businesses
              approach technology, by providing tailored services and
              cutting-edge tools that drive growth, efficiency, and
              sustainability.
            </p>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At our core, we believe in the power of collaboration, integrity,
              and a relentless pursuit of excellence. We strive to be a trusted
              partner to our clients, guiding them through the complexities of
              the digital landscape and helping them achieve their goals.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-sm text-muted-foreground">CEO</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JA</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <p className="text-sm font-medium">Jane Appleseed</p>
                <p className="text-sm text-muted-foreground">CTO</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>KS</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <p className="text-sm font-medium">Kate Smith</p>
                <p className="text-sm text-muted-foreground">COO</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <p className="text-sm font-medium">Michael Roberts</p>
                <p className="text-sm text-muted-foreground">Head of Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
