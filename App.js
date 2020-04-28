import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  FlatList,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Counter} from './Counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {buttonPressed: 0};
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleButtonPress() {
    this.setState({buttonPressed: this.state.buttonPressed + 1});
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text testID={'welcome'} style={styles.sectionTitle}>
            Welcome to React Native
          </Text>
          <View style={styles.sectionContainer}>
            <View testID={'counterView'}>
              <Counter
                value={this.state.buttonPressed}
                testID={'runningState'}
                style={styles.highlight}
              />
              <Button
                onPress={this.handleButtonPress}
                title={'Start'}
                testID={'startButton'}
              />
            </View>
            <TextInput testID={'input'} style={styles.input} />
            <View style={styles.listContainer}>
              <FlatList
                testID={'list'}
                data={[
                  {name: 'Felipe'},
                  {name: 'Ninochka'},
                  {name: 'Benjamin'},
                  {name: 'Jeannette'},
                ]}
                renderItem={({item}) => (
                  <Text style={styles.listItem}>{item.name}</Text>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <Button title={'Start'} testID={'startButton'} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  listContainer: {
    height: 100,
    width: '80%',
    backgroundColor: '#eee',
  },
  listItem: {
    height: 100,
  },
});

export default App;
