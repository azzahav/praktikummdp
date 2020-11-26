import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Text,
} from 'react-native';

import Styles from './detail.styles';

export default function Detail({route}) {
  const {first_name, last_name, email, avatar} = route.params;
  const anggota = [
    {
      id: 1,
      nama: 'Azzah',
    },
    {
      id: 2,
      nama: 'Salim',
    },
    {
      id: 3,
      nama: 'Steven',
    },
    {
      id: 4,
      nama: 'Arga',
    },
  ];

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.scrollView}>
        <View style={Styles.view}>
          <View style={Styles.titleContainer}>
            <Text style={Styles.title}>KELOMPOK 23</Text>
          </View>
          <View style={Styles.profil}>
            <View style={Styles.cardView1}>
              <Image source={{uri: avatar}} style={Styles.image} />
            </View>
            <View style={Styles.cardView2}>
              <Text style={Styles.text1}>
                {first_name} {last_name}
              </Text>
              <Text style={Styles.text2}>{email}</Text>
            </View>
          </View>
          <View style={Styles.view2}>
            <View style={{marginBottom: 10}}>
              <Text style={Styles.text}>Anggota Kelompok</Text>
            </View>
            {anggota.map(item => (
              <View key={item.id} style={Styles.list}>
                <Text style={Styles.text}>{item.nama}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
