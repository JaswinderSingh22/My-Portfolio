"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "phone",
    description: "8872730235",
  },
  {
    icon: <FaEnvelope />,
    title: "email",
    description: "jaswindersingh@iitdalumni.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "address",
    description: "Patiala, Punjab, India",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (value) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = async (e) => {
   console.log("Form submitted with data:");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-5 rounded-xl bg-[#27272c]">
              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">
                Ready to bring your ideas to life? I'm here to help you build amazing web applications. 
                Drop me a message and let's discuss your project requirements.
              </p>
              
              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-500/50 text-green-400 p-4 rounded-md">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-400 p-4 rounded-md">
                  Something went wrong. Please try again or contact me directly.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input 
                  type="text" 
                  name="firstname"
                  placeholder="First Name" 
                  value={formData.firstname}
                  onChange={handleInputChange}
                  required
                />
                <Input 
                  type="text" 
                  name="lastname"
                  placeholder="Last Name" 
                  value={formData.lastname}
                  onChange={handleInputChange}
                  required
                />
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <Select value={formData.service} onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                    <SelectItem value="backend-development">Backend Development</SelectItem>
                    <SelectItem value="performance-optimization">Performance Optimization</SelectItem>
                    <SelectItem value="full-stack-development">Full Stack Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea 
                className="h-[150px]" 
                name="message"
                placeholder="Tell me about your project..." 
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              
              <Button 
                type="submit" 
                size="md" 
                className="max-w-40"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]"> { item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{ item.title}</p>
                    <h3 className="text-xl">{ item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
