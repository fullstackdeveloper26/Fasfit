import PushNotificationIOS from "@react-native-community/push-notification-ios";
var PushNotification = require("react-native-push-notification");
import { storage } from '../helper/storage';

const configure = () => {
    PushNotification.configure({
        // (optional) Called when Token is generated (iOS and Android)
        onRegister: function (token) {
          console.log("TOKEN:", token['token']);
          storage.setDeviceToken(token['token'])
        },
       
        // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
        onAction: function (notification) {
          console.log("ACTION:", notification.action);
          // process the action
        },
       
        // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
        onRegistrationError: function(err) {
          console.error(err.message, err);
        },
       
        // IOS ONLY (optional): default: all - Permissions to register.
        permissions: {
          alert: true,
          badge: true,
          sound: true,
        },
       
        // Should the initial notification be popped automatically
        // default: true
        popInitialNotification: true,
       
        /**
         * (optional) default: true
         * - Specified if permissions (ios) and token (android and ios) will requested or not,
         * - if not, you must call PushNotificationsHandler.requestPermissions() later
         * - if you are not using remote notification or do not have Firebase installed, use this:
         *     requestPermissions: Platform.OS === 'ios'
         */
        requestPermissions: true,
      });
    };

    function setupPushNotification(handleNotification) {
        PushNotification.configure({
      
            onNotification: function(notification) {
              handleNotification(notification)
       
              PushNotification.getApplicationIconBadgeNumber(function (number) {
                if (number > 0) {
                  PushNotification.setApplicationIconBadgeNumber(0);
                }
              });
              // process the notification
           
              // (required) Called when a remote is received or opened, or local notification is opened
              notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
      
            popInitialNotification: true,
            requestPermissions: true,
        })
      
        return PushNotification
      }
      

export {
 configure,
 setupPushNotification
};