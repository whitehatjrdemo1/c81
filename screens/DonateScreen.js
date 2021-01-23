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
  ListItem,
} from "react-native";
import db from "../config";
import firebase from "firebase";
import MyHeader from "../components/MyHeader";

export default class DonateScreen extends Component {
  constructor() {
    super();
    this.state = {
      requestBookList: [],
    };
    this.requestRef = null;
  }
  getRequestedBookList = () => {
    this.requestRef = db.collection("requests").onSnapshot((snapshot) => {
      var requestedBookList = snapshot.doc.map((document) => document.data());
      if (requestedBookList.length != 0) {
        this.setState({
          requestBookList: requestedBookList,
        });
      }
    });
  };
  keyExtractor = (item, index) => {
    index.toString();
  };
  renderItem = ({ item }) => {
    return (
      <ListItem
        key={i}
        title={item.bookName}
        subtitle={item.reason}
        titleStyle={{ color: "black", fontWeight: "bold" }}
        rightElement={
          <TouchableOpacity stlye={styles.button}>
            <Text style={{ color: "#ffff" }}>View</Text>
          </TouchableOpacity>
        }
        bottomDivider
      />
    );
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader title="Donate a Book" />
        <View style={{ flex: 1 }}>
          {this.state.requestBookList.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20 }}>List of All Requested Books</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.requestBookList}
              renderItem={this.renderItem}
            ></FlatList>
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff5722",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
});
