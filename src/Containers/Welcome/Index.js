import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, ActivityIndicator, Text, TextInput, Button } from "react-native";
import { Brand } from "@/Components";
import { useTheme } from "@/Theme";
import FetchOne from "@/Store/User/FetchOne";
import { useTranslation } from "react-i18next";
import ChangeTheme from "@/Store/Theme/ChangeTheme";

const IndexWelcomeContainer = () => {
  const { t } = useTranslation();
  const { Common, Fonts, Gutters, Layout } = useTheme();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.item);
  const fetchOneUserLoading = useSelector(
    (state) => state.user.fetchOne.loading
  );
  const fetchOneUserError = useSelector((state) => state.user.fetchOne.error);

  const [userId, setUserId] = useState("1");

  const fetch = (id) => {
    setUserId(id);
    dispatch(FetchOne.action(id));
  };

  const changeTheme = ({ theme, darkMode }) => {
    dispatch(ChangeTheme.action({ theme, darkMode }));
  };

  return (
    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
      <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
        <Brand />
      </View>
      <Text>TEST</Text>
    </View>
  );
};

export default IndexWelcomeContainer;
