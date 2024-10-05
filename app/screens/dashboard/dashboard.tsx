import React, {useRef} from 'react';
import {
  Image,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors} from '../../../config';
import {MotiView} from '@motify/components';
import {Easing} from 'react-native-reanimated';
import {
  BENEFICIARIES,
  RECENT_TRANSACTION,
} from '../../../data/recent-transaction';
import {BottomSheet, Card} from '../../../components';

const Dashboard = () => {
  const refRBSheet = useRef<{open: () => void} | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <Image
          resizeMode="contain"
          style={styles.imageNav}
          source={require('../../../assets/images/user-img-contain.png')}
        />
      </View>
      <View style={styles.connect}>
        <View style={styles.connectText}>
          <Text style={styles.text}>Tap to Send</Text>
          <Text style={[styles.text, styles.textColor]}>
            Long tap to Receive
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            refRBSheet.current ? refRBSheet.current.open() : null
          }
          style={[styles.dot, styles.center]}>
          {[...Array(3).keys()].map(index => (
            <MotiView
              key={index}
              from={{opacity: 0.7, scale: 1}}
              animate={{opacity: 0, scale: 2.5}}
              transition={
                {
                  type: 'timing',
                  duration: 2000,
                  easing: Easing.out(Easing.ease),
                  delay: index * 400,
                  loop: true,
                  repeatReverse: false,
                } as any
              } // Adding type here
              style={[StyleSheet.absoluteFillObject, styles.dot]}
            />
          ))}
          <Image
            resizeMode="contain"
            style={styles.connectImg}
            source={require('../../../assets/images/connect.png')}
          />
        </TouchableOpacity>
        <BottomSheet isOpen={refRBSheet}>
          <ScrollView style={styles.bottomSheetContainer}>
            <View style={styles.sheetNav}>
              <View>
                <Text style={styles.sheetText}>Good afternoon</Text>
                <Text style={[styles.sheetText, styles.sheetUsername]}>
                  Joshua Ajiboye
                </Text>
              </View>
              <View style={styles.sheetNav}>
                <Image
                  resizeMode="contain"
                  style={styles.imageBall}
                  source={require('../../../assets/images/ball.png')}
                />
                <Image
                  resizeMode="contain"
                  style={styles.imageNav}
                  source={require('../../../assets/images/user-img.png')}
                />
              </View>
            </View>
            <View style={styles.myCardAndAccount}>
              <Image
                resizeMode="contain"
                style={styles.myCardAndAccountImg}
                source={require('../../../assets/images/my-cards.png')}
              />
              <Image
                resizeMode="contain"
                style={styles.myCardAndAccountImg}
                source={require('../../../assets/images/my-accounts.png')}
              />
            </View>
            <Card title={'RECENT TRANSACTIONS'}>
              {RECENT_TRANSACTION.map(({id, image, name, action, amount}) => (
                <View style={styles.cardContainer} key={id}>
                  <View>
                    <Image source={image} style={styles.cardImg} />
                    <Image
                      source={
                        action === 'Receive'
                          ? require('../../../assets/images/receive.png')
                          : require('../../../assets/images/transfer.png')
                      }
                      style={styles.actionImg}
                      resizeMode="contain"
                    />
                  </View>
                  <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.action}>{action}</Text>
                  </View>
                  <Text style={styles.amount}>
                    ₦{amount.toLocaleString()}.00
                  </Text>
                </View>
              ))}
            </Card>
            <View style={styles.beneficiaries}>
              <Card title={'BENEFICIARIES'}>
                <View style={styles.beneficiariesContainer}>
                  {BENEFICIARIES.map(({id, image, name}) => (
                    <View key={id} style={styles.beneficiariesContent}>
                      <Image
                        source={image}
                        style={styles.beneficiariesCardImg}
                      />
                      <Text style={styles.beneficiariesName}>{name}</Text>
                    </View>
                  ))}
                  <TouchableOpacity>
                    <Image
                      source={require('../../../assets/images/add.png')}
                      style={styles.beneficiariesAddImg}
                    />
                  </TouchableOpacity>
                </View>
              </Card>
            </View>
          </ScrollView>
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black900,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  imageNav: {
    width: 45,
    height: 45,
  },
  connect: {
    flex: 3,
    gap: 100,
    paddingVertical: 80,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  connectImg: {
    width: 100,
    height: 100,
  },
  connectText: {},
  text: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 6,
  },
  textColor: {
    color: colors.gray,
  },
  dot: {
    width: 140,
    height: 140,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: colors.gray100,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sheetText: {
    color: colors.gray200,
  },
  sheetUsername: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  bottomSheetContainer: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    fontSize: 18,
    height: 3000,
  },
  sheetNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  imageBall: {
    width: 35,
    height: 35,
  },
  myCardAndAccount: {
    paddingVertical: 10,
  },
  myCardAndAccountImg: {
    height: 70,
    width: '100%',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    paddingHorizontal: 16,
    marginVertical: 4,
    paddingVertical: 6,
  },
  name: {
    fontSize: 14,
    color: colors.white,
  },
  action: {
    fontSize: 14,
    color: colors.gray500,
    paddingTop: 4,
  },
  amount: {
    flex: 1,
    textAlign: 'right',
    fontSize: 13,
    color: colors.white,
  },
  cardImg: {
    width: 40,
    height: 40,
  },
  actionImg: {
    position: 'absolute',
    bottom: 0,
    right: -3,
    borderRadius: 50,
    width: 17,
    height: 17,
  },
  beneficiaries: {
    paddingVertical: 14,
  },
  beneficiariesCardImg: {
    width: 50,
    height: 50,
  },
  beneficiariesAddImg: {
    width: 54,
    height: 54,
    marginBottom: 25,
  },
  beneficiariesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    paddingHorizontal: 16,
    marginVertical: 4,
    paddingVertical: 10,
  },
  beneficiariesName: {
    fontSize: 14,
    color: colors.white,
    paddingTop: 8,
    textAlign: 'center',
  },
  beneficiariesContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
