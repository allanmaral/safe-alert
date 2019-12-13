import styled from 'styled-components/native';
import { Platform } from 'react-native';

import backgroundImage from '../../../assets/fundo.png';
import logo from '../../../assets/logo.png';

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #f58634;
`;

export const ImageBackground = styled.ImageBackground.attrs({
  source: backgroundImage,
  imageStyle: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'flex-end',
  },
})`
  flex: 1;
  width: 100%;
  background-color: #e6e7e9;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain',
})`
  width: 150px;
`;

export const Header = styled.View`
  width: 100%;
  height: 50px;
  background: #f58634;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.KeyboardAvoidingView.attrs(props => ({
  enables: Platform.OS === 'ios',
  behavior: 'padding',
  ...props,
}))`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 28px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #223;
  align-self: flex-start;
  margin-bottom: 35px;
  margin-top: -100px;
`;

export const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #223;
  align-self: flex-start;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  height: 45px;
  border: 2px solid #445;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  background: #f58634;
  border-radius: 8px;
  border: 2px solid #445;
  margin-top: 15px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
