

import React from 'react';
import styled from 'styled-components/native';
import { useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

function Profile() {
  const route = useRoute();

  return (
    <Wrapper
      source={{ uri: `https://github.com/${ route.params?.github_username }` }}
    />
  );
};

const Wrapper = styled(WebView)`
  flex: 1;
`;

export default Profile;