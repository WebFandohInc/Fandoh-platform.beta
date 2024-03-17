'use client'

import { DropdownMenuContent } from '@radix-ui/react-dropdown-menu'
import Bold from '@tiptap/extension-bold'
import BulletList from '@tiptap/extension-bullet-list'
import Heading from '@tiptap/extension-heading'
import Image from '@tiptap/extension-image'
import Italic from '@tiptap/extension-italic'
import Link from '@tiptap/extension-link'
import Paragraph from '@tiptap/extension-paragraph'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import Youtube from '@tiptap/extension-youtube'
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold as BoldIcon,
  ExternalLink,
  Heading1,
  Heading2,
  Heading3,
  ImageIcon,
  Italic as ItalicIcon,
  List,
  Type,
  Underline as UnderlineIcon,
  Video,
} from 'lucide-react'
import { KeyboardEvent, useCallback, useRef, useState } from 'react'

import { initialEditorContent } from './initial-editor-content'
import { Input } from './ui/input'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group'

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      BulletList,
      Image.configure({
        HTMLAttributes: {
          class: 'object-cover max-h-60 max-w-[520px] w-full rounded-xl',
        },
      }),
      Youtube.configure({
        origin: 'http://localhost:3000',
        HTMLAttributes: {
          class: 'aspect-video w-full max-h-60 max-w-[520px]',
        },
      }),
      Bold,
      Italic,
      Underline,
      Paragraph,
      Heading,
      Link.configure({
        HTMLAttributes: {
          class: 'cursor-pointer hover:text-primary',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: initialEditorContent,
    editorProps: {
      attributes: {
        class: 'outline-none',
      },
    },
    onUpdate({ editor }) {
      console.log(editor.getHTML())
    },
  })

  const addImage = useCallback(() => {
    editor
      ?.chain()
      .focus()
      .setImage({
        src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg',
      })
      .run()
  }, [editor])

  function handleSetLink(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && event.currentTarget.value !== '') {
      editor
        ?.chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: event.currentTarget.value })
        .run()
    }
  }

  function handleSetYoutubeLink(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && event.currentTarget.value !== '') {
      editor?.commands.setYoutubeVideo({
        src: event.currentTarget.value,
      })
    }
  }

  return (
    <>
      <div className="mx-auto flex max-w-[868px] items-center justify-start gap-1 rounded-t-2xl border-4 border-b-[1px] border-zinc-300 px-2 py-3">
        <ToggleGroup
          type="single"
          className="flex flex-wrap items-center justify-start"
        >
          <ToggleGroupItem value="bold" aria-checked={editor?.isActive('bold')}>
            <BoldIcon
              className="size-5 cursor-pointer "
              onClick={() => editor?.chain().focus().toggleBold().run()}
            />
          </ToggleGroupItem>

          <ToggleGroupItem
            value="italic"
            aria-checked={editor?.isActive('italic')}
          >
            <ItalicIcon
              className="size-5 cursor-pointer"
              onClick={() => editor?.chain().focus().toggleItalic().run()}
            />
          </ToggleGroupItem>

          <ToggleGroupItem
            value="underline"
            aria-checked={editor?.isActive('underline')}
          >
            <UnderlineIcon
              className="size-5 cursor-pointer"
              onClick={() => editor?.chain().focus().toggleUnderline().run()}
            />
          </ToggleGroupItem>

          <ToggleGroupItem
            value="left"
            aria-checked={editor?.isActive({ textAlign: 'left' })}
          >
            <AlignLeft
              className="size-5 cursor-pointer"
              onClick={() => editor?.chain().focus().setTextAlign('left').run()}
            />
          </ToggleGroupItem>

          <ToggleGroupItem
            value="center"
            aria-checked={editor?.isActive({ textAlign: 'center' })}
          >
            <AlignCenter
              className="size-5 cursor-pointer"
              onClick={() =>
                editor?.chain().focus().setTextAlign('center').run()
              }
            />
          </ToggleGroupItem>

          <ToggleGroupItem
            value="right"
            aria-checked={editor?.isActive({ textAlign: 'right' })}
          >
            <AlignRight
              className="size-5 cursor-pointer"
              onClick={() =>
                editor?.chain().focus().setTextAlign('right').run()
              }
            />
          </ToggleGroupItem>

          <ToggleGroupItem
            value="bulletList"
            aria-checked={editor?.isActive('bulletList')}
          >
            <List
              onClick={() => editor?.chain().focus().toggleBulletList().run()}
              className="size-5 cursor-pointer"
            />
          </ToggleGroupItem>

          <ToggleGroupItem
            value="image"
            aria-checked={editor?.isActive('image')}
          >
            <ImageIcon onClick={addImage} className="size-5 cursor-pointer" />
          </ToggleGroupItem>

          <Popover>
            <PopoverTrigger asChild>
              <ToggleGroupItem
                value="video"
                aria-checked={editor?.isActive('video')}
              >
                <Video className="size-5 cursor-pointer" />
              </ToggleGroupItem>
            </PopoverTrigger>
            <PopoverContent>
              <Input
                placeholder="Insert the video url"
                onKeyDown={handleSetYoutubeLink}
              />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <ToggleGroupItem value="type">
                <Type className="size-5 cursor-pointer" />
              </ToggleGroupItem>
            </PopoverTrigger>

            <PopoverContent
              className="flex w-[150px] flex-col gap-1 p-0"
              align="end"
            >
              <span
                data-active={editor?.isActive('heading', { level: 1 })}
                className="flex w-full cursor-pointer items-center gap-2 p-1 transition-all hover:bg-zinc-200 data-[active=true]:bg-zinc-200"
                onClick={() =>
                  editor
                    ?.chain()
                    .focus()
                    .toggleHeading({
                      level: 1,
                    })
                    .run()
                }
              >
                <Heading1 className="size-5" />
                <span>Heading 1</span>
              </span>
              <span
                data-active={editor?.isActive('heading', { level: 2 })}
                className="flex w-full cursor-pointer items-center gap-2 p-1 transition-all hover:bg-zinc-200 data-[active=true]:bg-zinc-200"
                onClick={() =>
                  editor
                    ?.chain()
                    .focus()
                    .toggleHeading({
                      level: 2,
                    })
                    .run()
                }
              >
                <Heading2 className="size-5" />
                <span>Heading 2</span>
              </span>
              <span
                data-active={editor?.isActive('heading', { level: 3 })}
                className="flex w-full cursor-pointer items-center gap-2 p-1 transition-all hover:bg-zinc-200 data-[active=true]:bg-zinc-200"
                onClick={() =>
                  editor
                    ?.chain()
                    .focus()
                    .toggleHeading({
                      level: 3,
                    })
                    .run()
                }
              >
                <Heading3 className="size-5" />
                <span>Heading 3</span>
              </span>
            </PopoverContent>
          </Popover>
        </ToggleGroup>
      </div>
      <EditorContent
        className="prose prose-sky mx-auto max-h-[800px] max-w-[868px] overflow-y-scroll scroll-smooth rounded-b-2xl border-4 border-t-0 border-zinc-300 p-4 pt-2 text-muted-foreground marker:text-zinc-900"
        editor={editor}
      />
      {editor && (
        <BubbleMenu
          className="rounded-lg bg-zinc-100 shadow-sm focus:outline-none"
          editor={editor}
        >
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center gap-1 p-2 font-bold text-muted-foreground ">
                <ExternalLink className="size-5" />
                Link
              </button>
            </PopoverTrigger>

            <PopoverContent>
              <Input placeholder="Insert the url" onKeyDown={handleSetLink} />
            </PopoverContent>
          </Popover>
        </BubbleMenu>
      )}
    </>
  )
}
