import Image from "next/image"
import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

export interface TestimonialAuthor {
  name: string
  role: string
  image?: string
}

interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({
  author,
  text,
  href,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "group relative flex w-[350px] shrink-0 flex-col justify-between rounded-2xl bg-muted/50 p-6 shadow-sm transition-all hover:bg-muted/80",
        className
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          "{text}"
        </p>
      </div>

      <div className="mt-6 flex items-center gap-4">
        {author.image && (
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src={author.image}
              alt={author.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="flex flex-col">
          <span className="font-medium">{author.name}</span>
          <span className="text-sm text-muted-foreground">{author.role}</span>
        </div>
      </div>
    </div>
  )
} 