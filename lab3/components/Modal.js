import React from 'react';
import {ScrollView, Button, Modal, View, StyleSheet, Text,Image, ImageBackground} from 'react-native';

const imagebg = {uri: "https://i.ytimg.com/vi/XvWD1Cqx4X8/maxresdefault.jpg"};
const thisModal = props => {
  return (
    
      <Modal visible = {props.visible} animationType = 'slide'>
        <ScrollView>
          <View>
            <Image style = {styles.imageStyle} source = {{uri: 'https://64.media.tumblr.com/ee56cdacaf314c9bf40cf4f71d215bb4/tumblr_oszg2zBfzu1u86t2qo1_400.gifv'}}/>
          </View>
          <ImageBackground source={imagebg} style={styles.bgStyle}>
          <View style = {styles.viewStyle}>     
              

            <Text style = {styles.header1}>
              Suzukaze Aoba
            </Text>
           
            <Text style = {styles.textStyle}>
            Aoba Suzukaze (涼風 青葉すずかぜ あおば Suzukaze Aoba) is the main protagonist of the series. She is a rookie character designer for the company Eagle Jump.
            </Text>

            <Text style = {styles.header}>
              Appearance
            </Text>
            <Text style = {styles.textStyle}>
              Aoba has butt-length light purple hair that is tied in twintails by two light pink flower hairclips with square bangs, purple eyes and her small stature makes her look like a middle school student that it is often pointed out by her friends and co-workers.
              She is often shown wearing a suit that she bought during her last year of high school. Although it was supposed to make her look more mature, others comment that her suit makes her look more like a middle school student since it has a strong resemblance to a school uniform.
            </Text>

            <Text style = {styles.header}>
              Personality
            </Text>
            <Text style = {styles.textStyle}>
              Aoba has a cheerful personality. She is very polite and strives to do her best for the company, but she has a childish side to her, especially when it comes to things that she likes, such as her favorite games. She is hardworking and is loyal to her friends. Due to her earnest personality, she is able to earn the respect and trust of both her colleagues and her superiors in the company.
              She is also shown to have a sadistic side, as remarked by Hifumi Takimoto, as Aoba would have liked to see her squirm in embarrassment, and also teases her childhood friend Nene. This is also seen when she 'tortures' a snowman in a hot spring.
              Aoba contrasts strongly with Momiji Mochizuki's personality. They appear to be exact opposites in every way, from attitude to physique.
            </Text>

            <Text style = {styles.header}>
              Relationships
            </Text>
            <Text style = {styles.header2}>
              Ko Yagami
            </Text>
            <Text style = {styles.textStyle}>
              Aoba admires Ko as her idol, and was inspired to be a character designer by Ko's involvement in the first Fairies Story game. Despite their unusual first encounter, Aoba still holds high respect for Ko and her work, and strives to become her equal.

              Aoba soon learns the difference in their standards when Ko rejects her villager model. After multiple retakes, she begins to lose hope, until Rin reveals that Ko has high expectations of her. Revitalized, she works on her model once more, and finally receives approval from Ko. As she continues working, Aoba's standards also continue to rise.

              Seeing her progress, Ko assigns her to design an original character for the game. However, Aoba struggles to create an acceptable design. In an attempt to encourage her, Ko shows all the villagers Aoba has created in action. Aoba eventually finishes the character design and it's model.

              After the development of Fairies Story 3 has concluded, she learns that Ko was originally the art director for Fairies Story 2, but stepped down due to a new employee quitting under her supervision. She approaches Ko, saying that she is a boss that Aoba looks up to, and encourages her to become an art director again.
            </Text>

            <Text style = {styles.header2}>
              Hifumi Takimoto
            </Text>
            <Text style = {styles.textStyle}>
              Hifumi is a shy person and is Aoba's co-worker, kohai and friend. Because of Aoba's earnest personality and her willingness to become friends with Hifumi, they are now close with each other. Hifumi is often intimidated by Aoba's energy, as well as after discovering her latent sadistic nature.
            </Text>

            <Text style = {styles.header2}>
              Nene Sakura
            </Text>
            <Text style = {styles.textStyle}>
              Nene is Aoba's friend ever since preschool. Despite Nene not being an artist, she still accompanied Aoba as a member of the Art club. Nene cares for Aoba very much, and cherishes their friendship.
            </Text>

            <Text style = {styles.header}>
              Source
            </Text>
            <Text style = {styles.textStyle}>
              Information was provided by wikia @ https://new-game.fandom.com/wiki/Aoba_Suzukaze
            </Text>

            <Button 
              title = 'CLOSE' 
              color = 'purple'
               onPress = {props.onClose} 
            />
            
          </View>
          </ImageBackground>
        </ScrollView>

      </Modal>
  );
};

const styles = StyleSheet.create({ 
  viewStyle: {
    
    flex: 1,
    justifyContent: 'center',
    padding: 2,
    backgroundColor:'rgba(255,255,255, .8)',

  },

  textStyle: {
    fontSize: 14,
    textAlign: 'justify',
    margin: 10
  },

  header: {
    fontSize:15,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10
  },

  header1: {
    fontSize:40,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10
  },

  header2: {
    fontSize:15,
    fontWeight: 'bold',
    margin: 10
  },

  imageStyle: {
    width: 400,
    height: 300,
    resizeMode: "cover"
  },

  bgStyle:
  {
    resizeMode: "cover",
    
    
    
  },

});


export default thisModal;
