'use client'

import { Attachment } from '@prisma/client'
import { Camera } from 'lucide-react'
import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'

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

interface EditProfileProps {
  user: {
    id: string
    name: string
    username: string
    bio?: string | null
    avatarUrl?: string | null
  }
}

export function EditProfile({ user }: EditProfileProps) {
  const { register } = useForm<EditProfileSchema>({
    values: {
      name: user?.name,
      username: user?.username,
      bio: user?.bio ?? '',
    },
  })

  async function handleUploadFile(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const file = event.target.files[0]

    const formData = new FormData()

    formData.append('file', file)

    const attachmentResponse = await fetch(
      `http://localhost:3000/api/attachments?name=${file.name}`,
      {
        body: formData,
        method: 'POST',
      },
    )

    const attachmentResponseData: { attachment: Attachment } =
      await attachmentResponse.json()

    const body = {
      avatarId: attachmentResponseData.attachment.id,
    }

    await fetch(`http://localhost:3000/api/users/avatar/${user.id}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }

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
            {user.avatarUrl && <AvatarImage src={user.avatarUrl} />}
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
          <Input
            onChange={handleUploadFile}
            className="hidden"
            id="photo"
            name="photo"
            type="file"
          />
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
