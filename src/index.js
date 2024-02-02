document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contactForm');
    var ucapkanDiv = document.getElementById('Ucapan');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var nama = document.getElementById('nama').value;
        var email = document.getElementById('email').value;
        var pesan = document.getElementById('pesan').value;

        if (nama && email && pesan) {
            var ucapkanDiv = document.getElementById('Ucapan');
            ucapkanDiv.style.display = 'flex';

            var namaUcapanElement = document.getElementById('namaUcapan');
            namaUcapanElement.innerHTML = '<span>' + nama + '</span>';

            contactForm.reset();
        } else {
            ucapkanDiv.innerHTML = '<div class="alert">Harap isi semua kolom formulir.</div>';
            ucapkanDiv.style.display = 'flex';
        }
    });
});

function closePopup() {
    var ucapkanDiv = document.getElementById('Ucapan');
    ucapkanDiv.style.display = 'none';

   var contactForm = document.getElementById('contactForm');
    contactForm.reset();
}
