import React from 'react';

import {
  Container,
  Header,
  ImageBackground,
  FormContainer,
  Logo,
  Title,
  Label,
  TextInput,
  Button,
  ButtonText,
} from './styles';

function SignIn({ navigation }) {
  const handleSubmit = () => {
    navigation.navigate('Home');
  };

  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <ImageBackground source={require('../../../assets/fundo.png')}>
        <FormContainer>
          <Title>LOGIN</Title>
          <Label>Usuário</Label>
          <TextInput type="email" autoCorrect={false} />
          <Label>Senha</Label>
          <TextInput secureTextEntry autoCorrect={false} />
          <Button onPress={handleSubmit}>
            <ButtonText>Acessar</ButtonText>
          </Button>
        </FormContainer>
      </ImageBackground>
    </Container>
  );
}

export default SignIn;
