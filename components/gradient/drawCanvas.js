import { useEffect, useState } from "react"
import { CustomDraggable } from "../draggable/customDraggable";
import { ADD_NEW_DRAGGABLE, TRY_REMOVE_DRAGGABLE } from '../../hook/customEventActions';
import customEvents from "../../hook/customEvents";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { DialogActions, Button, Text, Dialog, DialogContent, DialogHeader } from "@react-native-material/core";

const NON_SELECTED_NAME = "";

export function DrawCanvas({bounds}) {

	const [draggableArray, setDraggableArray] = useState([]);
	const [showDialog, setShowDialog] = useState(false);
	const [selectedDragName, setSelectedDragName] = useState(NON_SELECTED_NAME);

	customEvents.addEventListener(ADD_NEW_DRAGGABLE, (data) => {

		// check existed 
		const existed = draggableArray.filter(item => item.name == data.name)
		
		if (existed.length > 0) {

			if (existed[0].isShow == true) {
				Toast.show({type: 'error', text2:"Couldn't add same shape."});
				return;	
			}
			else {
				const newDraggableArray = draggableArray.map(draggable => {
					if (draggable.name == data.name)
						draggable.isShow = true;
					return draggable;
				});
				setDraggableArray(newDraggableArray);
			}

		}
		else {
			// add new draggable
			const newDraggableArray = [...draggableArray, data];
			setDraggableArray(newDraggableArray);
		}

	});

	customEvents.addEventListener(TRY_REMOVE_DRAGGABLE, (name) => {
		console.log(`tryRemoveDraggable: ${name}`);

		setShowDialog(true);
		setSelectedDragName(name);
	})

	const removeSelectedDragable = () => {
		if (selectedDragName == NON_SELECTED_NAME) 
			return;

		const newDragableArray = draggableArray.map(draggable => {
			if (draggable.name == selectedDragName)
				draggable.isShow = false;
			return draggable;
		});

		setDraggableArray(newDragableArray);
		setSelectedDragName(NON_SELECTED_NAME);
	}

	return(
		<>
			{
				draggableArray.map((draggable) => draggable.isShow && 
					<CustomDraggable bounds={bounds} data={draggable} 
						name={draggable.name} key={`custom-${draggable.name}`}></CustomDraggable>
				)
			}
			<Dialog visible={showDialog}>
				<DialogHeader title="Information" />
				<DialogContent>
					<Text>Do you want to remove this shape?</Text>
				</DialogContent>
        <DialogActions>
          <Button
            title="Cancel"
            compact
            variant="text"
            onPress={() => setShowDialog(false)}
          />
          <Button
            title="Ok"
            compact
            variant="text"
            onPress={() => { 
							removeSelectedDragable(); 
							setShowDialog(false)
						}}
          />
        </DialogActions>
			</Dialog>
		</>
	)
}



