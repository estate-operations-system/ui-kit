/**
 * Определяет, является ли ссылка внешней
 * @param url URL для проверки
 * @returns true если это внешняя ссылка (http или https), false если это внутренняя ссылка
 */
export function isExternalLink(url?: string): boolean {
  if (!url) return false
  return /^https?:\/\//.test(url)
}
