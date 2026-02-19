import { useState } from "react";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./components/ProductDetail";
import logo from "./assets/images/logo.png";

const isMobile = window.innerWidth <= 768;

function App() {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  if (orderPlaced) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          background: "linear-gradient(135deg, #121212, #1a1a1a)",
        }}
      >
        <div
          style={{
            backgroundColor: "#1c1c1c",
            borderRadius: "24px",
            padding: "50px 40px",
            maxWidth: "420px",
            width: "100%",
            textAlign: "center",
            border: "1px solid #2a2a2a",
          }}
        >
          <div style={{ fontSize: "56px", marginBottom: "16px" }}>✅</div>
          <h1 style={{ color: "#f5f5f5", marginBottom: "12px" }}>
            Order Confirmed
          </h1>
          <p style={{ color: "#aaa", marginBottom: "32px" }}>
            Robot has received the order.
          </p>

          <button
            onClick={() => {
              setCart([]);
              setOrderPlaced(false);
            }}
            style={{
              backgroundColor: "#00c853",
              color: "#000",
              padding: "14px",
              width: "100%",
              borderRadius: "10px",
              fontWeight: "600",
              border: "none",
            }}
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "32px 24px",
        minHeight: "100vh",
        paddingBottom: isMobile ? "120px" : "0",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "0",
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: isMobile ? "90px" : "110px",
            height: isMobile ? "90px" : "110px",
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <img
            src={logo}
            alt="Pickr"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* Search Bar */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#2a2a2a",
            borderRadius: "30px",
            padding: "12px 16px",
            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.05)",
            border: "1px solid #1a1a1a",
            position: "relative",
          }}
        >
          {/* Search Text - Centered */}
          <div
            style={{
              color: "#aaaaaa",
              fontSize: "14px",
              fontWeight: "500",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            SEARCH
          </div>

          {/* Magnifying Glass Icon - Right */}
          <div
            style={{
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              right: "16px",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              style={{
                filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.3))",
              }}
            >
              <circle
                cx="7.5"
                cy="7.5"
                r="5.5"
                stroke="#aaaaaa"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M12.5 12.5L16 16"
                stroke="#aaaaaa"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "3fr 1fr",
          gap: "32px",
          marginTop: "0",
        }}
      >
        {/* PRODUCTS */}
        <div>
          <h2
            style={{
              color: "#f5f5f5",
              marginBottom: "24px",
              textAlign: "center",
              fontSize: isMobile ? "18px" : "22px",
              fontWeight: "700",
              letterSpacing: "0.3px",
            }}
          >
            Instant robo-pickup. Order now!
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "repeat(2, 1fr)"
                : "repeat(3, 1fr)",
              gap: isMobile ? "12px" : "20px",
            }}
          >
            {products.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onClick={(product) => setSelectedProduct(product)}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP CART */}
        {!isMobile && (
          <div
            style={{
              backgroundColor: "#1c1c1c",
              borderRadius: "16px",
              padding: "24px",
              border: "1px solid #2a2a2a",
              height: "fit-content",
              position: "sticky",
              top: "32px",
            }}
          >
            <h2 style={{ color: "#f5f5f5" }}>
              Cart ({cart.length})
            </h2>

            {cart.length === 0 ? (
              <p style={{ color: "#888" }}>No items selected</p>
            ) : (
              <>
                <ul style={{ padding: 0, listStyle: "none" }}>
                  {cart.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        backgroundColor: "#252525",
                        padding: "12px",
                        marginBottom: "8px",
                        borderRadius: "8px",
                        color: "#f5f5f5",
                      }}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setOrderPlaced(true)}
                  style={{
                    backgroundColor: "#00c853",
                    color: "#000",
                    padding: "14px",
                    width: "100%",
                    borderRadius: "10px",
                    border: "none",
                    fontWeight: "600",
                  }}
                >
                  Place Order
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* MOBILE BOTTOM CART */}
      {isMobile && cart.length > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#1c1c1c",
            borderTop: "1px solid #2a2a2a",
            padding: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <span style={{ color: "#f5f5f5" }}>
            🛒 {cart.length} item{cart.length > 1 ? "s" : ""}
          </span>

          <button
            onClick={() => setOrderPlaced(true)}
            style={{
              backgroundColor: "#00c853",
              color: "#000",
              padding: "12px 20px",
              borderRadius: "10px",
              border: "none",
              fontWeight: "600",
            }}
          >
            Place Order
          </button>
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onAdd={addToCart}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default App;
