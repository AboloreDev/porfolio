"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("form submitted:", formData);
      await emailjs.send(
        "service_44iq5do",
        "template_snhw2gc",
        {
          from_name: formData.name,
          to_name: "Abolore",
          from_email: formData.email,
          to_email: "alabiabolore4@gmail.com",
          message: formData.message,
        },
        "z1OOp4j6qAl_S0KsN"
      );
      setFormData({ name: "", email: "", message: "" });
      toast.success("Your message has been sent!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative flex items-center py-20 prata-regular p-4"
    >
      <div className="flex flex-col items-center justify-center max-w-md mx-auto p-6 border border-white/10 rounded-2xl">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-base text-muted-foreground">
            Whether you&apos;re looking to collaborate, have a question, or just
            want to say hello — I&apos;m always open to meaningful conversations
            and exciting opportunities.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Full Name:</Label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email:</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Message:</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Share your thoughts..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full px-4 py-2 rounded-md"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
