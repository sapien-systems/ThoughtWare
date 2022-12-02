const toolbarActions = [
    [
        {
            icon: require('../../assets/uno-black.png'),
            iconRevert: require('../../assets/uno-white.png'),
            name: "bt_uno",
            position: 8
        },
        {
            icon: require('../../assets/tri-black.png'),
            iconRevert: require('../../assets/tri-white.png'),
            name: "bt_tri",
            position: 7
        },
        {
            icon: require('../../assets/square-black.png'),
            iconRevert: require('../../assets/square-white.png'),
            name: "bt_square",
            position: 6
        },
        {
            icon: require('../../assets/pent-black.png'),
            iconRevert: require('../../assets/pent-white.png'),
            name: "bt_pent",
            position: 5
        },		
        // {
        //     icon: require('../../assets/uno-white.png'),
        //     name: "bt_uno",
        //     position: 4
        // },
        // {
        //     icon: require('../../assets/tri-white.png'),
        //     name: "bt_tri",
        //     position: 3
        // },
        // {
        //     icon: require('../../assets/square-white.png'),
        //     name: "bt_square",
        //     position: 2
        // },
        // {
        //     icon: require('../../assets/pent-white.png'),
        //     name: "bt_pent",
        //     position: 1
        // },		
        
    ],
    [
        {
            icon: require('../../assets/level-2-1.png'),
            iconRevert: require('../../assets/level-2-1.png'),
            name: "bt_level_2_1",
            position: 2
        },
        {
            icon: require('../../assets/level-2-2.png'),
            iconRevert: require('../../assets/level-2-2.png'),
            name: "bt_level_2_2",
            position: 1
        },			
    ],
    [
        {
            icon: require('../../assets/level-3-1.png'),
            iconRevert: require('../../assets/level-3-1.png'),
            name: "bt_level_3_1",
            position: 3
        },
        {
            icon: require('../../assets/level-3-2.png'),
            iconRevert: require('../../assets/level-3-2.png'),
            name: "bt_level_3_2",
            position: 2
        },
        {
            icon: require('../../assets/level-3-3.png'),
            iconRevert: require('../../assets/level-3-3.png'),
            name: "bt_level_3_3",
            position: 1
        },
    ],
];

export function getToolbarActions(index, buttonSize) {
    return toolbarActions[index].map(action => {
        action.buttonSize = buttonSize;
        action.margin = -10;
        action.color = 'transparent';
        return action;
    });
}