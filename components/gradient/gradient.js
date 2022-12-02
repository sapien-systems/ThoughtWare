import { Box, Button, VStack } from "@react-native-material/core";
import { useState } from "react";
import { Image, View, StyleSheet } from 'react-native';
import { DragCanvas } from "./dragcanvas";

export default function Gradient() {

	const [canvasBoundary, setCanvasBoundary] = useState({x:0, y:0, width:0, height:0});

	const onGetLayout = (event) => {
		const layout = event.nativeEvent.layout;
		console.log(`Gradient Area : ${JSON.stringify(layout)}`);
		setCanvasBoundary({x:layout.x, 
			y:layout.y + 10, width: layout.width, height: layout.height - 20})
	}

	return (
	<>
		<Image
			onLayout={onGetLayout}
			style={{
				flex:1,
				width: '90%',
				resizeMode: 'contain',
				flexDirection: 'row',
				flexWrap: 'wrap',
			}}
			source={require("../../assets/gradient.png")}
		/>
		<DragCanvas bounds={canvasBoundary}></DragCanvas>
	</>
	)
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: "transparent",
	}
  });
  