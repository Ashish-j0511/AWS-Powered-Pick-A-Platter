document.getElementById("cart-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const selectedItems = Array.from(document.querySelectorAll("input[name='item']:checked"))
                             .map(cb => cb.value);

  // Ensure at least 4 items are selected
  if (selectedItems.length < 4) {
    alert("Please select at least 4 items.");
    return;
  }

  const data = {
    name: name,
    phone: phone,
    items: selectedItems
  };

  fetch("https://gl27qrv9t2.execute-api.ap-south-1.amazonaws.com/prod/data", {  // Use your API Gateway URL here
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => {
    if (res.ok) {
      alert("Submitted successfully!");
      document.getElementById("cart-form").reset();
    } else {
      alert("Failed to submit data.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Error submitting data.");
  });
});
