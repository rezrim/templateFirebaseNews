import React from 'react';
import {View, Image} from 'react-native'
import { Container, Header, Text, Content, Form, Item, Input, Button, CardItem, Body } from 'native-base';
import ImagePicker from 'react-native-image-picker';

function AddNews(props) {
    const [gambar, setGambar] = React.useState("")
    const [gambarResponse, setGambarResponse] = React.useState(null)
    const [GambarWidth, setGambarWidth] = React.useState(0)
    const [GambarHeight, setGambarHeight] = React.useState(0)
    const [judul, setJudul] = React.useState("")
    const [deskripsi, setDeskripsi] = React.useState("")

    const options = {
        title: 'Select Image',
    };

    const clear = () => {
        setGambarHeight(0)
        setGambarResponse(null)
        setGambar("")
        setGambarWidth(0)
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
                const source = { uri: 'data:image/jpeg;base64,' + response.data };

                setGambar(source)
                setGambarResponse(response)
                setGambarHeight(response.height)
                setGambarWidth(response.width)
            }
        });
    }

    const saveNews = async() => {
        console.log("Data Berhasil di Simpan")
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
                        {gambar!="" &&
                            <Image source={gambar} style={{width:GambarWidth, alignSelf:'center', marginTop:10, height:GambarHeight, resizeMode:'stretch'}}/>
                        }
                    </Body>
                </CardItem>

                <CardItem>
                    <Body>
                        <Button block onPress={saveNews}> 
                                <Text>Simpan</Text>
                        </Button>
                    </Body>
                </CardItem>
                
            </Content>
        </Container>
    );
}

export default AddNews;