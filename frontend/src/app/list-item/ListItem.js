
import React from 'react';
import styled from 'styled-components';

const List = ({
  devs
}) => {
  return(
    <>
      { devs.map(d => (
        <ListItem key={ d.devId }>
          <ItemHeader>
            <UserPicture 
              src={ d.avatar_url }
              alt={ d.name }
            />
            <UserInfo>
              <Name>{ d.name }</Name>
              <Techs>{ d.techs.join(', ') }</Techs>
            </UserInfo>
          </ItemHeader>
          <Bio>{ d.bio }</Bio>
          <Link
            target='_blank' 
            href={ `https://github.com/${ d.github_username }` }
          >
            Acessar perfil no github
          </Link>
        </ListItem>
      )) }
    </>
  );
};

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