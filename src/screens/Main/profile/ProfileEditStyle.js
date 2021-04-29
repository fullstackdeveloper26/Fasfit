import { StyleSheet } from 'react-native';
import * as utils from '../../../constants/utils';

export const styles = StyleSheet.create({
    loginContent: {
        flex:1,
        backgroundColor: 'white'
    },

    loginHeaderContent: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'white'
    },

    loginTitleLabel: {
        color: 'black', 
        marginTop: 25 * utils.widthRatio,
        fontSize: 22 * utils.widthRatio,
        fontWeight: 'bold', 
        textAlign: "center"
    },

    loginLogoImage: {
        height: 32 * utils.widthRatio,
        resizeMode: 'contain',
        marginTop: 21 * utils.widthRatio,
        left: 4 * utils.widthRatio,
    },

    loginCloseButton: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 21 * utils.widthRatio,
        right: 10 * utils.widthRatio,
    },

    loginCloseImage: {
        height: 16 * utils.widthRatio,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    loginKeyboardAvoiding: {
        marginTop: 30 * utils.widthRatio
    },

    loginHeaderTitleLabel: {
        color: 'black', 
        marginTop: 12 * utils.widthRatio,
        marginBottom: 12 * utils.widthRatio,
        fontSize: 22 * utils.widthRatio, 
        fontWeight: 'bold',
        left: 20 * utils.widthRatio,
    },

    loginSubTitleLabel: {
        color: '#c8cdce', 
        marginTop: 20 * utils.widthRatio,
        fontSize: 16 * utils.widthRatio, 
        left: 20 * utils.widthRatio,
    },

    loginSubTitleLabel1: {
        color: '#c8cdce', 
        marginTop: 20 * utils.widthRatio,
        fontSize: 16 * utils.widthRatio, 
        left: 20 * utils.widthRatio,
    },

    underlineStyle: {
        marginLeft: 20 * utils.widthRatio,
        marginRight: 20 * utils.widthRatio,
        borderColor: '#E3E6EF'
    },

    signupButton: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 0.9 * utils.deviceWidth,
        height: 49 * utils.widthRatio,
        marginTop: 32 * utils.widthRatio,
        borderRadius: 5 * utils.widthRatio,
    },

    signupButtonTitle: {
        width: '100%',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 16 * utils.widthRatio,
        fontWeight: '300'
    },

    bottomImage: {
        width: '100%',
        height: 140 * utils.widthRatio,
        resizeMode: 'cover',
        marginTop: 21 * utils.widthRatio,
        left: 4 * utils.widthRatio,
    },

    profile_grid_item_button: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 80 * utils.widthRatio,
        height: 80 * utils.widthRatio,
        borderRadius: 40 * utils.widthRatio
    },

    profile_grid_item_image: {
        width: 80 * utils.widthRatio,
        height: 80 * utils.widthRatio,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40 * utils.widthRatio
    },

    proffesionButton: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 319 * utils.widthRatio,
        right: 30 * utils.widthRatio,
    },

    proffesionImage: {
        height: 7 * utils.widthRatio,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    },

    profileButton: {
        flexDirection: 'row',
        marginTop: 15 * utils.widthRatio,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
      },
    
    profilePhotoImage: {
        width: 72 * utils.widthRatio,
        height: 72 * utils.widthRatio,
        borderRadius: 36 * utils.widthRatio,
        resizeMode: 'cover',
        overflow: 'hidden',
        borderColor: 'white',
        borderWidth: 2,
      },
    
});