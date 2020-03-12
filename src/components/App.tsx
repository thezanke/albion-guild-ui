import React from 'react';
import styled from 'styled-components';
import orderBy from 'lodash/orderBy';
import ReactJsonView from 'react-json-view';

import { SpecialText } from './SpecialText';
import { GuildData } from './GuildData/GuildData';

const MemberGrid = styled.div`
  padding: 5px;

  .member {
    display: inline-block;
    border: 1px solid rgb(180, 180, 200);
    margin: 5px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    padding: 5px;
    background: rgb(253, 253, 255);

    .name {
      text-align: center;
      font-size: 1.2em;
      margin-top: 5px;
    }

    .stats {
      padding: 0;
      border-spacing: 0;
      border-collapse: collapse;
      background: white;

      td {
        padding: 3px 5px;
        border: 1px solid rgb(180, 180, 200);
      }
    }
  }
`;

const formatter = new Intl.NumberFormat();

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10px;

  .guildName {
    margin: 0.5em 0;
    font-size: 2.5em;
    text-align: center;
  }
`;

const App = () => {
  return (
    <AppStyle>
      <GuildData loading={<SpecialText text="Loading..." />}>
        {data => (
          <>
            <SpecialText className="guildName" text={data.guild.name} />
            <MemberGrid>
              {orderBy(Object.values(data.members), 'killFame', 'desc').map(player => (
                <div className="member" key={player.name}>
                  <SpecialText className="name" text={player.name} />
                  <strong>PvP</strong>
                  <table className="stats">
                    <tbody>
                      <tr>
                        <td>Kill Fame</td>
                        <td>{formatter.format(player.killFame)}</td>
                      </tr>
                      <tr>
                        <td>Death Fame</td>
                        <td>{formatter.format(player.deathFame)}</td>
                      </tr>
                      <tr>
                        <td>Fame Ratio</td>
                        <td>{formatter.format(player.fameRatio)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </MemberGrid>
            <div className="codeblock">
              <ReactJsonView src={data} />
            </div>
          </>
        )}
      </GuildData>
    </AppStyle>
  );
};

export default App;
