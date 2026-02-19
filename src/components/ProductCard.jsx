const isMobile = window.innerWidth <= 768;

export default function ProductCard({ product, onClick }) {
  return (
    <div
      onClick={() => onClick(product)}
      style={{
        position: "relative",
        aspectRatio: "1",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.3)";
      }}
    >
      {/* Product Image - Full Bleed */}
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
      
      {/* Overlay with Product Name */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 50%, transparent 100%)",
          padding: "16px 12px 12px 12px",
        }}
      >
        <h3
          style={{
            margin: 0,
            color: "#ffffff",
            fontSize: isMobile ? "14px" : "16px",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          {product.name}
        </h3>
      </div>
    </div>
  );
}
