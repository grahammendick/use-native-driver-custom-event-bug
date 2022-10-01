import React, {useContext, useState} from 'react';
import {Text, Animated, ScrollView, View} from 'react-native';
import {NavigationContext} from 'navigation-react';
import {NavigationBar, CoordinatorLayout, CollapsingBar} from 'navigation-react-native';

export default () => {
  const [offset] = useState(new Animated.Value(0));
  const scale = offset.interpolate({
    inputRange:  [-64, 0],
    outputRange: [.2, 1],
  });
  return (
    <CoordinatorLayout>
      <NavigationBar
        title="Hello"
        onOffsetChanged={Animated.event([{nativeEvent:{offset}}], {useNativeDriver: true})}
        style={{height: 120}}>
        <CollapsingBar />
      </NavigationBar>
      <ScrollView nestedScrollEnabled>
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Animated.Text style={{transform: [{scale}], color: 'black', fontSize: 64}}>World</Animated.Text>
        </View>
      </ScrollView>
    </CoordinatorLayout>
  );
};
