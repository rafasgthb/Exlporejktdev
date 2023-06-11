import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function Cards() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 750,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  const [open4, setOpen4] = React.useState(false);
  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);

  const [open5, setOpen5] = React.useState(false);
  const handleOpen5 = () => setOpen5(true);
  const handleClose5 = () => setOpen5(false);
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/12.jpg'
              text='Taman Mini Indonesia Indah'
              label='Adventure'
              modal={handleOpen}
            />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Taman Mini Indonesia Indah
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ fontSize: "14px", fontWeight: 'bold' }}>
                  Kota : Jakarta Pusat <br />
                  Kecamatan : Jakarta Timur
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ fontSize: "14px", fontWeight: 'bold' }}>
                  Deskripsi destinasi : <br /></Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ fontSize: "14px" }}>
                  Taman Mini Indonesia Indah (TMII) merupakan suatu kawasan taman wisata bertema budaya Indonesia di Jakarta Timur.
                  <br /><br />
                  Berdiri di atas area seluas 150 hektar, Taman Mini “Indonesia Indah” hadir sebagai rangkuman kebudayaan 33 provinsi bangsa Indonesia dalam bentuk miniatur kepulauan nusantara lengkap dengan anjungan daerah, bangunan dan arsitektur tradisional, kesenian daerah, taman rekreasi, dan berbagai macam wahana yang menawarkan sarana seni, rekreasi, dan edukasi bagi pengunjung.
                  <br /><br />
                </Typography><br />
                <Button variant="contained" onClick={() => { window.open('https://unbox-event.com/', '_blank'); }} target="_blank">Kunjungi</Button>
              </Box>
            </Modal>
            <CardItem
              src='images/img-2.jpg'
              text='Trip Kepulauan Seribu'
              label='Nature'
              modal={handleOpen2}
            />
            <Modal
              open={open2}
              onClose={handleClose2}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Kepulauan Seribu
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ fontSize: "14px", fontWeight: 'bold' }}>
                  Kota : Kepulauan Seribu <br />
                  Kecamatan : Kepulauan Seribu
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ fontSize: "14px", fontWeight: 'bold' }}>
                  Deskripsi destinasi : <br /></Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ fontSize: "14px" }}>
                  Kepulauan Seribu merupakan sekumpulan pulau yang terletak di kawasan pantai utara Jakarta.
                  <br /><br />
                  Nah, beberapakawasan Kepulauan Seribu yang layak menjadi alternatif wisata liburan seru antara lain Pulau Bidadari, Pulau Anyer, Pulau Anyer, Pulau Onrust dan Pulau Tindung.
                  <br /><br />
                </Typography><br />
                <Button variant="contained" onClick={() => { window.open('https://goo.gl/maps/ijuLpG3hocgPzYEf9', '_blank'); }} target="_blank">Kunjungi</Button>
              </Box>
            </Modal>
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/setu.jpg'
              text='Setu Babakan Kampung Betawi'
              label='History'
              modal={handleOpen3}
            />
            <Modal
              open={open3}
              onClose={handleClose3}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Setu Babakan Kampung Betawi
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ fontSize: "14px", fontWeight: 'bold' }}>
                  Kota : Jakarta Selatan <br />
                  Kecamatan : Jagakarsa
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ fontSize: "14px", fontWeight: 'bold' }}>
                  Deskripsi destinasi : <br /></Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ fontSize: "14px" }}>
                  Kawasan Perkampungan Budaya Betawi terletak di Kelurahan Srengseng Sawah Kecamatan Jagakarsa Kota Administratif Jakarta Selatan, Dengan luas sekitar 289 Hektar dan batas fisik sebelah Utara: Jl. Mochammad Kahfi II sampai dengan Jl. Desa Putra (Jl. H. Pangkat), sebelah Timur : Jl. Desa Putra (Jl. H. Pangkat), Jl. Pratama (Mangga Bolong Timur), Jl. Lapangan Merah, sebelah Selatan : Batas Wilayah provinsi DKI Jakarta dengan Kota Depok serta sebelah Barat : Jl. Mochammad Kahfi II.
                  <br /><br />
                  Dalam kawasan seluas itu dapat dijumpai aktivitas keseharian masyarakat Betawi seperti: Latihan Pukul (Pencak Silat), Ngederes, Aqiqah, Injek Tanah, Ngarak Penganten Sunat, memancing, budidaya ikan tawar, berkebun, berdagang sampai pada kegiatan memasak makanan khas Betawi seperti : Sayur Asem, Sayur Lodeh, Soto Mie, Soto Betawi, Ikan Pecak, Gabus Pucung, Gado-Gado, Laksa, Toge Rebus, Kerak Telor, Bir Pletok, Dodol, Tape Uli, Geplak, Wajik, dan lain-lain.
                  <br /><br />
                </Typography><br />
                <Button variant="contained" onClick={() => { window.open('https://goo.gl/maps/ijuLpG3hocgPzYEf9', '_blank'); }} target="_blank">Kunjungi</Button>
              </Box>
            </Modal>
            <CardItem
              src='images/dufan.jpeg'
              text='Dunia Fantasi Ancol'
              label='Adventure'
              modal={handleOpen4}
            />
            <Modal
              open={open4}
              onClose={handleClose4}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Dunia Fantasi Ancol
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ fontSize: "14px", fontWeight: 'bold' }}>
                  Kota : Jakarta Selatan<br />
                  Kecamatan : Pademangan
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ fontSize: "14px", fontWeight: 'bold' }}>
                  Deskripsi destinasi : <br /></Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ fontSize: "14px" }}>
                  Dunia Fantasi atau yang lebih populer dengan sebutan Dufan, pertama kali dibuka untuk umum pada 29 Agustus 1985 dan merupakan theme park pertama yang dikembangkan oleh Perseroan dan telah memiliki sertifikat ISO 9001:2015 sejak Februari 2017.
                  <br /><br />
                  Selain menjadi pusat hiburan outdoor, Dufan juga merupakan kawasan edutainment fisikia terbesar di Indonesia yang memanjakan pengunjung dengan Fantasi Keliling Dunia, melalui wahana permainan berteknologi tinggi, yang terbagi dalam 9 (Sembilan) kawasan yaitu Indonesia, Jakarta, Asia, Eropa, Amerika, Yunani, Hikayat, Kalila dan Fantasy Lights.
                  <br /><br />
                </Typography><br />
                <Button variant="contained" onClick={() => { window.open('https://goo.gl/maps/BXMDJcqfaZVMkhTS8', '_blank'); }} target="_blank">Kunjungi</Button>
              </Box>
            </Modal>
            <CardItem
              src='images/museum.jpg'
              text='Museum Nasional Indonesia'
              label='History'
              modal={handleOpen5}
            />
            <Modal
              open={open5}
              onClose={handleClose5}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Museum Nasional Indonesia
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ fontSize: "14px", fontWeight: 'bold' }}>
                  Kota : Jakarta Pusat <br />
                  Kecamatan : Gambir
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ fontSize: "14px", fontWeight: 'bold' }}>
                  Deskripsi destinasi : <br /></Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ fontSize: "14px" }}>
                  Museum Nasional Indonesia adalah museum arkeologi, sejarah, etnologi, dan geografi yang terletak di Jalan Medan Merdeka Barat, Jakarta Pusat, tepat di sisi barat Lapangan Merdeka.
                  <br /><br />
                  Museum ini dianggap sebagai salah satu yang terlengkap dan terbaik di Indonesia, serta salah satu museum terbaik di Asia Tenggara. Museum ini telah melestarikan sekitar 141.000 objek, mulai dari artefak prasejarah hingga koleksi arkeologi, numismatik, keramik, etnografi, sejarah, dan geografi. Museum ini memiliki koleksi lengkap patung batu periode Hindu-Buddha klasik Jawa kuno dan Sumatera serta koleksi keramik Asia yang cukup luas.
                  <br /><br />
                </Typography><br />
                <Button variant="contained" onClick={() => { window.open('https://goo.gl/maps/rvP764dC84fYDnDm8', '_blank'); }} target="_blank">Kunjungi</Button>
              </Box>
            </Modal>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
