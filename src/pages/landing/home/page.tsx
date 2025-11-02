import { Navbar } from "@/components/nabar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { defaultHomeRoute } from "@/routes";
import { CheckCircle2, TrendingDown, Target, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl text-balance">
              Break free from bad habits
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Transform your life one day at a time. Track your progress, stay
              accountable, and build the future you deserve with Habit Breaker.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg" className="text-base" asChild>
                <Link to={defaultHomeRoute}>Start Your Journey</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary">85%</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Success Rate
              </div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary">21</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Days Average
              </div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary">10k+</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Users Helped
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Everything you need to succeed
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Powerful tools designed to help you stay on track and achieve
              lasting change.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Track Habits
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Monitor your daily progress and see patterns emerge over time.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <TrendingDown className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Break Cycles
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Identify triggers and develop strategies to overcome them.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Visualize Progress
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Beautiful charts and insights to keep you motivated.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Stay Accountable
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Daily reminders and streaks to keep you committed.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-accent/20 via-primary to-primary" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
              Ready to make a change?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/90 text-pretty">
              Join thousands of people who have successfully broken their bad
              habits and transformed their lives.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="text-base"
                asChild
              >
                <Link to={defaultHomeRoute}>Get Started Free</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Habit Breaker. Your journey to a better you starts here.
          </p>
        </div>
      </footer>
    </div>
  );
}
