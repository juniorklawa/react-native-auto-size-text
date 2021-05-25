import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {AutoSizeText, ResizeTextMode} from 'react-native-auto-size-text';

const App = () => {
  const [text, setText] = useState<string>('');

  function delay(time: number) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time);
    });
  }

  const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

  const handleTypingEffect = async () => {
    for await (let letter of loremText) {
      await delay(100);
      setText(prevState => prevState + letter);
    }
  };

  useEffect(() => {
    handleTypingEffect();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={styles.scrollViewContainer}
        contentContainerStyle={styles.container}>
        <Text style={styles.title}>MaxLines</Text>

        <View style={styles.textWrapper}>
          <AutoSizeText
            fontSize={80}
            numberOfLines={2}
            mode={ResizeTextMode.max_lines}>
            {text}
          </AutoSizeText>
        </View>

        <Text style={styles.title}>MinFontSize</Text>
        <View style={styles.textWrapper}>
          <AutoSizeText
            numberOfLines={2}
            minFontSize={24}
            fontSize={40}
            mode={ResizeTextMode.min_font_size}>
            {text}
          </AutoSizeText>
        </View>

        <Text style={styles.title}>PresetFontSizes</Text>
        <View style={styles.textWrapper}>
          <AutoSizeText
            fontSizePresets={[64, 42, 14]}
            numberOfLines={3}
            mode={ResizeTextMode.preset_font_sizes}>
            {text}
          </AutoSizeText>
        </View>

        <Text style={styles.title}>OverflowReplacement</Text>
        <View style={styles.textWrapper}>
          <AutoSizeText
            fontSize={32}
            numberOfLines={3}
            mode={ResizeTextMode.overflow_replacement}
            overflowReplacement={'Text overflowing'}>
            {text}
          </AutoSizeText>
        </View>

        <Text style={styles.title}>Group</Text>

        <View style={styles.textWrapper}>
          <AutoSizeText mode={ResizeTextMode.group}>{text}</AutoSizeText>
        </View>

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
    </SafeAreaView>
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
    width: '90%',
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
