import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { WebhookClient } from "discord.js";

const resend = new Resend("re_a3cP49wQ_5oJ5Geo6r8sP6b88ennoJrfM");

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const email = req.body.email;

  sendMessageToDiscord(`Nouvel email reçu : ${email}`);

  res.status(200).redirect("/thank-you");
}

/**
 * Envoie un message à un salon Discord via une URL de webhook.
 * @param message Le message à envoyer.
 * @param webhookURL L'URL du webhook pour le salon Discord.
 */
async function sendMessageToDiscord(message: string): Promise<void> {
  // Créer un client de webhook avec l'ID et le token
  const webhookClient = new WebhookClient({
    url: process.env.DISCORD_WEBHOOK_URL,
  });

  // Envoyer le message
  await webhookClient.send(message);
}
