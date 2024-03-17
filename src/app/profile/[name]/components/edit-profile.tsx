'use client'

import { Camera } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

interface EditProfileSchema {
  name: string
  username: string
  bio: string
}

export function EditProfile() {
  const { register } = useForm<EditProfileSchema>({
    values: {
      name: 'Jhon Doe',
      username: 'jhondoe',
      bio: 'Descrição',
    },
  })

  return (
    <DialogContent className="text-zinc-500">
      <DialogHeader>
        <DialogTitle className="font-extrabold">Edit profile</DialogTitle>
        <DialogDescription>
          {`Make changes to your profile here. Click save when you're done`}
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <Avatar className="size-32">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="text-5xl font-extrabold">
              JD
            </AvatarFallback>
          </Avatar>

          <Label
            htmlFor="photo"
            className="mt-4 flex cursor-pointer items-center gap-1 self-start rounded-xl border-[1.5px] border-zinc-200 px-3 py-[6px] text-xs font-extrabold leading-normal text-primary-button shadow-[0px_1px_1px_1px] shadow-zinc-300 transition-all hover:bg-zinc-200 hover:text-muted-foreground"
          >
            <Camera className="size-5" />
            Change photo
          </Label>
          <Input className="hidden" id="photo" name="photo" type="file" />
        </div>

        <Label className="mt-6 flex flex-col gap-2">
          <span className="font-bold">Name</span>
          <Input
            {...register('name')}
            placeholder="Input your name"
            className="text-muted-foreground shadow-[0px_1px_1px_1px] shadow-zinc-300 placeholder:text-zinc-400"
          />
        </Label>

        <Label className="mt-6 flex flex-col gap-2">
          <span className="font-bold">@Username</span>
          <Input
            {...register('username')}
            placeholder="Input your username"
            className="text-muted-foreground shadow-[0px_1px_1px_1px] shadow-zinc-300 placeholder:text-zinc-400"
          />
        </Label>

        <Label className="mt-6 flex flex-col gap-2">
          <span className="font-bold">Bio</span>

          <Textarea
            {...register('bio')}
            placeholder="Please provide information about yourself"
            className="text-muted-foreground shadow-[0px_1px_1px_1px] shadow-zinc-300 placeholder:text-zinc-400"
          />
        </Label>

        <Button
          type="submit"
          className="mt-6 w-[250px] self-center rounded-2xl py-6"
        >
          Save changes
        </Button>
      </div>
    </DialogContent>
  )
}
