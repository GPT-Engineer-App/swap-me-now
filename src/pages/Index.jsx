import { useState } from "react";
import { Container, VStack, HStack, Box, Text, Image, Button, Input, IconButton, useToast } from "@chakra-ui/react";
import { FaExchangeAlt, FaPlus } from "react-icons/fa";

const Index = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Old Laptop", image: "https://images.unsplash.com/photo-1534029731425-0d646dd67df3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvbGQlMjBsYXB0b3B8ZW58MHx8fHwxNzE3NDE1NDkzfDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 2, name: "Vintage Camera", image: "https://images.unsplash.com/photo-1601854266103-c1dd42130633?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2FtZXJhfGVufDB8fHx8MTcxNzQxNTQ5M3ww&ixlib=rb-4.0.3&q=80&w=1080" },
  ]);
  const [newItemName, setNewItemName] = useState("");
  const [newItemImage, setNewItemImage] = useState("");
  const toast = useToast();

  const handleAddItem = () => {
    if (newItemName && newItemImage) {
      setItems([...items, { id: items.length + 1, name: newItemName, image: newItemImage }]);
      setNewItemName("");
      setNewItemImage("");
      toast({
        title: "Item added.",
        description: "Your item has been added to the swap list.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error.",
        description: "Please provide both name and image URL.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          Swap This For That
        </Text>
        <HStack spacing={2} width="100%">
          <Input placeholder="Item Name" value={newItemName} onChange={(e) => setNewItemName(e.target.value)} />
          <Input placeholder="Image URL" value={newItemImage} onChange={(e) => setNewItemImage(e.target.value)} />
          <IconButton aria-label="Add Item" icon={<FaPlus />} onClick={handleAddItem} />
        </HStack>
        <VStack spacing={4} width="100%">
          {items.map((item) => (
            <HStack key={item.id} spacing={4} width="100%" p={4} borderWidth={1} borderRadius="md">
              <Image src={item.image} boxSize="100px" objectFit="cover" alt={item.name} />
              <Box flex="1">
                <Text fontSize="xl" fontWeight="bold">
                  {item.name}
                </Text>
              </Box>
              <Button leftIcon={<FaExchangeAlt />} colorScheme="teal">
                Swap
              </Button>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
