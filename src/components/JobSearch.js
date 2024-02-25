import React, {useEffect, useState} from 'react'
import axios from "axios";
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
function JobSearch() {
  const [job, setJob] = useState([]);
    useEffect(() => {
        async function tp() {
    
          const options = {
            method: "GET",
            url: "https://jobicy.p.rapidapi.com/api/v2/remote-jobs",
            headers: {
              "X-RapidAPI-Key":
                "9895b278b8msh842dd1fd674b771p13fe5ajsnf043600eb9c9",
              "X-RapidAPI-Host": "jobicy.p.rapidapi.com",
            },
          };
    
          try {
            const response = await axios.request(options);
            console.log(response.data);
            setJob(response.data.jobs);
          } catch (error) {
            console.error(error);
          }
        }
        tp();
      }, []);
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: " 1fr 1fr 1fr", padding:'20px', gap: '2rem' }}
    >
      {job?.map((d) => {
        return (
            <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            
            //   style={{ width: "50%" }}
          >
            <Image
              objectFit="contain"
              maxW={{ base: "100%", sm: "200px" }}
              src={d.companyLogo}
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading size="md">{d.companyName}</Heading>
                <Heading size="sm">{d.jobLevel}</Heading>
                <Heading size="sm">{d.jobTitle}</Heading>
                <Heading size="sm">{d.pubDate}</Heading>

              </CardBody>

              <CardFooter>
                <a href={d.url} target="_blank">
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
  )
}

export default JobSearch
