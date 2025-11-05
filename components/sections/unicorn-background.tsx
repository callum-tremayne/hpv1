'use client';

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    UnicornStudio?: {
      init: () => void;
      isInitialized?: boolean;
    };
  }
}

export function UnicornBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scriptId = "unicornstudio-sdk";
    const existingScript = document.getElementById(scriptId) as
      | HTMLScriptElement
      | null;

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js";
      script.async = true;
      script.onload = () => {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      document.head.appendChild(script);
    } else if (
      window.UnicornStudio &&
      !window.UnicornStudio.isInitialized
    ) {
      window.UnicornStudio.init();
      window.UnicornStudio.isInitialized = true;
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 h-full w-full"
      aria-label="Unicorn.studio interactive background"
    >
      <div
        data-us-project="3GogSKVviXRJJMU8d4l6"
        className="h-full w-full"
      />
    </div>
  );
}
