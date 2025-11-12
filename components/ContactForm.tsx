"use client";
import { useState } from 'react';

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string>('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Something went wrong');
      }
      setStatus('success');
      setForm({ name: '', email: '', company: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setError(err?.message || 'Something went wrong');
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: '1fr', maxWidth: 760 }}>
        <input
          className="input"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          className="input"
          placeholder="Email address"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          className="input"
          placeholder="Company (optional)"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />
        <textarea
          className="textarea"
          placeholder="Tell me about your project and goals"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button className="button" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending?' : 'Request proposal'}
          </button>
          {status === 'success' && <span style={{ color: 'var(--accent)' }}>Thanks! I will reply within 1 business day.</span>}
          {status === 'error' && <span style={{ color: '#ff7780' }}>{error}</span>}
        </div>
      </div>
    </form>
  );
}
