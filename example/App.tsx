import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {AutoSizeText, ResizeTextMode} from 'react-native-auto-size-text';

const App = () => {
  const [text, setText] = useState<string>('');

  function delay(time: number) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time);
    });
  }

  const test = `This String changes it's size with a stepGranularity of 10. It will be automatically resized to fit on 4 lines. Now the text is so small you can't even read it...`;

  const typingEffect = async () => {
    for await (let letter of test) {
      await delay(100);
      setText(prevState => prevState + letter);
    }
  };

  useEffect(() => {
    typingEffect();
  }, []);

  return (
    <ScrollView
      style={styles.scrollViewContainer}
      contentContainerStyle={styles.container}>
      {/* <Text style={styles.title}>MaxLines</Text>

      <View style={styles.textWrapper}>
        <AutoSizeText
          fontSize={80}
          numberOfLines={2}
          mode={ResizeTextMode.max_lines}>
          {text}
        </AutoSizeText>
      </View> */}

      {/* <Text style={styles.title}>MinFontSize</Text>
      <View style={styles.textWrapper}>
        <AutoSizeText
          numberOfLines={3}
          minFontSize={24}
          fontSize={40}
          mode={ResizeTextMode.min_font_size}>
          {text}
        </AutoSizeText>
      </View> */}

      {/* <Text style={styles.title}>PresetFontSizes</Text>
      <View style={styles.textWrapper}>
        <AutoSizeText
          fontSizePresets={[64, 42, 24]}
          numberOfLines={3}
          mode={ResizeTextMode.preset_font_sizes}>
          {text}
        </AutoSizeText>
      </View> */}

      {/* <Text>OverflowReplacement</Text>
      <View style={styles.textWrapper}>
        <AutoSizeText
          fontSize={13}
          numberOfLines={1}
          mode={ResizeTextMode.overflow_replacement}
          overflowReplacement={'Text overflowing'}>
          {text}
        </AutoSizeText>
      </View> */}

      {/* <Text style={styles.title}>Group</Text>

      <View style={styles.textWrapper}>
        <AutoSizeText mode={ResizeTextMode.group}>{text}</AutoSizeText>
      </View> */}

      <Text style={styles.title}>StepGranularity</Text>
      <View style={styles.textWrapper}>
        <AutoSizeText
          mode={ResizeTextMode.step_granularity}
          fontSize={64}
          numberOfLines={2}
          granularity={10}>
          {text}
        </AutoSizeText>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
  },
  textWrapper: {
    borderColor: '#bcbcbc',
    borderRadius: 10,
    width: '70%',
    margin: 16,
    height: 250,
    padding: 8,
    borderWidth: 2,
  },
  scrollViewContainer: {
    backgroundColor: '#E3F2FD',
    flex: 1,
  },
  input: {
    height: 80,
    width: '100%',
    margin: 12,
    borderWidth: 1,
  },
});

export default App;
