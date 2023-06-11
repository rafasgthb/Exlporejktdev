import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';
import s4 from '../../img/s4.png';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';

function Events() {
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
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <h3>Event Pilihan</h3><br/>
          <ul className='cards__items'>
            <CardItem
              src='images/event-1.jpeg'
              text='165 HALAL FAIR'
              label='Exhibition'
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
                  165 HALAL FAIR
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px", fontWeight: 'bold'}}>
                  Tanggal : 08-10 September 2023<br/>
                  Tempat : Menara 165, Granada Ballroom, Jl. TB Simatupang Kav. 1, Jakarta Selatan
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px" ,  fontWeight: 'bold'}}>
                  Deskripsi Event : <br/></Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px"}}>
                  Countdown dimulai !<br/><br/>
                  Persiapkan diri Anda untuk pengalaman belanja produk-produk halal yang istimewa.<br/><br/>
                  Kami membuka peluang bagi para exhibitor yang ingin bergabung bersama kami pada tanggal 08-10 September 2023 di Granada Ballroom, Menara 165, Jakarta Selatan.<br/>
                  </Typography><br/>
                  <Button variant="contained" onClick={() => { window.open('https://165halalfair.com/', '_blank');} } target="_blank">Book Now</Button>
                </Box>
            </Modal>  
            <CardItem
              src='images/event-2.jpeg'
              text='Indonesia International Baby Products & Toys Expo'
              label='Adventure'
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
                  Indonesia International Baby Products & Toys Expo
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px", fontWeight: 'bold'}}>
                  Tanggal: 24-26 Agustus 2023<br/>
                  Tempat: JIExpo Kemayoran Jakarta
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px" ,  fontWeight: 'bold'}}>
                  Deskripsi Event : <br/></Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px"}}>
                  IBTE Indonesia was first announced in 2015 and still standing till now, with its determination of making the largest Toys Exhibition in ASEAN due to its great potential by analyzing market demands.<br/><br/>
                  In IBTE Indonesia, there are selected items which will be showcased a large variety of exclusive Baby Maternity & Toys products on exhibition platform. The main goal of this platform is to provide a business environment for meet and network while being exposing to the business philosophy.<br/><br/>
                  We are looking forwards to have you as Visitors, Exhibitors, Media Partner and Business Partners<br/>
                  </Typography><br/>
                  <Button variant="contained" onClick={() => { window.open('https://www.peragaexpo.com/event-info', '_blank');} } target="_blank">Book Now</Button>
                </Box>
            </Modal>  
            <CardItem
              src='images/event-3.jpeg'
              text='Job Expo Universitas Al-Azhar Jakarta'
              label='Job Fair'
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
                  JOB EXPO ALL MAJOR 2023
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px", fontWeight: 'bold'}}>
                  📆 Hari, tanggal: Sabtu, 3 Juni 2023<br/>
                  ⏰ Pukul: 09.00 – 17.00 WIB
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px" ,  fontWeight: 'bold'}}>
                  Deskripsi Event : <br/></Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px"}}>
                  PBM UAI x CDC UAI mempersembahkan:<br/><br/>
                  Job Expo 2023 dilaksanakan secara OFFLINE dan acara ini merupakan kesempatan bagi Anda untuk berinteraksi langsung dengan perwakilan dari perusahaan-perusahaan terkemuka di bidang Anda. Selain itu, akan ada sesi branding terkait perusahaan-perusahaan yang akan membantu Anda mempersiapkan diri serta mengenal lebih dalam di dunia kerja Anda.<br/><br/>
                  📝 Noted: Bawa CV terbaik Anda dan jaga penampilan yang profesional (pakaian wajib rapih dan tertutup)<br/>
                  Soo guysss, jangan lupa daftarkan dirimu sekarang juga karena peluang karirmu, ada disini!!😎😎<br/><br/>
                  See you!👋🏻<br/>
                  </Typography><br/>
                  <Button variant="contained" onClick={() => { window.open('https://bit.ly/jobexpo2023', '_blank');} } target="_blank">Book Now</Button>
                </Box>
            </Modal> 
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/event-4.jpeg'
              text='DEEP EXTREME INDONESIA 2023'
              label='Show'
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
                  DEEP EXTREME INDONESIA 2023
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px", fontWeight: 'bold'}}>
                  Tanggal: 1-4 Juni 2023<br/>
                  Tempat: Hall B, Jakarta Convention Center
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px" ,  fontWeight: 'bold'}}>
                  Deskripsi Event : <br/></Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px"}}>
                  DXI 2023 brings together anyone with a great passion for diving, marine, and adventure. DXI is undoubtedly the most anticipated show for divers, thrill seekers, and outdoor enthusiasts. This annual event.<br/><br/>
                  must not be missed!<br/>
                  </Typography><br/>
                  <Button variant="contained" onClick={() => { window.open('https://deepextremeindonesia.com/', '_blank');} } target="_blank">Book Now</Button>
                </Box>
            </Modal> 
            <CardItem
              src='images/event-5.jpeg'
              text='Workshop : Finding Light in the Dark'
              label='Workshop'
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
                  	Workshop : Finding Light in the Dark
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px", fontWeight: 'bold'}}>
                  Tanggal : 17 Juni 2023<br/>
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px" ,  fontWeight: 'bold'}}>
                  Deskripsi Event : <br/></Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px"}}>
                  Have you heard of a workshop in the dark? No? Well, here we have 1 for you!<br/><br/>
                  An all-inclusive night for teens and Young Adults to explore the darkness within! It’s a workshop with a twist! Beware; There will be Release, Laughter, and maybe tears, but worry not, We’ve got you!<br/>
                  </Typography><br/>
                  <Button variant="contained" onClick={() => { window.open('https://forms.gle/CNaWmrXFB5TwRV51A', '_blank');} } target="_blank">Book Now</Button>
                </Box>
            </Modal> 
            <CardItem
              src='images/event-6.jpeg'
              text='Essential Oils by dōTERRA'
              label='Healthcare'
              modal={handleOpen6}
            />
            <Modal
                open={open6}
                onClose={handleClose6}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                  Essential Oils by dōTERRA
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px", fontWeight: 'bold'}}>
                  Tanggal : 27 – 28 Mei 2023<br/>
                  Tempat : Harris Hotel Kelapa Gading & Mercure Hotel
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px" ,  fontWeight: 'bold'}}>
                  Deskripsi Event : <br/></Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px"}}>
                  Keluhan-keluhan ini Hilang secara Alami hanya dengan Diffuse, Oles, Minum.<br/><br/>
                  Maka dari itu ayuk ikutan acara tentang Essential Oils by dōTERRA<br/>
                  📆 Hari Sabtu 27 Mei di Hotel Harris MKG<br/>
                  📆 Hari Minggu 28 Mei di Hotel Mercure PIK<br/>
                  </Typography><br/>
                  <Button variant="contained" onClick={() => { window.open('https://doterrateamindonesia.com/', '_blank');} } target="_blank">Book Now</Button>
                </Box>
            </Modal> 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Events;
