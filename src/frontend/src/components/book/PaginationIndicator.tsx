interface PaginationIndicatorProps {
  current: number;
  total: number;
}

export function PaginationIndicator({ current, total }: PaginationIndicatorProps) {
  return (
    <div className="fixed top-8 right-8 z-30">
      <div className="px-4 py-2 rounded-full bg-editorial-paper/80 backdrop-blur-sm border border-editorial-charcoal/10 shadow-sm">
        <span className="text-sm font-serif text-editorial-charcoal">
          {current} / {total}
        </span>
      </div>
    </div>
  );
}
