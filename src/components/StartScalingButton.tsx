import React from 'react';
import Link from 'next/link';

interface StartScalingButtonProps {
  text?: string;
  phoneNumber?: string;
  message?: string;
  className?: string;
}


export default function StartScalingButton({ 
  text = "Start Scaling",
  phoneNumber = "+94761186751", // Replace with your actual WhatsApp number
  message = "Hi%20ReachMoreAdz,%20I'm%20ready%20to%20start%20scaling%20my%20campaigns!",
  className = ""
}: StartScalingButtonProps) {
  
  // Constructs the WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Link 
      href={whatsappUrl}
      target="_blank" 
      rel="noopener noreferrer"
      // Added w-max so the button doesn't stretch across the whole screen in flex columns
      className={`group relative flex w-max items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold transition-all hover:bg-gray-100 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,95,31,0.3)] ${className}`}
    >
      {text}
      
      {/* The black circle with the arrow that rotates -45deg on hover */}
      <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:-rotate-45">
        &rarr;
      </div>
    </Link>
  );
}