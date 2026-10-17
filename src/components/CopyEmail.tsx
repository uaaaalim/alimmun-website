"use client";

import {toast} from "sonner";

export default async function copyEmail() {
  console.log("Secure:", window.isSecureContext);
  console.log("Clipboard:", navigator.clipboard);

  try {
    await navigator.clipboard.writeText(
      "zhaba.v.kedah77@gmail.com"
    );

    toast.success("Address copied to clipboard.", {
      toasterId: "copy-bottom"
    });
  } catch {
    toast.error("Address copied to clipboard.", {
      toasterId: "copy-bottom"
    });
  }
}