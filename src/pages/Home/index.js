import React from 'react';
import { Alert } from 'react-native';

import useLocation from '../../hooks/useLocation';
import TotalVoice from '../../services/TotalVoice';

import {
  Container,
  Header,
  DummySpacer,
  Logo,
  ImageBackground,
  MenuIcon,
  MenuButton,
  ButtonContainer,
  Label,
  Button,
  InnerButton,
  ButtonText,
} from './styles';

function Home({ navigation }) {
  const [location, locationError, updateLocation] = useLocation();
  console.tron.log(location);
  if (locationError) console.tron.error(locationError);

  const handleDistressCall = async () => {
    try {
      /* const response = await TotalVoice.tts.enviar(
        '24988231986',
        'Recebemos uma pedido de socorro de um dos veiculos da frota, acesse o sitema para acompanhar o pedido em tempo real. Em instantes você receberá uma mensagem com maiores detalhes',
        {
          velocidade: -1,
          tipo_voz: 'br-Vitoria',
          detecta_caixa: true,
        }
      );
      console.tron.log(response);

      const gpsLocation = `http://maps.google.com/?q=${location.coords.latitude},${location.coords.longitude}`;
      const response2 = await TotalVoice.sms.enviar(
        '24988231986',
        `Pedido de socorro recebido pelo veiculo xxx, acompanhe em ${gpsLocation}`,
        false,
        false
      );
      console.tron.log(response2);
      console.tron.log(gpsLocation); */
      Alert.alert('Sua solicitação foi enviada');
    } catch (err) {
      console.tron.log(err);
    }
  };

  return (
    <Container>
      <ImageBackground>
        <Header>
          <DummySpacer />
          <Logo />
          <MenuButton onPress={() => navigation.openDrawer()}>
            <MenuIcon />
          </MenuButton>
        </Header>
        <ButtonContainer>
          <Label>EM CASO DE EMEAÇA IMINENTE APERTE O BOTÃO</Label>
          <Button onPress={handleDistressCall}>
            <InnerButton>
              <ButtonText>SOS</ButtonText>
            </InnerButton>
          </Button>
          <Label>
            UMA MENSAGEM SERÁ ENVIADA A {'\n'} CENTRAL DE SEGURANÇA {'\n'} COM
            SUA LOCALIZAÇÃO SILENCIOSAMENTE
          </Label>
        </ButtonContainer>
      </ImageBackground>
    </Container>
  );
}

Home.navigationOptions = {
  drawerLabel: 'Home',
};

export default Home;
