import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white px-6 py-6 mt-12">
      <div className="flex justify-between items-center flex-wrap">
        <p className="text-description">&copy; 2025 MyWebsite. All rights reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <Link href="#" className="hover:underline hover:text-linkHover">
            Privacy
          </Link>
          <Link href="#" className="hover:underline hover:text-linkHover">
            Terms
          </Link>
          <Link href="#" className="hover:underline hover:text-linkHover">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
