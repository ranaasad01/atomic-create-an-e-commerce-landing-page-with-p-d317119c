import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
}

export default function StarRating({ rating, reviewCount, size = "sm" }: StarRatingProps) {
  const starSize = size === "sm" ? 12 : 16;
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = star <= Math.floor(rating);
          const partial = !filled && star === Math.ceil(rating) && rating % 1 !== 0;
          const partialWidth = partial ? Math.round((rating % 1) * 100) : 0;
          return (
            <span key={star} className="relative inline-block">
              <Star size={starSize} className="text-slate-200" fill="currentColor" />
              {filled && (
                <span className="absolute inset-0">
                  <Star size={starSize} className="text-amber-400" fill="currentColor" />
                </span>
              )}
              {partial && (
                <span className="absolute inset-0 overflow-hidden" style={{ width: partialWidth + "%" }}>
                  <Star size={starSize} className="text-amber-400" fill="currentColor" />
                </span>
              )}
            </span>
          );
        })}
      </div>
      {reviewCount !== undefined && (
        <span className="text-xs text-slate-500">({reviewCount.toLocaleString()})</span>
      )}
    </div>
  );
}
