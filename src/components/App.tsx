import React from 'react';
import styled from 'styled-components';
import orderBy from 'lodash/orderBy';
import ReactJsonView from 'react-json-view';

import { useSocketData } from '../hooks/useSocketData';

import Loader from './Loader';
import Panel from './Panel';
import Member from './Member';
import { SpecialText } from './SpecialText';

const MemberGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  margin: 0 0 25px;
`;

export const App = () => {
  const referenceData = useSocketData('referenceData');
  const guildData = useSocketData('guildData');

  if (!referenceData || !guildData) return <Loader />;

  return (
    <>
      <div className="App__header">
        <SpecialText text={guildData.guild.name} />
      </div>
      <div className="App__content">
        <MemberGrid>
          {orderBy(Object.values(guildData.members), 'name').map(player => (
            <Member key={player.name} data={player} />
          ))}
        </MemberGrid>
        <Panel title="Raw JSON" collapse>
          <ReactJsonView theme="eighties" style={{ padding: 10 }} src={guildData} />
        </Panel>
      </div>
    </>
  );
};
