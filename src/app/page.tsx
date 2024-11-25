import Link from "next/link";
import {
  ChevronRight,
  Check,
  Star,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Activity,
} from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SchoolERPLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <Activity className="w-8 h-8 text-blue-600" />
              <span className="hidden font-bold sm:inline-block">
                SchoolERP
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#features">Features</Link>
              <Link href="#benefits">Benefits</Link>
              <Link href="#how-it-works">How It Works</Link>
              <Link href="#pricing">Pricing</Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Link
              className={buttonVariants({ variant: "outline", size: "lg" })}
              href={"/auth/login"}
            >
              Log in
            </Link>
            <Link
              className={buttonVariants({ variant: "default", size: "lg" })}
              href={"/auth/signup"}
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col justify-center items-center space-y-6">
              <div className="space-y-2 flex flex-col items-center">
                <h1 className="text-3xl max-w-5xl text-center font-bold tracking-tighter sm:text-5xl xl:text-7xl/none">
                  Revolutionize Your School Operations with Ease!
                </h1>
                <p className="max-w-2xl text-muted-foreground text-center md:text-xl">
                  Empowering schools to automate, streamline, and succeed with
                  our all-in-one ERP solution.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">
                  Get Started Today
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Schedule a Free Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Why Choose SchoolERP?
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Student Information Management",
                  description:
                    "Efficiently manage student profiles, academic progress, and more—all in one place.",
                },
                {
                  title: "Attendance Tracking",
                  description:
                    "Track attendance with real-time updates and generate instant reports.",
                },
                {
                  title: "Exam and Grade Management",
                  description:
                    "Simplify exam scheduling and grading while keeping parents and students informed.",
                },
                {
                  title: "Fee Collection and Finance",
                  description:
                    "Automate fee collection, issue receipts, and maintain accurate financial records.",
                },
                {
                  title: "Parent and Teacher Communication",
                  description:
                    "Bridge the communication gap with instant messaging and announcements.",
                },
              ].map((feature, index) => (
                <Card key={index}>
                  <CardContent className="flex flex-col items-center p-6 text-center space-y-4">
                    <div className="rounded-full bg-primary p-3">
                      <Check className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* <Tabs defaultValue="feature1" className="mt-12">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="feature1">Feature 1</TabsTrigger>
                <TabsTrigger value="feature2">Feature 2</TabsTrigger>
                <TabsTrigger value="feature3">Feature 3</TabsTrigger>
                <TabsTrigger value="feature4">Feature 4</TabsTrigger>
                <TabsTrigger value="feature5">Feature 5</TabsTrigger>
              </TabsList>
              {[1, 2, 3, 4, 5].map((num) => (
                <TabsContent key={num} value={`feature${num}`}>
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <Image
                        src="/placeholder.svg"
                        alt={`Feature ${num} Screenshot`}
                        width={800}
                        height={400}
                        className="rounded-xl object-cover"
                      />
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs> */}
          </div>
        </section>

        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              What Sets Us Apart?
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Efficiency",
                  description:
                    "Save hours by automating repetitive tasks, so you can focus on education.",
                  icon: <Check className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Scalability",
                  description:
                    "Our ERP grows with your school—whether you have 50 or 5,000 students.",
                  icon: <ChevronRight className="h-10 w-10 text-primary" />,
                },
                {
                  title: "User-Friendly Design",
                  description:
                    "Simple, intuitive interfaces for admins, teachers, students, and parents.",
                  icon: <Star className="h-10 w-10 text-primary" />,
                },
              ].map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="flex flex-col items-center p-6 text-center space-y-4">
                    {benefit.icon}
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              How Does It Work?
            </h2>
            <div className="grid gap-6 lg:grid-cols-4">
              {[
                {
                  step: "Sign Up",
                  description:
                    "Enter your school's basic information to create your account.",
                },
                {
                  step: "Set Up Users",
                  description:
                    "Add students, teachers, parents, and assign roles.",
                },
                {
                  step: "Automate Operations",
                  description:
                    "Use tools for attendance, grading, scheduling, and finance.",
                },
                {
                  step: "Monitor & Report",
                  description:
                    "Generate reports and gain actionable insights with real-time data.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-2"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold">{item.step}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Trusted by Schools Worldwide
            </h2>
            <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              <CarouselContent>
                {[
                  {
                    quote:
                      "This ERP system saved us countless hours of manual work. Teachers and parents are more engaged than ever!",
                    author: "Principal, Sunrise Academy",
                  },
                  {
                    quote:
                      "Fee collection and reporting used to be a nightmare. Now it's seamless and transparent!",
                    author: "Finance Officer, Green Valley School",
                  },
                  {
                    quote:
                      "Our school's communication has drastically improved. Parents are so much happier now.",
                    author: "Teacher, Bright Future School",
                  },
                ].map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="flex flex-col items-center p-6 text-center space-y-4">
                        <p className="text-muted-foreground">
                          &quot;{testimonial.quote}&quot;
                        </p>
                        <p className="font-semibold">{testimonial.author}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Affordable Plans for Every School
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  name: "Basic Plan",
                  price: "$49/month",
                  description: "For small schools",
                  features: [
                    "Core modules",
                    "Attendance tracking",
                    "Fee management",
                    "Basic reporting",
                  ],
                },
                {
                  name: "Pro Plan",
                  price: "$99/month",
                  description: "For growing schools",
                  features: [
                    "All Basic features",
                    "Advanced analytics",
                    "Communication tools",
                    "Integrations",
                  ],
                },
                {
                  name: "Enterprise Plan",
                  price: "Contact Sales",
                  description: "Custom solutions for large institutions",
                  features: [
                    "All Pro features",
                    "Custom modules",
                    "Priority support",
                    "Data migration services",
                  ],
                },
              ].map((plan, index) => (
                <Card key={index}>
                  <CardContent className="flex flex-col p-6 space-y-4">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-4xl font-bold">{plan.price}</p>
                    <p className="text-muted-foreground">{plan.description}</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">
                      {index === 2 ? "Contact Sales" : "Choose Plan"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="demo" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Experience the Power of SchoolERP!
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join thousands of schools transforming their operations today.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <Input placeholder="Name" />
                  <Input type="email" placeholder="Email" />
                  <Input placeholder="School Name" />
                  <Input type="tel" placeholder="Phone Number" />
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="teacher">Teacher</option>
                    <option value="parent">Parent</option>
                  </select>
                  <Button type="submit" className="w-full">
                    Try It Free for 14 Days
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Got Questions? We&apos;ve Got Answers!
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-3xl mx-auto"
            >
              {[
                {
                  question: "What is a School Management System ERP?",
                  answer:
                    "An ERP system centralizes school operations like attendance, fees, and communication in one platform.",
                },
                {
                  question: "How secure is my data?",
                  answer:
                    "We use advanced encryption and cloud-based storage to ensure your data is always safe.",
                },
                {
                  question: "Can I customize features for my school?",
                  answer:
                    "Yes! Our platform is designed to adapt to your unique needs.",
                },
                {
                  question: "Do you provide training and support?",
                  answer: "We offer 24/7 support and onboarding assistance.",
                },
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Activity className="w-8 h-8 text-blue-600" />
            <p className="text-center text-sm leading-loose md:text-left">
              © 2024 SchoolERP. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm hover:underline">
              Home
            </Link>
            <Link href="#features" className="text-sm hover:underline">
              Features
            </Link>
            <Link href="#pricing" className="text-sm hover:underline">
              Pricing
            </Link>
            <Link href="#demo" className="text-sm hover:underline">
              Demo
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Contact Us
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="container mt-4 text-center text-sm text-muted-foreground">
          <p>
            Email: support@schoolerp.com | Phone: +1 800 555 5555 | Address: 123
            School Lane, Education City, USA
          </p>
        </div>
      </footer>
    </div>
  );
}
