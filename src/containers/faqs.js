import React from 'react';
import { Accordion } from '../components';

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        <Accordion.Item>
          <Accordion.Header>What is Netflix?</Accordion.Header>
          <Accordion.Body>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV programmes, films, anime, documentaries and more –
            on thousands of internet-connected devices.\n\nYou can watch as much
            as you want, whenever you want, without a single advert – all for
            one low monthly price. There's always something new to discover, and
            new TV programmes and films are added every week!
          </Accordion.Body>
        </Accordion.Item>
      </Accordion.Frame>
    </Accordion>
  );
}
