
import React, { useEffect, useState } from 'react';

import styled, { css } from 'styled-components';
import devsService from '../../services/devs/devs.service';

const Side = ({
  updateDevs
}) => {
  const [ github_username, setGithubUserName ] = useState('');
  const [ techs, setTechs ] = useState('');
  const [ latitude, setLatitude ] = useState('');
  const [ longitude, setLongitude ] = useState('');

  useEffect(() => {
    getCurrentPosition();
  }, [ ]);

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      }, error => {
        console.log(error);
      }, {
        timeout: 30000,
      }
    );
  };

  const handleAddDev = async event => {
    event.preventDefault();

    let result;
    try {
      result = await devsService.createDev({
        github_username,
        techs,
        latitude,
        longitude,
      });
    } catch (error) {
      console.error(error);
      return;
    } 

    setGithubUserName('');
    setTechs('');

    updateDevs(result);
  }

  return(
    <Wrapper>
      <Title>Cadastrar</Title>
      <FormWrapper>
        <InputWrapper>
          <Label htmlFor='github_username'>
            Usuário do Github
          </Label>
          <Input
            name='github_username'
            id='github_username'
            value={ github_username }
            onChange={ e => setGithubUserName(e.target.value) }
            required
          />
        </InputWrapper>

        <InputWrapper marginTop>
          <Label htmlFor='techs'>
            Tecnologias
          </Label>
          <Input
            name='techs'
            id='techs'
            value={ techs }
            onChange={ e => setTechs(e.target.value) }
            required
          />
        </InputWrapper>

        <InlineWrapper>
          <InputWrapper>
            <Label htmlFor='latitude'>
              Latitude
            </Label>
            <Input
              name='latitude'
              id='latitude'
              type='number'
              value={ latitude }
              onChange={ e => setLatitude(e.target.value) }
              required
            />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor='longitude'>
              Longitude
            </Label>
            <Input
              name='longitude'
              id='longitude'
              type='number'
              value={ longitude }
              onChange={ e => setLongitude(e.target.value) }
              required
            />
          </InputWrapper>
        </InlineWrapper>

        <SaveButton onClick={ handleAddDev }>
          Salvar
        </SaveButton>
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 320px;
  background: #FFF;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 30px 20px;
`;

const Title = styled.strong`
  font-size: 20px;
  text-align: center;
  display: block;
  color: #333;
`;

const FormWrapper = styled.form`
  margin-top: 30px;
`;

const InputWrapper = styled.div`
  ${ ({ marginTop }) => marginTop && css`
    margin-top: 20px;
  ` }
`;

const InlineWrapper = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;

const Label = styled.label`
  color: #ACACAC;
  font-size: 14px;
  font-weight: bold;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  height: 32px;
  font-size: 14px;
  color: #666;
  border: 0;
  border-bottom: 1px solid #eee;
`;

const SaveButton = styled.button.attrs({
  type: 'submit',
})`
  width: 100%;
  border: 0;
  margin-top: 30px;
  background: #7d40e7;
  border-radius: 2px;
  padding: 15px 20px;
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.5s;

  :hover {
    background: #6931ca;
  }
`;

export default Side;