import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type ResponseData = {
  message: string;
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const email = req.body.email;

  try {
    await sendMessageToDiscord(`Nouvel email reçu : ${email}`);
    res.status(200).json({ message: "Email envoyé !", success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
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
    throw new Error("Impossible d'envoyer le message à Discord.");
  }
}
