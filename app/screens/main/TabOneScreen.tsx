import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {tintColorLight} from '../../constants/Colors';
import Button from '../../components/items/Button';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarView}>
        <Image
          source={require('../../assets/images/avatar_icon.jpg')}
          resizeMode="cover"
          style={styles.avatarImage}
        />
      </View>
      <Text>Ông/bà Nguyễn Văn A</Text>

      <Text>Ngọc thụy , Quận Long Biên , Thành phố Hà Nội</Text>

      <Text>Quản lý tài khoản {'>>'} </Text>
      <View>
        <Text> Hóa đơn tháng 4/2022</Text>

        <Text> Chưa thanh toán </Text>

        <Text> sản lượng tiêu thụ </Text>
        <Text> tổng cộng tiền(VNĐ) </Text>
        <Text> xem hóa đơn </Text>
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
