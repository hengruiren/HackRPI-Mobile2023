import React from 'react';
import {SafeAreaView, ScrollView,StyleSheet } from 'react-native';
import Container from './Container';

const Box = () => {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.ScrollView}  
      //showsVerticalScrollIndicator={true}
      //pagingEnabled={true} // Enable paging
      //snapToInterval={150} // Set the interval to the height of a single rectangle
      >
        
      <Container workshop_Title="Workshop_title" Time="Time Unknon" 
      Location="Location Unknon" Description="This is not important at all." />
      <Container workshop_Title="Workshop_title" Time="Time Unknon" 
      Location="Location Unknon" Description="This is not important at all." />
      <Container workshop_Title="Workshop_title" Time="Time Unknon" 
      Location="Location Unknon" Description="This is not important at all." />
      <Container workshop_Title="Workshop_title" Time="Time Unknon" 
      Location="Location Unknon" Description="This is not important at all." />
      <Container workshop_Title="Workshop_title" Time="Time Unknon" 
      Location="Location Unknon" Description="This is not important at all." />
      
    </ScrollView>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //paddingTop: 0,
    //paddingBottom: 200,
    marginTop: 40,
    marginBottom: 40,
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    padding: 16,
  },
});

export default Box;