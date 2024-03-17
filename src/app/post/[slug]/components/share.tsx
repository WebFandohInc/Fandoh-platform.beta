'use client'

import { Send } from 'lucide-react'

import { Facebook } from '@/components/icons/facebook'
import { Reddit } from '@/components/icons/reddit'
import { Twitter } from '@/components/icons/twitter'
import { Whatsapp } from '@/components/icons/Whatsapp'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export function Share() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-full gap-1 rounded-2xl">
          <Send className="size-4" />
          Share
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <h1 className="text-center font-bold">Share with your friends</h1>

        <div className="flex items-center justify-center gap-3">
          <a
            href="https://twitter.com/intent/tweet?text=Hello%20world&url=https://ignite-call-two-sable.vercel.app"
            className="flex cursor-pointer flex-col items-center justify-center transition delay-150 ease-in-out hover:translate-y-1 hover:scale-110"
          >
            <div className="flex size-9 items-center justify-center rounded-full bg-[#2F2F2F]/20">
              <Twitter className="fill-zinc-900 stroke-none" />
            </div>
            <span className="text-xs font-bold">Twitter</span>
          </a>
          <a
            href={`https://www.facebook.com/dialog/share?app_id=760524859124056&display=popup&href=https://webfandoh.com`}
            target="_blank"
            className="flex cursor-pointer flex-col items-center justify-center transition delay-150 ease-in-out hover:translate-y-1 hover:scale-110"
            rel="noreferrer"
          >
            <div className="flex size-9 items-center justify-center rounded-full bg-[#1877F2]/20">
              <Facebook className="fill-[#1877F2] stroke-none" />
            </div>
            <span className="text-xs font-bold text-[#1877F2]">Facebook</span>
          </a>
          <div className="flex cursor-pointer flex-col items-center justify-center transition delay-150 ease-in-out hover:translate-y-1 hover:scale-110">
            <div className="flex size-9 items-center justify-center rounded-full bg-[#FF4500]/20">
              <Reddit className="fill-[#FF4500] stroke-none" />
            </div>
            <span className="text-xs font-bold text-[#FF4500]">Reddit</span>
          </div>
          <a
            href="whatsapp://send?text=https://webfandoh.com"
            data-action="share/whatsapp/share"
            className="flex cursor-pointer flex-col items-center justify-center transition delay-150 ease-in-out hover:translate-y-1 hover:scale-110"
          >
            <div className="flex size-9 items-center justify-center rounded-full bg-[#25D366]/20">
              <Whatsapp className="fill-[#25D366] stroke-none" />
            </div>
            <span className="text-xs font-bold text-[#25D366]">Whatsapp</span>
          </a>
        </div>
      </PopoverContent>
    </Popover>
  )
}
