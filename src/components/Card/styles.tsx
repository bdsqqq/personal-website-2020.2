import styled from "styled-components";
import { mq } from "../../styles/global";

export const MetaWrapper = styled.div`
  position: absolute;
  right: -5px;
  bottom: -15px;
  width: 95%;
  max-height: 105%;
  overflow: auto;
  ${mq[1]} {
    transform: scale(0);
    transform-origin: 50% 50%;
    transition: all 100ms ease-out;
    visibility: hidden;
  }

  &::-webkit-scrollbar {
    width: 0.25rem;
    height: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background: #000000;
  }

  &::-webkit-scrollbar-thumb {
    background: #f3f3f3;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  margin: 20px auto;
  width: 95%;
  ${mq[1]} {
    &:hover {
      cursor: pointer;
      & ${MetaWrapper} {
        transform: scale(1);
        transition: all 200ms cubic-bezier(0.785, 0.01, 0, 1.415);
        visibility: visible;
      }
    }
  }
`;
export const CardImage = styled.img`
  width: 95%;
  display: block;
  height: auto;
  object-fit: cover;
  transition: all 200ms cubic-bezier(0.785, 0.01, 0, 1.415);
`;

export const Meta = styled.div`
  background: rgba(0, 0, 0, 0.9);
  padding: 15px 15px 10px;
  color: white;
  width: 100%;
`;
export const MetaHeader = styled.div`
  text-decoration: none;
  color: #f3f3f3;
  font-size: 1.3em;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
`;
export const MetaHeaderItem = styled.span`
  display: block;
`;
export const MetaRole = styled.div`
  width: 50%;
`;
export const MetaToolsWrapper = styled.div`
  padding: 10px 0;
  width: 100%;
`;
export const Tool = styled.span`
  padding: 5px;
  background: #575151;
  border-radius: 1px;
  margin-right: 8px;
  font-size: 0.8em;
  line-height: 3em;
  ${mq[1]} {
    font-size: 1em;
  }
`;

export const MetaButtonsWrapper = styled.div`
  padding: 5px 0;
  margin: 0 auto;
  width: auto;
`;

export const Button = styled.a`
  cursor: pointer;
  padding: 6px;
  background: #f3f3f300;
  border-radius: 1px;
  margin-right: 8px;
  font-size: 0.9em;
  border: solid 1px #f3f3f3;
  color: #f3f3f3;
  transition: ease-in-out 0.3s;

  ${mq[1]} {
    font-size: 1.1em;
  }

  &:hover {
    background: #f3f3f3;
    color: #000000;
  }
`;

export const DisabledButton = styled(Button)`
  pointer-events: none;
  cursor: default;
  opacity: 0.4;

  &:hover {
    background: #f3f3f300;
    color: #f3f3f3;
  }
`;
