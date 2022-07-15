// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
// } from 'react-native';
// import React, {useState, useEffect} from 'react';
// import {tintColorLight} from '../../constants/Colors';
// import {RootTabScreenProps} from '../../navigation/types';
// import {useAppDispatch, useAppSelector} from '../../redux/store/hooks';
// import ApiRequest from '../../utils/api/Main/ApiRequest';
// import {logOut} from '../../redux/features/auth/authSlices';

// export default function TabOneScreen({
//   navigation,
// }: RootTabScreenProps<'TabOne'>) {
//   const tag = 'TabOneScreen';
//   const {token, userName} = useAppSelector(state => state.auth);
//   console.log(userName, token);

//   const [detailUser, setDetailUser] = useState<Array<any>>([]);
//   const dispatch = useAppDispatch();
//   useEffect(() => {
//     if (token && userName) {
//       ApiRequest.DetailWaterUserByUser(token, userName)
//         .then(data => {
//           setDetailUser(data.result.data);
//           console.log(`${tag} get detail success`);
//           const arr = data.result.data as Array<any>;
//           if (arr.length > 0) {
//             const item = arr[0];
//             navigation.navigate('AccountViewDetail', {
//               waterUserId: item.id,
//               address: item.address,
//               name: item.name,
//             });
//           }
//         })
//         .catch(() => {
//           dispatch(logOut());
//         });
//     }
//   }, [dispatch, token, userName]);
//   return (
//     <View style={styles.container}>
//       <ScrollView style={{width: '100%'}}>
//         <FlatList
//           data={detailUser}
//           renderItem={({item}) => (
//             <View style={styles.container1}>
//               <View style={{width: '50%', marginBottom: 10}}>
//                 <Text>Ông/bà </Text>
//                 <View
//                   style={{
//                     width: '100%',
//                     alignItems: 'center',
//                     padding: 10,
//                     borderColor: tintColorLight,
//                     borderWidth: 2,
//                     borderRadius: 20,
//                     marginTop: 5,
//                   }}>
//                   <Text style={{fontSize: 24}}> {item.name}</Text>
//                 </View>
//               </View>
//               <Text
//                 style={{
//                   fontSize: 18,
//                   fontWeight: '700',
//                   color: tintColorLight,
//                 }}>
//                 {item.address}
//               </Text>
//               <TouchableOpacity
//                 onPress={() => {
//                   navigation.navigate('AccountViewDetail', {
//                     waterUserId: item.id,
//                     address: item.address,
//                     name: item.name,
//                   });
//                 }}
//                 style={{marginBottom: 10}}>
//                 <Text>Thông tin chi tiết {'>>'} </Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         />
//       </ScrollView>
//       {/* <View style={styles.viewButtonInfo}>
//         <View style={styles.viewButtonItem}>
//           <Button
//             iconName="assignment"
//             BackgroundColor={tintColorLight}
//             onPress={() => {}}
//           />
//           <View style={styles.viewButtonItemText}>
//             <Text>Hóa đơn</Text>
//             <Text>tiền nước</Text>
//           </View>
//         </View>
//         <View style={styles.viewButtonItem}>
//           <Button
//             iconName="message"
//             BackgroundColor={tintColorLight}
//             onPress={() => {}}
//           />
//           <View style={styles.viewButtonItemText}>
//             <Text>Tiếp nhận</Text>
//             <Text>yêu cầu</Text>
//           </View>
//         </View>
//         <View style={styles.viewButtonItem}>
//           <Button
//             iconName="calendar-today"
//             BackgroundColor={tintColorLight}
//             onPress={() => {}}
//           />
//           <View style={styles.viewButtonItemText}>
//             <Text>Lịch ghi</Text>
//             <Text>chỉ số</Text>
//           </View>
//         </View>
//       </View> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   container1: {
//     flex: 1,
//     alignItems: 'center',
//     width: '100%',
//   },
//   avatarView: {
//     margin: 5,
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     borderWidth: 2,
//     borderColor: tintColorLight,
//     overflow: 'hidden',
//     alignItems: 'center',
//     backgroundColor: 'orange',
//     position: 'relative',
//   },

//   avatarImage: {
//     width: 150,
//     height: 150,
//     borderRadius: 150 / 2,
//     overflow: 'hidden',
//     borderWidth: 3,
//   },
//   viewButtonInfo: {
//     flexDirection: 'row',
//     width: '100%',
//     height: 120,
//   },
//   viewButtonItem: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   viewButtonItemText: {
//     marginTop: 5,
//     height: 30,
//   },
// });

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
import {RootTabScreenProps} from '../../navigation/types';
import {useAppDispatch, useAppSelector} from '../../redux/store/hooks';
import ApiRequest from '../../utils/api/Main/ApiRequest';
import {logOut} from '../../redux/features/auth/authSlices';

export default function AccountViewDetail({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const tag = 'AccountViewDetail';
  const {token, userName} = useAppSelector(state => state.auth);

  const [detailUser, setDetailUser] = useState<Array<any>>([]);
  const [waterUserId, setWaterUserId] = useState<string>();

  const [name, setName] = useState<string>();

  const [address, setAddress] = useState<string>();

  console.log(detailUser.length);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (token && userName) {
      ApiRequest.DetailWaterUserByUser(token, userName)
        .then(data => {
          setDetailUser(data.result.data);
          console.log(`${tag} get detail success`);
          const arr = data.result.data as Array<any>;
          if (arr.length > 0) {
            const item = arr[0];
            setWaterUserId(item.id);
            setAddress(item.address);
            setName(item.name);
          }
        })
        .catch(() => {
          dispatch(logOut());
        });
    }
  }, [dispatch, token, userName]);
  useEffect(() => {
    if (token && waterUserId) {
      ApiRequest.WaterIndexAllByWateruser(token, waterUserId)
        .then(data => {
          setDetailUser(data.result.data);
          console.log(`${tag} get detail success`);
        })
        .catch(() => {
          dispatch(logOut());
        });
    }
  }, [dispatch, token, waterUserId]);
  return (
    <View style={styles.container}>
      <View style={styles.avatarView}>
        <Image
          source={require('../../assets/images/avatar_icon.jpg')}
          resizeMode="cover"
          style={styles.avatarImage}
        />
      </View>
      <View style={{width: '70%'}}>
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
          <Text style={{fontSize: 24}}> {name} </Text>
        </View>
      </View>
      <Text style={{fontSize: 18, fontWeight: '700', color: tintColorLight}}>
        {address}
      </Text>
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
                  if (waterUserId && name && item.waterMeterNumber > 0) {
                    navigation.navigate('WaterInvoice', {
                      waterUserId: waterUserId,
                      name: name,
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
              if (waterUserId && name) {
                navigation.navigate('WaterBill', {
                  waterUserId: waterUserId,
                  name: name,
                });
              }
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
