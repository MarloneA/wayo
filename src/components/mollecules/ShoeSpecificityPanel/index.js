import React from "react";
import styled from "styled-components";
import Nouislider from "nouislider-react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from "react-accessible-accordion";

const List = styled.li`
  margin: 15px 0;
  color: gray;

  &:hover {
    cursor: pointer;
    color: black;
  }
`;
const H4 = styled.h4``;

const ShoeSpecificityPanelWrapper = styled.div`
  width: 20vw;
  padding: 0 30px;
`;

const ShoeSpecificityPanel = () => {
  return (
    <ShoeSpecificityPanelWrapper>
      <Accordion allowMultipleExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <H4>CATEGORIES</H4>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <ul>
              <List>All Shoes</List>
              <List>Women Shoes</List>
              <List>Men Shoes</List>
            </ul>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <H4>BRAND</H4>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <ul>
              <List>Nikes</List>
              <List>Adidas</List>
              <List>Asics</List>
              <List>Fila</List>
              <List>Converse</List>
              <List>Vans</List>
              <List>Sketchers</List>
              <List>Caprice</List>
              <List>Tamaris</List>
            </ul>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <H4>SIZE</H4>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <ul>
              <List>45 - 43</List>
              <List>42 - 40</List>
              <List>39 - 37</List>
            </ul>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <H4>PRICE</H4>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Nouislider range={{ min: 0, max: 100 }} start={[20, 80]} connect />
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </ShoeSpecificityPanelWrapper>
  );
};

export default ShoeSpecificityPanel;

// const HashTag = styled.b``;

// <HashTag>#StepInStyleNaWayo</HashTag>;
