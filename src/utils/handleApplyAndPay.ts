export const handleApplyAndPay = async (
  amount: number,
  navigate: (path: string) => void
): Promise<void> => {
  try {
    // 1️⃣ Create Order
    const res = await fetch("http://localhost:5000/api/payment/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    if (!res.ok) {
      throw new Error("Failed to create order");
    }

    const order = await res.json();

    // 2️⃣ Razorpay Options
    const options = {
      key: "rzp_test_S47wFc1RkFvAbt", // ONLY Key ID
      amount: order.amount,
      currency: "INR",
      name: "InternLink",
      description: "Internship Application Fee",
      order_id: order.id,

      handler: async (response: {
        razorpay_order_id: string;
        razorpay_payment_id: string;
        razorpay_signature: string;
      }) => {
        const verifyRes = await fetch(
          "http://localhost:5000/api/payment/verify",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          }
        );

        const verifyData: { success: boolean } = await verifyRes.json();

        if (verifyData.success) {
  navigate(`/success?pid=${response.razorpay_payment_id}`);
        } else {
          alert("Payment verification failed");
        }
      },

      theme: {
        color: "#00E0FF",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
};
