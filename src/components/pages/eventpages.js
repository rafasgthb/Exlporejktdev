import React from 'react';
import '../../App.css';
import EventSection from './event';
import Footer from '../Footer';
import s4 from '../../img/s4.png';
import '../Cards.css';
import CardItem from '../CardItem';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';


function EventPages() {
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
  const handleOpen = () => setOpen(true);
  const handleOpen2 = () => setOpen2(true);
  const handleOpen3 = () => setOpen3(true);
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);
  const handleClose3 = () => setOpen3(false);
  return (
    <>
        <div className='events'>
            <img src={s4} style={{width:"100%", height:"300px", paddingLeft:"10%", paddingRight:"10%", paddingTop:"3%"}} ></img>
        </div>
        <div className='topevents'>
        <div className='cards__container'>
        <div className='cards__wrapper'>
        <h2>Top Events</h2><br/>
          <ul className='cards__items'>
            <h1 style={{fontSize:"120px",textShadow: "1px 1px 2px black"}}>1</h1>
            <CardItem
              src='images/top-1.jpeg'
              text='UNBOX! UPH Lippo Village'
              label='Music'
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
                    UNBOX! UPH Lippo Village
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px", fontWeight: 'bold'}}>
                  Tanggal : 22 – 24 Juni 2023 <br/>
                  Tempat : UPH Lippo Village
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px" ,  fontWeight: 'bold'}}>
                  Deskripsi Event : <br/></Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px"}}>
                  Yuk join di event Unbox! 22-24 Juni 2023 di UPH Lippo Village.<br/><br/>
                  Ikuti banyak acara menarik mulai dari kompetisi Unbox Your Talent untuk siswa/i SMA, icip2 kulineran di Unbox Market, dan untuk para orang tua bakal ada Unbox Your Potentials yang akan dibawakan oleh para pembicara yang keren banget soal potensi dan karir anak. <br/><br/>
                  Gak cuma itu, kamu juga bisa nonton konser RAN dan Ziva juga!<br/><br/>
                  Khusus kamu yang datang ke acara ini juga berkesempatan mendapatkan beasiswa kuliah di UPH sampai dengan 100%!<br/>
                  Seru banget kan! Tunggu apalagi?<br/><br/>
                  </Typography><br/>
                  <Button variant="contained" onClick={() => { window.open('https://unbox-event.com/', '_blank');} } target="_blank">Book Now</Button>
                </Box>
            </Modal>  
            <h1 style={{fontSize:"120px",textShadow: "1px 1px 2px black"}}>2</h1>
            <CardItem
              src='images/top-2.jpeg'
              text='Glodok Food Festival 2023'
              label='Food'
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
                  Glodok Food Festival 2023
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px", fontWeight: 'bold'}}>
                  Tanggal : 19 – 25 Juni 2023<br/>
                  Tempat : Outdoor Glodok Plaza Jakarta<br/>
                  Waktu : 10.00 – 19.00
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px" ,  fontWeight: 'bold'}}>
                  Deskripsi Event : <br/></Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px"}}>
                  CALLING ALL FOOD TENANT !!!<br/><br/>
                  Dalam rangka HUT DKI Jakarta Glodok Plaza & @jmlorganizer85 mengadakan Glodok Food Festival.. <br/><br/>
                  Yuk datang ke GLODOK FOOD FESTIVAL lokasinya di Out door Glodok Plaza<br/><br/>
                  Datang aja dan langsung pilih kuliner kesukaan kamu di Glodok food festival mulai dari Kuliner Modern hingga Kuliner Kekinian selain itu kamu bisa nikmati live music, talent perform dan berbagai lomba<br/><br/>
                  Seru banget kan! Tunggu apalagi?<br/><br/>
                  Jangan lupa yaa  Glodok Food Festival
                  </Typography><br/>
                  <Button variant="contained" onClick={() => { window.open('https://unbox-event.com/', '_blank');} } target="_blank">Book Now</Button>
                </Box>
            </Modal>  
            <h1 style={{fontSize:"120px",textShadow: "1px 1px 2px black"}}>3</h1>
            <CardItem
              src='images/top-3.jpeg'
              text='STEI Voice 2023'
              label='Audition'
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
                    STEI Voice 2023
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px" ,  fontWeight: 'bold'}}>
                  Deskripsi Event : <br/></Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: "14px"}}>
                  Hiii Peeps!!!<br/><br/>
                  Solo Vocal Competition<br/>
                  Lets make this space alive with your mesmerizing voice<br/>
                  Participants : Senior High School Student & University Student in JABODETABEK<br/>
                  Fee Registration : 75K<br/>
                  Open Registration : now – 18 Juni 2023<br/><br/>
                  Ratoh Jaroe Competition<br/>
                  Let’s make the space alive by dancing to a music that is heard all over.<br/>
                  Participants : Senior High School Student & University Student in JABODETABEK<br/>
                  Fee Registration : 250K + WO 50K<br/>
                  Open Registration : now – 18 Juni 2023<br/>
                  </Typography><br/>
                  <Button variant="contained" onClick={() => { window.open('https://linktr.ee/steivoice23', '_blank');} } target="_blank">Book Now</Button>
                </Box>
            </Modal>  
          </ul>
        </div>
      </div>
        </div>
        <EventSection />
        <Footer />
    </>
  );
}

export default EventPages;
