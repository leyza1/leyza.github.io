function hitung(operator) {
  const angka1El = document.getElementById('angka1');
  const angka2El = document.getElementById('angka2');
  const hasilEl = document.getElementById('hasil');

  const angka1 = parseFloat(angka1El.value);
  const angka2 = parseFloat(angka2El.value);

  // ✅ Validasi input kosong
  if (angka1El.value.trim() === "" || angka2El.value.trim() === "") {
    hasilEl.textContent = "❌ Input tidak boleh kosong!";
    return;
  }

  // ✅ Validasi bukan angka
  if (isNaN(angka1) || isNaN(angka2)) {
    hasilEl.textContent = "❌ Input harus berupa angka!";
    return;
  }

  let hasil = 0;
  switch (operator) {
    case '+':
      hasil = angka1 + angka2;
      break;
    case '-':
      hasil = angka1 - angka2;
      break;
    case '*':
      hasil = angka1 * angka2;
      break;
    case '/':
      if (angka2 === 0) {
        hasilEl.textContent = "⚠️ Tidak bisa membagi dengan nol!";
        return;
      }
      hasil = angka1 / angka2;
      break;
    default:
      hasilEl.textContent = "❌ Operator tidak dikenal!";
      return;
  }

  hasilEl.textContent = hasil;
}

function resetKalkulator() {
  document.getElementById('angka1').value = "";
  document.getElementById('angka2').value = "";
  document.getElementById('hasil').textContent = "0";
}
