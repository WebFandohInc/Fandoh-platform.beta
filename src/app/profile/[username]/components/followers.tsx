'use client'

import { Popover } from '@radix-ui/react-popover'
import { X } from 'lucide-react'
import { useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export function Followers() {
  const [isOpen, setIsOpen] = useState(false)

  function toggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger onClick={toggle}>
        <p className="flex items-center gap-1 font-medium transition-all hover:text-zinc-800">
          <span className="font-extrabold">34</span> followers
        </p>
      </PopoverTrigger>
      <PopoverContent
        className="max-w-[350px] text-muted-foreground"
        align="center"
      >
        <div className="flex items-center justify-between">
          <h2 className="font-extrabold text-primary">Followers</h2>
          <X
            className="size-5 cursor-pointer text-zinc-600 transition-all hover:text-zinc-900"
            onClick={toggle}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4">
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between gap-4 text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <Avatar className="size-14">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback className="text-xl font-extrabold">
                      JD
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col">
                    <span className="block text-sm font-bold tracking-tight">
                      jhondoe
                    </span>
                    <span className="block tracking-tight">Jhon Doe</span>
                  </div>
                </div>

                <Button
                  size="sm"
                  className=" rounded-xl bg-zinc-400 hover:bg-zinc-500"
                >
                  Remove
                </Button>
              </div>
            )
          })}
          <Button size="sm" className="rounded-xl">
            Show more
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
