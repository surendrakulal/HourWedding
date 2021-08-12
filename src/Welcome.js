import React from 'react'
import {Container, Grid, Paper, Typography} from '@material-ui/core'
import YouTube from 'react-youtube'
import Footer from './Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Welcome = (props) => {

    const opts = {
      height: '300',
      width: '90%',
      playerVars: {
        autoplay: 0,
      },
    };

    return (
        
        <Container>
            
            <Grid>
            <Grid style = {{textAlign: "center"}}>
                <Typography style = {{fontFamily: 'Raleway', marginBottom: "30px", color: "#8d6235"}} variant = "h3"><b>Luxury Wedding Planners</b> </Typography>
                <Typography style = {{fontFamily: 'Raleway'}} variant = "h5"><b>Your Gibraltar & Southern Spain Wedding Destination Experts At Your Service, Because Every Detail Matters!</b></Typography>
            </Grid>
            <hr/>
            <Grid>
                <Grid style = {{textAlign: "center"}}>
                <Typography style = {{fontFamily: 'Raleway', marginBottom: "30px", color: "#8d6235"}} variant = "h4"><b>What We Do</b></Typography>
                </Grid>
                <Grid container>
                    <Grid xs = {4}>
                        <Grid>
                            <img width= "100%" height= "50%" alt = "its an img" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1587299160056-KHF44DZYVD67OHV3T488/ke17ZwdGBToddI8pDm48kFUn9pnKE7U3Et_2d17qlfFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI7PwjQt7MubgtF_8tQwOnTRN9gaNydCGswOihgvnFcQIKMshLAGzx4R3EDFOm1kBS/Hour+Wedding+Gibraltar+%26+Spain+-++Decor+Stylist?format=500w"/>
                        </Grid>
                        <Grid>
                            <img width= "100%" height= "50%" alt = "its an img" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1587297771278-VVCKI300F20P3O5XJSO9/ke17ZwdGBToddI8pDm48kLEWUpX2Df9UTCQVlZOqBf5Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIMV0tKlwq8KYBG9pFb6xMBRrfANPSF9IkSf6t0wuI3jsKMshLAGzx4R3EDFOm1kBS/Gibraltar+Luxury+Wedding+Planners+%26+Stylists+in+Gibraltar+%26+Spain?format=500w"/>
                        </Grid>
                    </Grid>
                    <Grid style = {{textAlign: "center"}} xs = {4}>
                        <img width= "80%%" height= "100%"alt="its an img" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1588863518222-YK17WVBYN0IL4IVZ2LJQ/ke17ZwdGBToddI8pDm48kJme_vyRngthM-lqQfhlIH1Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHgWyuYKVyGKE-9HoVq2NUPJx1jqOlAvv7NferAwL6AaCb8BodarTVrzIWCp72ioWw/Gibraltar+Luxury+Wedding+Planners+%26+Stylists+in+Gibraltar+%26+Spain+-+Stylists+and+Decorators?format=500w"/>
                    </Grid>
                    <Grid xs = {4}>
                        <Grid>
                            <img width= "100%" height= "50%" alt="its image" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1588863389611-81O7Q4P6J066UY7CMZJ9/ke17ZwdGBToddI8pDm48kF7Fwkidp-guW-TDT3ncT0FZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGfgIDRxFLnoKOyWFIiEbDxt5X-Qqk9WiM7G72iIfyvoib8BodarTVrzIWCp72ioWw/Gibraltar+Luxury+Wedding+Planners+%26+Stylists+in+Gibraltar+%26+Spain?format=500w"/>
                        </Grid>
                        <Grid>
                            <img width= "100%" height= "50%" alt="its an image" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1588863064571-7IQDSUU7D5SQ2KG3BKSS/ke17ZwdGBToddI8pDm48kF7Fwkidp-guW-TDT3ncT0FZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGfgIDRxFLnoKOyWFIiEbDxt5X-Qqk9WiM7G72iIfyvoib8BodarTVrzIWCp72ioWw/Gibraltar+Luxury+Wedding+Planners+%26+Stylists+in+Gibraltar+%26+Spain+-+Stylists+and+Decorators?format=500w"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
            <hr/>
            <Grid>
                <Grid style = {{textAlign: "center"}}>
                    <Typography style = {{fontFamily: 'Raleway', marginBottom: "30px", color: "#8d6235"}} variant = "h4"><b>Who We Are</b></Typography>
                    <Typography style = {{fontFamily: 'Raleway'}} variant = "h5"><b>A stylish wedding begins long before the guests arrive. It begins with masterful planning.</b></Typography>
                </Grid>
                <br/>
                <Grid container directions = "row">
                    <Grid xs={12} sm={6}>
                        <Typography style = {{fontFamily: 'Raleway'}} variant = "p">
                        <b>Hello!</b><br/>
                        <Grid>
                            <b>We were expecting you… now you can sit back and relax.</b> 
                        </Grid>
                        <br/>
                        <Grid>
                            You have come to the right place. We like to think of ourselves as passionate, professional, creative and fun to work with when we provide you with a personalised service.
                        </Grid>
                        <br/>
                         <Grid>
                            Your dynamic team of wedding planners & stylists based in Gibraltar, speaking English and Spanish. Gibraltar is our home ground, but we have also organised weddings in the Caribbean, the Canary Islands & Southern Spain.
                         </Grid>
                        <br/>
                        <Grid>
                        We run our business from a proper office environment and have been doing so for the last 14 years. We have been trusted to organise the wedding of the Chief Minister of Gibraltar, amongst other high profile clients from all over the world. We were also the chosen wedding planner to participate in the UK Television Program “Britain In the Sun”.<br/>
                        </Grid>
                        <br/>
                        Our wedding team ethos is: every wedding should be unique and utterly distinctive, no matter how extravagant or intimate. Therefore, we value the quality of our weddings over quantity. 
                        </Typography>
                    </Grid>
                    <Grid style = {{position: "relative", left: 2}} xs={12} sm={6}>
                        <Paper>
                        <Grid style = {{padding: "10px"}}>
                            <img width= "100%" height= "50%" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1601906542753-Q3C7U1631ZB2Q86TO2DC/ke17ZwdGBToddI8pDm48kLFVq5-IJ0Devys0zoYmbpVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpylYp7crNoKsUMo9HVrU5vzjFAPlsIMHJCN9-q-RT3QihE8oD7bAssv0T-tJiMMkR8/Gibraltar%2BLuxury%2BWedding%2BPlanners%2B%2526%2BStylists%2Bin%2BGibraltar%2B%2526%2BSpain?format=1000w"/>
                        </Grid>
                        <Grid style = {{padding: "10px"}}>
                        <Typography style = {{fontFamily: 'Raleway'}} variant = "p">
                            OUR TEAM - LEFT TO RIGHT - SARA REYES, BEA LOPEZ, SARA REYES, PABLO AMOROS & MONICA COUMBE<br/>
                            <b>We are your Gibraltar wedding team of four that have your back!</b>
                            <br/>
                            <b>Monica -</b> CEO and founder<br/>
                            <b>Beatriz -</b> In house wedding stylist & decorator<br/>
                            <b>Sara -</b> Senior wedding planner & organiser<br/>
                            <b>Pablo -</b> Administration & organiser<br/>
                        </Typography>
                        </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <hr/>
                <Grid style = {{position: "relative", top:10}}>
                    <Grid style = {{textAlign: "center"}}>
                        <Typography style = {{fontFamily: 'Raleway', marginBottom: "30px", color: "#8d6235"}} variant = "h4"><b>How We Do It</b></Typography>
                        <Typography style = {{fontFamily: 'Raleway'}} variant = "h5"><b>Every love story is beautiful, but yours should be unique.</b></Typography>
                    </Grid>
                    <Grid container style = {{position: "relative", top:10}}>
                        <Grid xs={12} sm={6}>
                            <YouTube videoId="5Bg1OR_OIZg" opts={opts}  />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <Typography style = {{fontFamily: 'Raleway'}} >
                                <Typography style = {{fontFamily: 'Raleway'}}> would love to hear about all your ideas and plans! So, I would like to offer you a <b>FREE first consultation</b> so we have the opportunity to connect and make your wedding a wonderful and enjoyable experience!</Typography>
                                <br/>
                                <Typography style = {{fontFamily: 'Raleway'}}>We offer a variety of services, from venue sourcing, coordination of the day, decoration hire, catering, entertainment and much more.</Typography>
                                <br/>
                                <Typography style = {{fontFamily: 'Raleway'}}>We have an amazing team of wedding planners who are passionate and dedicated to make great things happen.</Typography>
                                <br/>
                                <Typography style = {{fontFamily: 'Raleway'}}>With love always!</Typography> 
                                <br/>
                                <b>Monica</b>
                                <br/>
                            </Typography>
                        </Grid>
                    </Grid>
                    <hr style = {{position: "relative", top:10}}/>
                </Grid>

                <Grid style = {{textAlign: "center", position: "relative", top:20}} container directions = "row">
                    
                    <Grid xs={12} sm={2}>
                        <img width= "70%" height= "100%" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1585844080515-311VQ6RSHR2TBVU7E55K/ke17ZwdGBToddI8pDm48kODEHMGUBRgRRplOmqRomK1Zw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Rb66VC8y5UmDKESC3gpGyXuuE80dFkeX9PanWgM3V4qRJePadRz66WmX0L5eMAEew/https%3A%2F%2Fwww.weddingwire.com%2Fbiz%2Fhour-weddings-gibraltar%2F65cbe5899340b2c7.html?format=300w"/>
                    </Grid>
                    <Grid xs={12} sm={2}>
                        <img width= "70%" height= "100%" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1585844102660-9761Z7WTD11BFEGTD2L8/ke17ZwdGBToddI8pDm48kODEHMGUBRgRRplOmqRomK1Zw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Rb66VC8y5UmDKESC3gpGyXuuE80dFkeX9PanWgM3V4qRJePadRz66WmX0L5eMAEew/2016-en_US.pnghttps%3A%2F%2Fwww.weddingwire.com%2Fbiz%2Fhour-weddings-gibraltar%2F65cbe5899340b2c7.html?format=300w"/>
                    </Grid>
                    <Grid xs={12} sm={2}>
                        <img width= "70%" height= "100%" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1585844944932-ZDFIAXH817K5CV11F51H/ke17ZwdGBToddI8pDm48kGifSodES3zPVkbBfms6E6VZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxECfn0Lqy2_ki_HPaXdE5tSXerfeOuyNpPEoTSSF0SfE_tttDEJGwyHLiPrh9SaMc/Hour+Weddings+Gibraltar+-+DWHA+Gold+Award+-+Rosette+Nominee+2017?format=300w"/>
                    </Grid>
                    <Grid xs={12} sm={2}>
                        <img width= "70%" height= "100%" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1601967708279-TBMDZ06J3IFG8X4JGUP4/ke17ZwdGBToddI8pDm48kAyFN_PxuhbkEOop25RFcElZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7aKHqy_Pq5SZUkyxONRRLX6JCNxf1gI9jf5O6mLXWUfVqw6H5WbwqxnWbqqQ5E0O8A/Visit+Gibraltar+-+Hour+Weddings+Luxury+Wedding+Planner?format=300w"/>
                    </Grid>
                    <Grid xs={12} sm={2}>
                        <img width= "70%" height= "100%" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1601967440280-EGP52W8EPW8G2WQCWXCV/ke17ZwdGBToddI8pDm48kGahETxfD1Bds-No0FOnTHVZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEIC9LagiFdwP9Kl6umUgE2jOOtF7_aSteYDicSBwX7pxur-lC0WofN0YB1wFg-ZW0/Channel%2B5%2BGibraltar%2BBritain%2Bin%2Bthe%2BSun%2B-%2BWeddings%2Bin%2BGibraltar?format=300w"/>
                    </Grid>
                    <Grid xs={12} sm={2}>
                        <img width= "70%" height= "100%" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1601906803721-CQ0IN5UDG7I35VC00ZQY/ke17ZwdGBToddI8pDm48kCpzlbaAgDOvmcrnsEWlWJoUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcVlyuJQfoPDVItoHphofWVuP07qUgBdZdQa_9ikc5CU6pLtExyA8H8evPLj_8lrV2/antena3+hour+weddings+gibraltar.jpg?format=300w"/>
                    </Grid>
                </Grid>
                <hr style = {{position: "relative", top:30}}/>
                <Grid style = {{position: "relative", top:30}}>
                    <Typography style = {{fontFamily: 'Raleway', marginBottom: "20px", color: "#8d6235"}} variant = "h4"><b>Gallery</b></Typography>
                </Grid>
                <Grid style = {{textAlign: "center", position: "relative", top:40, marginBottom: "50px"}} container directions = "col">
                    <Grid xs={12} sm={3}>
                        <img width= "90%" height= "90%" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1615735943658-3CY6VY1YKMNW0DJPXYEK/ke17ZwdGBToddI8pDm48kIQSZJz3qo2ZUQ1Byhx-bmlZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEYSbTLVrMKoTu8ykZ_i1Qemlfw75o-kHAt43pJjhwqri_3v7VIOCPBGCdRpGO0bts/image-asset.jpeg?format=500w"/>
                    </Grid>
                    <Grid xs={12} sm={3}>
                        <img width= "90%" height= "90%" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1612864928232-WMY2CJMI91REZLLHGXMD/ke17ZwdGBToddI8pDm48kHUQvTcCciLVNXnU1yRCLBYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z23HC1IKUJrsnnvq08y71Yo_WojNm8Kidje2A0UbgAD186liCGkj4dr9PBmyqqYlee/image-asset.jpeg?format=500w"/>
                    </Grid>
                    <Grid xs={12} sm={3}>
                        <img width= "90%" height= "90%" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1612864928232-5KM090IU7XAXZG3XSNI9/ke17ZwdGBToddI8pDm48kPzhT8k24h0P5Qq4Hdv3mON7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmW5SZw0zY0wEgct1jJcv4nLj8K6ahMLux0pG4SoXnifTjBdB1NTG8YWtVJWl_YxVF/image-asset.jpeg?format=500w"/>
                    </Grid>
                    <Grid xs={12} sm={3}>
                        <img width= "90%" height= "90%" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1612864928232-EUOP27MPQBJ9XMZ8XNJ3/ke17ZwdGBToddI8pDm48kDcN6XZJoCUT0Cc0U8-5arhZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI432gCOfKUDVeI_5FUaRGxno7ll7sYFMzH2ck3bDTo0MKMshLAGzx4R3EDFOm1kBS/image-asset.jpeg?format=750w"/>
                    </Grid>
                    <Grid xs={12} sm={3}>
                        <img width= "90%" height= "90%" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1612864928232-C0ACHROJGQVZ90K5LXVQ/ke17ZwdGBToddI8pDm48kPzhT8k24h0P5Qq4Hdv3mON7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmW5SZw0zY0wEgct1jJcv4nLj8K6ahMLux0pG4SoXnifTjBdB1NTG8YWtVJWl_YxVF/image-asset.jpeg?format=500w"/>
                    </Grid>
                    <Grid xs={12} sm={3}>
                        <img width= "90%" height= "90%" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1612864928232-H86VAZSE63I328H8DOGO/ke17ZwdGBToddI8pDm48kJ41jCws8rLvrY3Ifo9Hhp4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKce6ctYZGPQ_JMsv6wm6kzqknVfM34sRNB6i5zQMXvZ4D2lZFS3bK8SGi-aI_jNmdm/image-asset.jpeg?format=750w"/>
                    </Grid>
                    <Grid xs={12} sm={3}>
                        <img width= "90%" height= "90%" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1612864928232-WK1INLHB214ZU0MOHJFF/ke17ZwdGBToddI8pDm48kN85PdvfgSqtvR2STvI-e1B7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmnhdptcuU1alwky_sWs380qsQQRzvkXfmcbhoRVEU-FJJQJ-PUXujCr2gOSRet4Gw/image-asset.jpeg?format=500w"/>
                    </Grid>
                    <Grid xs={12} sm={3}>
                        <img width= "90%" height= "90%" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1614725916983-O22FSRO7GA48HDLI034C/ke17ZwdGBToddI8pDm48kOlOeRgIT3usMciHb37CL8AUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcLuh2Zm7qnX1IlcR0XW47UrOhURRy0WkqfGN2MMozQasCbcIgYELmJ0cKQ8X4Pjb_/image-asset.jpeg?format=750w"/>
                    </Grid>
                    <Grid xs={12} sm={3}>
                        <img width= "90%" height= "90%" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1616474180807-BSSJ5BGT7KBWE38G82HA/ke17ZwdGBToddI8pDm48kPLq0fQhj_hv3yKmdQF_15kUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcgdcNXLRxls76ofa7F6ClnnWs73rCTbzKGb8ByhQJiktLyP20T-cuLvEPm463CRhd/image-asset.jpeg?format=750w"/>
                    </Grid>
                    <Grid xs={12} sm={3}>
                        <img width= "90%" height= "90%" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1612864928232-BTD229YQ07B8TL2KHXN7/ke17ZwdGBToddI8pDm48kMhO9qZ0X8KmRt4airD-0Ld7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmUJhYbF90H-5_X8RF95sdnokkyzJ1SnELM3p_1TwKLrz3j1im1g9rj6yQekuNvrJC/image-asset.jpeg?format=500w"/>
                    </Grid>
                    <Grid xs={12} sm={3}>
                        <img width= "90%" height= "90%" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1612864928232-DK5QR55913KHF1HS93US/ke17ZwdGBToddI8pDm48kN85PdvfgSqtvR2STvI-e1B7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmnhdptcuU1alwky_sWs380qsQQRzvkXfmcbhoRVEU-FJJQJ-PUXujCr2gOSRet4Gw/image-asset.jpeg?format=500w"/>
                    </Grid>
                    <Grid xs={12} sm={3}>
                        <img width= "90%" height= "90%" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1612864928232-0HWPBVTIP9AAMOAMNAUC/ke17ZwdGBToddI8pDm48kPLq0fQhj_hv3yKmdQF_15kUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcgdcNXLRxls76ofa7F6ClnnWs73rCTbzKGb8ByhQJiktLyP20T-cuLvEPm463CRhd/image-asset.jpeg?format=750w"/>
                    </Grid>
                </Grid>
            </Grid>
            <hr/>
                <Grid>
                    <Footer/>
                </Grid>
        </Container>
    )
}
export default Welcome