import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {
  Container, Content, List, ListItem, Body, Left, Text, Icon,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Header from '../UI/Header';

const Profile = ({ member, logout }) => (
  <Container>
    <Content>
      <List>
        {(member && member.email)
          ? (
            <View>
              <Content padder>
                <Header
                  title={`Salam ${member.firstName},`}
                  content={`Anda di log masuk sebagai ${member.email}`}
                />
              </Content>

              <ListItem onPress={Actions.About} icon>
                <Left>
                  <Icon name="folder" />
                </Left>
                <Body>
                  <Text>
                    1 IPR Ditawarkan
                  </Text>
                </Body>
              </ListItem>
              <ListItem onPress={Actions.updateProfile} icon>
                <Left>
                  <Icon name="hammer" />
                </Left>
                <Body>
                  <Text>
                    0 IPR Dimohon
                  </Text>
                </Body>
              </ListItem>
              <ListItem onPress={Actions.updateProfile} icon>
                <Left>
                  <Icon name="happy" />
                </Left>
                <Body>
                  <Text>
                    0 IPR Lulus
                  </Text>
                </Body>
              </ListItem>
              <ListItem onPress={Actions.updateProfile} icon>
                <Left>
                  <Icon name="sad" />
                </Left>
                <Body>
                  <Text>
                    0 IPR Ditolak
                  </Text>
                </Body>
              </ListItem>
              <ListItem onPress={Actions.updateProfile} icon>
                <Left>
                  <Icon name="notifications" />
                </Left>
                <Body>
                  <Text>
                    0 Notifikasi
                  </Text>
                </Body>
              </ListItem>
              <ListItem onPress={Actions.updateProfile} icon>
                <Left>
                  <Icon name="person-add" />
                </Left>
                <Body>
                  <Text>
                    Kemaskini Profil
                  </Text>
                </Body>
              </ListItem>

              <ListItem onPress={logout} icon>
                <Left>
                  <Icon name="power" />
                </Left>
                <Body>
                  <Text>
                    Log Keluar
                  </Text>
                </Body>
              </ListItem>
            </View>
          )
          : (
            <View>
              <Content padder>
                <Header
                  title="Salam pengguna,"
                  content="Sila log masuk untuk mendapatkan akses tambahan"
                />
              </Content>

              <ListItem onPress={Actions.login} icon>
                <Left>
                  <Icon name="power" />
                </Left>
                <Body>
                  <Text>
                    Log Masuk
                  </Text>
                </Body>
              </ListItem>
              <ListItem onPress={Actions.signUp} icon>
                <Left>
                  <Icon name="add-circle" />
                </Left>
                <Body>
                  <Text>
                    Daftar Akaun
                  </Text>
                </Body>
              </ListItem>
              <ListItem onPress={Actions.forgotPassword} icon>
                <Left>
                  <Icon name="help-buoy" />
                </Left>
                <Body>
                  <Text>
                    Lupa Katalaluan
                  </Text>
                </Body>
              </ListItem>
            </View>
          )
        }
      </List>
    </Content>
  </Container>
);

Profile.propTypes = {
  member: PropTypes.shape({}),
  logout: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  member: {},
};

export default Profile;
