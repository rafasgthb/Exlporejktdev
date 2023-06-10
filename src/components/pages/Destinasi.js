import React from 'react';
import '../../App.css';

import '../css/eventcss.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTime from '@mui/icons-material/AccessTime';
import Navigation from '@mui/icons-material/Navigation';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import des from '../../img/12.jpg'
import kep from '../../img/img-2.jpg'
import setu from '../../img/setu.jpg'
import dufan from '../../img/dufan.jpeg'
import museum from '../../img/museum.jpg'
import coco from '../../img/coco.png'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export default function Destinasi() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpen2 = () => setOpen2(true);
  const handleOpen3 = () => setOpen3(true);
  const handleOpen4 = () => setOpen4(true);
  const handleOpen5 = () => setOpen5(true);
  const handleOpen6 = () => setOpen6(true);
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);
  const handleClose3 = () => setOpen3(false);
  const handleClose4 = () => setOpen4(false);
  const handleClose5 = () => setOpen5(false);
  const handleClose6 = () => setOpen6(false);
  return (
    <div className="landing-page-container">
      <div id="main-section" className="landing-page-main">
        <div className='side-by-side'>
          <TextField id="outlined-basic" label="Cari Destinasi" variant="outlined" style={{ margin: 10, width: "300px" }} />
          {/* <select value="">
                <option disabled={true} value="">
                  --Choose and option--
                </option>
                <option value="apple">Apple 🍏</option>
                <option value="banana">Banana 🍌</option>
                <option value="kiwi">Kiwi 🥝</option>
              </select> */}
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={0}
            style={{ margin: 10, width: "300px" }}
          >
            <MenuItem value={0}>Pilih Wilayah
            </MenuItem>
            <MenuItem value={10}>Jakarta Pusat</MenuItem>
            <MenuItem value={20}>Jakarta Utara</MenuItem>
            <MenuItem value={30}>Jakarta Selatan</MenuItem>
            <MenuItem value={40}>Jakarta Timur</MenuItem>
            <MenuItem value={50}>Jakarta Barat</MenuItem>
            <MenuItem value={60}>Kepulauan Seribu</MenuItem>
          </Select>
          <Button variant="contained" style={{ margin: 10 }}>Cari</Button>
        </div>
        <div className="landing-page-gallery">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={des}
            />
            <CardContent>
              <div className='judulDes'>
                <Typography gutterBottom variant="h5" component="div">
                  Taman Mini Indonesia Indah
                </Typography>
              </div>
              <div className='deskripsiDes'>
                <Typography variant="body2" color="text.secondary">
                  Taman Mini Indonesia Indah (TMII) merupakan suatu kawasan taman wisata bertema budaya Indonesia di Jakarta Timur.
                </Typography>
              </div>
            </CardContent>
            <CardActions>
              <Button onClick={handleOpen} size="small">Learn More</Button>
            </CardActions>
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
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Taman Mini Indonesia Indah (TMII) merupakan suatu kawasan taman wisata bertema budaya Indonesia di Jakarta Timur.
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Berdiri di atas area seluas 150 hektar, Taman Mini “Indonesia Indah” hadir sebagai rangkuman kebudayaan 33 provinsi bangsa Indonesia dalam bentuk miniatur kepulauan nusantara lengkap dengan anjungan daerah, bangunan dan arsitektur tradisional, kesenian daerah, taman rekreasi, dan berbagai macam wahana yang menawarkan sarana seni, rekreasi, dan edukasi bagi pengunjung.
                </Typography>
                <CardActions>
                  <IconButton aria-label="AccessTime" >
                    <AccessTime />
                  </IconButton>
                  <Typography>Senin s.d Minggu</Typography>
                  <Typography>08:00 s.d 16:00 WIB</Typography>
                </CardActions>
                <CardActions>
                  <a href="https://maps.google.com/maps?ll=-6.304526,106.891595&z=16&t=m&hl=en&gl=ID&mapclient=embed&cid=518239111622089228" target="_blank">
                    <Button variant="contained" color="success">
                      <IconButton style={{ color: "white" }} aria-label="Navigation" >
                        <Navigation />
                      </IconButton>
                      Kunjungi
                    </Button></a>
                </CardActions>
              </Box>
            </Modal>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={kep}
            />
            <CardContent>
              <div className='judulDes'>
                <Typography gutterBottom variant="h5" component="div">
                  Kepulauan Seribu
                </Typography>
              </div>
              <div className='deskripsiDes'>
                <Typography variant="body2" color="text.secondary">
                  Kepulauan Seribu merupakan sekumpulan pulau yang terletak di kawasan pantai utara Jakarta.
                </Typography>
              </div>
            </CardContent>
            <CardActions>
              <Button onClick={handleOpen2} size="small">Learn More</Button>
              <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-description">
                    Kepulauan Seribu merupakan sekumpulan pulau yang terletak di kawasan pantai utara Jakarta. Pariwisata di kawasan kepulauan ini mengalami peningkatan dalam beberapa tahun terakhir. Berbagai fasilitas pendukung serta atraksi wisata dikembangkan, sehingga memudahkan wisatawan untuk menikmati keindahan di pulau-pulau tersebut.
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Nah, beberapakawasan Kepulauan Seribu yang layak menjadi alternatif wisata liburan seru antara lain Pulau Bidadari, Pulau Anyer, Pulau Anyer, Pulau Onrust dan Pulau Tindung.
                  </Typography>
                  <CardActions>
                    <br></br>
                    <a href="https://goo.gl/maps/ijuLpG3hocgPzYEf9" target="_blank">
                      <Button variant="contained" color="success">
                        <IconButton style={{ color: "white" }} aria-label="Navigation" >
                          <Navigation />
                        </IconButton>
                        Kunjungi
                      </Button></a>
                  </CardActions>
                </Box>
              </Modal>
            </CardActions>

          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={setu}
            />
            <CardContent>
              <div className='judulDes'>
                <Typography gutterBottom variant="h5" component="div">
                  Setu Babakan Kampung Betawi
                </Typography>
              </div>
              <div className='deskripsiDes'>
                <Typography variant="body2" color="text.secondary">
                  Perkampungan Budaya Betawi Setu Babakan adalah salah satu tempat yang dikhususkan menjadi ruang reka cipta sebagai dapurnya Budaya Betawi.
                </Typography>
              </div>
            </CardContent>
            <CardActions>
              <Button onClick={handleOpen3} size="small">Learn More</Button>
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
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Kawasan Perkampungan Budaya Betawi terletak di Kelurahan Srengseng Sawah Kecamatan Jagakarsa Kota Administratif Jakarta Selatan, Dengan luas sekitar 289 Hektar dan batas fisik sebelah Utara: Jl. Mochammad Kahfi II sampai dengan Jl. Desa Putra (Jl. H. Pangkat), sebelah Timur : Jl. Desa Putra (Jl. H. Pangkat), Jl. Pratama (Mangga Bolong Timur), Jl. Lapangan Merah, sebelah Selatan : Batas Wilayah provinsi DKI Jakarta dengan Kota Depok serta sebelah Barat : Jl. Mochammad Kahfi II.
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Dalam kawasan seluas itu dapat dijumpai aktivitas keseharian masyarakat Betawi seperti: Latihan Pukul (Pencak Silat), Ngederes, Aqiqah, Injek Tanah, Ngarak Penganten Sunat, memancing, budidaya ikan tawar, berkebun, berdagang sampai pada kegiatan memasak makanan khas Betawi seperti : Sayur Asem, Sayur Lodeh, Soto Mie, Soto Betawi, Ikan Pecak, Gabus Pucung, Gado-Gado, Laksa, Toge Rebus, Kerak Telor, Bir Pletok, Dodol, Tape Uli, Geplak, Wajik, dan lain-lain.
                  </Typography>
                  <CardActions>
                    <br></br>
                    <a href="https://goo.gl/maps/uBj7BWQU6QMTySRs6" target="_blank">
                      <Button variant="contained" color="success">
                        <IconButton style={{ color: "white" }} aria-label="Navigation" >
                          <Navigation />
                        </IconButton>
                        Kunjungi
                      </Button></a>
                  </CardActions>
                </Box>
              </Modal>
            </CardActions>
          </Card>
        </div>
        <div className="landing-page-gallery">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={dufan}
            />
            <CardContent>
              <div className='judulDes'>
                <Typography gutterBottom variant="h5" component="div">
                  Dunia Fantasi Ancol
                </Typography>
              </div>
              <div className='deskripsiDes'>
                <Typography variant="body2" color="text.secondary">
                  Dunia Fantasi atau yang lebih populer dengan sebutan Dufan, pertama kali dibuka untuk umum pada 29 Agustus 1985 dan merupakan theme park pertama dikembangkan oleh perseroan.
                </Typography>
              </div>
            </CardContent>
            <CardActions>
              <Button onClick={handleOpen4} size="small">Learn More</Button>
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
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Dunia Fantasi atau yang lebih populer dengan sebutan Dufan, pertama kali dibuka untuk umum pada 29 Agustus 1985 dan merupakan theme park pertama yang dikembangkan oleh Perseroan dan telah memiliki sertifikat ISO 9001:2015 sejak Februari 2017.
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Selain menjadi pusat hiburan outdoor, Dufan juga merupakan kawasan edutainment fisikia terbesar di Indonesia yang memanjakan pengunjung dengan Fantasi Keliling Dunia, melalui wahana permainan berteknologi tinggi, yang terbagi dalam 9 (Sembilan) kawasan yaitu Indonesia, Jakarta, Asia, Eropa, Amerika, Yunani, Hikayat, Kalila dan Fantasy Lights.
                  </Typography>
                  <CardActions>
                    <br></br>
                    <a href="https://goo.gl/maps/BXMDJcqfaZVMkhTS8" target="_blank">
                      <Button variant="contained" color="success">
                        <IconButton style={{ color: "white" }} aria-label="Navigation" >
                          <Navigation />
                        </IconButton>
                        Kunjungi
                      </Button></a>
                  </CardActions>
                </Box>
              </Modal>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={museum}
            />
            <CardContent>
              <div className='judulDes'>
                <Typography gutterBottom variant="h5" component="div">
                  Museum Nasional Indonesia
                </Typography>
              </div>
              <div className='deskripsiDes'>
                <Typography variant="body2" color="text.secondary">
                  Museum Nasional Indonesia adalah museum arkeologi, sejarah, etnologi, dan geografi yang terletak di Jalan Medan Merdeka Barat, Jakarta Pusat, tepat di sisi barat Lapangan Merdeka.
                </Typography>
              </div>
            </CardContent>
            <CardActions>
              <Button onClick={handleOpen5} size="small">Learn More</Button>
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
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Museum Nasional Indonesia adalah museum arkeologi, sejarah, etnologi, dan geografi yang terletak di Jalan Medan Merdeka Barat, Jakarta Pusat, tepat di sisi barat Lapangan Merdeka.
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Museum ini dianggap sebagai salah satu yang terlengkap dan terbaik di Indonesia, serta salah satu museum terbaik di Asia Tenggara. Museum ini telah melestarikan sekitar 141.000 objek, mulai dari artefak prasejarah hingga koleksi arkeologi, numismatik, keramik, etnografi, sejarah, dan geografi. Museum ini memiliki koleksi lengkap patung batu periode Hindu-Buddha klasik Jawa kuno dan Sumatera serta koleksi keramik Asia yang cukup luas.
                  </Typography>
                  <CardActions>
                    <br></br>
                    <a href="https://goo.gl/maps/rvP764dC84fYDnDm8" target="_blank">
                      <Button variant="contained" color="success">
                        <IconButton style={{ color: "white" }} aria-label="Navigation" >
                          <Navigation />
                        </IconButton>
                        Kunjungi
                      </Button></a>
                  </CardActions>
                </Box>
              </Modal>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={coco}
            />
            <CardContent>
              <div className='judulDes'>
                <Typography gutterBottom variant="h5" component="div">
                  Kokonut & Curtains By Wakimukudo
                </Typography>
              </div>
              <div className='deskripsiDes'>
                <Typography variant="body2" color="text.secondary">
                  Salah satu lokasi paling diperbicangkan saat ini adalah Kokonut & Curtains By Wakimukudo, yang menempati salah satu sudut area Restoran Pulau Dua, Senayan, Jakarta Selatan.
                </Typography>
              </div>
            </CardContent>
            <CardActions>
              <Button onClick={handleOpen6} size="small">Learn More</Button>
              <Modal
                open={open6}
                onClose={handleClose6}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Kokonut & Curtains By Wakimukudo
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Seperti tidak ada habisnya Jakarta memiliki tempat-tempat baru yang seru untuk bersantap sekaligus nongkrong santai. Salah satu lokasi paling diperbicangkan saat ini adalah Kokonut & Curtains By Wakimukudo, yang menempati salah satu sudut area Restoran Pulau Dua, Senayan, Jakarta Selatan.
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Untuk hidangannya, Kokonut & Curtains By Wakimukudo menampilkan ragam sajian lezat khas Asia, Barat, dan Nusantara. Harganya memang agak sedikit tinggi, namun hal itu sebanding dengan pengalaman sekelas resor di tengah Jakarta, yang tentunya cukup sulit ditemukan.</Typography>
                  <CardActions>
                    <br></br>
                    <a href="https://goo.gl/maps/UNVKZjmxoRxDoccU7" target="_blank">
                      <Button variant="contained" color="success">
                        <IconButton style={{ color: "white" }} aria-label="Navigation" >
                          <Navigation />
                        </IconButton>
                        Kunjungi
                      </Button></a>
                  </CardActions>
                </Box>
              </Modal>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  )
}
