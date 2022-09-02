import { StyleSheet } from "react-native";

const SignUpStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        alignItems: 'center'
    },

    title: {
        fontFamily: "IBMPlexSans-Regular",
        fontSize: 24,
        lineHeight: 31,
        color: '#485A63;',
        fontWeight: 'bold'
    },

    input: {
        borderRadius: 6,
        borderColor: '#99A8B1',
        borderWidth: 1,
        width: 295,
        height: 35,
        paddingVertical: 6,
        paddingHorizontal: 10,
        marginTop: 10,
    },

    error: {
        borderColor: 'red'
    },

    touchibleText: {
        color: "#69C262",
        fontSize: 14,
        ineHeight: 18
    },

    footerContainer: {
        flexDirection: "row",
        marginTop: 20
    },

    footerText: {
        fontSize: 14,
        lineHeight: 18,
        color: '#485A63'
    }
})

export default SignUpStyles;