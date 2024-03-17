import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Input } from '@/components/ui/input'

import { PostCard } from '../../components/post-card'

export default function Home() {
  return (
    <div className="overflow-auto pb-10 pt-32">
      <main className="mx-auto my-0 size-full max-w-screen-lg px-2 pb-8 2xl:px-0">
        <div className="relative m-auto my-6 flex w-full max-w-[600px] items-center text-muted-foreground">
          <Input
            type="search"
            placeholder="Search on WebFandoh..."
            className="size-full rounded-lg py-3 pl-9 text-xl shadow-[0px_2px_2px_0.5px] shadow-zinc-300 placeholder:text-zinc-300 focus-visible:ring-4"
          />
          <Search className="absolute left-2 size-6 text-zinc-300" />
        </div>
        <h1 className="mt-6 flex items-center text-3xl font-extrabold tracking-tight text-muted-foreground">
          Trending
        </h1>
        <Carousel>
          <CarouselContent className="p-2">
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <PostCard />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <PostCard />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <PostCard />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <PostCard />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <PostCard />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden lg:block" />
          <CarouselNext className="hidden lg:block" />
        </Carousel>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-muted-foreground">
          Discovery
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-4 md:col-span-2 md:grid-cols-2 lg:col-span-3 xl:grid-cols-3">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <div className="col-start-1 grid w-full md:col-span-2 md:grid-cols-2 xl:col-span-3 xl:grid-cols-3">
              <Button className="col-start-1 mt-6 w-full rounded-2xl px-6 py-8 text-xl md:col-span-2 xl:col-span-1 xl:col-start-2">
                Show more
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
