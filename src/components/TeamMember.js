import React from 'react'
import styled from 'styled-components/macro'
import theme from '../styles//theme'
const { colors } = theme

const Container = styled.div`
  color: ${colors.dark};
`

const ProfileImage = styled.img`
  width: 100%;
  margin-bottom: 2rem;
`

const Name = styled.h3`
  color: ${colors.gold};
  font-size: 2.1rem;
  font-weight: 500;
  margin-bottom: 3px;
`

const Position = styled.i`
  font-size: 1.8rem;
  color: #A6A6A6;
`

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 300;
  margin: 1rem 0;
  color: ${colors.white};
`

const TeamMember = ({imgPath, name, position, description}) => {
  return (
    <Container>
      <ProfileImage src={`images/equipo/${imgPath}.png`}/>
      <Name>{name}</Name>
      <Position>{position}</Position>
      <Description dangerouslySetInnerHTML={{__html: description}}/>
    </Container>
  )
}

export default TeamMember