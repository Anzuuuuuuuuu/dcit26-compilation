import React from "react";
import {ScrollView, Button, View, StyleSheet, Text, Image, ImageBackground} from 'react-native';


const imagebg = require('../img/about/MegumiBG.png');
const imageheader = require('../img/about/MegumiImage.png');
const chrono = require('../img/about/Chrono.png');
const Bio = require('../img/about/Biography.jpg');
const Appear = require('../img/about/Apperance.png');
const aki = require('../img/about/Tomoya.png');
const eriri = require('../img/about/eririjpg.jpg');
const utaha = require('../img/about/utaha.jpg');

const About = ({navigation}) => {

    return (
      <ScrollView>
        <ImageBackground source={imagebg} style={styles.bgStyle}>
        <View style = {styles.viewStyle}>

            <Text style = {styles.header1}>
              Megumi Kato
            </Text>

            <Text style = {styles.textStyle}>
            Megumi Kato (加藤 恵 Katō Megumi) is the classmate of Tomoya Aki, who is hardly noticed by others. 
            In the anime, she went in the same class as Tomoya since their first year, but he never noticed her.
            While in the light novel, during the first year, Megumi went to class E while Tomoya went to class A.
            After Tomoya had met her during the fate summons, 
            </Text>

            <Text style = {styles.textStyle}>
            she inspired him to make a dating sim game, featuring her as his Main Heroine. However, 
            he is disappointed by her real personality.
            </Text>

            <Text style = {styles.header}>
              Biography
            </Text>

            <Text style = {styles.textStyle}>
            Megumi is the girl in the one-piece summer dress and white beret that Tomoya Aki had a "fateful encounter" with.
            Although Tomoya initially praises Megumi's beauty and professes his love for her, he is briefly
            disappointed after they were properly introduced and vows to raise her into his ideal heroine. She is the model for Meguri,
            one of the main heroines of Blessing Software's "cherry blessing".
            </Text>

            <View>
              <Image style = {styles.imageStyle} source = {Bio}>
              </Image>
            </View>

            <Text style = {styles.header}>
              Appearance
            </Text>

            <Text style = {styles.textStyle}>
            Megumi is a cute girl with straight shoulder-length chestnut-brown hair that is usually worn down but it is long 
            enough to be tied up into a ponytail, dark brown eyes and she is described to have "perfect proportions". 
            Megumi is usually seen with her school uniform, or else, casual clothes, which Tomoya describes as just "normal".
            </Text>
            
            <Text style = {styles.textStyle}>
            According to Tomoya Aki, Megumi is the most beautiful girl he has ever met. 
            </Text>
            
            <Text style = {styles.textStyle}>
            She occasionally wears a variation of the summer dress she wore when Tomoya first met her, 
            which was designed by Eriri Spencer Sawamura to provide a better picture of how her character should look. 
            The white beret that she wore was given to a relative, much to Tomoya's disappointment, 
            but she is later seen wearing the same one, possibly meaning that she recovered it.
            </Text>
            
            <Text style = {styles.textStyle}>
            Megumi grows her hair out starting the day she and Tomoya "met" after the incident at Detective Hill. 
            After six months, she has her hair tied in a ponytail, 
            but Tomoya notices that it has grown significantly longer.
            A year later, she has her hair grown out to roughly the length of Utaha Kasumigaoka's and keeps it in a similar style. 
            However, she later cuts it back to its original length, 
            telling Tomoya that it had awoken a "vengeful spirit" inside of her, referencing her recent conflict with him, 
            but Tomoya believes she cut her hair again to help motivate him.
            </Text>
            
            <View>
              <Image style = {styles.imageStyle} source = {Appear}>
              </Image>
            </View>

            <Text style = {styles.header}>
              Personality
            </Text>

            <Text style = {styles.textStyle}>
            Unlike Eriri Spencer Sawamura and Utaha Kasumigaoka, 
            Megumi is portrayed as an ordinary girl with no distinctive character and she is extremely normal 
            where she is so plain that Tomoya Aki failed to realize that he was actually classmates with her. 
            She is described as stealthy due to her lack of presence, and the others often forget that she is 
            even in the same room.
            </Text>

            <Text style = {styles.textStyle}>
            However, Megumi is a kind and soft-spoken girl that wants the best for others and she constantly 
            goes out of her way for Tomoya and the others to help in any way that she can. She knows little 
            about otaku culture but never keeps Tomoya at arm's length and gives into his approaches from the start. 
            She has strong ideas regarding friendship and feels easily slighted when they are violated.
            </Text>

            <View>
              <Image style = {styles.imageStyle} source = {imageheader}>
              </Image>
            </View>

            <Text style = {styles.header}>
              Relationships
            </Text>

            <Text style = {styles.header}>
              Tomoya Aki
            </Text>

            <Text style = {styles.textStyle}>
            Megumi and Tomoya have a good relationship and she generally feels comfortable being alone with him, 
            which she initially attributed to him being an Otaku. Despite his unreasonable and often obsessive demands, 
            she frequently goes out of her way to help him.
            </Text>

            <Text style = {styles.textStyle}>
            Before he learns of her identity, Tomoya is drawn to and inspired by her image after their encounter near his home. 
            Although he is initially disappointed in her real personality, they grow to be quite close. 
            Tomoya tells Megumi that she is his one and only heroine, refusing to find another for his game and describes 
            her as his greatest partner.
            </Text>

            <Text style = {styles.textStyle}>
            Megumi's deadpan retorts and flat attitude towards Tomoya can be mistaken for disinterest, 
            but she shows more emotion towards him throughout the story than with any of the other characters and isn't 
            hesitant to show her care towards him when it is needed. Later in the series, it is hinted that Megumi does 
            develop romantic feelings towards Tomoya such as holding each other's hand tightly and walking slowly to the 
            train station together. In the Girl Side 2 Light Novel, she also told Eriri Spencer Sawamura that her feelings 
            for someone (Tomoya hinted) has changed at least once.
            </Text>

            <Text style = {styles.textStyle}>
            In the final volume of the series, it is shown that Megumi has accepted Tomoya's confession and feels the same way. 
            They even had a kiss together. She also starts to refer herself as Tomoya's girlfriend when chatting with him.
            </Text>

            <View>
              <Image style = {styles.imageStyle} source = {chrono}>
              </Image>
            </View>

            <Text style = {styles.header}>
              Eriri Spencer Sawamura
            </Text>

            <Text style = {styles.textStyle}>
            Eriri initially disliked Megumi because of her sudden entrance into Tomoya's life, 
            but later finds a good friend in her to the point of referring to each other by their first names. 
            As Blessing Software's illustrator, she is often frustrated by Megumi's inability to emote, 
            pose and takes advantage of any hint of emotion that she lets off. Despite their strong friendship, 
            she still finds herself being envious of Megumi's closeness with Tomoya, but accepts their relationship 
            as a positive one. Eriri cares about Megumi's impression of her and is one of the first on her mind when 
            things turn sour in the circle, as she once mentions apologizing to Megumi specifically in a message directed 
            to Tomoya.
            </Text>

            <Text style = {styles.textStyle}>
            Later in the series, her friendship with Eriri was strained due to Eriri leaving Blessing Software. 
            However, they eventually reconcile at the end.
            </Text>

            <View>
              <Image style = {styles.imageStyle} source = {eriri}>
              </Image>
            </View>

            <Text style = {styles.header}>
              Utaha Kasumigaoka
            </Text>

            <Text style = {styles.textStyle}>
            Thers is not much shown about their relationship yet, but Utaha helped Megumi when she came back from 
            Hokkaido to redo the fate summons again. However, Utaha hits her on the head when she did it wrong. 
            Utaha has also shown jealousy towards her for for receiving Tomoya's affection.
            </Text>

            <View>
              <Image style = {styles.imageStyle} source = {utaha}>
              </Image>
            </View>

            <Text style = {styles.header}>
              Chronology
            </Text>

            <Text style = {styles.textStyle}>
            Megumi is the girl that Tomoya Aki met during the fate summons since her white beret flew away, 
            and Tomoya was the one who caught it, so he was instantly captured by Megumi's appearance and claimed 
            that she was very beautiful. After learning that they have been in the same school, and even the same class, 
            since his first year in high school, he became very shocked because he never noticed her. Despite this, 
            Tomoya still tries to make Megumi be his heroine in his game and show her the world of otaku and games. 
            Megumi is hesitant at first, but eventually joins Tomoya's circle, Blessing Software and becomes the main 
            heroine for his game.
            </Text>

            <View>
              <Image style = {styles.imageStyle} source = {aki}>
              </Image>
            </View>


            <Text style = {styles.header}>
              Source
            </Text>

            <Text style = {styles.textStyle}>
            Information was provided by wikia @ https://saekano.fandom.com/wiki/Megumi_Kato
            </Text>

            <Button color='#f33ffc' title="Back" onPress={() => navigation.goBack()}/>
            
          </View>
          </ImageBackground>
          
        </ScrollView>
        
    );
};

export default About;

const styles = StyleSheet.create (
    {
        container:
        {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },

        viewStyle:
        {
          flex: 1,
          justifyContent: 'center',
          padding: 2,
          backgroundColor:'rgba(255,255,255, .8)',
  
        },

        textStyle: 
        {
          fontSize: 17,
          textAlign: 'justify',
          margin: 10,
          color: "black"
        },

        header: {
          fontSize:20,
          textAlign: 'left',
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

        imageStyle2: {
          width: 400,
          height: 300,
          resizeMode: "cover"
        },
      
        bgStyle:
        {
          resizeMode: "cover",
          backgroundColor:'rgba(0,0,0, 0.8)'
        }, 
    }
)