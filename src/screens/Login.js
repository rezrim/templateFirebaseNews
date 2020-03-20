import React from 'react';
import { Container, Content, Footer, FooterTab, Card, CardItem, Form, Item, Label, Input, Text, Button} from 'native-base';
import { Image, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { CommonActions } from '@react-navigation/native';

function Login(props) {
  const [register, setRegister] = React.useState(false)
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [konfPassword, setKonfPassword] = React.useState("")

  const saveUser = () => {
    console.log("Register")
  }

  const login = () => {
    console.log("Login")
    props.navigation.navigate("Home")
  }

  const clear = () => {
    setUsername("")          
    setPassword("")        
    setEmail("")
    setKonfPassword("")
  }



  return (
    <ScrollView style={{flex:1}}>
      <View>
        <Container style={{backgroundColor:'#2496B1'}}>
          {/* <Content> */}

            <View style={{justifyContent:'space-around', alignItems:'center', flex:1 }}>
                <Image style={{width:"81%", height:"9%"}} source={require('../images/logo_baba.png')}/>
              
              {!register ? (
              <View style={{width:'80%'}}>
                <Form>
                  <Item>
                    <Image style={{width:24, height:24}} source={require('../images/icon/user.png')}/>
                    <Input style={{fontSize:24, color:'white'}} value={username} onChangeText={(val)=> setUsername(val)} placeholder="Username" placeholderTextColor="#FFF"/>
                  </Item>
                  <Item>
                    <Image style={{width:24, height:24}} source={require('../images/icon/password.png')}/>
                    <Input style={{fontSize:24, color:'white'}} value={password} onChangeText={(val)=> setPassword(val)} placeholder="Password" placeholderTextColor="#FFF" />
                  </Item>
                </Form>
                <Button transparent style={{alignSelf:'center'}}>
                  <Text style={{color:'white'}} note>Forgot Password ?</Text>
                </Button>
                <Button onPress={login} style={{alignSelf:'center', marginVertical:10}}>
                  <Text style={{color:'white'}} note>Login</Text>
                </Button>
              </View>
              
              ):(
              
              <View style={{width:'80%'}}>
                <Form>
                  <Item>
                    <Icon active name="home" />
                    <Input style={{fontSize:24, color:'white'}} value={username} onChangeText={(val)=> setUsername(val)} placeholder="Username" placeholderTextColor="#FFF"/>
                  </Item>
                  <Item>
                    <Icon active name="home" />
                    <Input style={{fontSize:24, color:'white'}} value={email} onChangeText={(val)=> setEmail(val)} placeholder="Email" placeholderTextColor="#FFF"/>
                  </Item>
                  <Item>
                    <Icon active name="home" />
                    <Input style={{fontSize:24, color:'white'}} value={password} onChangeText={(val)=> setPassword(val)} placeholder="Password" placeholderTextColor="#FFF" />
                  </Item>
                  <Item>
                    <Icon active name="home" />
                    <Input style={{fontSize:24, color:'white'}} value={konfPassword} onChangeText={(val)=> setKonfPassword(val)} placeholder="Konfirmasi Password" placeholderTextColor="#FFF" />
                  </Item>
                </Form>
                <Button onPress={saveUser} style={{alignSelf:'center', marginVertical:10}}>
                  <Text style={{color:'white'}} note>Register</Text>
                </Button>
              </View>
              
              )}

            </View>
            

          {/* </Content> */}

          <Footer>
            <FooterTab>
              <Button onPress={()=> { 
                    setRegister(true) 
                    clear()   
              }}>
                <Text>Register</Text>
              </Button>
              <Button onPress={()=> { 
                setRegister(false)
                clear()
              }}>
                <Text>Login</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </View>
    </ScrollView>
  );
}

export default Login;