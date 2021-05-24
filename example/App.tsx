import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {AutoSizeText, ResizeTextMode} from 'react-native-auto-size-text';

const App = () => {
  const [text, setText] = useState<string>('');

  return (
    <ScrollView
      style={styles.scrollViewContainer}
      contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={e => setText(e)}
        value={text}
      />

      <Text>MaxLines</Text>

      <View style={styles.textWrapper}>
        <AutoSizeText
          fontSize={64}
          numberOfLines={2}
          mode={ResizeTextMode.max_lines}>
          {text}
        </AutoSizeText>
      </View>

      <Text>MinFontSize</Text>
      <View style={styles.textWrapper}>
        <AutoSizeText
          numberOfLines={3}
          minFontSize={18}
          fontSize={26}
          mode={ResizeTextMode.min_font_size}>
          {text}
        </AutoSizeText>
      </View>

      <Text>PresetFontSizes</Text>
      <View style={styles.textWrapper}>
        <AutoSizeText
          fontSizePresets={[50, 30, 10]}
          numberOfLines={3}
          mode={ResizeTextMode.preset_font_sizes}>
          {text}
        </AutoSizeText>
      </View>

      <Text>OverflowReplacement</Text>
      <View style={styles.textWrapper}>
        <AutoSizeText
          fontSize={12}
          numberOfLines={1}
          mode={ResizeTextMode.overflow_replacement}
          overflowReplacement={'Text overflowing'}>
          {text}
        </AutoSizeText>
      </View>

      <Text>Group</Text>

      <View style={styles.textWrapper}>
        <AutoSizeText mode={ResizeTextMode.group}>{text}</AutoSizeText>
      </View>

      <Text>StepGranularity</Text>
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
  textWrapper: {
    borderColor: '#bcbcbc',
    borderRadius: 10,
    width: '80%',
    margin: 16,
    height: 200,
    borderWidth: 2,
  },

  scrollViewContainer: {
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
