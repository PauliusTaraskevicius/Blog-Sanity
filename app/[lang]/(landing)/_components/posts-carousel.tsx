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
                src={post.image}
                alt={post.name}
                loading="lazy"
                // quality={100}
                unoptimized
                width={700}
                height={475}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
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
