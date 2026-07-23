import type { APIRoute } from 'astro';

const lastSubmission = new Map<string, number>();
const WINDOW_MS = 60 * 60 * 1000;

export const POST: APIRoute = async ({ params, request }) => {
  const ip = request.headers.get('cf-connecting-ip') ?? 'unknown';
  const now = Date.now();
  const last = lastSubmission.get(ip);

  if (last && now - last < WINDOW_MS) {
    return new Response(`You are sending messages too quickly!`, {
      status: 429,
    });
  }

  lastSubmission.set(ip, now);

  const form = await request.formData();
  const email = form.get('email');
  const name = form.get('name');
  const message = form.get('message');

  const webhook_url = import.meta.env.DISCORD_WEBHOOK;

  const embed = {
    title: 'New Message',
    description: message,
    fields: [
      {
        name: 'Name',
        value: name,
        inline: true,
      },
      {
        name: 'Email',
        value: email,
        inline: true,
      },
    ],
    thumbnail: {
      url: 'https://thesaltynewfie.ca',
    },
    footer: {
      text: `Sent at ${new Date()}`,
    },
  };

  await fetch(webhook_url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ embeds: [embed] }),
  });

  return new Response(null, { status: 200 });
};
