import React, { useState } from 'react';
import styled from 'styled-components';

import theme from '../styles/theme';

const StyledPanel = styled.div<any>`
  background: ${theme.B400};
  color: ${theme.font_primary};
  border: 1px solid ${theme.B600};
  margin: 0 0 25px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  &:last-child {
    margin: 0;
  }

  .Panel__header {
    display: flex;
    font-size: 16px;
    font-weight: 700;
    background: ${theme.B600};
    border-bottom: 2px solid ${theme.B600};
    padding: 15px;
    cursor: pointer;

    &-title {
      margin-right: 10px;
    }

    &-actions {
      margin-left: auto;
    }
  }

  .Panel__content {
    padding: ${props => (props.collapse ? 0 : '15px')};
  }
`;

const Panel = ({ children, title, defaultClosed, ...rest }: any) => {
  const [toggled, setToggled] = useState(!defaultClosed);

  const onToggle = () => setToggled(t => !t);

  return (
    <StyledPanel {...rest}>
      {title && (
        <div className="Panel__header" onClick={onToggle}>
          <div className="Panel__header-title">{title}</div>
        </div>
      )}
      {toggled && <div className="Panel__content">{children}</div>}
    </StyledPanel>
  );
};

export default Panel;
