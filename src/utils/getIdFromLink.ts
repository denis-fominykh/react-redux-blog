export function getIdFromLink(link: string): string {
  return link.replace(/\D/g, '');
}
