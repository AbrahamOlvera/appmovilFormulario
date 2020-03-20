import React,{Component} from 'react';
import {View, StyleSheet, Alert, TextInput,ActivityIndicator,Keyboard} from 'react-native';
import { Container,Text, Header, Content, Card, CardItem,Body,Item, Label, Input,Icon,Button} from "native-base";
import api from '../Data/api';
//Nombre: Olvera González Abraham
//Grupo: TI02SM-18
//Pantalla: Login



class Login extends Component{
   constructor(props){
        super(props);
        this.state = {
          user:'',
          pass:'' };
    }

  login = async() => {
        let validarLog = await api.validarLog(this.state.user, this.state.pass)

        if(validarLog.status == 1){
            this.props.navigation.navigate('Movies');
        }
        else{
            Alert.alert('Usuario o clave invalidos');
        }
    }


    state={
        showIndicator:false,
    }
    onButtonPress=()=>{
        this.setState({
            showIndicator:true
        }),
    this.props.navigation.navigate('Bienvenida',{contrasena:this.state.contrasena, usuario:this.state.usuario});
    }

    state = {switchValue:false}
    toggleSwitch = (value) => {
      this.setState({switchValue: value})
   }

    render(){
  const navigation = this.props.navigation;
  return (
       <Container>
        <Header />
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style= {misEstilos.textCenter}>Iniciar  sesión</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                <Item inlineLabel>
                <Icon type= 'FontAwesome' name= 'user'></Icon>
                  <Input placeholder= 'Nombre de usuario'
                             value={this.state.user}
                             onChangeText={(user)=>this.setState({user})}/>
                </Item>
                <Item inlineLabel last>
                <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Contraseña'
                  type='text'
                   value={this.state.pass}
                   onChangeText={(pass)=>this.setState({pass})}/>
                </Item>
                <Item inlineLabel last>
                    <Button success style = {misEstilos.boton2} 
                   onPress={() => {this.login() }}>
                    <Text>Ingresar</Text>
                    </Button>
                </Item>
                
              </Body>
            </CardItem>
            <CardItem>
            <Button success style = {misEstilos.boton} 
                    onPress ={() =>
                        navigation.navigate('Registro')}>
                    <Text>Registrarse</Text>
                    </Button>
                    <Button primary style = {misEstilos.boton1} 
                    onPress ={() =>
                        navigation.navigate('Conocenos')}>
                    <Text>Conocenos</Text>
                    </Button>
            </CardItem>
          </Card>
          
        </Content>
      </Container>
   );
  }
}
const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  body: {
    paddingVertical: 35,
  },
    boton1: {
    marginLeft: '10%',
  },
     boton: {
    marginRight: '10%',
  },
       boton2: {
    marginLeft: '30%',
    backgroundColor: 'red'
  }
});

export default Login;