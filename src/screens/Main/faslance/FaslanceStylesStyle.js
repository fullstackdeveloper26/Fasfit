import { StyleSheet } from 'react-native';
import * as utils from '../../../constants/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
  },

  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 80 * utils.widthRatio,
    backgroundColor: 'black'
  },

  messageBackButton: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  messageBackButtonImage: {
    height: 34 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  messageSearchButton: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 10 * utils.widthRatio,
  },

  messageSearchButtonImage: {
    height: 22 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navTitleLabel: {
    marginTop: 24 * utils.widthRatio,
    fontSize: 24 * utils.widthRatio,
    color: 'white', 
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center'
  },

  message_content_view: {
    flex: 1,
    width: '100%',
  },

  message_list_view: {
    flex: 1,
  },

  message_item_view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8 * utils.widthRatio,
  },

  selected_message_item_view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8 * utils.widthRatio,
    backgroundColor: '#D4E8EC'
  },

  item_img_view: {
    height: '100%',
    width: 65 * utils.widthRatio,
  },

  item_profile_image: {
    marginTop: 10 * utils.widthRatio,
    marginLeft: 15 * utils.widthRatio,
    width: 40 * utils.widthRatio,
    overflow: 'hidden',
    resizeMode: 'contain',
    borderRadius: 20 * utils.widthRatio
  },

  item_info_view: {
    flex: 1,
    flexDirection: 'column',
  },

  item_name_label: {
    marginTop: 10 * utils.widthRatio,
    marginLeft: 10 * utils.widthRatio,
    marginRight: 30 * utils.widthRatio,
    fontSize: 16 * utils.widthRatio,
    color: 'black',
  },

  item_message_label: {
    marginTop: 5 * utils.widthRatio,
    marginLeft: 10 * utils.widthRatio,
    marginRight: 15 * utils.widthRatio,
    marginBottom: 10 * utils.widthRatio,
    fontSize: 12 * utils.widthRatio,
    fontStyle: 'italic',
    color: '#707070',
  },

  item_datetime_label: {
    marginRight: 15 * utils.widthRatio,
    fontSize: 10 * utils.widthRatio,
    color: '#DB143B',
  },
});
