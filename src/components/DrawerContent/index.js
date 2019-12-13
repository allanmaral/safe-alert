import React from 'react';
import { DrawerItems } from 'react-navigation-drawer';

import { ScrollView, Container, Logout, LogoutText } from './styles';

const DrawerContent = props => (
  <ScrollView>
    <Container forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
      <Logout
        onPress={() => {
          props.navigation.navigate('Auth');
        }}
      >
        <LogoutText>Sair</LogoutText>
      </Logout>
    </Container>
  </ScrollView>
);

export default DrawerContent;
