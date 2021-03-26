import React from 'react';

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

import {TitleMain, ImageParty} from '../styles/globalStyles';
import party from '../assets/images/party.jpg';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    confirmed: 'Color Fest',
    styleParty: 'Paint Fest',
    status: 'rolando...',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    confirmed: 'Color Fest',
    styleParty: 'Paint Fest',
    status: 'rolando...',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    confirmed: 'Color Fest',
    styleParty: 'Paint Fest',
    status: 'rolando...',
  },
];

const Item = ({title, confirmed}) => (
  <View style={styles.item}>
    <ImageParty source={party} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const MCards = ({navigation}) => {
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <TitleMain>Categoria</TitleMain>
      <FlatList
        onPress={() => navigation.navigate('PartyDetail')}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#3E3B47',
    marginVertical: 8,
    marginHorizontal: 16,
    height: 280,
    width: 320,
  },
  title: {
    fontSize: 32,
    color: '#999591',
  },
  confirmed: {
    fontSize: 16,
    color: '#000',
  },
});

export default MCards;
