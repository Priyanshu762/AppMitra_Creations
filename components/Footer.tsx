import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 dark:border-white/5 py-12 bg-surface/50">
      <div className="container-width flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <span className="text-lg font-bold">AppMitra Creations</span>
          <p className="text-sm text-secondary">
            Digital Transformation & Tech Solutions
          </p>
        </div>

        <div className="flex gap-6 text-sm text-secondary">
          <Link href="#" className="hover:text-primary transition-colors">
            Privacy
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Terms
          </Link>
          <Link
            href="mailto:contact@appmitra.in"
            className="hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="text-sm text-secondary">
          © {currentYear} AppMitra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
