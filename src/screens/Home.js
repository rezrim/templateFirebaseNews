import React from 'react';
import {View} from 'react-native'
import { Container, Button, Text, Title, Content, Card, H1, Body } from 'native-base';

function Home(props) {

    return (
       <Container>
            <View style={{width:300, height:300, alignSelf:'center', marginTop:20}}>
                <Button onPress={() => props.navigation.navigate("News")} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Body>
                        <Title style={{fontSize:25}}>TOTAL DATA NEWS</Title>
                        <Title style={{fontSize:40}}>20</Title>
                    </Body>
                </Button>
            </View>
       </Container>
    );
}

export default Home;