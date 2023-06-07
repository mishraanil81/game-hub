import React from "react";
import useGenre, { Genre } from "../hooks/useGenre";
interface props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
import {
  HStack,
  List,
  ListItem,
  Image,
  Heading,
  Spinner,
  Button,
} from "@chakra-ui/react";
import getCropedImageUrl from "../services/image-url";
const GenreList = ({ selectedGenre, onSelectGenre }: props) => {
  const { data, isLoading, error } = useGenre();
  if (isLoading) return <Spinner></Spinner>;
  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="10px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCropedImageUrl(genre.image_background)}
              ></Image>
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default GenreList;
