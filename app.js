import { StyleSheet, Text, TextInput, View, Image,
TouchableOpacity, Alert,ScrollView } from "react-native";
// Importando o componente Cartilha.
import Cartilha from './components/Cartilha'
export default function App() {
return (
<View style={{flex:2, backgroundColor:'#B589E1', textAlign: 'center', padding: 5,}}>
<Cartilha/>
</View>
);
}
const styles = StyleSheet.create({
container: {
  flex: 2,
  backgroundColor: '#B589E1',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  paddingTop: 20,

},
paragraph: {
  textAlign: 'center',
}
});


