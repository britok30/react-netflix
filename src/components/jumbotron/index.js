import React from 'react';
import {
    Inner,
    Title,
    SubTitle,
    Pane,
    Image,
    Container,
} from './styles/jumbotronStyles';

export default function Jumbotron({
    children,
    direction = 'row',
    ...restProps
}) {
    return <Inner direction={direction}>{children}</Inner>;
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
};
