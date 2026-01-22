import { useState } from "react";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import logo from "./assets/images/logo.png";

function App() {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

function addToCart(product) {
  setCart([...cart, product]);
}

if (orderPlaced) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        textAlign: "center",
        background: "linear-gradient(135deg, #121212 0%, #1a1a1a 100%)",
      }}
    >
      <div
        style={{
          backgroundColor: "#1c1c1c",
          borderRadius: "24px",
          padding: "60px 40px",
          border: "1px solid #2a2a2a",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <div
          style={{
            fontSize: "64px",
            marginBottom: "24px",
            animation: "scaleIn 0.5s ease-out",
          }}
        >
          ✅
        </div>
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "700",
            margin: "0 0 16px 0",
            color: "#f5f5f5",
            letterSpacing: "-0.5px",
          }}
        >
          Order Confirmed
        </h1>
        <p
          style={{
            color: "#aaa",
            fontSize: "16px",
            lineHeight: "1.6",
            margin: "0 0 8px 0",
          }}
        >
          Your order has been successfully sent to the robot.
        </p>
        <p
          style={{
            color: "#888",
            fontSize: "14px",
            lineHeight: "1.6",
            margin: "0 0 32px 0",
          }}
        >
          Robot will begin pick-and-place operation.
        </p>

        <button
          onClick={() => {
            setCart([]);
            setOrderPlaced(false);
          }}
          style={{
            backgroundColor: "#00c853",
            color: "#000",
            padding: "14px 32px",
            borderRadius: "10px",
            fontWeight: "600",
            fontSize: "15px",
            border: "none",
            cursor: "pointer",
            transition: "all 0.2s ease",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            width: "100%",
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
          ⬅ Back to Products
        </button>
      </div>
    </div>
  );
}

  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "32px 24px", minHeight: "100vh" }}>
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "8px",
        }}
      >
        <img
          src={logo}
          alt="Pickr Logo"
          style={{
            height: "120px",
            width: "auto",
            objectFit: "contain",
            imageRendering: "crisp-edges",
          }}
        />
        <div>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "700",
              margin: "0",
              color: "#f5f5f5",
              letterSpacing: "-1px",
            }}
          >
            Pickr
          </h1>
          <p
            style={{
              color: "#888",
              fontSize: "14px",
              margin: "4px 0 0 0",
              fontWeight: "400",
            }}
          >
            Robotic Warehouse Ordering Interface
          </p>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr",
          gap: "32px",
          marginTop: "40px",
        }}
      >
        {/* LEFT: PRODUCTS */}
        <div>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "600",
              margin: "0 0 24px 0",
              color: "#f5f5f5",
              letterSpacing: "-0.5px",
            }}
          >
            Products
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "24px",
            }}
          >
            {products.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onAdd={addToCart}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: CART */}
        <div
          style={{
            backgroundColor: "#1c1c1c",
            borderRadius: "16px",
            padding: "24px",
            height: "fit-content",
            border: "1px solid #2a2a2a",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
            position: "sticky",
            top: "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "600",
                margin: "0",
                color: "#f5f5f5",
              }}
            >
              Cart
            </h2>
            {cart.length > 0 && (
              <span
                style={{
                  backgroundColor: "#00c853",
                  color: "#000",
                  borderRadius: "12px",
                  padding: "2px 8px",
                  fontSize: "12px",
                  fontWeight: "700",
                  minWidth: "24px",
                  textAlign: "center",
                }}
              >
                {cart.length}
              </span>
            )}
          </div>

          {cart.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "40px 20px",
                color: "#666",
                fontSize: "14px",
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>🛒</div>
              <p style={{ margin: "0", color: "#888" }}>No items selected</p>
            </div>
          ) : (
            <>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                  margin: "0 0 24px 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {cart.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      backgroundColor: "#252525",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      color: "#f5f5f5",
                      fontSize: "14px",
                      border: "1px solid #2a2a2a",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        color: "#00c853",
                        fontWeight: "600",
                        fontSize: "12px",
                      }}
                    >
                      ✓
                    </span>
                    {item.name}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setOrderPlaced(true)}
                style={{
                  backgroundColor: "#00c853",
                  color: "#000",
                  padding: "14px 20px",
                  width: "100%",
                  borderRadius: "10px",
                  fontWeight: "600",
                  fontSize: "15px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
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
                Place Order
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
