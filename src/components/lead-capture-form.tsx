"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  trainingGoal: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function LeadCaptureForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      trainingGoal: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

              toast.success("Thank you! Your certified flight instructor will be in touch soon to discuss your flight training.");
              form.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm sm:text-base">Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your name" 
                  className="h-12 sm:h-10 text-base sm:text-sm"
                  autoComplete="name"
                  {...field} 
                />
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
              <FormLabel className="text-sm sm:text-base">Email</FormLabel>
              <FormControl>
                <Input 
                  placeholder="your@email.com" 
                  type="email"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                  autoComplete="email"
                  inputMode="email"
                  {...field} 
                />
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
              <FormLabel className="text-sm sm:text-base">Phone (Optional)</FormLabel>
              <FormControl>
                <Input 
                  placeholder="(555) 123-4567" 
                  type="tel"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                  autoComplete="tel"
                  inputMode="tel"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="trainingGoal"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm sm:text-base">Flight Training Goal</FormLabel>
              <FormControl>
                <select
                  className="flex h-12 sm:h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base sm:text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  {...field}
                >
                  <option value="">Select your flight school goal...</option>
                  <option value="discovery">Discovery Flight Experience</option>
                  <option value="private">Private Pilot Training</option>
                  <option value="instrument">Instrument Rating Course</option>
                  <option value="commercial">Commercial Pilot Training</option>
                  <option value="multi">Multi-Engine Flight Training</option>
                  <option value="cfi">Certified Flight Instructor (CFI)</option>
                  <option value="bfr">Flight Review with CFI</option>
                  <option value="other">Other Flight Training</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm sm:text-base">Message (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any flying experience? Questions about flight school or training with a CFI?"
                  className="resize-none min-h-[100px] text-base sm:text-sm"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full h-12 sm:h-10 text-base sm:text-sm" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Contact Flight Instructor"}
        </Button>
      </form>
    </Form>
  );
}
