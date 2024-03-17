import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Textarea } from '@/components/ui/textarea'

export function Comment() {
  return (
    <div className="mt-6 flex w-full flex-col items-center">
      <div className="flex w-full items-start gap-2">
        <Avatar className="size-16">
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>

        <div className="flex items-center gap-2 pt-2">
          <h5 className="text-base font-bold">Lucas Morales</h5>
          <span className="text-xs">10 days ago</span>
        </div>
      </div>
      <div className="ml-[68px] mt-[-28px] flex flex-col self-start rounded-xl bg-zinc-100 px-3 pb-8 pt-2 text-left font-medium">
        <p>
          I loved the content! These curiosities changed my perspective on the
          character.
        </p>
      </div>
    </div>
  )
}
