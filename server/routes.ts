import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { contactFormSchema, newsletterSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);
      const contact = await storage.saveContactSubmission(data);
      res.status(201).json({ success: true, message: "Contact form submitted successfully", id: contact.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Validation error", errors: error.errors });
      } else {
        console.error("Contact form submission error:", error);
        res.status(500).json({ success: false, message: "Failed to submit contact form" });
      }
    }
  });

  // Newsletter subscription route
  app.post("/api/newsletter", async (req, res) => {
    try {
      const data = newsletterSchema.parse(req.body);
      const subscription = await storage.saveNewsletterSubscription(data);
      res.status(201).json({ success: true, message: "Newsletter subscription successful", id: subscription.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Validation error", errors: error.errors });
      } else {
        console.error("Newsletter subscription error:", error);
        res.status(500).json({ success: false, message: "Failed to subscribe to newsletter" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
