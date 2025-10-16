// app/product/[id]/page.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import { notFound } from "next/navigation";

// 👇 دالة لجلب بيانات المنتج
async function getData(id) {
  const res = await fetch(`http://localhost:4000/product/${id}`, {
    cache: "no-store", // يمنع الكاش عشان يعرض آخر البيانات
  });

  if (!res.ok) {
    notFound(); // لو السيرفر رجع خطأ 404
  }

  return res.json();
}

// 👇 بيانات الميتا دايناميكية لكل منتج
export async function generateMetadata({ params }) {
  const product = await getData(params.id);
  return {
    title: product.title,
    description: product.description,
  };
}

// 👇 صفحة التفاصيل نفسها
const Page = async ({ params }) => {
  const objData = await getData(params.id);

  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Header />

      <main className="flex flex-col md:flex-row items-center justify-center gap-12 p-8 bg-gray-50 min-h-[80vh] rounded-xl shadow-sm">
        {/* صورة المنتج */}
        <div className="flex justify-center w-full md:w-1/2">
          <img
            alt={objData.title}
            src={
              objData.productImg.startsWith("/")
                ? objData.productImg
                : `/${objData.productImg}`
            }
            className="w-full max-w-md rounded-xl shadow-xl border border-gray-200 object-cover"
          />
        </div>

        {/* تفاصيل المنتج */}
        <div className="product-details w-full md:w-1/2 bg-white p-8 rounded-xl shadow-md">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h2 className="text-3xl font-semibold text-gray-800">
              {objData.title}
            </h2>
            <p className="price text-2xl text-green-600 font-bold mt-2 sm:mt-0">
              ${objData.price}
            </p>
          </div>

          <p className="description text-gray-600 leading-relaxed mb-8 text-base">
            {objData.description}
          </p>

          <button className="add-to-cart flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105">
            <FontAwesomeIcon className="w-5 h-5" icon={faCartPlus} />
            Add To Cart
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
