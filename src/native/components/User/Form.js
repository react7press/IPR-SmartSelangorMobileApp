import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content, Text, Form, Item, Label, Input, Button,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Messages from '../UI/Messages';
import Header from '../UI/Header';
import Spacer from '../UI/Spacer';

class SignUp extends React.Component {
  static propTypes = {
    success: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: null,
    success: null,
  }

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  }

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, val) => this.setState({ [name]: val })

  handleSubmit = () => {
    const { onFormSubmit } = this.props;
    onFormSubmit(this.state)
      .then(() => setTimeout(() => { Actions.pop(); Actions.login(); }, 1000))
      .catch(() => {});
  }

  render() {
    const { loading, error, success } = this.props;

    return (
      <Container>
        <Content padder>
          <Header
            title="Skim Air Darul Ehsan"
            content="Skim Air Darul Ehsan adalah program penjajaran semula pemberian air percuma kepada kumpulan sasar penduduk Negeri Selangor."
          />

          {error && <Messages message={error} />}
          {success && <Messages type="success" message={success} />}

          <Form>
            <Item stackedLabel>
              <Label>Nama Penuh</Label>
              <Input
                disabled={loading}
                onChangeText={v => this.handleChange('firstName', v)}
              />
            </Item>

            <Item stackedLabel>
              <Label>No. Kad Pengenalan</Label>
              <Input
                disabled={loading}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={v => this.handleChange('lastName', v)}
              />
            </Item>

            <Item stackedLabel>
              <Label>E-mel</Label>
              <Input
                disabled={loading}
                onChangeText={v => this.handleChange('email', v)}
              />
            </Item>

            <Item stackedLabel>
              <Label>Kata Laluan</Label>
              <Input
                disabled={loading}
                secureTextEntry
                onChangeText={v => this.handleChange('password', v)}
              />
            </Item>

            <Item stackedLabel>
              <Label>Sahkan Kata Laluan</Label>
              <Input
                disabled={loading}
                secureTextEntry
                onChangeText={v => this.handleChange('password2', v)}
              />
            </Item>

            <Spacer size={20} />

            <Button block onPress={this.handleSubmit} disabled={loading}>
              <Text>{loading ? 'Loading' : 'Daftar'}</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Form;
