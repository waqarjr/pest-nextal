// app/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-secondary px-4 sm:px-6 md:px-10 lg:px-16 py-20">
      <div className="text-center max-w-lg">
        <div className="text-8xl sm:text-9xl mb-6">🚧</div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">
          Page Under Maintenance
        </h1>

        <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
          The page you are looking for is currently being built or undergoing updates. Please check back later.
        </p>

        <Link href="/" className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary/90 transition">
          Go Back Home
        </Link>
      </div>
    </section>
  );
}
