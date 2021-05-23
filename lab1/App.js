//BY: KETH LAGUMBAY, JUDE CABARDO, JETHRO AQUE

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App()
{
  return (
    <View style={{
        fontFamily: "Century Gothic" 
        }}>
      <div style={{
        transform: 'rotate(90deg)',
        position: "absolute",
        left: "200px",
        top: "230px"
              }}>
      <center>
        <h1>HelloWorld!</h1>
      </center>
      </div>
      <div style={{
        transform: 'rotate(-90deg)',
        position: "absolute",
        left: "-50px",
        top: "230px"
              }}>
      <center>
        <h1>HelloWorld!</h1>
      </center>
      </div>
      <div style={{
        transform: 'rotate(180deg)',
        position: "absolute",
        left: "80px",
        top: "500px"
              }}>
      <center>
        <h1>HelloWorld!</h1>
      </center>
      </div>
      <div style={{
        position: "absolute",
        left: "80px"
              }}>
      <center>
        <h1>HelloWorld!</h1>
      </center>
      </div>
    </View>
  );
}

//im done




























