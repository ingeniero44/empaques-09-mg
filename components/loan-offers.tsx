import Link from "next/link"
import {
  CheckCircle2,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Wallet,
  RotateCcw,
  PlusCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  "En el enlace encontrarás toda la información y podrás hacer tu solicitud en línea.",
  "Si tu solicitud es aprobada, el dinero se depositará en tu cuenta ¡HOY MISMO!",
]

const options = [
  {
    icon: Wallet,
    tag: "Opción 1",
    title: "Nueva solicitud",
    description: "Haz tu solicitud en línea de forma rápida y sencilla.",
    href: "https://tinyurl.com/49n393vn",
    cta: "Solicitar ahora",
    variant: "primary" as const,
  },
  {
    icon: RotateCcw,
    tag: "Opción 2",
    title: "Si tu solicitud no fue aprobada",
    description: "Intenta con esta alternativa para obtener tu préstamo.",
    href: "https://tinyurl.com/4x6t8rvu",
    cta: "Intentar de nuevo",
    variant: "outline" as const,
  },
  {
    icon: PlusCircle,
    tag: "Opción extra",
    title: "¿No te registraste o necesitas más dinero?",
    description: "Si no lograste registrarte en las ofertas anteriores o necesitas más dinero, aquí tienes otra opción.",
    href: "https://tinyurl.com/2uxmd5rw",
    cta: "Ver otra opción",
    variant: "accent" as const,
  },
]

export function LoanOffers() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8 px-4 py-10 md:py-16">
      {/* Bienvenida */}
      <header className="flex flex-col items-center gap-3 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
          <Wallet className="h-7 w-7 text-primary-foreground" />
        </div>
        <h1 className="text-3xl font-bold text-balance text-foreground md:text-4xl">
          ¡Bienvenido!
        </h1>
        <p className="text-pretty leading-relaxed text-muted-foreground">
          Consigue tu préstamo en línea de forma segura y sin complicaciones.
        </p>
      </header>

      {/* Avisos importantes */}
      <ul className="flex flex-col gap-3 rounded-lg border border-border bg-card p-5">
        <li className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <span className="leading-relaxed text-card-foreground">
            Nuestros préstamos son exclusivamente para residentes mexicanos.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <span className="leading-relaxed text-card-foreground">
            No pedimos anticipos de ningún tipo.
          </span>
        </li>
      </ul>

      {/* Pasos a seguir */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-foreground">Pasos a seguir</h2>
        <ol className="flex flex-col gap-4">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {i + 1}
              </span>
              <span className="pt-0.5 leading-relaxed text-muted-foreground">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Opciones con botones */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-foreground">Elige tu opción</h2>
        <div className="flex flex-col gap-4">
          {options.map((option) => {
            const Icon = option.icon
            return (
              <div
                key={option.href}
                className="flex flex-col gap-4 rounded-lg border border-border bg-card p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-medium uppercase tracking-wide text-accent">
                      {option.tag}
                    </span>
                    <h3 className="font-semibold leading-snug text-card-foreground">
                      {option.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {option.description}
                    </p>
                  </div>
                </div>
                <Button
                  asChild
                  size="lg"
                  variant={option.variant === "outline" ? "outline" : "default"}
                  className={
                    option.variant === "accent"
                      ? "w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      : option.variant === "primary"
                        ? "w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        : "w-full"
                  }
                >
                  <Link href={option.href} target="_blank" rel="noopener noreferrer">
                    {option.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )
          })}
        </div>
      </section>

      {/* Nota de confianza */}
      <p className="flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
        <CheckCircle2 className="h-4 w-4 text-primary" />
        Solicitud 100% en línea y sin anticipos.
      </p>
    </div>
  )
}
