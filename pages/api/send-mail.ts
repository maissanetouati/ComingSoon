import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

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
  try {
    await axios.post(process.env.DISCORD_WEBHOOK_URL, {
      content: message,
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error);
  }
}
