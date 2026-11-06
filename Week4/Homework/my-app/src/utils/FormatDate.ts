export const FormatDate = (date: string) => {
  return new Date(`${date}Z`).toLocaleString("ko-KR", { // Z를 붙여서 UTC로 인식하게 함
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};
