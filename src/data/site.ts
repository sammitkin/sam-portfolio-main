export const EMAIL = "hello@sammitkin.com";
export const EMAIL_URL = `mailto:${EMAIL}`;
export const LINKEDIN_URL = "https://www.linkedin.com/in/sammitkin/";

/**
 * Résumé PDF. Leave null until the file exists: every Résumé link on the site
 * is hidden while this is null, so we never ship a link that goes nowhere.
 * When ready, put the file in /public (e.g. "/sam-mitkin-resume.pdf") and set it here.
 */
export const RESUME_URL: string | null = null;
