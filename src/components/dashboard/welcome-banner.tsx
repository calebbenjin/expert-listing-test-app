export function WelcomeBanner({ name }: { name: string }) {
  return (
    <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
      Welcome, {name}
    </h1>
  );
}
