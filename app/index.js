import { useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function index() {

  const [permission, requestPermission] = useCameraPermissions();

  const isPermissionGranted = Boolean(permission?.granted);

  return (
    <SafeAreaView style={styleSheet.container}>
      <StatusBar style="auto" />

      <Text>Welcome Expo QR Code Scanner</Text>

      <Pressable style={styleSheet.mainBtn} onPress={requestPermission}>
        <Text>Request Permission</Text>
      </Pressable>

      <Pressable onPress={
        () => {
          router.replace("./qrScan");
        }
      } style={[styleSheet.mainBtn, { opacity: isPermissionGranted ? 1 : 0.5 }]} disabled={!isPermissionGranted} >
        <Text>Scan Code</Text>
      </Pressable>

    </SafeAreaView>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 20
  },
  mainBtn: {
    width: 200,
    height: 40,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  }
});
