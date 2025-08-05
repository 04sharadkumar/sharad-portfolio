import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
 const [formData, setFormData] = useState({
  from_name: '',
  reply_to: '',
  message: ''
});

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e:any) => {
    e.preventDefault();


    if (!formRef.current) {
    alert("Form is not loaded yet.");
    return;
  }

    
    emailjs.sendForm(
    'service_gzhdq9y',
    'template_uxrqwsg',
    formRef.current,
    'Um8YgrKnj3sLsUgDq'
  ).then(
    (result) => {
      console.log(result.text);
      
      alert("Message sent successfully!");
      setFormData({ from_name: '', reply_to: '', message: '' });
    },
    (error) => {
      console.log(error);
      
      alert("Failed to send message.");
    }
  );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Let's discuss your next project and bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-slate-300 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and innovation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                  <Mail size={20} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-slate-400">04sharadkumar@gmmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-gradient-to-br from-violet-500/20 to-rose-500/20 border border-violet-500/30 group-hover:scale-110 transition-transform">
                  <Phone size={20} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-slate-400">+91 9988719908</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-gradient-to-br from-rose-500/20 to-lime-500/20 border border-rose-500/30 group-hover:scale-110 transition-transform">
                  <MapPin size={20} className="text-rose-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-slate-400">Ludhiana ,Punjab</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name" 
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-slate-600 rounded-lg 
                           focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                           text-white placeholder-slate-400 transition-all duration-300
                           hover:border-slate-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="reply_to" 
                  value={formData.reply_to}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-slate-600 rounded-lg 
                           focus:ring-2 focus:ring-violet-500 focus:border-transparent
                           text-white placeholder-slate-400 transition-all duration-300
                           hover:border-slate-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-transparent border border-slate-600 rounded-lg 
                           focus:ring-2 focus:ring-rose-500 focus:border-transparent
                           text-white placeholder-slate-400 transition-all duration-300
                           hover:border-slate-500 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 
                         bg-gradient-to-r from-cyan-500 to-violet-500 
                         hover:from-cyan-400 hover:to-violet-400
                         text-white font-medium rounded-lg transition-all duration-300
                         hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]
                         focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;