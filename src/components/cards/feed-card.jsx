import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Heart, ExternalLink } from "lucide-react";
import { formatDate } from "@/utils/format-date";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { toggleFavorite } from "@/redux/slices/favoritesSlice";

export function FeedCard({ item }) {
  const dispatch = useAppDispatch();

  const handleFavorite = () => {
    dispatch(toggleFavorite(item));
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-md">
      {item.image && (
        <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <CardHeader className="flex-none p-4 pb-2">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="secondary" className="capitalize">
            {item.type}
          </Badge>
          {item.publishedAt && (
            <span className="text-xs text-gray-500">
              {formatDate(item.publishedAt)}
            </span>
          )}
        </div>
        <CardTitle className="line-clamp-2 text-base">{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-4 pt-2">
        <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
          {item.description}
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t p-4">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          {item.source && <span className="font-medium">{item.source}</span>}
          {item.rating && (
            <span className="flex items-center gap-1 font-medium text-amber-500">
              <StarIcon className="h-3 w-3 fill-current" /> {item.rating.toFixed(1)}
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={handleFavorite}>
            <Heart className={`h-4 w-4 ${item.isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
          {item.externalUrl && (
            <a 
              href={item.externalUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
