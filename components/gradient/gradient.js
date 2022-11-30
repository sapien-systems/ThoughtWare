import { Box, Button, VStack } from "@react-native-material/core";
import { Image, View } from 'react-native';

export default function Gradient() {
	return (
		<Image
			style={{
				flex:1,
				width: '90%',
				resizeMode: 'center',
				flexDirection: 'row',
				flexWrap: 'wrap'
			}}
			source={require("../../assets/gradient.png")}
		/>
	)
}