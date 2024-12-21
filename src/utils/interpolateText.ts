interface Placeholders {
  [key: string]: string;
}

export const interpolateText = (
  text: string,
  placeholders: Placeholders
): string =>
  text.replace(/\{(.*?)\}/g, (_, key) => placeholders[key] || "").toLowerCase();
