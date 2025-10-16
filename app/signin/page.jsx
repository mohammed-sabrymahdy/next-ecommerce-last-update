// app/signin/page.jsx
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import "./signin.css"; // استدعاء ملف CSS

export default function Page() {
  return (
    <div className="signin-page">
      <Header />

      <main className="signin-main">
        <div className="signin-card">
          <h1>Welcome Back!</h1>
          <p>Sign in with your Google account to continue shopping.</p>

          <p className="terms">
            By signing in, you agree to our <span>Terms & Conditions</span>.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
