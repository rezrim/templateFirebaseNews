import React from 'react';
import { Image } from 'react-native';
import { Container, Header, H1, Content, Card, CardItem, Thumbnail, Fab, Text, Button, Icon, Left, Body, Right } from 'native-base';

function News(props) {

    return (
        <Container>
            <Content>
                <Card>
                    <CardItem>
                        <Body>
                            <H1>Judul</H1>
                            <Text note>Tanggal</Text>
                        </Body>
                    </CardItem>
                    <CardItem> 
                        <Image source={require('../images/banner-babastudio.webp')} style={{height: 200, width: null, resizeMode:'stretch' ,flex: 1}}/>
                    </CardItem>

                    <CardItem>
                        <Text>
                            Deskripsi
                        </Text>
                    </CardItem>

                    <CardItem footer bordered>
                        <Left>
                            <Text>4 Comments</Text>
                        </Left>

                        <Right>
                            <Button onPress={() => props.navigation.navigate("DetailNews")}><Text>Read More</Text></Button>
                        </Right>
                    </CardItem>

                </Card>
            </Content>

            <Fab
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() => props.navigation.navigate("AddNews")}>
                <Text>+</Text>
            </Fab>
        </Container>
    );
}

export default News;