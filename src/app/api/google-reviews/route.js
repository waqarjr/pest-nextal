// /app/api/google-reviews/route.js
import { NextResponse } from "next/server";

const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY; // store in .env.local

export async function GET(req) {
  try {
    // Check if API key exists
    if (!GOOGLE_API_KEY) {
      console.error("❌ GOOGLE_API_KEY not found in environment variables");
      return NextResponse.json(
        { reviews: [], error: "Google API key not configured" },
        { status: 500 }
      );
    }

    // Check if Place ID exists
    if (!GOOGLE_PLACE_ID) {
      console.error("❌ GOOGLE_PLACE_ID not found in environment variables");
      return NextResponse.json(
        { reviews: [], error: "Google Place ID not configured" },
        { status: 500 }
      );
    }

    // Make request to Google Places API
    const googleApiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=name,rating,reviews,user_ratings_total&key=${GOOGLE_API_KEY}`;
    
    console.log("🔍 Fetching Google reviews from:", googleApiUrl.replace(GOOGLE_API_KEY, "***"));

    const res = await fetch(googleApiUrl, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    });

    if (!res.ok) {
      console.error("❌ Google API HTTP error:", res.status, res.statusText);
      throw new Error(`Google API returned status ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();

    if (data.status !== "OK") {
      console.error("❌ Google API error:", data.status, data.error_message);
      return NextResponse.json(
        { 
          reviews: [], 
          error: data.error_message || `Google API returned: ${data.status}`,
          status: data.status
        },
        { status: 400 }
      );
    }

    // Check if reviews exist
    if (!data.result?.reviews || data.result.reviews.length === 0) {
      console.log("⚠️ No reviews found in Google API response");
      return NextResponse.json({ 
        reviews: [],
        result: data.result ? {
          name: data.result.name,
          rating: data.result.rating,
          user_ratings_total: data.result.user_ratings_total
        } : null
      });
    }

    console.log("✅ Successfully fetched", data.result.reviews.length, "reviews");

    return NextResponse.json({ 
      reviews: data.result.reviews,
      result: {
        name: data.result.name,
        rating: data.result.rating,
        user_ratings_total: data.result.user_ratings_total
      }
    }, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("❌ Error fetching Google reviews:", error);
    return NextResponse.json(
      { reviews: [], error: error.message || "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}
