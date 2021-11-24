import React, { useState } from "react";
import { Platform, TouchableOpacity, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Container, Header } from "./styles";

export default function DatePicker() {
  const [dateNow, setDateNow] = useState(new Date());
  return (
    <Container>
      {Platform.OS === "ios" && (
        <Header>
          <TouchableOpacity onPress={() => {}}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </Header>
      )}
      <DateTimePicker
        value={dateNow}
        mode="date"
        display="default"
        onChange={(event, date) => {}}
        style={{ backgroundColor: "white" }}
      />
    </Container>
  );
}
