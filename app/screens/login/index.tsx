import React, {useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  Share,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import Button from '../../components/items/Button';
import Input from '../../components/items/InputForm';
import {View, Text} from '../../components/Themed';
import {tintColorLight} from '../../constants/Colors';
import {RootStackScreenProps} from '../../navigation/types';
import {loginAsync, addUserName} from '../../redux/features/auth/authSlices';
import {useAppDispatch} from '../../redux/store/hooks';
import {validateName, validatePassword} from '../../utils/validate';

export default function Login({navigation}: RootStackScreenProps<'Login'>) {
  const dispatch = useAppDispatch();
  const [textPhone, setTextPhone] = useState('0962635719');
  const [textPassword, setTextPassword] = useState('Dannv0212@@');
  const [checked, setChecked] = React.useState(false);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'dịch vụ nước , chăm sóc khách hàng',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/water.jpg')}
          resizeMode="cover"
          style={styles.backgroundImage}>
          <View style={styles.header}>
            <Image
              source={require('../../assets/images/dichvunuoc.png')}
              resizeMode="cover"
              style={styles.logoImage}
            />
            <Text style={styles.logoText}> DỊCH VỤ NƯỚC </Text>
          </View>
          <View style={styles.body}>
            <View style={styles.fromInput}>
              <Input
                title={'số điện thoại hoặc mã khách hàng'}
                value={textPhone}
                keyboardType={'numeric'}
                onChangeInput={(text: string) => {
                  console.log(text);
                  setTextPhone(text);
                }}
                icon="phone"
                color={tintColorLight}
                errorMessages={
                  validateName(textPhone)
                    ? undefined
                    : 'Số điện thoại không hợp lệ'
                }
              />
              <Input
                title={'Mật khẩu'}
                value={textPassword}
                onChangeInput={(text: string) => {
                  console.log(text);
                  setTextPassword(text);
                }}
                icon="key"
                color={tintColorLight}
                secureTextEntry={true}
                errorMessages={
                  validatePassword(textPassword)
                    ? undefined
                    : 'mật khẩu quá ngắn'
                }
              />
            </View>
            <View style={styles.viewInfo}>
              <View style={styles.viewTextInfo}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                  color={'#3e3e3e'}
                />
                <Text style={styles.textInfoCheckBox}>Nhớ thông tin</Text>
              </View>
              <View style={styles.empty} />
              <TouchableOpacity style={styles.viewTextInfo}>
                <Text style={styles.textInfo}>Chính sách và quy định</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnLoginViewBorder}>
              <TouchableOpacity
                style={styles.btnLoginView}
                onPress={() => {
                  dispatch(addUserName({userName: textPhone}));
                  dispatch(
                    loginAsync({phone: textPhone, password: textPassword}),
                  );
                }}>
                <Text style={styles.btnLoginText}>Đăng nhập</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewInfo}>
              <TouchableOpacity
                style={styles.viewTextInfo}
                onPress={() => {
                  navigation.navigate('Register');
                }}>
                <Text style={styles.textInfo}>Đăng ký</Text>
              </TouchableOpacity>
              <View style={styles.empty} />
              <TouchableOpacity
                style={styles.viewTextInfo}
                onPress={() => {
                  navigation.navigate('forgotpassword');
                }}>
                <Text style={styles.textInfo}>Quên mật khẩu</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewInfo}>
              <TouchableOpacity
                style={styles.viewTextInfo}
                onPress={() => {
                  navigation.navigate('supportRegister');
                }}>
                <Text style={styles.textInfo}>Hướng dẫn đăng ký</Text>
              </TouchableOpacity>
              <View style={styles.empty} />
            </View>
            <View style={styles.viewButtonInfo}>
              <View style={styles.viewButtonItem}>
                <Button
                  iconName="tune"
                  BackgroundColor={tintColorLight}
                  onPress={() => {
                    navigation.navigate('InstallWaterScreen');
                  }}
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
                  onPress={() => {
                    navigation.navigate('report');
                  }}
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
                  onPress={() => {
                    Alert.alert('Tổng đài CSKH', '1900 400 002');
                  }}
                />
                <View style={styles.viewButtonItemText}>
                  <Text>Liên hệ</Text>
                </View>
              </View>
              <View style={styles.viewButtonItem}>
                <Button
                  iconName="tune"
                  BackgroundColor={tintColorLight}
                  onPress={onShare}
                />
                <View style={styles.viewButtonItemText}>
                  <Text>Chia sẻ</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  empty: {flex: 1},
  header: {
    flex: 2,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  logoImage: {width: 100, height: 100},
  logoText: {
    marginTop: 5,
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
    textShadowColor: '#3e3e3e',
  },
  body: {
    flex: 5,
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  fromInput: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  viewInfo: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  textInfo: {
    color: tintColorLight,
    fontWeight: '700',
  },
  textInfoCheckBox: {
    color: tintColorLight,
  },
  btnLoginViewBorder: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 5,
  },
  btnLoginView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tintColorLight,
    width: '80%',
    height: 50,
    borderRadius: 30,
  },
  btnLoginText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  viewTextInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
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
