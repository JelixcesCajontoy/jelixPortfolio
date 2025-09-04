
"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { submitContactForm } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Facebook, Instagram, Send, AtSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const initialState = {
  message: "",
  errors: null,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Sending..." : "Send Message"}
      <Send className="ml-2 h-4 w-4" />
    </Button>
  );
}

export function ContactSection() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
        toast({
          title: state.success ? "Message Sent!" : "Error",
          description: state.message,
          variant: state.success ? "default" : "destructive",
        });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <div className="grid gap-12 md:grid-cols-2 items-start">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">Get in Touch</h2>
          <p className="text-muted-foreground max-w-md">
            Have a project in mind, a question, or just want to say hi? I'd love to hear from you. Fill out the form or connect with me through social media.
          </p>
        </div>
        <div className="flex space-x-2 pt-2 sm:space-x-4">
          <Button variant="outline" size="icon" asChild>
            <a href="https://www.facebook.com/share/1B6Gyxni9A/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://www.instagram.com/jelixces__jc?igsh=bWFmbzUzeXpyazlz" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://www.threads.com/@jelixces__jc" aria-label="Threads" target="_blank" rel="noopener noreferrer">
              <AtSign className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Contact Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={formAction} ref={formRef} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your Name" required />
                    {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                    {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message..." rows={5} required />
                {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>}
            </div>
            <div className="flex flex-col items-start gap-4">
                <SubmitButton />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
