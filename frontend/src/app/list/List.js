
import React from 'react';
import styled from 'styled-components';

const List = () => {
  return(
    <Wrapper>
      <ListWrapper>
        <ListItem>
          <ItemHeader>
            <UserPicture 
              src='https://avatars2.githubusercontent.com/u/37779345?s=460&v=4'
              alt='Felipe Carvalho'
            />
            <UserInfo>
              <Name>Felipe Carvalho</Name>
              <Techs>React.Js, React Native, Node.js</Techs>
            </UserInfo>
          </ItemHeader>
          <Bio>
            Desenvolvedor Junior na empresa Cogoli, fascinado por React e React Native.
          </Bio>
          <Link href='https://github.com/felipecarvalho180'>
            Acessar perfil no github
          </Link>
        </ListItem>

        <ListItem>
          <ItemHeader>
            <UserPicture 
              src='https://avatars2.githubusercontent.com/u/37779345?s=460&v=4'
              alt='Felipe Carvalho'
            />
            <UserInfo>
              <Name>Felipe Carvalho</Name>
              <Techs>React.Js, React Native, Node.js</Techs>
            </UserInfo>
          </ItemHeader>
          <Bio>
            Desenvolvedor Junior na empresa Cogoli, fascinado por React e React Native.
          </Bio>
          <Link href='https://github.com/felipecarvalho180'>
            Acessar perfil no github
          </Link>
        </ListItem>

        <ListItem>
          <ItemHeader>
            <UserPicture 
              src='https://avatars2.githubusercontent.com/u/37779345?s=460&v=4'
              alt='Felipe Carvalho'
            />
            <UserInfo>
              <Name>Felipe Carvalho</Name>
              <Techs>React.Js, React Native, Node.js</Techs>
            </UserInfo>
          </ItemHeader>
          <Bio>
            Desenvolvedor Junior na empresa Cogoli, fascinado por React e React Native.
          </Bio>
          <Link href='https://github.com/felipecarvalho180'>
            Acessar perfil no github
          </Link>
        </ListItem>

        <ListItem>
          <ItemHeader>
            <UserPicture 
              src='https://avatars2.githubusercontent.com/u/37779345?s=460&v=4'
              alt='Felipe Carvalho'
            />
            <UserInfo>
              <Name>Felipe Carvalho</Name>
              <Techs>React.Js, React Native, Node.js</Techs>
            </UserInfo>
          </ItemHeader>
          <Bio>
            Desenvolvedor Junior na empresa Cogoli, fascinado por React e React Native.
          </Bio>
          <Link href='https://github.com/felipecarvalho180'>
            Acessar perfil no github
          </Link>
        </ListItem>
      </ListWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  margin-left: 30px;
`;

const ListWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  list-style: none;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const ListItem = styled.li`
  background: #FFF;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 20px;
`;

const ItemHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UserPicture = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  margin-left: 10px;
`;

const Name = styled.strong`
  display: block;
  font-size: 16px;
  color: #333;
`;

const Techs = styled.span`
  font-size: 13px;
  color: #999;
  margin-top: 2px;
`;

const Bio = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 20px;
  margin: 10px 0;
`;

const Link = styled.a`
  color: #8e4dff;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.5s;

  :hover {
    color: #5a2ea6;
  }
`;

export default List;