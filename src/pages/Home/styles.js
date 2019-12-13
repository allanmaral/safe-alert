import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DummySpacer = styled.View`
  width: 32px;
`;

export const MenuIcon = styled(Feather).attrs(() => ({
  name: 'menu',
  size: 32,
  color: '#fff',
}))``;

export const MenuButton = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const Label = styled.Text`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: #223;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  overflow: hidden;
  padding: 30px 28px;
`;

export const Button = styled.TouchableOpacity`
  width: 200px;
  height: 200px;
  background: #fdcb0a;
  border-radius: 20px;
  border: 10px dashed #000;
  margin: 30px 0;

  align-items: center;
  justify-content: center;
`;

export const InnerButton = styled.View`
  width: 180px;
  height: 180px;
  background: #ec1f24;
  border-radius: 15px;

  border: 10px #f58634;
  align-items: center;
  justify-content: center;
`;

export const TitleText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 50px;
  font-weight: bold;
`;
