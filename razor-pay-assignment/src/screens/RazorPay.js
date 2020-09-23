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

const styles = theme => ({

    formControl: {
        margin: theme.spacing(1),
        minWidth: 240,
        maxWidth: 240

    }
});

class RazorPay extends Component {
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
                                <Col className="column2"><Input id="pan"  onChange={this.panChangeHandler}></Input></Col>
                            </Row>
                            <Row>
                                <Col className="column1"><InputLabel htmlFor="donationAmt" >Donation Amount :</InputLabel></Col>
                                <Col className="column2"><Input id="donationAmt"  onChange={this.donationAmtChangeHandler}></Input></Col>
                            </Row>

                        </Container>

                    </CardContent >
                </Card >

            </div >
        );
    }
}

export default withStyles(styles)(RazorPay);