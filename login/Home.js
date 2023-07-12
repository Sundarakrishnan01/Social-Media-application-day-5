import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from './navbar';
import './home.css';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { useState } from 'react';




export default function MediaCard() {
    const [like, addLike] = useState(0);
    function increment() {
        addLike(like + 1);
    }
    return (
        <div style={{ maxWidth: '200vh' }}>
            <Navbar />
            <div className='box1'>
                <Card sx={{ maxWidth: 345 }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Avatar
                            sx={{ bgcolor: 'blue' }}
                            alt="Remy Sharp"
                            src="/broken-image.jpg"
                        >
                            D
                        </Avatar>
                        <div style={{paddingLeft:'2%'}}>
                            <Typography>  Donald J Trump</Typography>
                            <Typography>  Washington DC</Typography>
                        </div>
                    </div>

                    <CardMedia className='box'
                        sx={{ height: 140 }}
                        image="https://th.bing.com/th/id/OIP.zp6MVgxThP_T02u2v6Wc_AHaE8?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                        title="Trump"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Donald Trump
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Donald John Trump is an American politician, media personality, and businessman who served as the 45th president of the United States from 2017 to 2021. Trump graduated from the Wharton School with a bachelor's degree in 1968. He became president of his father's real-estate business in 1971 and renamed it the Trump Organization. He expanded its operations to building and renovating skyscrapers, hotels, casinos, and golf courses and later started side ventures, mostly by licensing his name. From 2004 to 2015, he co-produced and hosted the reality television series The Apprentice. He and his businesses have been plaintiff or defendant in more than 4,000 state and federal legal actions, including six bankruptcies.
                        </Typography>
                    </CardContent>
                    <CardActions className='actions'>
                        <ThumbUpOffAltIcon onClick={increment} />{like}

                        <InsertCommentIcon />
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}