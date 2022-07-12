import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {tintColorLight} from '../../constants/Colors';
import Button from '../../components/items/Button';
import {RootTabScreenProps} from '../../navigation/types';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarView}>
        <Image
          source={require('../../assets/images/avatar_icon.jpg')}
          resizeMode="cover"
          style={styles.avatarImage}
        />
      </View>
      <View style={{width: '50%'}}>
        <Text>Ông/bà </Text>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            padding: 10,
            borderColor: tintColorLight,
            borderWidth: 2,
            borderRadius: 20,
            marginTop: 5,
          }}>
          <Text style={{fontSize: 24}}> Nguyễn Văn A</Text>
        </View>
      </View>
      <Text style={{fontSize: 18, fontWeight: '700', color: tintColorLight}}>
        Ngọc thụy , Quận Long Biên , Thành phố Hà Nội
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Account');
        }}>
        <Text>Quản lý tài khoản {'>>'} </Text>
      </TouchableOpacity>
      <View
        style={{
          width: '90%',
          margin: 10,
          borderColor: '#e3e3e3',
          borderWidth: 2,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          padding: 20,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '700',
            color: tintColorLight,
            marginVertical: 5,
          }}>
          {' '}
          Hóa đơn tháng 4/2022
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '700',
            color: 'red',
          }}>
          {' '}
          Chưa thanh toán{' '}
        </Text>
        <View style={{width: '100%', height: 2, backgroundColor: '#e3e3e3'}} />
        <Text style={{marginVertical: 5}}> sản lượng tiêu thụ </Text>
        <Text style={{}}> tổng cộng tiền(VNĐ) </Text>
        <View style={{width: '100%', height: 2, backgroundColor: '#e3e3e3'}} />

        <Text
          style={{
            marginVertical: 5,
            fontWeight: 'bold',
            color: tintColorLight,
          }}>
          {' '}
          xem hóa đơn{' '}
        </Text>
      </View>
      <View>
        <Text>Thanh toán ngay</Text>
      </View>
      <View style={styles.viewButtonInfo}>
        <View style={styles.viewButtonItem}>
          <Button
            iconName="tune"
            BackgroundColor={tintColorLight}
            onPress={() => {}}
          />
          <View style={styles.viewButtonItemText}>
            <Text>Đăng ký</Text>
            <Text>Lắp nước</Text>
          </View>
        </View>
        <View style={styles.viewButtonItem}>
          <Button
            iconName="tune"
            BackgroundColor={tintColorLight}
            onPress={() => {}}
          />
          <View style={styles.viewButtonItemText}>
            <Text>Báo sự cố</Text>
            <Text>nước</Text>
          </View>
        </View>
        <View style={styles.viewButtonItem}>
          <Button
            iconName="tune"
            BackgroundColor={tintColorLight}
            onPress={() => {}}
          />
          <View style={styles.viewButtonItemText}>
            <Text>Liên hệ</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  avatarView: {
    margin: 10,
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: tintColorLight,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: 'orange',
    position: 'relative',
  },

  avatarImage: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
  },
  viewButtonInfo: {
    margin: 20,
    flexDirection: 'row',
    width: '100%',
    flex: 1,
  },
  viewButtonItem: {
    flex: 1,
    height: 210,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButtonItemText: {
    marginTop: 5,
    height: 30,
  },
});
