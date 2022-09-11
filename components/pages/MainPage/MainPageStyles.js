import { StyleSheet } from "react-native";

export const MainPageStyles = StyleSheet.create({
    circle: {
        width: 12,
        height:12,
        marginRight: 4,
        borderRadius: 100,
        backgroundColor: 'red'
    },

    taskListWrapper: {
        marginTop: 15,
        backgroundColor: '#F4F4F4',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingBottom: 10
    },

    taskList: {
        paddingHorizontal: 25,
        paddingTop: 35
    },

    leftDivider: {
        height: 79,
        width: 4,
        backgroundColor: 'red',
        marginRight: 16
    },

    bottomDivider: {
        flex: 1,
        marginTop: 20,
        borderWidth: 1,
        opacity: 0.5,
        borderStyle: 'dashed',
        borderColor: '#99A8B1',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightpWidth: 0
    },

    listItem: {
        marginBottom: 25
    },

    listItemWrapper: {
        flexDirection: 'row'
    },

    listItemTomato: {
        flexDirection: 'row',
        marginRight: 23,
        alignItems: 'center'
    },

    listItemClock: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    listItemPlay: {
        marginRight: 23
    },

    listItemIncludeWrapper: {
        flex:1
    },

    listItemInclude: {
        marginTop: 23,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    
    listItemIncludeItems: {
        flexDirection: 'row',
        alignItems: 'center',

    },

    afterImgText: {
        marginLeft: 8,
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 18
    }

})