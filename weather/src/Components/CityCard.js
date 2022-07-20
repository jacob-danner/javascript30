import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export const CityCard = (info) => {
    const {temp_f, condition, humidity, wind_mph} = info.info.current
    const {name} = (info.info.location)

    return (
        <>
            <Card style={{width:'33%', height:'40%%'}}>
                <Card.Header className='text-center'>{name}</Card.Header>
                <Container style={{height:'100%'}}>
                    <Row style={{height:'60%'}}>
                        <Col>
                            <div style={{backgroundColor:'blue', height:'100%', display:'block', textAlign:'right'}}>
                                <h2>{temp_f}º</h2>
                                <h2>{condition.text}</h2>
                            </div>
                        </Col>

                        <Col style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <img src={condition.icon} style= {{width:'100%'}}></img>
                        </Col>
                    </Row>
                    <Row style={{height:'39%', backgroundColor: 'red'}}>
                        <h3>HUMIDITY: {humidity}%</h3>
                        <h3>WIND: {wind_mph} mph</h3>
                    </Row>
                </Container>
            </Card>
        </>
    )
}