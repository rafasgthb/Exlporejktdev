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
  const handleOpen = () => setOpen(true);
  const handleOpen2 = () => setOpen2(true);
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);
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
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
              <Typography gutterBottom variant="h5" component="div">
                Taman Mini Indonesia Indah
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Taman Mini Indonesia Indah (TMII) merupakan suatu kawasan taman wisata bertema budaya Indonesia di Jakarta Timur.
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to favorites" >
                <FavoriteIcon />
              </IconButton>
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
              <Typography gutterBottom variant="h5" component="div">
                Kepulauan Seribu
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to favorites" >
                <FavoriteIcon />
              </IconButton>
              <Button onClick={handleOpen2} size="small">Learn More</Button>
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
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  </Typography>
                </Box>
              </Modal>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={des}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to favorites" >
                <FavoriteIcon />
              </IconButton>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
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
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to favorites" >
                <FavoriteIcon />
              </IconButton>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={des}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to favorites" >
                <FavoriteIcon />
              </IconButton>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={des}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to favorites" >
                <FavoriteIcon />
              </IconButton>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  )
}
