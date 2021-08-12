import React from 'react'
import {Link} from 'react-router-dom'
import {Grid, Typography, IconButton} from "@material-ui/core"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {

    return(
        <Grid>
            <Typography style = {{fontFamily: 'Raleway'}} variant = "h6"><b>Quick Menu</b></Typography>

            <Grid container style = {{position: "relative", margin: "30px"}}>
                <Grid xs = {12} sm = {3}>
                    <a style = {{fontFamily: 'Raleway', color: "#8d6235"}} href="https://www.hourweddings.com/gibraltar-botanical-gardens-wedding-ceremony-packages" target="_blank">Botanical Gardens Civil Marriage</a>
                </Grid>
                <Grid xs = {12} sm = {3}>
                    <a style = {{fontFamily: 'Raleway', color: "#8d6235"}} href="https://www.hourweddings.com/gibraltar-mons-calpe-suite-wedding-packages" target="_blank">Mons Calpe Suite Civil Marriage</a>
                </Grid >
                <Grid xs = {12} sm = {3}>
                    <a style = {{fontFamily: 'Raleway', color: "#8d6235"}} href="https://www.hourweddings.com/gibraltar-rock-hotel-wedding-ceremony-packages" target="_blank">Rock Hotel Civil Marriage</a>
                </Grid>
                <Grid xs = {12} sm = {3}>
                    <a style = {{fontFamily: 'Raleway', color: "#8d6235"}} href="https://www.hourweddings.com/sunborn-hotel-wedding" target="_blank">Sunborn Hotel Civil Marriage</a>
                </Grid>
            </Grid>

            <Grid container style = {{position: "relative", margin: "30px"}}>
                <Grid xs = {12} sm = {3}>
                    <a style = {{fontFamily: 'Raleway', color: "#8d6235"}} href="https://www.hourweddings.com/gibraltar-registry-office-wedding-package" target="_blank">Elopement - Registry Office</a>
                </Grid>
                <Grid xs = {12} sm = {3}>
                    <a style = {{fontFamily: 'Raleway', color: "#8d6235"}} href="https://www.hourweddings.com/gibraltar-marina-wedding-package" target="_blank">The Marina Civil Marriage</a>
                </Grid >
                <Grid xs = {12} sm = {3}>
                    <a style = {{fontFamily: 'Raleway', color: "#8d6235"}} href="https://www.hourweddings.com/gibraltar-st-michaels-cave-wedding-ceremony-packages" target="_blank">St Michael's Cave Civil Marriage</a>
                </Grid>
                <Grid xs = {12} sm = {3}>
                    <a style = {{fontFamily: 'Raleway', color: "#8d6235"}} href="https://www.hourweddings.com/gibraltar-caleta-hotel-wedding-ceremony-packages" target="_blank">Caleta Hotel Civil Marriage</a>
                </Grid>
            </Grid>

            <Grid container style = {{position: "relative", margin: "30px"}}>
                <Grid xs = {12} sm = {2}>
                    <a style = {{fontFamily: 'Raleway', color: "#8d6235"}} href="https://www.hourweddings.com/terms-and-conditions" target="_blank">Terms and Conditions</a>
                </Grid>
                <Grid xs = {12} sm = {2}>
                    <a style = {{fontFamily: 'Raleway', color: "#8d6235"}} href="https://www.hourweddings.com/legal-requirements" target="_blank">Legal Requirements</a>
                    <Link style = {{fontFamily: 'Raleway', color: "#8d6235"}} to = "./Legal Requirements"></Link>
                </Grid >
                <Grid xs = {12} sm = {2}>
                    <a style = {{fontFamily: 'Raleway', color: "#8d6235"}} href="https://www.hourweddings.com/cookie-policy" target="_blank">Cookie Policy</a>
                </Grid>
                <Grid xs = {12} sm = {2}>
                    <a style = {{fontFamily: 'Raleway', color: "#8d6235"}} href="https://www.hourweddings.com/privacy-policy" target="_blank">Privacy Policy</a>
                </Grid>
                <Grid xs = {12} sm = {2}>
                    <a style = {{fontFamily: 'Raleway', color: "#8d6235"}} href="https://www.hourweddings.com/work-with-us" target="_blank">Work with us</a>
                </Grid>
                <Grid xs = {12} sm = {2}>
                    <a style = {{fontFamily: 'Raleway', color: "#8d6235"}} href="https://www.hourweddings.com/get-married-in-gibraltar" target="_blank">Get married in Gibraltar</a>
                </Grid>
            </Grid>

            <Grid>
                <Grid container style = {{position: "relative", marginTop: "30px", marginBottom: "20px"}}>
                <Grid style = {{textAlign: "center"}} xs = {12} sm = {4}>
                    <Typography style = {{fontFamily: 'Raleway'}}variant = "p"><b>Hour Weddings 5 Convent Place Gibraltar GX11 1 AA</b></Typography>
                </Grid>
                <Grid style = {{textAlign: "center"}} xs = {12} sm = {4}>
                    <Typography style = {{fontFamily: 'Raleway'}} variant = "p"><b>info@hourweddings.com  |  (+350) 5800  9685</b></Typography>
                </Grid>
                </Grid>
                <Grid style = {{textAlign: "right"}}>
                    <IconButton aria-label="instagram" href="https://www.instagram.com/hour_weddings/" target = "_blank" color="secondary"><InstagramIcon/></IconButton>
                    <IconButton aria-label="facebook" href="https://www.facebook.com/HourWeddingsGibraltar" target = "_blank" color="primary"><FacebookIcon/></IconButton>
                    <IconButton aria-label="pintrest" href="https://www.pinterest.es/HourWeddings/" target = "_blank" color="secondary"><PinterestIcon/></IconButton>
                    <IconButton aria-label="youtube" href="https://www.youtube.com/channel/UCMnjZIkDdXtCnYBaHTUChJA" target = "_blank" color="secondary"><YouTubeIcon/></IconButton>
                    <IconButton aria-label="linkedin" href="https://www.linkedin.com/company/11459021/" target = "_blank" color="primary"><LinkedInIcon/></IconButton>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Footer