import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { gray } from "../utils/colors";

const UdaciSlider = ({ max, unit, step, value, onChange }) => {
  return (
    <View style={styles.row}>
      <Slider
        style={{ flex: 1 }}
        value={value}
        step={step}
        minimumValue={0}
        maximumValue={max}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
        onValueChange={onChange}
      />
      <View style={styles.metricCounter}>
        <Text style={{ fontSize: 24, textAlign: "center" }}>{value}</Text>
        <Text style={{ fontSize: 18, color: gray }}>{unit}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  metricCounter: {
    width: 85,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default UdaciSlider;
