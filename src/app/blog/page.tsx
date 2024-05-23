import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Blog Page",
    template: "%s | Blog Page",
  },
}
export default function BlogPage() {
  return (
    <div>
      <h1>Blog Page</h1>
    </div>
  );
}