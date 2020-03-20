import React, { Component } from 'react';
import { View,Button,StyleSheet,Switch ,Slider,Text,Image,TouchableOpacity} from 'react-native';
//Nombre: Olvera González Abraham
//Grupo: TI02SM-18
//Pantalla: Conocenos

export default function Conocenos ({navigation}) {
      const [isSwitchEnabled,setSwitch] = React.useState(false);
      const [value,setState] = React.useState(0);

      return (
      <View styles={misEstilos.container}>  
         <View>
           <Text >Recibir notificaciones</Text>
           <Switch 
           value={isSwitchEnabled}
           onValueChange={(value) => setSwitch(value)}
           />
         <Image
          style={{width: 400, height: 300}}
          source={{uri: 'https://2.bp.blogspot.com/-cw7qrl63RkE/XHAvkSPhIGI/AAAAAAAAnqs/cZCd4Ngc47Amjq74VM27SQlQksb7YxOpACLcBGAs/s1600/preguntas2.jpg'}} />
           </View>
           <View>
           <Text >Valora nuestro servicio</Text>
           <Slider
            maximumValue={100}
            minimumValue={0}
            minimumTrackTintColor="#307ecc"
            maximumTrackTintColor="#000000"
           step={1} 
            value={value}
            onValueChange={value => setState(value)}
            />
  <Text>Calificación: {value}</Text>
            <Button
              title="Enviar"
            />
         </View>
      </View>
      );
   }


const misEstilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
  }

});
 