import Image from 'next/image'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function PostCard({ className }: { className?: string }) {
  return (
    <Card
      className={cn(
        'flex rounded-2xl h-[335px] flex-col justify-between overflow-hidden shadow-[0px_5px_2px_1px] shadow-zinc-300',
        className,
      )}
    >
      <CardHeader className="relative h-[200px] overflow-hidden">
        <Image
          src="https://i.ibb.co/HNW8NLK/backend-logo.png"
          alt=""
          fill={true}
          className="aspect-square"
        />
      </CardHeader>
      <h2 className="w-full px-2 font-bold leading-4">
        Top 5 mulheres aranhas mais fortes da Marvel que apenas os fãs vão
        conhecer
      </h2>
      <CardContent className="p-2">
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold min-[300px]:w-[180px] sm:max-w-[125px] md:max-w-[120px] lg:max-w-[200px]">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="text-lg font-extrabold">
                JD
              </AvatarFallback>
            </Avatar>
            <span className="overflow-hidden text-ellipsis text-nowrap font-bold">
              Jhon Doe Doe San
            </span>
          </div>

          <Button className="rounded-full" variant="outline" size="sm">
            Discover...
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
