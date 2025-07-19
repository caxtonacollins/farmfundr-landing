import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowRight, Users, TrendingUp, Shield, Star, ChevronRight, Sprout, Fish, Egg, Wheat } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">FarmFundr</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#marketplace" className="text-sm font-medium hover:text-primary transition-colors">
              Marketplace
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <ThemeToggle />
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </nav>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  🇳🇬 Supporting Nigerian Agriculture
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Crowdfund and connect directly with <span className="text-primary">real Nigerian farms</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Invest in sustainable farming projects, support local communities, and earn returns while making a
                  positive impact on Nigerian agriculture.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Fund a Farm Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Explore Market
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>500+ Investors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>₦50M+ Funded</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Verified Farms</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Nigerian farmers working in sustainable agriculture"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">15% Average Returns</p>
                    <p className="text-sm text-muted-foreground">Last 12 months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">How FarmFundr Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to start investing in Nigerian agriculture and supporting local farmers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Fund",
                description: "Choose a verified farm project and invest the amount you're comfortable with",
                icon: "💰",
              },
              {
                step: "02",
                title: "Farm",
                description: "Track your investment as farmers use your funds to grow crops and raise livestock",
                icon: "🌱",
              },
              {
                step: "03",
                title: "Harvest",
                description: "Monitor the farming progress and harvest results through our transparent platform",
                icon: "🚜",
              },
              {
                step: "04",
                title: "Payout",
                description: "Receive your returns plus profits when the harvest is sold in the market",
                icon: "💵",
              },
            ].map((item, index) => (
              <Card key={index} className="relative">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-sm font-medium text-primary mb-2">Step {item.step}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{item.description}</CardDescription>
                </CardContent>
                {index < 3 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Farm Categories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diversify your portfolio across different types of agricultural investments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Poultry Farming",
                description: "Chicken, turkey, and egg production",
                icon: <Egg className="h-8 w-8" />,
                returns: "12-18%",
                duration: "6-8 months",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Crop Farming",
                description: "Rice, maize, cassava, and vegetables",
                icon: <Wheat className="h-8 w-8" />,
                returns: "15-25%",
                duration: "4-6 months",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Fish Farming",
                description: "Catfish and tilapia aquaculture",
                icon: <Fish className="h-8 w-8" />,
                returns: "20-30%",
                duration: "6-9 months",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "BSF Farming",
                description: "Black Soldier Fly protein production",
                icon: <Sprout className="h-8 w-8" />,
                returns: "25-35%",
                duration: "3-4 months",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white dark:bg-gray-900 p-2 rounded-full">
                    {category.icon}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Expected Returns</p>
                      <p className="font-semibold text-primary">{category.returns}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold">{category.duration}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section id="marketplace" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Active Farm Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse and invest in verified farming projects across Nigeria
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Organic Rice Farm - Kebbi State",
                farmer: "Musa Ibrahim",
                target: "₦2,500,000",
                raised: "₦1,800,000",
                progress: 72,
                returns: "18%",
                duration: "5 months",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Catfish Production - Lagos State",
                farmer: "Adunni Okafor",
                target: "₦1,200,000",
                raised: "₦950,000",
                progress: 79,
                returns: "22%",
                duration: "7 months",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Poultry Farm - Ogun State",
                farmer: "James Okoro",
                target: "₦800,000",
                raised: "₦650,000",
                progress: 81,
                returns: "15%",
                duration: "6 months",
                image: "/placeholder.svg?height=200&width=400",
              },
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-white">{project.returns} Returns</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>by {project.farmer}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm mt-2 text-muted-foreground">
                      <span>{project.raised} raised</span>
                      <span>{project.target} target</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{project.duration}</span>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      Invest Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">What Our Community Says</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from farmers and investors who are part of the FarmFundr family
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Chioma Nwankwo",
                role: "Investor",
                content:
                  "FarmFundr has allowed me to diversify my investment portfolio while supporting local farmers. I've earned consistent returns and feel good about the impact.",
                rating: 5,
                avatar: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "Abdullahi Garba",
                role: "Farmer",
                content:
                  "Through FarmFundr, I was able to expand my rice farm and increase production by 300%. The platform connected me with investors who believe in my vision.",
                rating: 5,
                avatar: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "Sarah Ogundimu",
                role: "Investor",
                content:
                  "The transparency and regular updates from farmers make me confident in my investments. I've already reinvested my returns into new projects.",
                rating: 5,
                avatar: "/placeholder.svg?height=60&width=60",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Join the Waitlist</h2>
              <p className="text-xl opacity-90">
                Be the first to know when we launch new farm projects and investment opportunities
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white text-black border-0 flex-1"
              />
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Join Waitlist
              </Button>
            </div>
            <p className="text-sm opacity-75">
              Join 2,000+ people already on our waitlist. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sprout className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">FarmFundr</span>
              </div>
              <p className="text-muted-foreground">
                Connecting investors with Nigerian farmers for sustainable agriculture and profitable returns.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Farm Projects
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Returns Calculator
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} FarmFundr. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
