function sendWhatsApp(e) {
  e.preventDefault();

  const name = document.querySelector('input[placeholder="Enter your name"]').value;
  const mobile = document.querySelector('input[placeholder="Enter mobile number"]').value;
  const address = document.querySelector('textarea').value;
  const date = document.querySelector('input[type="date"]').value;
  const time = document.querySelector('input[type="time"]').value;

  const message =
    "📦 New Pickup Order – QuickPress\n\n" +
    "👤 Name: " + name + "\n" +
    "📞 Mobile: " + mobile + "\n" +
    "🏠 Address: " + address + "\n" +
    "📅 Date: " + date + "\n" +
    "⏰ Time: " + time;

  const phoneNumber = "919258730561"; // apna number

  const url =
    "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}

