import { PopoverTrigger } from '@radix-ui/react-popover'
import { Heart, MessageSquareText } from 'lucide-react'
import Head from 'next/head'
import Image from 'next/image'

import { initialEditorContent } from '@/components/initial-editor-content'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent } from '@/components/ui/popover'
import { Textarea } from '@/components/ui/textarea'

import { Comment } from './components/comment'
import { Share } from './components/share'

export default function Post() {
  return (
    <div className="m-auto flex min-h-screen max-w-[1180px] flex-col justify-start px-2 pb-10 pt-32  lg:px-0">
      <div className="max-w-[868px]">
        <div className="relative h-[200px] w-full md:h-[400px]">
          <Image
            src="https://i.ibb.co/q0ntDN8/test.jpg"
            alt="post banner"
            fill
            className="aspect-square rounded-xl"
          />
        </div>

        <h1 className="mt-1 text-2xl font-bold tracking-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </h1>

        <div className="mt-6 flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="size-16">
              <AvatarFallback className="text-xl font-bold">JD</AvatarFallback>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <div className="flex flex-col justify-between">
              <div className="pt-2">
                <h5 className="text-base font-bold leading-[2px]">Jhon Doe</h5>
                <span className="text-xs">@jhondoe</span>
              </div>
              <p className="mt-2 text-xs">
                <strong>Published: </strong>
                Mar 13, 2024
              </p>
            </div>
          </div>

          <Button
            size="sm"
            variant="outline"
            className="w-[120px] rounded-xl font-extrabold shadow-[0px_1px_1px_1px] shadow-zinc-300"
          >
            Follow
          </Button>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <h2 className="text-xl font-bold leading-tight">Tags</h2>

          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-xl border-2 border-zinc-200 px-4 py-1 text-xs font-bold leading-tight text-primary shadow-[0px_1px_1px_1px] shadow-zinc-300">
              Test
            </span>
            <span className="rounded-xl border-2 border-zinc-200 px-4 py-1 text-xs font-bold leading-tight text-primary shadow-[0px_1px_1px_1px] shadow-zinc-300">
              Seed
            </span>
            <span className="rounded-xl border-2 border-zinc-200 px-4 py-1 text-xs font-bold leading-tight text-primary shadow-[0px_1px_1px_1px] shadow-zinc-300">
              Natural
            </span>
            <span className="rounded-xl border-2 border-zinc-200 px-4 py-1 text-xs font-bold leading-tight text-primary shadow-[0px_1px_1px_1px] shadow-zinc-300">
              Beatifull
            </span>
          </div>
        </div>

        <p className="mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <article
          className="prose mt-6 font-medium marker:text-muted-foreground "
          dangerouslySetInnerHTML={{
            __html: initialEditorContent,
          }}
        />

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Heart className="cursor-pointer text-primary transition-all hover:fill-primary" />

            <div className="flex w-min items-center gap-2 rounded-3xl border-2 border-zinc-300 px-2 py-1 shadow-[0px_1px_1px_1px] shadow-zinc-300">
              <span className="rounded-full bg-primary/20 p-2 text-primary">
                <MessageSquareText className="size-5" />
              </span>
              <p className="text-sm font-medium">
                <span className="mr-2 font-bold">18</span>Comments
              </p>
            </div>
          </div>

          <Share />
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <Textarea
            className="rounded-2xl border-[2px] border-zinc-300 shadow-[0px_3px_1px_1px] shadow-zinc-300"
            placeholder="Write a comment here"
          />

          <Button className="w-min min-w-[150px] self-end rounded-xl font-extrabold">
            Send
          </Button>
        </div>

        <Comment />
        <Comment />
      </div>
    </div>
  )
}
