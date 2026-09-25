/**
 * Date formatting helpers for Portuguese (Brazil)
 */
export function formatDate(dateStr: string): string {
  try {
    const [year, month, day] = dateStr.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export function formatDayAndMonth(dateStr: string): { day: string; month: string } {
  try {
    const [year, month, day] = dateStr.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    const monthName = date.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "").toUpperCase();
    return {
      day: String(day).padStart(2, "0"),
      month: monthName,
    };
  } catch {
    return { day: "00", month: "---" };
  }
}
