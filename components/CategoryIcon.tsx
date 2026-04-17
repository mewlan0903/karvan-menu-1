type Props = {
  id: string;
  className?: string;
};

export default function CategoryIcon({ id, className = "w-4 h-4" }: Props) {
  switch (id) {
    case "baslangic":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case "ana-yemekler":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M3 13h18" />
          <path d="M4 13a8 8 0 0 1 16 0" />
          <path d="M2 17h20" />
          <path d="M12 5V3" />
          <path d="M10 5h4" />
        </svg>
      );
    case "salatalar":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M3 11h18l-2 9H5l-2-9z" />
          <path d="M7 11c0-3 2-5 5-5s5 2 5 5" />
          <path d="M10 8c0-1 1-2 2-2" />
        </svg>
      );
    case "icecekler":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M6 4h12l-1.5 16a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2L6 4z" />
          <path d="M7 9h10" />
          <path d="M12 13v5" />
        </svg>
      );
    default:
      return null;
  }
}
