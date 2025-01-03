import { TonConnectButton } from '@tonconnect/ui-react';

import { useCounterContract } from 'hooks/contract/useCounterContract';
import { useTonConnect } from 'hooks/ton/useTonConnect';

import {
  Button,
  Card,
  Ellipsis,
  FlexBoxCol,
  FlexBoxRow,
} from '../../styled/styled';

export function Counter() {
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();

  return (
    <div className="Container">
      <TonConnectButton />

      <Card>
        <FlexBoxCol>
          <h3>Counter</h3>
          <FlexBoxRow>
            <b>Address</b>
            <Ellipsis>{address}</Ellipsis>
          </FlexBoxRow>
          <FlexBoxRow>
            <b>Value</b>
            <div>{value ?? 'Loading...'}</div>
          </FlexBoxRow>
          <Button
            disabled={!connected}
            className={`Button ${connected ? 'Active' : 'Disabled'}`}
            onClick={() => {
              sendIncrement();
            }}
          >
            Increment
          </Button>
        </FlexBoxCol>
      </Card>
    </div>
  );
}
