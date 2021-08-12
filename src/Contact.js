import React, {useState} from 'react' 
import {Container, Grid, Typography, TextField, Paper, Button} from "@material-ui/core"
import DateFnsUtils from '@date-io/date-fns'
// import ReCAPTCHA from "react-google-recaptcha"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  MuiPickersUtilsProvider,
//   KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import Footer from './Footer'

const Contact = (props) => {
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [selectedDate, setSelectedDate] = React.useState(new Date())
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [numberOfGuests, setNumberOfGuests] = useState('')
    const [userAddress, setUserAddress] = useState('')
    const [preferredVenues, setPreferredVenues] = useState('')
    const [aboutUs, setAboutUs] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const [termsAndConditions, setTermsAndConditions] = useState(false)

    const errors = {}
    
    const select1 = [   "Botanic Gradens - The Band Stand",
                        "Botanic Gradens - The Dell",
                        "Botanic Gradens - The Theater",
                        "Calita Hotel - Large Terrace",
                        "Mons Calpe Suite",
                        "Registry Office",
                        "Botanic Gradens - The Band Stand" ]

    const select2 = [   "Facebook",
                        "Instagram",
                        "Google Search",
                        "Word of Mouth",
                        "Referral",
                        "Other",
                     ]

    const handleCustomerName = (e) => {
        setFirstName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleDateChange = (date) => {
    setSelectedDate(date);
    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
    }
    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }
    const handleGuests = (e) => {
        setNumberOfGuests(e.target.value)
    }

    const handleAddressChange = (e) => {
        setUserAddress(e.target.value)
    }

    const handleChecked = (e) => {
        setTermsAndConditions(e.target.checked)
    }

    const handlePrefferedValueChange = (e) => {
        setPreferredVenues(e.target.value)
    }

    const handleAboutUsChange = (e) => {
        setAboutUs(e.target.value)
    }
    const runValidations = () => {
        if(firstName.trim().length === 0){
            errors.firstName = 'First Name cannot be blank'
        }
        if(lastName.trim().length === 0){
            errors.lastName = 'Last Name cannot be blank'
        }
        if(email.trim().length === 0){
            errors.email = 'Email cannot be blank'
        }
        if(phoneNumber.trim().length === 0){
            errors.phoneNumber = 'Phone Number cannot be blank'
        }
        if(phoneNumber.trim().lenght < 10){
            errors.phoneNumber = 'Phone number should contain 10 numbers'
        }
        if(userAddress.trim().length === 0){
            errors.userAddress = 'User Address cannot be blank'
        }
        if(numberOfGuests.trim().length === 0){
            errors.numberOfGuests = 'Number Of Guests cannot be blank'
        }
        if(!termsAndConditions){
            errors.termsAndConditions = 'Agree the Terms And Conditions'
        }
        if(preferredVenues.trim().length === 0){
            errors.preferredVenues = "Pleace select an option"
        }
        if(aboutUs.trim().length === 0){
            errors.aboutUs = "Pleace select an option"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()
        if(Object.keys(errors).length === 0){
            setFormErrors({})
            const formData = {
                        selectedDate: selectedDate,
                        firstName: firstName,
                        lastName: lastName,
                        email:email,
                        phoneNumber: phoneNumber,
                        userAddress: userAddress,
                        numberOfGuests: numberOfGuests,
                        preferredVenues: preferredVenues, 
                        aboutUs: aboutUs, 
                        termsAndConditions: termsAndConditions
                    }
                    console.log(formData)

                    setFirstName('')
                    setEmail('')
                    setSelectedDate('')
                    setLastName('')
                    setPhoneNumber('')
                    setNumberOfGuests('')
                    setUserAddress('')
                    setUserAddress('')
                    setPreferredVenues('')
        }else{
            setFormErrors(errors)
        }
        
    }

    // const onReCaptchaChange = (value) => {
    //     console.log("Captcha value:", value);
    // }
    // const classes = useStyles();
    return (
        <Container>
            <Grid style = {{padding: "10px", textAlign: "center"}}>
                            <img alt="image" width= "100%" height= "50%" src="https://images.squarespace-cdn.com/content/v1/5a5683a5dc2b4a49e4390ac4/1517179308016-2HKEXOA7TBDMUI0ZC3IB/ke17ZwdGBToddI8pDm48kDUSOZrGGiDw9LJ2a--zVyEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dhIgyEKOlH-TQMRrDT1fOHawHNjZL4FSPfEFxmhxQI6FCjLISwBs8eEdxAxTptZAUg/Screen+Shot+2018-01-25+at+13.26.54.png?format=2500w"/>
            </Grid>
            <Grid container>
                <Grid xs={12} sm={6}>
                <Paper style = {{position: "relative", padding: 20 }}>
                    <Typography style = {{fontFamily: 'Raleway'}} variant = "h6"><b>Contact Us</b></Typography>
                    <Typography style = {{fontFamily: 'Raleway'}} variant = "p">
                        If you would like to receive prices on our services, 
                        or have any queries, please fill in this form and one
                        of our amazing team members will get back to you shortly! <br/>
                        We look forward to hearing from you ❤
                    </Typography>
                    <Typography style = {{fontFamily: 'Raleway'}} variant = "p">
                    <ul>
                        <li><b>Email:</b> info@hourweddings.com</li>
                        <li><b>Phone number:</b> +350 200 71335</li>
                        <li><b>WhatsApp contact:</b> +350 58009685</li>
                        <li><b>UK redirect number:</b> +44 20 3239 0184</li>
                    </ul>
                    </Typography>
                    <Typography style = {{fontFamily: 'Raleway'}} variant = "p"><i><b>Feel free to contact us for a free, no obligation quote!</b></i><br/>
                                <i><b>We are available on WhatsApp we will also do our best to get to emails within 24 hours.</b></i>
                    </Typography>
                    <br/>
                    <Typography style = {{fontFamily: 'Raleway'}} variant = "p"><b>Wedding Insurance - Please click here - </b><b>COVER MY WEDDING</b></Typography><br/>
                    <Typography style = {{fontFamily: 'Raleway'}} variant = "p"><b>If you’d like to be financially protected against unforeseen hitches, we’re offering peace of mind through UK insurance provider.</b> </Typography>
                </Paper>
                </Grid>
                <Grid xs = {12} sm = {6}>
                    <form onSubmit = {handleSubmit}>
                        <Paper>
                        <Grid container style = {{position: "relative", padding: 20 }}>
                        <Grid xs = {12}>
                            <TextField label = "First Name" type = 'text' value = {firstName} onChange = {handleCustomerName} placeholder = 'First Name' fullWidth/>
                            {formErrors.firstName && <span style = {{color: "red"}}>{formErrors.firstName}</span>}

                            <TextField label = "Last Name" type = 'text' value = {lastName} onChange = {handleLastName} placeholder = 'Last Name' fullWidth/>
                            {formErrors.lastName && <span style = {{color: "red"}}>{formErrors.lastName}</span>}

                            <TextField label = "Email" type = 'text' value = {email} onChange = {handleEmailChange} placeholder = 'Email' fullWidth/>
                            {formErrors.email && <span style = {{color: "red"}}>{formErrors.email}</span>}
                            <TextField label = "Phone Number" type = 'text' value = {phoneNumber} onChange = {handlePhoneNumber} placeholder = 'Phone Number' fullWidth/>
                            {formErrors.phoneNumber && <span style = {{color: "red"}}>{formErrors.phoneNumber}</span>}
                            
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Date"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        fullWidth/>
                                    </Grid>
                                </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid xs = {12} >
                            <TextField label = "Number Of Guests" type = 'text' value = {numberOfGuests} onChange = {handleGuests} placeholder = 'Number of Guests' fullWidth/>
                            {formErrors.numberOfGuests && <span style = {{color: "red"}}>{formErrors.numberOfGuests}</span>}
                        </Grid>
                        </Grid>
                        <Grid style = {{position: "relative", padding: 20 }}>
                            <Typography>Choose Your Preferred Venues</Typography>
                                    
                                    <select className = "form-control" onChange = {handlePrefferedValueChange}>
                                        <option value={preferredVenues} >Please Select</option>
                                        {select1.map((ele, i) => {
                                            return <option key={i} value={ele}>{ele}</option>
                                        })}
                                    </select>
                                    <br/>
                                    {formErrors.preferredVenues && <span style = {{color: "red"}}>{formErrors.preferredVenues}</span>}
                        </Grid>
                        <Grid style = {{position: "relative", padding: 20 }}>
                        <TextField style = {{position: "relative", bottom: 40 }} label = "address" type = 'text' value = {userAddress} onChange = {handleAddressChange} placeholder = 'address' multiline fullWidth/>
                        {formErrors.userAddress && <span style = {{color: "red"}}>{formErrors.userAddress}</span>}    
                            
                            <Typography>How did you hear about us?*</Typography>
                            
                                    <select className = "form-control" onChange = {handleAboutUsChange}>
                                        <option value={aboutUs}>Please Select</option>
                                        {select2.map((ele, i) => {
                                            return <option key={i} value={ele}>{ele}</option>
                                        })}
                                    </select>
                                    <br/>
                                    {formErrors.aboutUs && <span style = {{color: "red"}}>{formErrors.aboutUs}</span>}
                                    </Grid>
                        <Grid style = {{position: "relative", padding: 20 }}>
                            <Typography variant="p">Hour Weddings & Events is committed to protecting 
                                and respecting your privacy, and we’ll only use your personal 
                                information to administer your account and to provide the
                                products and services you requested from us. From time to time,
                                we would like to contact you about our products and services,
                                as well as other content that may be of interest to you. 
                                If you consent to us contacting you for this purpose, 
                                please tick below to say how you would like us to contact you:
                                </Typography>
                        </Grid>
                        <Grid style = {{position: "relative", padding: 20 }}>
                            <Typography varient = "p">
                                <input type = "checkbox" checked = {termsAndConditions} onChange = {handleChecked}/>
                                I agree to receive other communications from Hour Weddings & Events.</Typography><br/>
                                {formErrors.termsAndConditions && <span style = {{color: "red"}}>{formErrors.termsAndConditions}</span>}
                            
                        </Grid>
                        <Grid style = {{position: "relative", padding: 20 }}>
                            <Typography varient = "p">You can unsubscribe from these communications at any time. 
                                        For more information on how to unsubscribe, our privacy practices,
                                        and how we are committed to protecting and respecting your privacy, 
                                        please review our Privacy Policy.<br/>
                                        By clicking submit below, you consent to allow Hour Weddings & Events 
                                        to store and process the personal information submitted above to 
                                        provide you the content requested.
                            </Typography>
                        </Grid>
                        <Grid>
                              {/* <ReCAPTCHA
                                    sitekey="6Lcgk50aAAAAAMTRIt7CEgpIMFHehPLVPMsbCOqa"
                                    onChange={onReCaptchaChange}
                                /> */}
                        </Grid>
                        <Grid style = {{position: "relative", padding: 20, marginBottom: "50px" }}>
                            <Button type = "submit" variant="contained" color="secondary">Submit</Button>
                        </Grid>
                    </Paper>
                    </form>
                </Grid>
            </Grid>
            <hr/>
                <Grid>
                    <Footer/>
                </Grid>
        </Container>
    )
}
export default Contact
