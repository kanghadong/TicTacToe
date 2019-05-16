import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const RowComponent = ({itemArray, winMessage, drawItem, chooseItemIcon}) => {
    const renderItemIcon = () => {
        return itemArray.map(value => (
            <View style={styles.item} key={value}>
              <TouchableOpacity onPress={() => winMessage === '' && drawItem(value)}>
                <Text style={styles.itemIcon}>{chooseItemIcon(value)}</Text>
              </TouchableOpacity>
            </View>
        ));
    };

    return (
        <View style={styles.row}>
            {renderItemIcon()}    
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row'
    },
    item: {
      borderWidth: 2,
      borderColor: "black",
      padding: 30
    },
    itemIcon: {
      fontSize: 30
    }
  });

export default RowComponent;
