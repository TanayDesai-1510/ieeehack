import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Image, 
  Stack
} from "@chakra-ui/react";
import data from "../opps.json";

function Oppurtunities() {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: " 1fr 1fr 1fr", padding:'20px', gap: '2rem' }}
    >
      {data.map((d) => {
        return (
            <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            
            //   style={{ width: "50%" }}
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="/tp.png"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading size="md">{d.name}</Heading>
              </CardBody>

              <CardFooter>
                <a href={d.link} target="_blank">
                  {" "}
                  <Button variant="solid" colorScheme="blue">
                    View
                  </Button>
                </a>
              </CardFooter>
            </Stack>
          </Card>
        );
      })}
    </div>
  );
}

export default Oppurtunities;
