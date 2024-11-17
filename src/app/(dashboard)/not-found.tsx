import Link from "next/link";

import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="bg-custom-bg flex h-screen items-center justify-center bg-cover bg-center">
      <div className="text-center">
        <h1 className="mb-2 text-4xl font-bold">404 Page not found</h1>
        <p className="text-xl">Could not find the requested resource</p>

        <Link href="/">
          <Button
            className="mt-4 bg-[#72D524] text-black"
            variant="link"
            size="lg"
          >
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
