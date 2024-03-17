import { BookMarked } from 'lucide-react'

import { PostCard } from '@/components/post-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import { EditProfile } from './components/edit-profile'
import { Followers } from './components/followers'
import { Following } from './components/following'

export default function Profile() {
  return (
    <div className="mx-2 min-h-screen max-w-[1180px] pb-10 pt-28 xl:m-auto">
      <div className="h-[120px] rounded-2xl bg-[#2F5F83]"></div>

      <div className="mt-3 flex justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="size-[130px] border-2 border-[#2F5F83]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="text-5xl font-extrabold text-muted-foreground">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h2 className="text-3xl font-extrabold text-muted-foreground">
              Jhon Doe
            </h2>

            <span className="text-muted-foreground">@jhondoe</span>

            <div className="flex items-center gap-2 text-zinc-600">
              <Followers />

              <Following />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start max-[600px]:hidden">
          <Button
            size="sm"
            variant="outline"
            className="w-[120px] rounded-xl font-extrabold shadow-[0px_1px_1px_1px] shadow-zinc-300"
          >
            Follow
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="sm"
                variant="outline"
                className="w-[120px] rounded-xl font-extrabold shadow-[0px_1px_1px_1px] shadow-zinc-300"
              >
                Edit profile
              </Button>
            </DialogTrigger>

            <EditProfile />
          </Dialog>
        </div>
      </div>

      <p className="mt-8 w-full text-muted-foreground md:size-[50%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="mt-6 flex w-full items-center gap-2 self-start min-[600px]:hidden">
        <Button
          size="sm"
          variant="outline"
          className="flex-1 rounded-xl font-extrabold shadow-[0px_1px_1px_1px] shadow-zinc-300"
        >
          Follow
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="flex-1 rounded-xl font-extrabold shadow-[0px_1px_1px_1px] shadow-zinc-300"
        >
          Edit profile
        </Button>
      </div>

      <p className="mt-8 flex w-min items-center gap-1 rounded-full border-[1px] border-zinc-300 p-2 font-medium text-zinc-600">
        <BookMarked className="size-5" />
        <span className="font-extrabold">20</span> Posts
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  )
}
