import React from 'react';
import styled from 'styled-components';
import orderBy from 'lodash/orderBy';
import ReactJsonView from 'react-json-view';

import GlobalStyle from '../styles/global';
import NormalizeStyle from '../styles/normalize';

import Loader from './Loader';
import Panel from './Panel';
import Member from './Member';
import { SpecialText } from './SpecialText';
import { GuildData } from './GuildData/GuildData';

const MemberGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  margin: 0 0 25px;
`;

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 40px 40px;

  .App__header {
    padding: 45px;
    font-size: 2.5em;
    text-align: center;
  }

  .App__content {
    padding: 0 35px 45px;
  }
`;

const App = () => {
  return (
    <AppStyle>
      <NormalizeStyle />
      <GlobalStyle />
      <GuildData loading={<Loader />}>
        {data => (
          <>
            <div className="App__header">
              <SpecialText text={data.guild.name} />
            </div>
            <div className="App__content">
              <MemberGrid>
                {orderBy(Object.values(data.members), 'name').map(player => (
                  <Member key={player.name} data={player} />
                ))}
              </MemberGrid>
              <Panel title="Raw JSON" collapse>
                <ReactJsonView theme="eighties" style={{ padding: 10 }} src={data} />
              </Panel>
            </div>
          </>
        )}
      </GuildData>
    </AppStyle>
  );
};

export default App;
