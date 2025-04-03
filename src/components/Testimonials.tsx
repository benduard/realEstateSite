import React from 'react';
import { TestimonialsSection } from './blocks/testimonials-with-marquee';

const testimonials = [
  {
    author: {
      name: "Sarah Johnson",
      handle: "@sarahj",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Michael helped us find our dream home in College Station. His knowledge of the local market and attention to detail made the entire process smooth and enjoyable.",
    href: "https://twitter.com/sarahj"
  },
  {
    author: {
      name: "David Chen",
      handle: "@davidchen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "As a first-time homebuyer, I was nervous about the process. Michael's expertise and patience made me feel confident throughout the entire journey.",
    href: "https://twitter.com/davidchen"
  },
  {
    author: {
      name: "Emily Rodriguez",
      handle: "@emilyr",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Michael's dedication to finding the perfect property for his clients is unmatched. He went above and beyond to ensure we found exactly what we were looking for.",
    href: "https://twitter.com/emilyr"
  },
  {
    author: {
      name: "James Wilson",
      handle: "@jamesw",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "The market insights and property recommendations Michael provided were invaluable. He truly understands the College Station real estate market.",
    href: "https://twitter.com/jamesw"
  },
  {
    author: {
      name: "Lisa Thompson",
      handle: "@lisat",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "Michael's negotiation skills helped us get the best deal possible. His professionalism and expertise are truly impressive.",
    href: "https://twitter.com/lisat"
  },
  {
    author: {
      name: "Robert Martinez",
      handle: "@robertm",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "From start to finish, Michael provided exceptional service. His knowledge of the local area and market trends is outstanding.",
    href: "https://twitter.com/robertm"
  },
  {
    author: {
      name: "Jennifer Kim",
      handle: "@jenniferk",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    text: "Michael's attention to detail and commitment to client satisfaction is remarkable. He made our home buying experience truly memorable.",
    href: "https://twitter.com/jenniferk"
  },
  {
    author: {
      name: "Thomas Anderson",
      handle: "@thomasa",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Working with Michael was a pleasure. His expertise in the College Station market and dedication to his clients is exceptional.",
    href: "https://twitter.com/thomasa"
  }
];

const Testimonials: React.FC = () => {
  return (
    <TestimonialsSection
      title="What Our Clients Say"
      description="Don't just take our word for it - hear from some of our satisfied clients about their experience working with Michael"
      testimonials={testimonials}
    />
  );
};

export default Testimonials;