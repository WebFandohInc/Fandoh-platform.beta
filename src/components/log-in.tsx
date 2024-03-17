'use client'

import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

import boyPresentation from '../../public/images/boy-presentation-image.png'
import girlPresentaion from '../../public/images/girl-presentation-image.png'
import webfandohLogo from '../../public/images/webfandoh-logo.png'
import { Facebook } from './icons/facebook'
import { Google } from './icons/google'
import { Twitter } from './icons/twitter'
import { Button } from './ui/button'
import { DialogContent, DialogDescription, DialogHeader } from './ui/dialog'

interface LoginProps {
  onCloseDialog: () => void | Promise<void>
}

export function LogIn({ onCloseDialog }: LoginProps) {
  return (
    <DialogContent className="flex w-[350px] flex-col items-center overflow-hidden rounded-2xl px-0">
      <DialogHeader>
        <DialogHeader className="flex items-center justify-center">
          <Image
            src={webfandohLogo}
            width={180}
            height={50}
            alt="WebFandoh logo"
            className="mb-9"
          />
        </DialogHeader>
        <DialogDescription className="w-[300px] text-center font-bold">
          Log in for free and start creating, promoting, selling and sharing
          your favorite content in the community!
        </DialogDescription>
      </DialogHeader>

      <div className="relative flex flex-col items-center gap-3">
        <Button
          variant="outline"
          className="flex w-[280px] items-center gap-2 rounded-md text-muted-foreground"
          onClick={() => signIn('google')}
        >
          <Google />
          Continue with google
        </Button>

        <Button
          variant="outline"
          className="flex w-[280px] items-center gap-2 rounded-md text-muted-foreground"
          onClick={() => signIn('facebook')}
        >
          <Facebook />
          Continue with facebook
        </Button>

        <Button
          variant="outline"
          className="flex w-[280px] items-center gap-2 rounded-md text-muted-foreground"
          onClick={() => signIn('twitter')}
        >
          <Twitter />
          Continue with twitter
        </Button>

        <div className="flex h-[180px] w-[200px] items-center justify-center">
          <Image
            src={girlPresentaion}
            width={125}
            height={50}
            alt="WebFandoh logo"
            className="absolute -left-14"
          />

          <Image
            src={boyPresentation}
            width={200}
            height={50}
            alt="WebFandoh logo"
            className="absolute -right-24"
          />

          <div className="flex flex-col items-center gap-2 self-end text-xs">
            <Button className="w-[80px]" onClick={onCloseDialog}>
              Exit
            </Button>

            <p className="text-center font-bold">
              By logging in to WebFandoh, I confirm that i have read and agree{' '}
              <Link
                href="/terms-of-use"
                className="w-full text-primary hover:text-primary/80"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="/privacy"
                className="w-full text-primary hover:text-primary/80"
              >
                Privacy Police
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </DialogContent>
  )
}
