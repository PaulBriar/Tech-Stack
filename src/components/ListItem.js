import React from 'react';
import { Text } from 'react-native';
import CardSection from './CardSection';

class ListItem extends React.Component {
  render() {
    console.log(this.props)
    return (
      <CardSection>
        <Text>{this.props.library.item.title}</Text>
      </CardSection>
    );
  };
}

export default ListItem;