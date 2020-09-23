import React, { Component } from 'react';
import './RazorPay.css';
import Header from '../common/Header';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { Container, Row, Col } from 'reactstrap';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';


const styles = theme => ({

    formControl: {
        margin: theme.spacing(1),
        minWidth: 240,
        maxWidth: 240

    }
});

class RazorPay extends Component {
    constructor() {
        super();
        this.state = {
            donorName: "",
            emailId: "",
            mobileNum: "",
            dob: "",
            pan: "",
            donationAmt: "",
            radioValue: "",
            openModal: false

        }
    }
    donorNameChangeHandler = (e) => {
        this.setState({ donorName: e.target.value });
    }
    emailIdChangeHandler = (e) => {
        this.setState({ emailId: e.target.value });
    }
    mobileNumChangeHandler = (e) => {
        this.setState({ mobileNum: e.target.value });
    }
    dobChangeHandler = (e) => {
        this.setState({ dob: e.target.value });
    }
    panChangeHandler = (e) => {
        this.setState({ pan: e.target.value });
    }
    donationAmtChangeHandler = (e) => {
        this.setState({ donationAmt: e.target.value });
    }
    radioValueChangeHandler = (e) => {
        this.setState({ radioValue: e.target.value });
    }
    paymentHandler = (e) => {
        alert('Payment Successful !!');
    }
    ccPayHandler =(e) =>{
        this.setState({ openModal:true});
    }
   
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <Card className="cardStyle" style={{ border: 'medium solid #696969' }} >
                    <CardContent>
                        <FormControl className={classes.formControl}>
                            <Typography variant="h5" color="textSecondary" style={{ color: '#1976d2' }} >
                                DONOR DETAILS:
                                    </Typography>
                        </FormControl>
                        <Container>
                            <Row>
                                <Col className="column1"><InputLabel htmlFor="donorName" >Donor Name :</InputLabel></Col>
                                <Col className="column2"><Input id="donorName" onChange={this.donorNameChangeHandler}></Input></Col>
                            </Row>
                            <Row>
                                <Col className="column1"><InputLabel htmlFor="emailId" >Email Id :</InputLabel></Col>
                                <Col className="column2"><Input id="emailId" type="email" onChange={this.emailIdChangeHandler}></Input></Col>
                            </Row>
                            <Row>
                                <Col className="column1"><InputLabel htmlFor="mobileNum" >Mobile No :</InputLabel></Col>
                                <Col className="column2"><Input id="mobileNum" type="tel" onChange={this.mobileNumChangeHandler}></Input></Col>
                            </Row>
                            <Row>
                                <Col className="column1"><InputLabel htmlFor="dob" >DOB :</InputLabel></Col>
                                <Col className="column2"><Input id="dob" type="date" onChange={this.dobChangeHandler}></Input></Col>
                            </Row>
                            <Row>
                                <Col className="column1"><InputLabel htmlFor="pan" >PAN No :</InputLabel></Col>
                                <Col className="column2"><Input id="pan" onChange={this.panChangeHandler}></Input></Col>
                            </Row>
                            <Row>
                                <Col className="column1"><InputLabel htmlFor="donationAmt" >Donation Amount :</InputLabel></Col>
                                <Col className="column2"><Input id="donationAmt" onChange={this.donationAmtChangeHandler}></Input></Col>
                            </Row>
                            <Row>
                                <Col className="column1"><InputLabel htmlFor="paymentMethod" >Payment Method :</InputLabel></Col>
                                <Col className="column2">
                                    <RadioGroup aria-label="paymentType" name="type" value={this.state.radioValue} onChange={this.radioValueChangeHandler}>
                                        <FormControlLabel value="1" control={<Radio color="primary" />} label="Credit Card" onClick={this.ccPayHandler} />
                                        <Modal
                                            open={this.openModalHandler}
                                            onClose={this.closeModalHandler}
                                            
                                        >
                                            <h1>Content to design Credit Card payment Goes here</h1>
                                        </Modal>
                                        <FormControlLabel value="2" control={<Radio color="primary" />} label="Debit Card" />
                                        <FormControlLabel value="3" control={<Radio color="primary" />} label="Net Banking" />
                                        <FormControlLabel value="4" control={<Radio color="primary" />} label="UPI" />
                                        <FormControlLabel value="5" control={<Radio color="primary" />} label="NEFT/RTGS" />

                                    </RadioGroup>
                                </Col>
                            </Row>

                        </Container>
                        <Button className="paybtn" variant="contained" color="primary" onClick={this.paymentHandler}>Pay</Button>

                    </CardContent >
                </Card >

            </div >
        );
    }
}

export default withStyles(styles)(RazorPay);