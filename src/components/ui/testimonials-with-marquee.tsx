import { cn } from "@/lib/utils"
import { Star } from "lucide-react"
import Image from "next/image"

interface TestimonialAuthor {
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

function TestimonialCard({
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

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsWithMarquee({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-background text-foreground",
      "py-12 sm:py-24 md:py-32 px-0",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="relative flex w-full overflow-hidden">
            <div 
              className="flex animate-marquee gap-4 py-4" 
              style={{ "--duration": "40s" } as React.CSSProperties}
            >
              {[...Array(2)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  )
} 