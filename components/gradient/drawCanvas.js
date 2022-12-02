import { useEffect, useState } from "react"
import { CustomDraggable } from "../draggable/customDraggable";
import { ADD_NEW_DRAGGABLE, TRY_REMOVE_DRAGGABLE } from '../../hook/customEventActions';
import customEvents from "../../hook/customEvents";

export function DrawCanvas({bounds}) {

	const [draggableArray, setDraggableArray] = useState([]);
	const [showAlertDialog, setShowAlertDialog ] = useState(true);

	customEvents.addEventListener(ADD_NEW_DRAGGABLE, (data) => {
		console.log(`addNewDraggable: ${JSON.stringify(draggableArray)}`);
		const newDraggableArray = [...draggableArray, data];
		setDraggableArray(newDraggableArray);
	});

	customEvents.addEventListener(TRY_REMOVE_DRAGGABLE, (data) => {
		console.log(`tryRemoveDraggable: ${data}`);
	})

	return(
		<>
			{
				draggableArray.map((draggable, index) => 
					<CustomDraggable bounds={bounds} data={draggable} index={index} key={`index${index}`}></CustomDraggable>
				)
			}
		</>
	)
}



