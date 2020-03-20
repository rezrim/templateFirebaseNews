import React from 'react';
import {View, Image} from 'react-native'
import { Container, Header, Text, Content, Form, Item, Input, Button, CardItem, Body } from 'native-base';
import ImagePicker from 'react-native-image-picker';

function EditNews(props) {
    const [gambar, setGambar] = React.useState("")
    const [gambarResponse, setGambarResponse] = React.useState(null)
    const [judul, setJudul] = React.useState("")
    const [deskripsi, setDeskripsi] = React.useState("")
    const [namaGambar, setNamaGambar] = React.useState("")

    const clear = () => {
        setGambarResponse(null)
        setGambar("")
        setJudul("")
        setDeskripsi("")
    }

    const pilihGambar =() => {
        ImagePicker.showImagePicker(options, async (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = 'data:image/jpeg;base64,' + response.data ;
                setGambar(source)
                setGambarResponse(response)
            }
        });
    }

    const saveNews = async() => {
        console.log("Data di Update")    
    }

    return (
        <Container>
            <Content>
                <Form>
                    <Item>
                        <Input placeholder="Judul Berita" value={judul} onChangeText={(val) => setJudul(val)}/>
                    </Item>
                    <Item>
                        <Input placeholder="Deskripsi" value={deskripsi} onChangeText={(val) => setDeskripsi(val)}/>
                    </Item>
                </Form>
                <CardItem>
                    <Body>
                        <Button onPress={pilihGambar} block info> 
                            <Text>Pilih Gambar</Text>
                        </Button>
                            <Image source={require('../images/banner-babastudio.webp')} style={{width:'100%', alignSelf:'center', marginTop:10, height:200, resizeMode:'stretch'}}/>
                    </Body>
                </CardItem>

                <CardItem>
                    <Body>
                        <Button block> 
                                <Text>Simpan</Text>
                        </Button>
                    </Body>
                </CardItem>
                
            </Content>
        </Container>
    );
}

export default EditNews;