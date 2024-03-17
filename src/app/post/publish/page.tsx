import { X } from 'lucide-react'
import Link from 'next/link'

import { Progress } from '@/components/ui/progress'

import { CreatePostForm } from '../components/create-post-form'
import { PublishPostForm } from '../components/publish-post-form'

export default function CreatePost() {
  return (
    <div className="mx-auto min-h-screen max-w-[1180px] px-2 pb-10 pt-32 lg:px-0">
      <div className="flex items-center gap-4">
        <Link href="/">
          <X className="cursor-pointer text-muted-foreground transition-all hover:opacity-90" />
        </Link>
        <Progress value={100} />
      </div>
      <h1 className="mt-6 text-center font-bold text-primary">
        Start to create!
      </h1>

      <PublishPostForm />
    </div>
  )
}
