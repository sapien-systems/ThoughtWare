import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import ToolbarButton from './toolbarButton';

export default function Toolbar() {

	const pageWidth = Dimensions.get('window').width;
	const style = {width: pageWidth}

	return (
		<>
			<View style={{ flex: 1, flexDirection: 'row' }}>
				<ToolbarButton index={0}></ToolbarButton>
				<ToolbarButton index={1}></ToolbarButton>
				<ToolbarButton index={2}></ToolbarButton>
			</View>
		</>
	)
}

// Deprecated carousel usage
{/* <Carousel
	style={style}
	loop
	autoPlay={true}
	width={pageWidth/3}
	height={140}
	data={[...new Array(9).keys()]}
	scrollAnimationDuration={2000}
	onSnapToItem={(index) => console.log('current index:', index)}
	renderItem={({ index }) => (
		.....
	)}
/> */}
