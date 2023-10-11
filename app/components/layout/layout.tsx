import { Footer, Navigation } from "~/components";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className="p-4">
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
