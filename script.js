let selectedDiamonds = 0;

function selectDiamonds(amount) {
  selectedDiamonds = amount;
  alert(`Has seleccionado ${amount} diamantes.`);
}

function startGeneration() {
  const playerId = document.getElementById("playerId").value;
  const statusDiv = document.getElementById("status");

  if (!playerId || selectedDiamonds === 0) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  statusDiv.classList.remove("hidden");
  statusDiv.innerText = "Generando diamantes...";

  setTimeout(() => {
    statusDiv.innerText = `¡Listo! Se han enviado ${selectedDiamonds} diamantes al ID ${playerId}.`;
  }, 3000);
}
