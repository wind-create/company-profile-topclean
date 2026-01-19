import { FaWhatsapp } from "react-icons/fa";
import {
  WHATSAPP_NUMBER,
  WHATSAPP_MESSAGES,
} from "@/constants/whatsapp";

type Props = {
  page?: keyof typeof WHATSAPP_MESSAGES;
};

export default function StickyWhatsApp({ page = "home" }: Props) {
  const message = WHATSAPP_MESSAGES[page];

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
}
