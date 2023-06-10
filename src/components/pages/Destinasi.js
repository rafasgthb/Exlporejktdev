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
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import des from '../../img/12.jpg'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Destinasi() {
  return (
    <div className="landing-page-container">
      <div id="main-section" className="landing-page-main">
        <div className='side-by-side'>
              <TextField id="outlined-basic" label="Cari Destinasi" variant="outlined" style={{margin: 10, width:"300px"}}/>
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
                  style={{margin: 10, width:"300px"}}
              >
                  <MenuItem value={0}>Pilih Wilayah
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <Button variant="contained" style={{margin: 10}}>Cari</Button>
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
