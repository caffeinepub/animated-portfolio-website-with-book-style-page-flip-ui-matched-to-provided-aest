interface PageFlipLayerProps {
  direction: 'forward' | 'backward';
}

export function PageFlipLayer({ direction }: PageFlipLayerProps) {
  return (
    <div className={`page-flip-layer ${direction}`}>
      <div className="flipping-page" />
    </div>
  );
}
