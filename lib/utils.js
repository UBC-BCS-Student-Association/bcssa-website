import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { storage } from "@/firebase/firebase";
import { ref as storageRef, getDownloadURL } from "firebase/storage";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Create a reference from a Google Cloud Storage URI
export const getHttpsUrl = async (gsUrl) => {
  try {
    const ref = storageRef(
      storage,
      gsUrl.replace("gs://bcssa-website.appspot.com/", "")
    );
    return await getDownloadURL(ref);
  } catch (error) {
    console.error("Error getting download URL: ", error);
    throw error;
  }
};

export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const formatUTCDate = (str) => {
    const [year, month, day] = str.split("-").map((part) => parseInt(part, 10));
    return new Date(year, month - 1, day).toLocaleDateString("en-US", options);
  };
  if (dateString.includes("to")) {
    return dateString.split(" to ").map(formatUTCDate).join(" - ");
  } else {
    return formatUTCDate(dateString);
  }
};
