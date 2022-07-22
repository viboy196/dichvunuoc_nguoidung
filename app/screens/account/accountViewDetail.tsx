import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {tintColorLight} from '../../constants/Colors';
import Button from '../../components/items/Button';
import {RootStackScreenProps} from '../../navigation/types';
import {useAppDispatch, useAppSelector} from '../../redux/store/hooks';
import ApiRequest from '../../utils/api/Main/ApiRequest';
import {logOut} from '../../redux/features/auth/authSlices';

export default function AccountViewDetail({
  navigation,
  route,
}: RootStackScreenProps<'AccountViewDetail'>) {
  const tag = 'AccountViewDetail';
  const {token} = useAppSelector(state => state.auth);

  const [detailUser, setDetailUser] = useState<Array<any>>([]);
  console.log(detailUser.length);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (token) {
      ApiRequest.WaterIndexAllByWateruser(token, route.params.waterUserId)
        .then(data => {
          setDetailUser(data.result.data);
          console.log(`${tag} get detail success`);
        })
        .catch(() => {
          dispatch(logOut());
        });
    }
  }, [dispatch, route.params.waterUserId, token]);
  return (
    <View style={styles.container}>
      <View style={styles.avatarView}>
        <Image
          source={require('../../assets/images/avatar_icon.jpg')}
          resizeMode="cover"
          style={styles.avatarImage}
        />
      </View>
      <View>
        <Text>Ông/bà : {route.params.name} </Text>
        {route.params.address && (
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
            <Text
              style={{fontSize: 18, fontWeight: '700', color: tintColorLight}}>
              {route.params.address}
            </Text>
          </View>
        )}
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Account');
        }}>
        <Text>Quản lý tài khoản {'>>'} </Text>
      </TouchableOpacity>
      <ScrollView style={{width: '100%', flex: 1}}>
        <FlatList
          data={detailUser}
          renderItem={({item}) => (
            <View
              style={{
                width: '100%',
                margin: 5,
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
                  marginHorizontal: 5,
                }}>
                Hóa đơn tháng {item.month}/{item.year}{' '}
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
              <View
                style={{width: '100%', height: 2, backgroundColor: '#e3e3e3'}}
              />
              <Text style={{marginVertical: 5}}>
                {' '}
                Số đo đồng hồ : {item.waterMeterNumber}
              </Text>
              <Text style={{marginVertical: 5}}>
                {' '}
                Ngày tạo : {item.createdAt}{' '}
              </Text>
              <View
                style={{width: '100%', height: 2, backgroundColor: '#e3e3e3'}}
              />

              <TouchableOpacity
                onPress={() => {
                  if (
                    route.params.waterUserId &&
                    route.params.name &&
                    item.waterMeterNumber > 0
                  ) {
                    navigation.navigate('WaterInvoice', {
                      waterUserId: route.params.waterUserId,
                      name: route.params.name,
                      month: item.month,
                      year: item.year,
                    });
                  }
                }}>
                <Text
                  style={{
                    marginVertical: 5,
                    fontWeight: 'bold',
                    color: tintColorLight,
                    fontSize: 16,
                  }}>
                  {' '}
                  Xem hóa đơn{' >>'}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </ScrollView>

      <View style={styles.viewButtonInfo}>
        <View style={styles.viewButtonItem}>
          <Button
            iconName="assignment"
            BackgroundColor={tintColorLight}
            onPress={() => {
              navigation.navigate('WaterBill', {
                waterUserId: route.params.waterUserId,
                name: route.params.name,
              });
            }}
          />
          <View style={styles.viewButtonItemText}>
            <Text>Hóa đơn</Text>
            <Text>tiền nước</Text>
          </View>
        </View>
        <View style={styles.viewButtonItem}>
          <Button
            iconName="message"
            BackgroundColor={tintColorLight}
            onPress={() => {
              navigation.navigate('SendRequire');
            }}
          />
          <View style={styles.viewButtonItemText}>
            <Text>Tiếp nhận</Text>
            <Text>yêu cầu</Text>
          </View>
        </View>
        {/* <View style={styles.viewButtonItem}>
          <Button
            iconName="calendar-today"
            BackgroundColor={tintColorLight}
            onPress={() => {}}
          />
          <View style={styles.viewButtonItemText}>
            <Text>Lịch ghi</Text>
            <Text>chỉ số</Text>
          </View>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  avatarView: {
    margin: 5,
    width: 100,
    height: 100,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: tintColorLight,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: 'orange',
    position: 'relative',
  },

  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
  },
  viewButtonInfo: {
    flexDirection: 'row',
    width: '100%',
    height: 120,
  },
  viewButtonItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButtonItemText: {
    marginTop: 5,
    height: 30,
  },
});
