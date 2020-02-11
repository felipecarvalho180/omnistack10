
import React from 'react';

import styled, { css } from 'styled-components';

const Side = () => {
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
              required
            />
          </InputWrapper>
        </InlineWrapper>

        <SaveButton>Salvar</SaveButton>
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