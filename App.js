import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {Button} from 'native-base';

import RowComponent from './RowComponent';

var itemArray = new Array(9).fill('empty');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCross: false,
      winMessage: ''
    };
  }

  drawItem = itemNumber => {
    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = this.state.isCross;
      this.setState({
        isCross: !itemArray[itemNumber],
      }, () => {});
    }

    this.winGame();
  };

  chooseItemIcon = itemNumber => {
    if (itemArray[itemNumber] !== 'empty') {
      return itemArray[itemNumber] ? '❎' : '⭕'
    }

    return '❔';
  };

  resetGame = () => {
    itemArray.fill('empty');
    this.setState({ 
      isCross: false,
      winMessage: ''
    });

    this.forceUpdate();
  };

  winGame = () => {
    if (itemArray[0] !== 'empty' && itemArray[0] === itemArray[1] && itemArray[1] == itemArray[2]) {
      this.setState({ winMessage: (itemArray[0]? 'Cross' : 'Circle').concat(' win')});
    } else if (itemArray[3] !== 'empty' && itemArray[3] === itemArray[4] && itemArray[4] == itemArray[5]) {
      this.setState({ winMessage: (itemArray[3]? 'Cross' : 'Circle').concat(' win')});
    } else if (itemArray[6] !== 'empty' && itemArray[6] === itemArray[7] && itemArray[7] == itemArray[8]) {
      this.setState({ winMessage: (itemArray[6]? 'Cross' : 'Circle').concat(' win')});
    } else if (itemArray[0] !== 'empty' && itemArray[0] === itemArray[3] && itemArray[3] == itemArray[6]) {
      this.setState({ winMessage: (itemArray[0]? 'Cross' : 'Circle').concat(' win')});
    } else if (itemArray[1] !== 'empty' && itemArray[1] === itemArray[4] && itemArray[4] == itemArray[7]) {
      this.setState({ winMessage: (itemArray[1]? 'Cross' : 'Circle').concat(' win')});
    } else if (itemArray[2] !== 'empty' && itemArray[2] === itemArray[5] && itemArray[5] == itemArray[8]) {
      this.setState({ winMessage: (itemArray[2]? 'Cross' : 'Circle').concat(' win')});
    } else if (itemArray[0] !== 'empty' && itemArray[0] === itemArray[4] && itemArray[4] == itemArray[8]) {
      this.setState({ winMessage: (itemArray[0]? 'Cross' : 'Circle').concat(' win')});
    } else if (itemArray[2] !== 'empty' && itemArray[2] === itemArray[4] && itemArray[4] == itemArray[6]) {
      this.setState({ winMessage: (itemArray[2]? 'Cross' : 'Circle').concat(' win')});
    }
  };

  render() {
    const {winMessage} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.grid}>
          <RowComponent 
            itemArray={[0, 1, 2]}
            winMessage={winMessage}
            drawItem={this.drawItem}
            chooseItemIcon={this.chooseItemIcon}
          />
          <RowComponent 
            itemArray={[3, 4, 5]}
            winMessage={winMessage}
            drawItem={this.drawItem}
            chooseItemIcon={this.chooseItemIcon}
          />
          <RowComponent 
            itemArray={[6, 7, 8]}
            winMessage={winMessage}
            drawItem={this.drawItem}
            chooseItemIcon={this.chooseItemIcon}
          />
        </View>
        <Text style={styles.winMessage}>{winMessage}</Text>
        <Button full rounded primary style={styles.button} onPress={this.resetGame}>
          <Text style={styles.btnText}>Reset Game</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  grid: {},
  winMessage: {
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold'
  },
  button: {
    margin: 20,
    padding: 10
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
