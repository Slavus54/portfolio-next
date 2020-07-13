import React, {useState} from 'react'
import './Work.css';
import Link from 'next/link'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const Work = () => {
    const shorten = (text) => {
        if (text && text.length >= 120) {
            return text.substr(0, 50) + '...'
        }
    }
    return (
        <div className="container">
            <div className="work-cards">
            <Card className="card" style={{width: '200px'}}>
                <CardActionArea style={{height: '280px'}}>
                    <img src="../static/img/first.png" alt="Sorry" />
                    <CardContent>
                        <div className="card-headline">Lizard</div>
                        <div className="card-description">
                        {shorten(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Pellentesque risus lacus, cursus 
                                vel arcu tempus, ultrices viverra 
                                justo. Nunc eleifend dignissim 
                                velit id fringilla. Integer faucibus 
                                leo id nibh vulputate maximus.`)}
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button style={{backgroundColor: '#3f51b5', color: 'white'}} size="small" color="primary">
                    <a href="https://slavus54.github.io/Lorem_firstSite/indexer.html">Look</a>
                </Button>    
                </CardActions>
            </Card>
            <Card className="card" style={{width: '200px'}}>
                <CardActionArea style={{height: '280px'}}>
                    <img src="../static/img/second.png" alt="Sorry" />
                    <CardContent>
                        <div className="card-headline">Lizard</div>
                        <div className="card-description">
                        {shorten(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Pellentesque risus lacus, cursus 
                                vel arcu tempus, ultrices viverra 
                                justo. Nunc eleifend dignissim 
                                velit id fringilla. Integer faucibus 
                                leo id nibh vulputate maximus.`)}
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button style={{backgroundColor: '#3f51b5', color: 'white'}} size="small" color="primary">
                    <a href="https://slavus54.github.io/firstShop/index.html">Look</a>
                </Button>    
                </CardActions>
            </Card>
            <Card className="card" style={{width: '200px'}}>
                <CardActionArea style={{height: '280px'}}>
                    <img src="../static/img/third.png" alt="Sorry" />
                    <CardContent>
                        <div className="card-headline">Lizard</div>
                        <div className="card-description">
                        {shorten(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Pellentesque risus lacus, cursus 
                                vel arcu tempus, ultrices viverra 
                                justo. Nunc eleifend dignissim 
                                velit id fringilla. Integer faucibus 
                                leo id nibh vulputate maximus.`)}
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button style={{backgroundColor: '#3f51b5', color: 'white'}} size="small" color="primary">
                    <a href="https://slavus54.github.io/Apple_NewsSite/index.html">Look</a>
                </Button>    
                </CardActions>
            </Card>
            <Card className="card" style={{width: '200px'}}>
                <CardActionArea style={{height: '280px'}}>
                    <img src="../static/img/WordPress.png" alt="Sorry" />
                    <CardContent>
                        <div className="card-headline">Lizard</div>
                        <div className="card-description">
                        {shorten(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Pellentesque risus lacus, cursus 
                                vel arcu tempus, ultrices viverra 
                                justo. Nunc eleifend dignissim 
                                velit id fringilla. Integer faucibus 
                                leo id nibh vulputate maximus.`)}
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button style={{backgroundColor: '#3f51b5', color: 'white'}} size="small" color="primary">
                    <a href="#">Look</a>
                </Button>    
                </CardActions>
            </Card>
            <Card className="card" style={{width: '200px'}}>
                <CardActionArea style={{height: '280px'}}>
                    <img src="../static/img/react.png" alt="Sorry" />
                    <CardContent>
                        <div className="card-headline">Lizard</div>
                        <div className="card-description">
                        {shorten(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Pellentesque risus lacus, cursus 
                                vel arcu tempus, ultrices viverra 
                                justo. Nunc eleifend dignissim 
                                velit id fringilla. Integer faucibus 
                                leo id nibh vulputate maximus.`)}
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button style={{backgroundColor: '#3f51b5', color: 'white'}} size="small" color="primary">
                    <a href="https://github.com/Slavus54/Slavus54.React.github.io">Look</a>
                </Button>    
                </CardActions>
            </Card>
            <Card className="card" style={{width: '200px'}}>
                <CardActionArea style={{height: '280px'}}>
                    <img src="../static/img/fourth.png" alt="Sorry" />
                    <CardContent>
                        <div className="card-headline">Lizard</div>
                        <div className="card-description">
                        {shorten(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Pellentesque risus lacus, cursus 
                                vel arcu tempus, ultrices viverra 
                                justo. Nunc eleifend dignissim 
                                velit id fringilla. Integer faucibus 
                                leo id nibh vulputate maximus.`)}
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button style={{backgroundColor: '#3f51b5', color: 'white'}} size="small" color="primary">
                    <a href="https://github.com/Slavus54/Slavus54.Telegram-bot.github.io">Look</a>
                </Button>    
                </CardActions>
            </Card>
            </div>
        </div>
    );
}

export default Work;