import React from 'react';
import useGenres  from '../hooks/useGenres';
import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
//import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
    const {data} = useGenres();
  //function getCroppedImageUrl(image_background: string): string | undefined {
   // throw new Error('Function not implemented.');
 // }

  return (
    <List>
       {data.map(genre => 
      <ListItem key={genre.id} paddingY='5px'>
        <HStack>
          <Image boxSize='32px' borderRadius={8} src={(genre.image_background)}/>
          <Text fontSize='lg'>{genre.name}</Text>
        </HStack>
      </ListItem>)} 
    </List>
  )
}

export default GenreList;