import Container from "@/components/Container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ContactPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-80">
      <Container className="max-w-3xl px-6 sm:px-8 lg:px-10 py-12 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-extrabold text-green-500 text-center drop-shadow-lg">
          Contact Us
        </h1>
        <p className="text-gray-300 text-center mt-2">
          We&apos;d love to hear from you! Fill out the form below and we&apos;ll get back to you.
        </p>

        <form className="space-y-6 mt-6">
          <div className="space-y-1">
            <Label htmlFor="name" className="text-green-400 text-lg">Name</Label>
            <Input
              type="text"
              name="name"
              className="w-full px-4 py-3 border border-white/20 bg-white/10 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400"
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email" className="text-green-400 text-lg">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-white/20 bg-white/10 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="message" className="text-green-400 text-lg">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              className="w-full px-4 py-3 border border-white/20 bg-white/10 rounded-lg text-white placeholder-gray-300 resize-none focus:ring-2 focus:ring-green-400"
              required
              placeholder="Type your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 transition-all duration-300 text-white px-6 py-3 rounded-lg text-lg font-bold shadow-lg shadow-green-500/50"
          >
            Send Message
          </button>
        </form>
      </Container>
    </div>
  );
};

export default ContactPage;
