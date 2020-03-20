import React, { useEffect } from 'react';
import { Image, Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Fab, Thumbnail, Text, Button, Icon, Left, Body, H1 } from 'native-base';


function DetailNews(props) {
    const [active, setActive] = React.useState(false)
    const [key, setKey] = React.useState("")
    const [data, setData] = React.useState("")
    const [gambar, setGambar] = React.useState([])

    const deleteNews = () => {
       console.log("Data Berhasil di Hapus")
    }

    return (
        <Container>
            <Content>
                <Card style={{flex: 0}}>
                    <CardItem>
                        <Left>
                            <H1>Judul</H1>
                        </Left>
                    </CardItem>

                    <CardItem cardBody>
                            <Image source={require('../images/banner-babastudio.webp')} style={{height: 200, width: '100%', flex: 1}}/>
                    </CardItem>

                    <CardItem>
                        <Body>
                            <Text note>12-12-2020</Text>
                            <Text>Deskripsi</Text>
                        </Body>
                    </CardItem>

                </Card>
            </Content>

            <Fab
                active={active}
                direction="up"
                containerStyle={{ }}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() => setActive(!active)}>
                    <Text>+</Text>
                <Button style={{ backgroundColor: '#34A34F' }} onPress={() => props.navigation.navigate("EditNews")}>
                    <Image style={{width:20,height:20}} source={require('../images/icon/edit.png')}></Image>
                </Button>
                <Button style={{ backgroundColor: '#3B5998' }}>
                    <Image style={{width:20,height:20}} source={require('../images/icon/trash.png')}></Image>
                </Button>
                
            </Fab>

        </Container>
    );
}

export default DetailNews;