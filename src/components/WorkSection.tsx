import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"

const testimonials = [
  {
    author: {
      name: "Dr. Rajesh Kumar",
      handle: "@drrajeshcardio",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Built my personal brand from 15K to 245K followers in just 8 months. The strategy transformed how my patients perceive my expertise.",
    href: "#"
  },
  {
    author: {
      name: "Dr. Priya Sharma",
      handle: "@drpriyaskin",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "My consultation bookings increased by 3x since implementing this personal branding approach. Game-changing results!",
    href: "#"
  },
  {
    author: {
      name: "Dr. Anil Patel",
      handle: "@dranilortho",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Became one of the top orthopedic voices on medical social media. This helped establish my authority in the field.",
    href: "#"
  },
  {
    author: {
      name: "Dr. Sneha Gupta",
      handle: "@drsnehaped",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "The content strategy increased my monthly reach to 1.5M people. Best investment in my professional growth!",
    href: "#"
  },
  {
    author: {
      name: "Dr. Vikram Singh",
      handle: "@drvikramuro",
      avatar: "https://images.unsplash.com/photo-1507009341169-e5dfc676d235?w=150&h=150&fit=crop&crop=face"
    },
    text: "14.5% engagement rate and consistently trending among medical professionals. Exceeded all expectations!",
    href: "#"
  },
  {
    author: {
      name: "Dr. Anjali Reddy",
      handle: "@dranjalident",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "From local practice to recognized expert. My online presence now brings referrals from across the country.",
    href: "#"
  }
]

export function WorkSection() {
  return (
    <section id="work" className="relative">
      <TestimonialsSection
        title="Proven Growth & Results"
        description="Join 50+ healthcare professionals who transformed their personal brands and exponentially grew their patient base"
        testimonials={testimonials}
      />
    </section>
  )
}
