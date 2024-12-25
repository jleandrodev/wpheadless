import * as React from "react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function OurBlogSection() {
  return (
    <div className="container w-full">
      <h2 className="text-3xl font-bold tracking-tighter mb-6 sm:text-4xl md:text-5xl">
        Our Blog
      </h2>
      <Carousel opts={{ align: "start" }}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="w-full max-w-md rounded-lg shadow-md overflow-hidden">
                  <Image
                    src="https://placehold.jp/600x400.png"
                    width={600}
                    height={400}
                    alt="Hero"
                  />
                  <CardContent className="p-6 space-y-3">
                    <CardTitle className="text-2xl font-bold">
                      Exploring the Future of Web Development
                    </CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <span>John Doe</span>
                    </div>
                    <p className="text-muted-foreground">
                      Explore the latest advancements in web development, from
                      cutting-edge frameworks to AI-powered tools, and learn how
                      to stay ahead of the curve.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
