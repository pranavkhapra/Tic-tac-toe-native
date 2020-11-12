

import React,{useState} from 'react';
import {
  StyleSheet,
  View,
 TouchableOpacity,

} from 'react-native';

import {
  Text,
  Container,
  Header,
  Body,
  Card,
  H1,H3,
  Button,
  Title,
  Content
} from 'native-base'

import Icons from './components/Icons'
import SnackBar from 'react-native-snackbar'


const itemArray=new Array(9).fill('empty')



const App= () => {
  const [isCross,setIsCross]=useState(false)
  const [winMessage,setWinMessage]=useState('')
 

 const changeItem=(itemNumber)=>{
   //how to change the itemArray
   //if somebody is won
   if(winMessage) {
     return SnackBar.show({
       text:winMessage,
       backgroundColor:'#000',
       textColor:'#FFF'
     })
   }
    
   if(itemArray[itemNumber]==='empty'){
    itemArray[itemNumber] = isCross ? "cross" : "circle"
    setIsCross(!isCross)
   }
   else{
     return SnackBar.show({
       text:"Position is already filled",
       backgroundColor:"red",
       textColor:"#FFF"
     })
   }
    checkIsWinners()
 }
 const reloadGame=()=>{
   setIsCross(false)
   setWinMessage('')
   itemArray.fill('empty',0,9)
 }
 const checkIsWinners=()=>{
   //
   if(
     itemArray[0]===itemArray[1] &&
     itemArray[0]===itemArray[2] &&
     itemArray[0]!=='empty' 
   ){
     setWinMessage(`${itemArray[0]} won `)
   }
   else if(
    itemArray[3]!=='empty' &&
    itemArray[3]===itemArray[4] &&
    itemArray[4]===itemArray[5] 
    
  ){
    setWinMessage(`${itemArray[3]} won `)
  }
   else if(
    itemArray[6]!=='empty' &&
    itemArray[6]===itemArray[7] &&
    itemArray[7]===itemArray[8]
     
  ){
    setWinMessage(`${itemArray[6]} won `)
  }
  else if( 
    itemArray[0]!=='empty' &&
    itemArray[0]===itemArray[3] &&
    itemArray[3]===itemArray[6] 
   
  ){
    setWinMessage(`${itemArray[0]} won `)
  }
  else if(
    itemArray[1]!=='empty' &&
    itemArray[1]===itemArray[4] &&
    itemArray[4]===itemArray[7] 
     
  ){
    setWinMessage(`${itemArray[1]} won `)
  }
  else if(
    itemArray[2]!=='empty' && 
    itemArray[2]===itemArray[5] &&
    itemArray[5]===itemArray[8] 
    
  ){
    setWinMessage(`${itemArray[2]} won `)
  }
  else if(
    itemArray[0]!=='empty' && 
    itemArray[0]===itemArray[4] &&
    itemArray[4]===itemArray[8] 
    
  ){
    setWinMessage(`${itemArray[0]} won `)
  }else if(
    itemArray[2]!=='empty' && 
    itemArray[2]===itemArray[4] &&
    itemArray[4]===itemArray[6] 
    
  ){
    setWinMessage(`${itemArray[2]} won `)
  }
 }
  return (
    <Container style={{backgroundColor:"#333945",padding:5}}>
      <Content>
      <Header>
        <Body>
          <Title>
            Tic-Tac-Toe
          </Title>
        </Body>
      </Header>
      <View style={styles.grid}>
      {itemArray.map((item,index)=>(
        <TouchableOpacity
        style={styles.box}
        key={index}
        onPress={()=>changeItem(index)}
        >
         <Card style={styles.card}>
           <Icons name={item}/>      
           {/* default item ids empty pen  */}
           </Card> 
        </TouchableOpacity>
      ))}
      </View>
      {winMessage ? (
        <View>
          <H1 style={styles.message}>{winMessage}</H1>
          <Button 
          onPress={reloadGame}
          primary
          block
          rounded
          >
            <Text>Reload Game</Text>
          </Button>
        </View>
      ) : (
        <View>
          <H3 style={styles.message}>
            {isCross ? " cross" : "circle"} turns 
          </H3>
        </View>
      )}
     </Content>
    </Container>
  );
};


export default App;
const styles = StyleSheet.create({
  grid:{
    flex: 1,
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:20

  },
  box:{
    width:"33%",
    marginBottom:6

  },
  card:{
    height:120,
    justifyContent: 'center',
    alignItems: 'center'
  },
  message:{
    textAlign: 'center',
    textTransform:"uppercase",
    color:"#FFF",
    marginTop:20,
    backgroundColor:"#4652B3",
    paddingVertical:10,
    marginVertical:10
  }
});
