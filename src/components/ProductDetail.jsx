const isMobile = window.innerWidth <= 768;

export default function ProductDetail({ product, onAdd, onClose }) {
  if (!product) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "0" : "20px",
        overflowY: "auto",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: isMobile ? "100%" : "600px",
          backgroundColor: "#121212",
          minHeight: isMobile ? "100vh" : "auto",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Back Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 20px",
            borderBottom: "1px solid #2a2a2a",
            position: "sticky",
            top: 0,
            backgroundColor: "#121212",
            zIndex: 10,
          }}
        >
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "#f5f5f5",
              fontSize: "24px",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ←
          </button>
          <h2
            style={{
              margin: 0,
              color: "#f5f5f5",
              fontSize: "14px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Product Details
          </h2>
          <div style={{ width: "40px" }} /> {/* Spacer for centering */}
        </div>

        {/* Product Image Background */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: isMobile ? "300px" : "400px",
            overflow: "hidden",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "60%",
              background: "linear-gradient(to top, #121212 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Product Information */}
        <div
          style={{
            padding: "24px 20px",
            backgroundColor: "#121212",
          }}
        >
          {/* Product Name */}
          <h1
            style={{
              margin: "0 0 16px 0",
              color: "#ffffff",
              fontSize: isMobile ? "28px" : "32px",
              fontWeight: "700",
              lineHeight: "1.2",
            }}
          >
            {product.name}
          </h1>

          {/* Price */}
          <div
            style={{
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontSize: isMobile ? "32px" : "36px",
                fontWeight: "700",
              }}
            >
              ₹{product.price.toLocaleString()}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => {
              onAdd({ id: product.id, name: product.name });
            }}
            style={{
              width: "100%",
              backgroundColor: "#00c853",
              color: "#000000",
              padding: "16px",
              borderRadius: "12px",
              border: "none",
              fontSize: "16px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "1px",
              cursor: "pointer",
              marginBottom: "32px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#00c853";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#00c853";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Add to Cart
          </button>

          {/* Description */}
          <div>
            <h3
              style={{
                margin: "0 0 12px 0",
                color: "#f5f5f5",
                fontSize: "16px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Description
            </h3>
            <p
              style={{
                margin: 0,
                color: "#aaaaaa",
                fontSize: "15px",
                lineHeight: "1.6",
              }}
            >
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
