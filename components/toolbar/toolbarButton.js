import { SafeAreaView, View, StyleSheet, Dimensions } from 'react-native'
import { getToolbarActions } from './toolbarActions';
import { FloatingAction } from '../floatingAction';

export default function ToolbarButton({index}) {

	const buttonSize = Dimensions.get('window').width / 4 ; 
	const iconWidth = Dimensions.get('window').width / 4 ;
	const actions = getToolbarActions(index, iconWidth * 3 / 5);

	return (
		<>
			<SafeAreaView 
				style={{
					margin:4,
					flex: 1,
					borderWidth: 1,
					justifyContent: 'center',
				}}
			>
				<View style={styles.container}>
					<FloatingAction
						actions={actions}
						position='center'
						color='transparent'
						openOnMount={false}
						// actionsPaddingTopBottom={0}
						showBackground={false}
						floatingIcon={actions[0].icon}
						iconWidth={iconWidth}
						iconHeight={iconWidth}
						buttonSize={buttonSize}
					/>
				</View>
			</SafeAreaView >
		</>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  }
});

{/* <Image
style={{
	flex:1,
	width: '100%',
	resizeMode: 'center',
	flexDirection: 'row',
	flexWrap: 'wrap'
}}
source={image}
/> */}
