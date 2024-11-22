export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className="h-36 w-36 animate-spin rounded-full border-4 border-primary border-t-transparent"
        role="status"
        aria-label="Loading page..."
      />
    </div>
  );
}
