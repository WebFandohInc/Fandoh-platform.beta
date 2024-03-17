import { X } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

import { CreatePostForm } from '../components/create-post-form'

export default function CreatePost() {
  return (
    <div className="m-auto min-h-screen max-w-[1180px] px-2 pb-10 pt-32 lg:px-0">
      <div className="flex items-center gap-4">
        <Link href="/">
          <X className="cursor-pointer text-muted-foreground transition-all hover:opacity-90" />
        </Link>
        <Progress value={50} />
      </div>
      <h1 className="mt-6 font-bold text-primary">Start to create!</h1>

      <CreatePostForm />

      <div className="mt-6 flex w-full items-center justify-around gap-8">
        <Button
          size="lg"
          className="h-[60px] w-[215px] rounded-3xl bg-red-500 shadow-[0px_4px_0px_0px] shadow-red-700 hover:bg-red-700"
        >
          Cancel
        </Button>
        <Button
          size="lg"
          className="h-[60px] w-[215px] rounded-3xl shadow-[0px_4px_0px_0px] shadow-[#2F5F83] hover:bg-[#2F5F83]"
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
