import React from 'react';
import {
  Container, Content, Text, H1, H2, H3, Button, Card, CardItem, Body, Icon
} from 'native-base';
import Spacer from './UI/Spacer';

const About = () => (
  <Container>
    <Content padder>
      <Spacer size={10} />
      <H3>
      INISIATIF PEDULI RAKYAT SELANGOR
      </H3>
      <Spacer size={10} />

      <Text>
        Senarai Program Layak Dimohon
        {' '}
      </Text>
      <Spacer size={10} />
      <Spacer size={10} />
      <Button>
      <Spacer size={10} />
      <Text>
        0 Notifikasi
        {' '}
      </Text>
      <Button
        block
        bordered
        small
        onPress={'Actions.forgotpassword'}
      >
        <Text>
          Skim Air Darul Ehsan
        </Text>
      </Button>
        <Icon name="notifications" />
      </Button>
      <Spacer size={10} />
      <Button>
      <Spacer size={10} />
      <Text>
        0 IPR Dimohon
        {' '}
      </Text>
      <Icon name="hammer" />
      </Button>
      <Spacer size={10} />
      <Button>
      <Spacer size={10} />
      <Text>
        0 IPR Lulus
        {' '}
      </Text>
      <Icon name="happy" />
      </Button>
      <Spacer size={10} />
      <Button>
      <Spacer size={10} />
      <Text>
        0 IPR Ditolak
        {' '}
      </Text>
      <Icon name="sad" />
      </Button>
      <Spacer size={10} />
      <Button>
      <Spacer size={10} />
      <Text>
        1 IPR Ditawarkan
        {' '}
      </Text>
      <Icon name="folder" />
      </Button>
      <Spacer size={10} />
      <Button
        block
        bordered
        small
        onPress={() => onPress(item)}
      >
        <Text>
          Skim Air Darul Ehsan
        </Text>
      </Button>

      <Spacer size={10} />
      <Text>
        Senarai Program Layak Dimohon
        {' '}
      </Text>
      <Spacer size={10} />
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
              <Spacer size={20} />
                <Text>
                   Tiada
                </Text>
                <Spacer size={20} />
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
      <Spacer size={10} />
      <Spacer size={10} />
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
              <Spacer size={20} />
                <Text>
                   TEST
                </Text>
                <Spacer size={20} />
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
      <Spacer size={10} />
      <Button
        block
        bordered
        small
        onPress={() => onPress(item)}
      >
        <Text>
          Semak Status
        </Text>
      </Button>

      <Spacer size={30} />
      <Text>
        Senarai Program Dimohon
        {' '}
      </Text>
      <Spacer size={30} />
      <Spacer size={10} />
      <Text>
        © 2019 SSIPR Hak Cipta Terpelihara
        {' '}
      </Text>
    </Content>
  </Container>
);

export default About;
