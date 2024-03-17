'use client'

import { Camera, X } from 'lucide-react'
import Image from 'next/image'
import { KeyboardEvent, useState } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function CreatePostForm() {
  const [file, setFile] = useState<FileList | null>(null)

  const [inputValue, setInputValue] = useState('')
  const [tags, setTags] = useState<string[]>([])

  const fileUrl = file && file.length ? URL.createObjectURL(file[0]) : null

  const handleInputKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      const newTag = inputValue.trim()
      if (newTag) {
        setTags([...tags, newTag])
        setInputValue('')
      }
    }
  }

  const handleTagRemove = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="mt-6">
        <Label
          htmlFor="cover"
          className="relative flex h-[400px] max-w-[700px] cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 text-muted-foreground shadow-[0px_3px_1px_2px,0px_1px_1px_2px] shadow-zinc-200"
        >
          {fileUrl ? (
            <Image src={fileUrl} alt="" fill className="aspect-square" />
          ) : (
            <div className="flex flex-col items-center transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-zinc-900/90">
              <Camera className="size-16" />
              <span className="text-xl font-bold">Cover Image</span>
            </div>
          )}
        </Label>
        <Input
          onChange={(event) => setFile(event.target.files)}
          id="cover"
          type="file"
          className="hidden"
        />

        <Label className="mt-6 flex flex-col gap-2">
          <span className="font-bold text-muted-foreground">Title</span>
          <Input
            placeholder="Insert the main title of your content, take care!"
            className="text-muted-foreground shadow-[0px_1px_1px_1px] shadow-zinc-300 placeholder:text-zinc-400"
          />
        </Label>

        <Label className="mt-6 flex flex-col gap-2">
          <span className="font-bold text-muted-foreground">Description</span>
          <Textarea
            placeholder="Create an eye-catching and engaging description to increase your chances of getting a great review!"
            className="text-muted-foreground shadow-[0px_1px_1px_1px] shadow-zinc-300 placeholder:text-zinc-400"
          />
        </Label>
      </div>

      <div className="mt-6">
        <h1 className="text-3xl font-extrabold text-muted-foreground">Tags</h1>

        <Textarea
          rows={2}
          placeholder="Enter up to 5 tags based on your content."
          className="mt-6 rounded-2xl text-muted-foreground shadow-[0px_1px_1px_1px]  shadow-zinc-300 placeholder:text-zinc-400"
          onChange={(event) => setInputValue(event?.target.value)}
          value={inputValue}
          onKeyDown={handleInputKeyDown}
          disabled={tags.length === 5}
        />
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-2 rounded-full border-2 px-2 py-1 text-sm text-muted-foreground shadow-[0px_1px_1px_1px] shadow-zinc-300"
            >
              {tag}
              <X
                onClick={() => handleTagRemove(tag)}
                className="size-3.5 cursor-pointer transition-all hover:text-red-600"
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
