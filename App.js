import { NavigationContainer } from '@react-navigation/native'
import NavBottomtabs from "./src/pages/NavBottomTabs";
import NavDrawer from "./src/pages/NavDrawer";
import NavStack from "./src/pages/NavStack";
import NavTopTabs from "./src/pages/NavTopTabs";

const App = () => {
  return( 
    <NavigationContainer>
      <NavStack />
      {/* // <NavDrawer/> */}
      {/* <NavTopTabs/> */}
      {/* <NavBottomtabs/> */}
    </NavigationContainer>
  ) 
};
export default App;



// //importamos todas as bibliotecas e componenentes que utilizar esse arquivo
// //todo componente tem que ser importado aqui, para que seja possivel usar (button, text, etc)
// import { StyleSheet, Text, View, ScrollView } from 'react-native';
// import Aula02 from './src/components/Aula02';
// import Aula03 from './src/components/Aula03';
// import Aula04 from './src/components/Aula04';

// //alternativa ao export default App
// export default function App() { //exporta o componente App
//   return (
//     <ScrollView>
//     {/* //view é uma tag que serve para agrupar elementos, como uma div */}
//     <View style={styles.container}>
//       {/* //text é uma tag que serve para escrever texto, como um p */}
//       <Text style={styles.texto}>Hello World!! React Native</Text>
//       <View style={styles.view} >
//         <Text style={styles.t1} >1 - Estava perdido nos seus olhos 👀 - olhe o 3</Text>
//         <Text style={styles.t2} >2 - Ajude me na caminhada da vida 🚶‍♂️🚶‍♀️</Text>
//         <Text style={styles.t3} >3 - Me encontrei em você - olhe o 2 </Text>
//       </View>
//       <Aula02/>
//       <Aula03/>
//       <Aula04/>
//     </View>
//     </ScrollView>
//   );
// }

// //StyleSheet é uma biblioteca que serve para estilizar os componentes
// //a estilização é feita em um objeto, que é passado como propriedade para o componente
// //o objeto é criado com StyleSheet.create({})
// //não temos px e rem. Só numeros inteiros
// const styles = StyleSheet.create({
//   container: {
//     flex: 2,
//     backgroundColor: '#fdfd',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   texto:{
//     color: '#000',
//     fontSize: 40,
//     fontWeight: 'bold',
//   },
//   view:{
//     fontSize: 20,
//     fontWeight: 'bold',
//     padding: 20,
//     borderRadius: 20,
//     margin: 10,
//     height: 200,
//     width: 500,
//   },
//   t1:{
//     backgroundColor: '#000',
//     color: '#fff',
//     padding: 20,
//     textAlign: 'left'
//   },
//   t2:{
//     backgroundColor: '#000',
//     color: '#fff',
//     padding: 20,
//     textAlign: 'center'
//   },
//   t3:{
//     backgroundColor: '#000',
//     color: '#fff',
//     padding: 20,
//     textAlign: 'right'
//   }

// });
