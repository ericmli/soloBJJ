import styled from 'styled-components/native';
import { TitleProps } from '.';

export const Title = styled.Text<Omit<TitleProps, 'text'>>`
  font-size: ${({ theme, size }) => theme.font.size[size || 'small']};
  font-family: ${({ theme, family }) => theme.font[family || 'regular']};
  color: ${({ theme, color }) => theme.colors[color || 'secondary']};
  margin-top: ${({ theme, marginTop }) => (marginTop ? theme.spacings[marginTop] : '0px')};
  margin-bottom: ${({ theme, marginBottom }) =>
    marginBottom ? theme.spacings[marginBottom] : '0px'};
  text-align: ${({ align }) => (align ? align : 'left')};
  margin-left: ${({ theme, marginLeft }) => (marginLeft ? theme.spacings[marginLeft] : '0px')};
  margin-right: ${({ theme, marginRight }) => (marginRight ? theme.spacings[marginRight] : '0px')};
  text-decoration-line: ${({ strikethrough }) => (strikethrough ? 'line-through' : 'none')};
`;
