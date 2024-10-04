import { useCarts } from "../../Context/cartContext";
import { useState } from "react";

export default function Cart() {
  const [editQuantities, setEditQuantities] = useState({});
  const { carts, updateCarts } = useCarts();
  function handleChange(productId, value) {
    const newValue = Math.max(0, Number(value));
    setEditQuantities((prev) => ({
      ...prev,
      [productId]: newValue,
    }));
  }

  function handleUpdate(productId) {
    const newQuantity = Number(editQuantities[productId] || 0);
    const productToUpdate = carts.products.find(
      (product) => product.productId === productId,
    );

    if (productToUpdate && newQuantity !== productToUpdate.quantity) {
      updateCarts({ ...productToUpdate, quantity: newQuantity });
    }
  }

  return (
    <main>
      {carts?.products?.length > 0 ? (
        <div className="cart">
          <div className="cart-container">
            <h2>Your Cart</h2>
            <table
              style={{
                borderCollapse: "collapse",
                border: "solid #999 0.3px",
                padding: 5,
              }}
              className="cart-product"
            >
              <thead
                style={{
                  border: "solid #999 0.3px",
                  backgroundColor: "#80B165",
                }}
              >
                <tr>
                  <th
                    style={{ border: "solid #999 0.3px", padding: 10 }}
                    scope="col"
                  >
                    Product name
                  </th>
                  <th
                    style={{ border: "solid #999 0.3px", padding: 10 }}
                    scope="col"
                  >
                    Quantity
                  </th>
                  <th
                    style={{ border: "solid #999 0.3px", padding: 10 }}
                    scope="col"
                  >
                    Price
                  </th>
                  <th
                    style={{ border: "solid #999 0.3px", padding: 10 }}
                    scope="col"
                  >
                    Total
                  </th>
                  <th
                    style={{ border: "solid #999 0.3px", padding: 10 }}
                    scope="col"
                  >
                    Update quantity
                  </th>
                </tr>
              </thead>
              <tbody>
                {carts.products.map((product) => {
                  const total = product.quantity * product.price;
                  return (
                    <tr
                      style={{ border: "solid #999 0.3px", padding: 8 }}
                      key={product.productId}
                    >
                      <td style={{ fontSize: 14, padding: 8 }}>
                        {product.name}
                      </td>
                      <td style={{ border: "solid #999 0.3px", padding: 8 }}>
                        {product.quantity}
                      </td>
                      <td style={{ border: "solid #999 0.3px", padding: 8 }}>
                        ${product.price}
                      </td>
                      <td style={{ border: "solid #999 0.3px", padding: 8 }}>
                        ${total}
                      </td>
                      <td style={{ border: "solid #999 0.3px", padding: 8 }}>
                        <input
                          type="number"
                          value={editQuantities[product.productId] || ""}
                          onChange={(e) =>
                            handleChange(product.productId, e.target.value)
                          }
                          min="0"
                          style={{ width: "50px", textAlign: "center" }}
                        />
                        <button
                          style={{
                            padding: 5,
                            border: "none",
                            borderRadius: 5,
                            backgroundColor: "blue",
                            color: "#fff",
                            marginLeft: 5,
                          }}
                          onClick={() => handleUpdate(product.productId)}
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="empty">
          <p style={{ color: "#333333" }}>Your cart is empty.</p>
        </div>
      )}
    </main>
  );
}
