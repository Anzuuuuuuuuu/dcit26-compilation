/* 
------Group Members-----
LAGUMBAY, TRISTAN KETH D.
CABARDO, JUDENELL S.
AQUE, JETHRO B.
------------------------
       BSCS 3 - 1
------------------------  
                        */


import React, {useState} from 'react';
import {StyleSheet, View, Button, ImageBackground, Text} from 'react-native';

import Modal from './components/Modal';

export default function App(){
  const [isModalOpen, setIsModalOpen] = useState (false);
  const imagebg = {uri: "https://64.media.tumblr.com/d7b72eff8d9255494d00b14587d482df/tumblr_oy2jhb0gvD1tydz8to1_540.gifv"};


  return (
    <View style = {styles.viewStyle}>
      <ImageBackground source={imagebg} style={styles.bgStyle}>
        <View style = {styles.viewStyle2}>
          <Button title = 'About this Character' onPress = {() => setIsModalOpen(true)}/>
          <Modal visible = {isModalOpen} onClose = {() => setIsModalOpen(false)}/>
        </View>
      </ImageBackground>
    </View>
  );  
}

const styles = StyleSheet.create({ 
  viewStyle: 
  {
    flex: 1,
    justifyContent: 'center',
  },


  bgStyle:
  {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

  viewStyle2: 
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },


});
