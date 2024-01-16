"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { Project } from "@/types/Project";

interface PostsCarouselProps {
  data: Project[];
}

const PostsCarousel = ({ data }: PostsCarouselProps) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {data.map((post) => (
          <CarouselItem className="relative" key={post._id}>
            <Link href={`/projects/${post.slug}`}>
              <Image
                unoptimized
                src={post.image}
                alt={post.name}
                priority
                height={500}
                width={500}
                className="h-56 lg:h-60 w-full object-cover"
              />
              <div className="absolute top-1/2 left-10">
                <h1 className="text-white text-4xl font-bold">{post.name}</h1>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default PostsCarousel;
