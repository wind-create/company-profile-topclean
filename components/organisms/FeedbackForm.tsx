"use client";

import { useState } from "react";
import Button from "../atoms/Button";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoLink = `mailto:sgautocaree5670@gmail.com?subject=${encodeURIComponent(
    "Feedback from Website"
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  )}`;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoLink;
      }}
      className="border border-zinc-200 rounded-2xl p-8 bg-white"
    >
      <h3 className="text-xl font-semibold mb-6">Send Us Your Feedback</h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="you@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Write your message here..."
          />
        </div>
      </div>

      <div className="mt-6">
        <Button type="submit">Send Feedback</Button>
      </div>
    </form>
  );
}
