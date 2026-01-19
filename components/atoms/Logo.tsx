import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/images/logo.tiff"
      alt="TopClean"
      width={120}
      height={60}
      priority
    />
  );
}
