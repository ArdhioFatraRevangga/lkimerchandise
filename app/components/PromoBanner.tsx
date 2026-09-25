export default function PromoBanner() {
  return (
    <section className="w-full px-8 md:px-20 my-16">
      {/* max-w-2xl agar kontainernya lebih sempit dan teksnya turun menjadi 3 baris */}
      <div className="max-w-2xl text-left">
        <h2 
          style={{ fontFamily: "'New Rocker', serif" }} 
          className="text-2xl md:text-3xl text-black italic tracking-wide"
          // className="font-serif italic text-gray-800 text-sm tracking-wide"
        >
          Belanja langsung melalui website resmi LKI Merch jauh lebih hemat & murah dibanding di Online Shop lain!
        </h2>
      </div>
    </section>
  );
}