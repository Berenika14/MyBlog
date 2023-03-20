// import { useMatches } from "@remix-run/react";
// import { useMemo } from "react";

const DEFAULT_DIRECT = "/";

/**
 * This should be used any time the redirect path is user-provided
 * (Like the query string on our login/signup pages). This avoids
 * open-redirect vulnerabilities.
 * @param {string} to The redirect destination
 * @param {string} defaultRedirect The redirect to use if the to is unsafe.
 */

export function safeRedirect(to: string, defaultRedirect = DEFAULT_DIRECT) {
  if (!to || typeof to !== "string") {
    return defaultRedirect;
  }
  if (!to.startsWith("/") || to.startsWith("//")) {
    return defaultRedirect;
  }

  return to;
}

export function validateEmail(email: string) {
  return typeof email === "string" && email.length > 3 && email.includes("@");
}
