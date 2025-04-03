import { cn } from "../../lib/utils"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
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
        "group relative flex w-[350px] shrink-0 flex-col justify-between rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md",
        className
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <img
            src={author.avatar}
            alt={author.name}
            className="h-12 w-12 rounded-full"
          />
          <div className="flex flex-col">
            <div className="font-medium">{author.name}</div>
            <div className="text-sm text-muted-foreground">{author.handle}</div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          View on Twitter
        </a>
      )}
    </div>
  )
} 