import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppButton() {
  const phoneNumber = "923046060476";
  const message = encodeURIComponent("Hello, I'd like to discuss a project.");

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
    >
      <SiWhatsapp size={28} />
    </a>
  );
}