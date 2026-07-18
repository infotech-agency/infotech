export default function GlobalReach() {
  return (
    <section
      className="relative w-full h-[70vh] min-h-[70dvh] overflow-hidden sm:h-[85vh] sm:min-h-[85dvh] lg:h-screen lg:min-h-[100dvh] bg-white"
    >
      <img
        src="/backgrounds/worldmap.jpg"
        alt="World Map"
        className="absolute inset-0 block h-full w-full object-contain object-center"
      />
    </section>
  );
}