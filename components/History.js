import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native-web";
import { connect } from "react-redux";
import { receiveEntries, addEntry } from "./../actions/actions";
import { getDailyReminderValue, timeToString } from "../utils/helpers";
import { fetchCalendarResults } from "../utils/api";
import { white } from "./../utils/colors";
import DateHeader from "./DateHeader";
import { Agenda as UdaciFitnessCalendar } from "react-native-calendars";
import MetricCard from "./MetricCard";
import { AppLoading } from "expo";

class History extends Component {
  state = { ready: false };
  // when component DidMount
  componentDidMount() {
    console.log("this.props", this.props);
    const { dispatch } = this.props;
    // fetch Calendar Results which coming from API
    fetchCalendarResults()
      //we get all of our entries and then dispatch receive Entries to reducer
      .then((entries) => dispatch(receiveEntries(entries)))
      // if entries is false " is not as thing " that means we haven't entered any information for the current day
      .then(({ entries }) => {
        if (!entries[timeToString()]) {
          // so dispatch add Entry passing it the to string as a key
          dispatch(
            addEntry({
              [timeToString()]: getDailyReminderValue(),
            })
          );
        }
      })
      .then(() => this.setState(() => ({ ready: true })));
  }

  renderItem = ({ today, ...metrics }, formattedDate) => (
    <View style={styles.item}>
      {today ? (
        <View>
          <DateHeader date={formattedDate} />
          <Text style={styles.noDataText}>{today}</Text>
        </View>
      ) : (
        <TouchableOpacity onPress={() => console.log("Pressed!")}>
          <MetricCard date={formattedDate} metrics={metrics} />
        </TouchableOpacity>
      )}
    </View>
  );
  renderEmptyDate(formattedDate) {
    return (
      <View style={styles.item}>
        <DateHeader date={formattedDate} />
        <Text style={styles.noDataText}>
          You didn't log any data on this day.
        </Text>
      </View>
    );
  }
  render() {
    const { entries } = this.props;
    // const { ready } = this.state;
    // if (ready === false) {
    //   return <AppLoading />;
    // }
    return (
      <UdaciFitnessCalendar
        items={entries}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
      />
    );
  }
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === "ios" ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: "center",
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    noDataText: {
      fontSize: 20,
      paddingTop: 20,
      paddingbotoom: 20,
    },
  },
});
function mapStateToProps(entries) {
  return {
    entries,
  };
}
export default connect(mapStateToProps)(History);
