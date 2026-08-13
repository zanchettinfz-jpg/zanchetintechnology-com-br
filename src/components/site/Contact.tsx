import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { Github, Instagram, Linkedin, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { site, whatsappLink } from "@/config/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

const needs = [
  "Site institucional",
  "Landing Page",
  "Loja virtual",
  "Sistema Web",
  "Sistema empresarial",
  "Manutenção",
  "Outro",
] as const;

const budgets = [
  "Até R$ 1.000",
  "R$ 1.000 – R$ 2.000",
  "R$ 2.000 – R$ 5.000",
  "R$ 5.000+",
  "Ainda não sei",
] as const;

const schema = z.object({
  name: z.string().min(3, "Informe seu nome completo."),
  company: z.string().optional(),
  phone: z
    .string()
    .min(10, "Informe um WhatsApp válido com DDD.")
    .regex(/^[0-9()+\-\s]+$/, "Use apenas números e símbolos de telefone."),
  email: z.string().email("Informe um e-mail válido."),
  need: z.enum(needs, { required_error: "Selecione o que você precisa." }),
  message: z.string().min(15, "Conte um pouco mais sobre o projeto (mín. 15 caracteres)."),
  budget: z.enum(budgets, { required_error: "Selecione um orçamento aproximado." }),
  consent: z.literal(true, {
    errorMap: () => ({ message: "É necessário aceitar o uso dos dados para contato." }),
  }),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", company: "", phone: "", email: "", message: "" },
  });

  function onSubmit(values: FormValues) {
    const text = [
      "Olá Nicolas! Solicitação de orçamento pelo site da Zanchetin Technology:",
      `Nome: ${values.name}`,
      values.company ? `Empresa: ${values.company}` : null,
      `WhatsApp: ${values.phone}`,
      `E-mail: ${values.email}`,
      `Necessidade: ${values.need}`,
      `Orçamento aproximado: ${values.budget}`,
      `Projeto: ${values.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    toast.success("Solicitação pronta!", {
      description: "Abrimos o WhatsApp com os dados do seu projeto.",
    });
    form.reset();
  }

  return (
    <Section id="contato">
      <SectionHeading
        eyebrow="Contato"
        title="Solicite seu orçamento"
        description="Preencha os dados abaixo e receba uma proposta para o seu projeto."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
        <Reveal className="min-w-0">
          <div className="surface-card h-full rounded-2xl p-7">
            <h3 className="text-lg font-semibold">{site.owner}</h3>
            <p className="text-sm text-muted-foreground">
              {site.brand} • {site.role}
            </p>

            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary-glow" />
                <span className="min-w-0 text-muted-foreground">
                  {site.city}
                  <br />
                  {site.coverage}
                </span>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 size-4 shrink-0 text-primary-glow" />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-0 break-words text-muted-foreground transition-colors hover:text-foreground"
                >
                  WhatsApp {site.whatsappDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary-glow" />
                <a
                  href={`mailto:${site.email}`}
                  className="min-w-0 break-words text-muted-foreground transition-colors hover:text-foreground"
                >
                  {site.email}
                </a>
              </li>
            </ul>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                { icon: Linkedin, href: site.linkedin, label: "LinkedIn" },
                { icon: Github, href: site.github, label: "GitHub" },
                { icon: Instagram, href: site.instagram, label: "Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-xl border border-border bg-secondary/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="min-w-0">
          <div className="surface-card rounded-2xl p-6 sm:p-7">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" autoComplete="name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Empresa (opcional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Nome da empresa" autoComplete="organization" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp</FormLabel>
                      <FormControl>
                        <Input placeholder="(67) 90000-0000" inputMode="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="voce@empresa.com"
                          type="email"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="need"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>O que você precisa?</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {needs.map((n) => (
                            <SelectItem key={n} value={n}>
                              {n}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Orçamento aproximado</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {budgets.map((b) => (
                            <SelectItem key={b} value={b}>
                              {b}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Conte um pouco sobre o projeto</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Descreva o objetivo, o que precisa ser resolvido e prazos, se houver."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <div className="flex items-start gap-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value === true}
                            onCheckedChange={(v) => field.onChange(v === true)}
                            className="mt-0.5"
                          />
                        </FormControl>
                        <FormLabel className="text-sm leading-relaxed font-normal text-muted-foreground">
                          Autorizo o uso dos meus dados para retorno sobre este orçamento, conforme
                          a{" "}
                          <Link to="/politica-de-privacidade" className="text-primary-glow underline">
                            Política de Privacidade
                          </Link>
                          .
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary-glow sm:col-span-2"
                >
                  <Send className="size-4" /> Solicitar orçamento
                </Button>
              </form>
            </Form>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}