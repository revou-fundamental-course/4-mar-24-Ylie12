// var var1 = parseFloat(document.getElementById("bb").value);
// var var2 = parseFloat(document.getElementById("tb").value);
// var hasil = var1/((var2/100)**2);

function hitung() {
    var var1 = parseFloat(document.getElementById("bb").value);
    var var2 = parseFloat(document.getElementById("tb").value);
    var hasil = var1/((var2/100)**2);
    var golongan = "";
  
    if (hasil <= 18.5) golongan = "Underweight";
    else if (hasil > 18.5 && hasil < 25) golongan = "Normal Weight";
    else if (hasil >= 25 && hasil < 30) golongan = "Overweight";
    else if (hasil >= 30) golongan = "Obesity";
    else golongan = "ERROR";
  
  // underweight == (<18.5)
  // normal weight == 18.5-24.9
  // overweight == 25.0-29.9
  // obesity == 30 =>
  
    if (golongan == "Underweight") {
      document.getElementById("hasil3").innerHTML = "BMI range : <18.5<hr><br>Anda berada dalam kategori <i><b>underweight</b></i> atau berat badan kurang.";
      document.getElementById("hasil4").innerHTML = "Naikkan asupan kalori sesuai dengan kebutuhan kalori harian anda.<br>Atur pola makan yang sehat dan lakukan olahraga untuk menaikkan berat badan anda.";
    } else if (golongan == "Normal Weight") {
      document.getElementById("hasil3").innerHTML = "BMI range : 18.5-24.9<hr><br>Anda berada dalam kategori <b>sehat</b> atau berat badan ideal.";
      document.getElementById("hasil4").innerHTML = "Pastikan asupan kalori sesuai dengan kebutuhan kalori harian anda.<br>Diet yang baik dengan konsumsi makanan sehat dapat mempertahankan kesehatan dan imun.";
    } else if (golongan == "Overweight") {
      document.getElementById("hasil3").innerHTML = "BMI range : 25-29.9<hr><br>Anda berada dalam kategori <i><b>overweight</b></i> atau berat badan berlebih.";
      document.getElementById("hasil4").innerHTML = "Turunkan asupan kalori sesuai dengan kebutuhan kalori harian anda.<br>Atur kalor makanan dan lakukan olahraga secara teratur untuk menurunkan berat badan anda.";
    } else if (golongan == "Obesity") {
      document.getElementById("hasil3").innerHTML = "BMI range : 30≥<hr><br>Anda berada dalam kategori <i><b>Obesity</b></i> atau berat badan berlebih.";
      document.getElementById("hasil4").innerHTML = "Turunkan asupan kalori sesuai dengan kebutuhan kalori harian anda.<br>Atur pola makan sedikit tetapi sering, perbanyak minum air putih dan olahraga secara teratur.";
    }
  
    // document.getElementById("hasil").value = hasil.toFixed(2);
    document.getElementById("hasil").innerHTML = hasil.toFixed(2);
    // document.getElementById("hasil2").innerHTML = "kategori " + golongan;
    document.getElementById("hasil2").innerHTML = golongan;
  }
  
  function hapus() {
    document.getElementById("myForm").reset();
  }