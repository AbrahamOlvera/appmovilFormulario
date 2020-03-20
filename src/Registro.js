import React,{Component,useState,useEffect} from 'react';
import {View, StyleSheet, Alert, TextInput,TouchableOpacity} from 'react-native';
import { Container,Button,Text, Header, Content, Card, CardItem,Body,Item, Label, Input,Icon} from "native-base";
import api from '../Data/api';
//Nombre: Olvera González Abraham
//Grupo: TI02SM-18
//Pantalla: Registro



class Registro extends Component {
  constructor(props){
     super(props);
    this.state = {
    user:'',
    email:'',
    pass:''};
  }

  mensaje = ()=>{alert('Datos guardados')};
		
		
 register = () => api.registerData(this.state.email, this.state.user, this.state.pass)
  render(){
  const navegar = this.props.navigation;
    return(  
       <Container>
        <Header />
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style= {misEstilos.textCenter}>Llena los siguientes campos</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                <Item inlineLabel>
                  <Icon type= 'FontAwesome' name= 'user'></Icon>
                  <Input placeholder= 'Nombre de usuario'
                            //value={this.state.user}
                            onChangeText={(user)=>this.setState({user})}/>
                </Item>
                <Item inlineLabel last>
                  <Icon type= 'MaterialCommunityIcons' name= 'email'></Icon>
                  <Input placeholder= 'Correo'
                            //value={this.state.correo}
                            onChangeText={(email)=>this.setState({email})}/>
                </Item>
                <Item inlineLabel last>
                  <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Contraseña'
                            //value={this.state.pass}
                            onChangeText={(pass)=>this.setState({pass})}/>
                </Item>
               <Item inlineLabel last>
                            <TouchableOpacity
		                        onPress={this.register}
                            style={{width:250,padding:10, backgroundColor:'magenta',
                            alignItems:'center'}}>
                            <Text style={{color:'#fff'}}>Guardar</Text>
                            </TouchableOpacity>
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
             <Button success style= {misEstilos.boton} onPress={() => navegar.navigate                   ('Movies')}>
            <Text>Mostrar movies</Text>
             </Button> 
             <Button success style= {misEstilos.boton1} onPress={() => navegar.navigate                   ('Planetas')}>
            <Text>Mostrar planetas</Text>
             </Button> 
            </CardItem>
          </Card>
          <Button full>
            <Icon type= 'AntDesign' name= 'facebook-square'></Icon>
            <Text>Registrarse con facebook</Text>
          </Button>
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
    paddingVertical: 35
  }, 
  boton: {
         marginLeft: '1%',
    },
   boton1: {
         marginRight: '1%',
         backgroundColor: 'red',
    },

});



export default Registro;