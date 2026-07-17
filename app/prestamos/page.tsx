import type { Metadata } from "next"
import { LoanOffers } from "@/components/loan-offers"

export const metadata: Metadata = {
  title: "Préstamos en línea | Solicita HOY MISMO",
  description:
    "Préstamos exclusivos para residentes mexicanos. Sin anticipos. Solicita en línea y recibe tu dinero el mismo día si eres aprobado.",
}

export default function PrestamosPage() {
  return (
    <main className="min-h-screen bg-background">
      <LoanOffers />
    </main>
  )
}
