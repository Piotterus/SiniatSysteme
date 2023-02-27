import React from 'react';
import Modal from 'react-native-modal';
import {Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ImageZoom from 'react-native-image-pan-zoom';
import styles from './CustomModals.style';

const ImageModal = props => {
  console.log(props);
  console.log('imageWidth: ', props.imageWidth * 0.2);
  console.log('imageHeight: ', props.imageHeight * 0.2);
  return (
    <Modal
      isVisible={props.visible}
      style={styles.imageModal.mainView}
      onBackdropPress={() => props.setVisible(false)}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
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
    </Modal>
  );
};

export default ImageModal;
