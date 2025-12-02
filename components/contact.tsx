'use client'

import { useState, type FormEvent } from "react"
import { Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("E-Mail-Versand ist noch nicht konfiguriert. Bitte NEXT_PUBLIC_EMAILJS_* Variablen setzen.")
      }
      const emailjs = (await import("@emailjs/browser")).default
      await emailjs.send(
        serviceId,
        templateId,
        { name: name, email: email, message },
        { publicKey }
      )
      setStatus({ ok: true, msg: "Vielen Dank! Ihre Nachricht wurde gesendet." })
      setName("")
      setEmail("")
      setMessage("")
    } catch (err: any) {
      setStatus({
        ok: false,
        msg: err?.message || "Senden fehlgeschlagen. Bitte versuchen Sie es später erneut.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="pt-20 md:pt-32 pb-8 md:pb-12 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start mb-14">
          <div className="md:text-left text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">Kontakt</h2>
            <p className="text-muted-foreground mb-12 leading-relaxed">
              Interessieren Sie sich für meine Arbeiten oder möchten Sie mehr erfahren? Ich freue mich über Ihre
              Nachricht.
            </p>

            <div className="space-y-6">
              <div className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-accent-foreground" />
                <span>Ehingen (Donau), Deutschland</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="h-5 w-5 text-accent-foreground" />
                <a href="mailto:j.nesslauer@hotmail.de" className="text-muted-foreground hover:text-foreground transition-colors">
                  j.nesslauer@hotmail.de
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <div className="grid gap-4">
              <div className="text-left">
                <Label htmlFor="name" className="mb-2">Name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="text-left">
                <Label htmlFor="email" className="mb-2">E-Mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="text-left">
                <Label htmlFor="message" className="mb-2">Nachricht</Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="bg-[#cd725c] hover:bg-[#cd725c]/90 text-white" disabled={loading}>
                {loading ? "Wird gesendet..." : "Nachricht senden"}
              </Button>
              {status && (
                <p className={`text-sm ${status.ok ? "text-green-600" : "text-destructive"}`}>{status.msg}</p>
              )}
            </div>
          </form>
        </div>

      </div>
    </section>
  )
}
