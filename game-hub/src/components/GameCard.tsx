import React from 'react';
import { Game } from '../hooks/useGames';
import { Card } from '@chakra-ui/card';
import { CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import PlatformiconList from './PlatformiconList';
import CriticScore from './CriticScore';
// import getCroppedImageUrl from '../services/image-url';


interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={(game.background_image)} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent='space-between' marginBottom={3}>
         <PlatformiconList platforms={game.parent_platforms.map(p => p.platform)}/>
         <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard;