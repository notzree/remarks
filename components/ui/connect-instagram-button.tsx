import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { development_auth_link } from "@/constants/constants";
export default function ConnectInstagramButton({ text }: any) {
  return (
    <Link
      href={development_auth_link}
      className={buttonVariants({ variant: "outline" })}
    >
      {text}
    </Link>
  );
}
