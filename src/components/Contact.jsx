import { useState } from 'react'
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Send, Github, Linkedin, AlertCircle } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolio'

const API = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'
export default function Contact() {
  const [form,setForm] = useState({name:'',email:'',subject:'',message:''})
  const [status,setStatus] = useState('idle')
  const [error,setError] = useState('')
  const update = e => setForm({...form,[e.target.name]:e.target.value})
  const submit = async e => {
    e.preventDefault(); setStatus('sending'); setError('')
    try {
      const res = await fetch(`${API}/contact`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Unable to send your message. Please try again.')
      setStatus('success'); setForm({name:'',email:'',subject:'',message:''})
    } catch (err) { setStatus('error'); setError(err.message || 'Network error. Please try again later.') }
  }
  return <section id="contact" className="section-pad section-block contact-section"><div className="container">
    <SectionHeading index="09" eyebrow="LET'S START A CONVERSATION" title={<>Have an interesting idea?<br/><span className="gradient-text">Let's build something.</span></>} subtitle="Have a project, internship opportunity, or just want to talk about technology? My inbox is open."/>
    <div className="contact-grid"><Reveal className="contact-aside"><h3>Let's make<br/>something <span className="gradient-text">meaningful.</span></h3><p>I'm always interested in connecting with people who are building, learning, and solving real-world problems.</p><div className="contact-detail"><span><MapPin size={17}/></span><div><small>BASED IN</small><b>{profile.location}</b></div></div>{profile.email&&<a className="contact-detail" href={`mailto:${profile.email}`}><span><Mail size={17}/></span><div><small>EMAIL</small><b>{profile.email}</b></div><ArrowUpRight size={16}/></a>}<div className="social-row">{profile.github&&<a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>}{profile.linkedin&&<a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>}</div></Reveal>
      <Reveal delay={.12}><form className="contact-form" onSubmit={submit}><div className="form-heading"><span>01 — SEND A MESSAGE</span><span className="form-required">* REQUIRED</span></div><div className="form-row"><label>Your name<input name="name" value={form.name} onChange={update} placeholder="Jane Smith" minLength="2" maxLength="80" required/></label><label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="jane@example.com" maxLength="254" required/></label></div><label>Subject<input name="subject" value={form.subject} onChange={update} placeholder="What would you like to discuss?" maxLength="120" required/></label><label>Message<textarea name="message" value={form.message} onChange={update} placeholder="Tell me a little about it..." rows="5" minLength="10" maxLength="4000" required/></label><div className="form-submit-row"><button className="btn btn-primary" type="submit" disabled={status==='sending'}>{status==='sending'?'Sending…':'Send message'} <Send size={16}/></button><span>I'll get back to you as soon as I can.</span></div>{status==='success'&&<p className="form-success"><CheckCircle2 size={16}/> Message sent successfully.</p>}{status==='error'&&<p className="form-error"><AlertCircle size={16}/>{error}</p>}</form></Reveal>
    </div>
  </div></section>
}
