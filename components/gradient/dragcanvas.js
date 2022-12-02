import { useState } from 'react';
import { View } from 'react-native';
import { Draggable } from '../draggable';

export function DragCanvas({bounds}) {

    const predefinedSize = [70, 100, 150];
    const [draggableSize, setDraggableSize] = useState(predefinedSize[0]);

    const onResizeDraggable = () => {
        const index = predefinedSize.indexOf(draggableSize);
        if (index > -1) {
            const newIndex = (index + 1) % predefinedSize.length;
            setDraggableSize(predefinedSize[newIndex]);
            console.log(`newIndex = ${newIndex}`);
        }
    }

    return (
        <Draggable 
            x={bounds.width/2} y={bounds.height/2} 
            renderSize={draggableSize}
            imageSource={require('../../assets/pent-black.png')} 
            imageRevertSource={require('../../assets/pent-white.png')}
            minX={bounds.x}
            minY={bounds.y}
            maxX={bounds.x + bounds.width}
            maxY={bounds.y + bounds.height}
            onShortPressRelease={onResizeDraggable}
            /> 
    )
}