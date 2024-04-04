import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 0.2rem;
  margin: 1rem auto;
  padding-right: 2rem;
  overflow: hidden;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: auto;
    gap: 0.8rem;
    padding-right: 0;
  }
`;

export const Selector = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.gray800};
  color: ${(props) => props.color || props.theme.colors.black};
  width: 100%;
  min-height: 2rem;
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: background 0.3s, transform 0.3s;
  padding: 0 1rem;

  &:hover,
  &.selected {
    background-color: ${(props) => props.color || props.theme.colors.gray800};
    color: ${(props) => (props.color ? props.theme.colors.black : props.theme.colors.white)};
    transform: translateX(5px) scale(1.02);
    cursor: pointer;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    border-radius: 20px;
    &:hover,
    &.selected {
      transform: translateX(0) scale(1.02);
    }
  }
`;

export const Cleaner = styled.button`
  background: transparent;
  color: ${(props) => props.theme.colors.white};
  border: none;
  justify-content: start;
  align-items: center;
  display: flex;
  padding: 1rem;
  cursor: pointer;

  svg {
    margin-right: 10px;
  }

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    text-align: center;
    padding: 0 1rem;
  }
`;
