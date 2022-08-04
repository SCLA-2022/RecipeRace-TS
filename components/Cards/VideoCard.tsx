import React, {useState, useCallback} from "react";
import { Button, View, Alert, Text, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const VideoCard = ({ route, }) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  return (
    <>
      <View style={styles.touch}>
      <Text style={styles.fontStyle}>Video</Text>
      </View>
      {/* Display the name of the ingredients ons the top of the screen */}
      <YoutubePlayer
        
        height={235}
        play={playing}
        videoId={route.params.data}
        onChangeState={onStateChange}
      />
    </>
  );
};
export default VideoCard;

const styles = StyleSheet.create({
  touch: {
    width: 234,
    alignItems: 'center',
    height: 64,
    borderRadius: 15,
    elevation: 1,
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
    backgroundColor: '#5BBEB3',
    marginBottom: 30,
    marginTop: 60,
    alignSelf: 'center',
    

  },
  fontStyle: {
    color: 'white',
    
  }
});