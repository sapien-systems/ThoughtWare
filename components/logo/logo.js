import { Box, Button, VStack } from "@react-native-material/core";
import { Image, View } from 'react-native';

export default function Logo() {
	return (
		<>
			<View>
				<Image
          style={{
						width: '100%',
						height: 50,
						resizeMode: 'center',
						backgroundColor: '#000000'
          }}
          source={require("../../assets/thoughtware.png")}
        />

			</View>
		</>
	)
}