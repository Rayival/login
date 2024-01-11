const namaSiswa  = [" ", " ", "", " ", " "];
let siswa = "";

for (let i = 0; i < namaSiswa.length; i++) {
  siswa += namaSiswa[i] + "<br>"
}
document.getElementById("Siswa").innerHTML = siswa;
