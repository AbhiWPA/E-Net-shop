import { StyleSheet, Text, View, Pressable, Alert, ImageBackground } from 'react-native'

const HomeScreen = ({navigation}) => {


    return (
        

    <View style={styles.body}>

      <ImageBackground 
        source={require('../assets/home.jpg')}
        className="h-full w-full absolute"
        style={styles.ImageBackground}
      />

        <Text style={styles.textOne}>E-Net Computer Shop</Text>

        <View style={styles.btnSec}>
        <Pressable style={styles.button}
        onPress={() => navigation.navigate('Printers')}>
        <Text style={styles.btnText}>PrintOut/PhotoCopy</Text>  
        </Pressable>
        </View>

        <View style={styles.btnSec}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('sellItem', {
            selectItems: [], // Pass the initial value or an empty array
            currentCustomerName: '',
            currentCustomerId: 0,
            currentBalanceValue: 0,
            todayTotal: 0,
          })}
        >
        <Text style={styles.btnText}>Business</Text>  
        </Pressable>
        </View>

        <View style={styles.btnSec}>
        <Pressable style={styles.button}
        onPress={() => navigation.navigate('selling')}>
        <Text style={styles.btnText}>Manage Items</Text>  
        </Pressable>
        </View>

        <View style={styles.btnSec}>
        <Pressable style={styles.button}
        onPress={() => navigation.navigate('Details')}>
        <Text style={styles.btnText}>Customers</Text>
        </Pressable>
        </View>

        <View style={styles.btnSec}>
        <Pressable style={styles.button}
        onPress={() => navigation.navigate('business')}>
        <Text style={styles.btnText}>Logs</Text>  
        </Pressable>
        </View>

     </View>




    )

}
export default HomeScreen

const styles= StyleSheet.create({
    body : {
      backgroundColor: '#0a3d62',
      alignItems: 'center',
      flex:1
    },
    textOne:{
      color: '#991224',
      marginTop: '15%',
      marginBottom:'8%',
      fontSize: 35,
      fontWeight: '900'
    },
    btnSec:{
      backgroundColor: '#3c6382',
      width:'85%',
      height:'14%',
      margin: '2%',
      borderRadius: 40,
      shadowColor: '#000',
      shadowOffset: { width: 4, height: 4 },
      shadowOpacity: 0.6,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      height:'100%',
      backgroundColor: '#487eb0',
      borderRadius: 40
    },
    btnText:{
      color: '#dcdde1',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 30,
      fontWeight: 'bold'
    },

    ImageBackground : {
      width: '100%',
      height: '150%',
      position: 'absolute',
  },
  })