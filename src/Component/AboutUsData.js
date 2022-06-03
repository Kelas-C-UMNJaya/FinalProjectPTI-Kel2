import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, SimpleGrid, Container } from "@chakra-ui/react";
import Card from "./Card";

function App() {
  const dataList = [
    {
      id: "1",
      product: "Nama",
      summary: "NIM"
    },
    {
      id: "2",
      product: "Nama",
      summary: "NIM"
    },
    {
      id: "3",
      product: "Nama",
      summary: "NIM"
    },
    {
      id: "4",
      product: "Nama",
      summary: "NIM"
    }
  ];

  return (
    <ChakraProvider>
      <Container maxW="80rem" centerContent>
        <SimpleGrid>
          {dataList.map(function (data) {
            const { id, product, summary } = data;
            return (
              <Card
                key={id}
                product={product}
                summary={summary}
              />
            );
          })}
        </SimpleGrid>
      </Container>
    </ChakraProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);