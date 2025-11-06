"use client";

import { useState, useEffect, useRef } from "react";
import useSWR from "swr";
import { Star, User, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const fetcher = async (url) => {
  try {
    // Construct absolute URL for client-side fetch
    let fetchUrl = url;
    if (typeof window !== 'undefined' && !url.startsWith('http')) {
      fetchUrl = `${window.location.origin}${url}`;
    }
    
    const res = await fetch(fetchUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store', // Disable cache to ensure fresh data
    });

    if (!res.ok) {
      const error = new Error(`HTTP error! status: ${res.status}`);
      try {
        error.info = await res.json();
      } catch (e) {
        error.info = { error: res.statusText || 'Unknown error' };
      }
      error.status = res.status;
      throw error;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    // Handle network errors (connection failures, CORS, etc.)
    if (error instanceof TypeError) {
      console.error('Network error in fetcher:', error);
      const networkError = new Error('Network error: Unable to fetch reviews. Please check your connection and try again.');
      networkError.info = { 
        error: error.message || 'Failed to fetch reviews. The server may be unreachable or the request was blocked.' 
      };
      networkError.originalError = error;
      throw networkError;
    }
    // Re-throw other errors
    throw error;
  }
};

const ReviewCard = ({ review }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 w-full h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex items-center space-x-2 sm:space-x-3">
          {review.profile_photo_url && !imgError ? (
            <img
              src={review.profile_photo_url}
              alt={review.author_name}
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
            </div>
          )}
          <div>
            <p className="text-xs sm:text-sm font-semibold text-gray-900">
              {review.author_name}
            </p>
            <p className="text-[10px] sm:text-xs text-gray-500">
              {review.relative_time_description}
            </p>
          </div>
        </div>
        <Image
          src="/assets/logo_google_icon.png"
          alt="Google"
          width={60}
          height={60}
          className="w-12 h-12 sm:w-[75px] sm:h-[75px]"
        />
      </div>

      {/* Rating */}
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 sm:w-4 sm:h-4 ${
              i < review.rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed line-clamp-5">
        {review.text || "No review text provided."}
      </p>
    </div>
  );
};

export default function ReviewsSection() {
  const [mounted, setMounted] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const swiperRef = useRef(null);

  // Only fetch on client side after mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const { data, error, isLoading } = useSWR(
    mounted ? "/api/google-reviews/" : null,
    fetcher,
    {
      refreshInterval: 300000,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      dedupingInterval: 2000,
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        // Don't retry on 4xx errors
        if (error.status >= 400 && error.status < 500) return;
        // Retry up to 3 times
        if (retryCount >= 3) return;
        // Retry after 5 seconds
        setTimeout(() => revalidate({ retryCount: retryCount + 1 }), 5000);
      },
    }
  );

  if (error) {
    console.error("Reviews fetch error:", error);
    return (
      <div className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-500 mb-2 text-sm sm:text-base">Failed to load reviews.</p>
          <p className="text-xs sm:text-sm text-gray-600">
            {error.info?.error || error.message || "Please try again later."}
          </p>
        </div>
      </div>
    );
  }

  const reviews = data?.reviews
    ? [...data.reviews].sort((a, b) => (b.time || 0) - (a.time || 0))
    : [];

  const visibleReviews = showAll ? reviews : reviews.slice(0, 6);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-2">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 text-sm sm:text-md">
              Real reviews from our happy clients
            </p>
          </div>
          {/* Empty state during SSR to prevent hydration mismatch */}
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-2">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-sm sm:text-md">
            Real reviews from our happy clients
          </p>
        </div>

        {/* ✅ Desktop Grid */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading || !data
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="w-full h-[220px] bg-gray-100 rounded-2xl animate-pulse"
                />
              ))
            : visibleReviews.map((review, i) => (
                <ReviewCard key={i} review={review} />
              ))}
        </div>

        {/* ✅ Mobile Carousel with Navigation */}
        <div className="sm:hidden">
          {isLoading || !data ? (
            <div className="w-full h-[240px] bg-gray-100 rounded-2xl animate-pulse" />
          ) : (
            <div className="relative">
              <Swiper
                spaceBetween={16}
                slidesPerView={1}
                loop={true}
                modules={[Navigation]}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                className="pb-12"
              >
                {visibleReviews.map((review, i) => (
                  <SwiperSlide key={i}>
                    <ReviewCard review={review} />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 hover:border-green-600 hover:bg-green-50 flex items-center justify-center transition-all shadow-sm"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 hover:border-green-600 hover:bg-green-50 flex items-center justify-center transition-all shadow-sm"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Show All Button */}
        {reviews.length > 6 && (
          <div className="text-center mt-8 sm:mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-5 sm:px-6 py-2 sm:py-2.5 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-medium rounded-full shadow-sm transition-all"
            >
              {showAll ? "Show Less Reviews" : "Show All Reviews"}
            </button>
          </div>
        )}

        {/* Summary Section */}
        <div className="mt-12 sm:mt-20 flex justify-center px-2">
          <div className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center w-full max-w-[700px]">
            <div className="flex items-center space-x-3 mb-3">
              <Image
                src="/assets/logo_google_icon.png"
                alt="Google"
                width={65}
                height={65}
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                  {data?.result?.name || "Nextal Pest Control"}
                </h3>
              </div>
            </div>

            <div className="flex items-center mb-2">
              <span className="text-2xl sm:text-3xl font-bold text-yellow-500">
                {data?.rating || "4.9"}
              </span>
              <span className="text-yellow-500 ml-2 text-xl sm:text-2xl">★★★★★</span>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
              Based on {data?.result?.user_ratings_total || 59} verified Google
              reviews
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
              {/* Review us on Google */}
              <Link
                href="https://maps.app.goo.gl/5JrRTbnX6UKMq8fH7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition"
              >
                <Image
                  src="/assets/google-logo.png"
                  alt="Google"
                  width={20}
                  height={20}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                Review Us on Google
              </Link>

              {/* Show All Reviews */}
              <Link
                href="https://maps.app.goo.gl/5JrRTbnX6UKMq8fH7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition whitespace-nowrap"
              >
                Show All Reviews on Google
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}