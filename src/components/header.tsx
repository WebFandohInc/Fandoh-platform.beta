'use client'

import { Home, LogOut, Menu, PenBox } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { useState } from 'react'

import webfandohLogo from '../../public/images/webfandoh-logo.png'
import { LogIn } from './log-in'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Dialog, DialogTrigger } from './ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Separator } from './ui/separator'

export function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  const session = useSession()

  const isAuthenticated = !!session && session.status === 'authenticated'

  return (
    <>
      {isAuthenticated ? (
        <header className="fixed z-50 w-full bg-white shadow-md">
          <div className="mx-auto my-0 flex w-full max-w-[1400px] items-center justify-between px-2 py-6 2xl:px-0">
            <Link href="/">
              <Image
                src={webfandohLogo}
                alt="Webfandoh logo"
                width={200}
                height={50}
              />
            </Link>

            <div className="flex items-center gap-2">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 rounded-2xl leading-tight text-zinc-500 shadow-none max-[600px]:hidden"
                >
                  <Home className="size-5" />
                  Home
                </Button>
              </Link>
              <Button
                variant="ghost"
                className="flex items-center gap-2 rounded-2xl leading-tight text-zinc-500 shadow-none max-[600px]:hidden"
              >
                <PenBox className="size-5" />
                Create
              </Button>

              <Avatar>
                <AvatarFallback className="text-sm font-extrabold text-muted-foreground">
                  {session?.data?.user?.name
                    ?.split(' ')
                    .map((word) => word.charAt(0))
                    .join('')}
                </AvatarFallback>
                <AvatarImage src={session?.data?.user?.profilePhotoUrl ?? ''} />
              </Avatar>
              <span className="font-bold text-muted-foreground max-[600px]:hidden">
                {session.data?.user?.name}
              </span>
              <span
                className="flex cursor-pointer items-center gap-2 text-sm font-bold text-red-600 hover:text-red-500 max-[600px]:hidden"
                onClick={() => signOut()}
              >
                <LogOut className="size-4" />
                Exit
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="sm:hidden">
                    <Menu />
                    <span className="sr-only">Abrir menu</span>
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Menu</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex items-center gap-2">
                    <Home className="size-4" />
                    Home
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2">
                    <PenBox className="size-4" /> Create
                  </DropdownMenuItem>
                  <Separator />
                  <DropdownMenuItem
                    className="flex cursor-pointer items-center gap-2 text-sm font-bold text-red-600 hover:text-red-500"
                    onClick={() => signOut()}
                  >
                    <LogOut className="size-4" />
                    Exit
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
      ) : (
        <header className="fixed z-50 w-full bg-white shadow-md">
          <div className="mx-auto my-0 flex w-full max-w-[1400px] items-center justify-between px-2 py-6 2xl:px-0">
            <Link href="/">
              <Image
                src={webfandohLogo}
                alt="Webfandoh logo"
                width={200}
                height={50}
              />
            </Link>

            <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
              <div className="flex items-center gap-2">
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="rounded-2xl text-primary shadow-sm"
                  >
                    Log In
                  </Button>
                </DialogTrigger>
                <DialogTrigger asChild>
                  <Button className="rounded-2xl shadow-sm">Sign Up</Button>
                </DialogTrigger>

                <LogIn onCloseDialog={() => setIsLoginOpen(false)} />
              </div>
            </Dialog>
          </div>
        </header>
      )}
    </>
  )
}
