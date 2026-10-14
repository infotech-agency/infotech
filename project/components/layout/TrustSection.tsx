

const platforms = [
  {
    name: "Google",
    logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png",
    rating: "4.5",
  },
  {
    name: "Clutch",
    logo: "https://cdn.brandfetch.io/domain/clutch.co/fallback/lettermark/theme/dark/h/400/w/400/icon?c=1bfwsmEH20zzEfSNTed",
    rating: "4.5",
  },
  {
    name: "Trustpilot",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKgWHKsKsONHWZyoje5bNtRu1Bo2QSKgI1k4oGURKiTw&s=10",
    rating: "4.5",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-white px-4 py-5">
      <div className="mx-auto flex max-w-fit flex-wrap items-center justify-center gap-3">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md"
          >
            <img
              src={platform.logo}
              alt={`${platform.name} logo`}
              className="h-5 w-5 shrink-0 object-contain"
            />

            <span className="text-xs font-semibold text-slate-700">
              {platform.name}
            </span>

            <span className="h-4 w-px bg-slate-200" />

            <span className="text-xs font-bold text-slate-900">
              {platform.rating}
            </span>

            <span
              className="text-xs tracking-tight text-amber-500"
              aria-label="Rated 4.5 out of 5"
            >
              ★★★★★
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
