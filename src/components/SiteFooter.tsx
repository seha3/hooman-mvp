export default function SiteFooter() {
  return (
    <footer id="footer" className="py-8 border-t border-neutral-200 bg-card text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Silvia Herrera — Built for Hooman Studio test.
      </p>
    </footer>
  );
}
