//BSCS 3-1
//Aque, Jethro B.
//Lagumbay, Tristan Keith
//Cabardo, Judenell
import React,{useState} from 'react';
import { Text, View, StyleSheet,Button,TextInput } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [text, settext] = useState();
  const [list, setlist] = useState([]);

  const listText = () =>{
    setlist(currentText =>[...currentText,text]);
    this.addText.clear();
  }

  return (
    
    <View style={view.Background}>
      <View style={view.Background2}>
        <View style={view.Background3}>
          <View style={view.Background4}>
            <View style = {view.MainDesign}> 

              <TextInput
              title="addText"
              style = {BarDesign.Inputbar}
              placeholder="Enter Item"
              onChangeText={(enteredtext) => settext(enteredtext)}
              ref={input =>{this.addText = input}} />

              <Button title="add" onPress={listText} color="#f194ff"/>

            </View>

              <View style={{flexDirection:'column'}}>
              {list.map((item) => <Text style={view.container}>{item}</Text>)}
              </View>
            </View>
        </View>
      </View>
    </View>
    
  );
}


const view = StyleSheet.create({
  MainDesign:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:40,
    alignItems: 'center',
  },
  container:{
    padding:20, 
    backgroundColor: '#bababa',
    borderWidth:3,
    margin: 3,
    borderRadius:10,
    fontWeight:'bold',
    textAlign:'center',
  },
  Background:{
    backgroundColor:'#ffcf79', 
    flex: 1.5,
  },
  Background2:{
    flex: .5,
    backgroundColor: '#DA0F10',
  },
  Background3:{
    flex: .5,
    backgroundColor: '#FFB1B1',
  },

});


const BarDesign = StyleSheet.create({
  Inputbar:{
    width:200,
    borderWidth: 2,
    padding:10,
    borderColor:'black',
  }
});