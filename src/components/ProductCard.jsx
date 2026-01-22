export default function ProductCard({ product, onAdd }) {
  return (
    <div
      style={{
        backgroundColor: "#1c1c1c",
        borderRadius: "16px",
        padding: "0",
        border: "1px solid #2a2a2a",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 200, 83, 0.2)";
        e.currentTarget.style.borderColor = "#00c853";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.3)";
        e.currentTarget.style.borderColor = "#2a2a2a";
      }}
    >
      <div
        style={{
          backgroundColor: "#252525",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "200px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "contain",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
      </div>

      <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3
          style={{
            margin: "0 0 8px 0",
            fontSize: "18px",
            fontWeight: "600",
            color: "#f5f5f5",
            lineHeight: "1.4",
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            color: "#888",
            fontSize: "13px",
            margin: "0 0 20px 0",
            fontFamily: "monospace",
            letterSpacing: "0.5px",
          }}
        >
          {product.id}
        </p>

        <button
          onClick={() => onAdd({ id: product.id, name: product.name })}
          style={{
            marginTop: "auto",
            backgroundColor: "#00c853",
            color: "#000",
            padding: "12px 20px",
            width: "100%",
            borderRadius: "10px",
            fontWeight: "600",
            fontSize: "15px",
            transition: "all 0.2s ease",
            border: "none",
            cursor: "pointer",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#00e676";
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 200, 83, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#00c853";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
