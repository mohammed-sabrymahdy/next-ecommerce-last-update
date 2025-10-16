// app/not-found.jsx
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-gray-50 text-center overflow-hidden">
      <Image
        src="/images/notfound.jpg"
        alt="الصفحة غير موجودة"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};

export default NotFound;
