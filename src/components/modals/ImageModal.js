import React from 'react';
import Modal from 'react-native-modal';
import {
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ImageZoom from 'react-native-image-pan-zoom';
import styles from './CustomModals.style';

const ImageModal = props => {
  return (
    <Modal
      isVisible={props.visible}
      style={styles.imageModal.mainView}
      onBackdropPress={() => props.setVisible(false)}>
      <SafeAreaView style={styles.imageModal.mainView}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 20,
            right: 30,
            zIndex: 3,
            elevation: 3,
          }}
          onPress={() => props.setVisible(false)}>
          <Icon name="x-circle" size={50} color="#FFFFFF" />
        </TouchableOpacity>
        <ImageZoom
          cropWidth={Dimensions.get('window').width}
          cropHeight={Dimensions.get('window').height}
          imageWidth={Dimensions.get('window').width * 0.6}
          imageHeight={Dimensions.get('window').height * 0.6}>
          <Image
            style={{
              width: Dimensions.get('window').width * 0.6,
              height: Dimensions.get('window').height * 0.6,
            }}
            source={{uri: props.imageModal}}
            resizeMode={'contain'}
          />
        </ImageZoom>
      </SafeAreaView>
    </Modal>
  );
};

export default ImageModal;
