import React, { Component } from "react";
import {
  Text,
  FlatList,
  View,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import db from "../config";
import firebase from "firebase";
import MyHeader from "../components/MyHeader";

export default class RequestScreen extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      bookName: "",
      reasonToRequest: "",
    };
  }

  createUniqueId() {
    return Math.random().toString(36).substring(7);
  }
  addRequest = (bookName, reason) => {
    var userId = this.state.userId;
    var randomRequestId = this.createUniqueId();
    db.collection("requests").add({
      user_id: userId,
      book_name: bookName,
      reason: reason,
      request_id: randomRequestId,
    });
    this.setState({
      bookName: "",
      reason: "",
    });
    return Alert.alert("Book Requested");
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader title="Request a Book" />
        <KeyboardAvoidingView style={styles.keyboardStyle}>
          <TextInput
            style={styles.formTextInput}
            placeholder="Book Name"
            onChangeText={(text) => {
              this.setState({
                bookName: text,
              });
            }}
            value={this.state.bookName}
          ></TextInput>
          <TextInput
            style={styles.formTextInput}
            placeholder="Reason for Request"
            onChangeText={(text) => {
              this.setState({
                reason: text,
              });
            }}
            value={this.state.reason}
          ></TextInput>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.addRequest;
            }}
          >
            <Text>Request</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
  }
)
