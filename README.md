# useNativeDriver with Custom Component Event on Android
This repository contains 2 "Hello World" React Native apps. One is built with the old React Native architecture and the other is built with the new React Native architecture. The apps are the same. They each consist of 1 screen with a collaspsing header. As the header collapses the text 'World' should shrink.

## Steps to recreate the problem
1. cd to the `newarch` app
2. Run `npm install`
3. Run `npx react-native run-android`
4. Collapse the header by scrolling up
5. The text 'World' should shrink but doesn't.

Repeat the above steps in the oldarch app and you'll see that the text 'World' shrinks as expected at step 5. The text shrinks correctly in the new architecture example if `useNativeDriver` is set to false.
