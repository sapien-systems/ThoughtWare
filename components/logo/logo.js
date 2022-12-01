import { Box, Button, VStack } from "@react-native-material/core";
import { Image, View } from 'react-native';

export default function Logo() {
	return (
		<>
			<View style={{backgroundColor:'black', justifyContent: 'center', alignItems:'center'}}>
				<Image
          style={{
						width: '80%',
						height: 50,
						resizeMode: 'cover',
						backgroundColor: '#000000'
          }}
          source={require("../../assets/thoughtware.png")}
        />

			</View>
		</>
	)
}