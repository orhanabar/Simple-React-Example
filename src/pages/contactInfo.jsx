import { Stack, Text, Container, HStack, Center } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Typed from "react-typed";

export default function Contact({ color }) {
  const emailAddress = "orhanabar@gmail.com";
  const phoneNumber = "+905411234567";
  const linkedin = () => {
    window.open(`https://www.google.com/`, "_blank", "noreferrer,noopener");
  };
  const github = () => {
    window.open(`https://www.google.com/`, "_blank", "noreferrer,noopener");
  };
  const email = () => {
    window.open(`https://www.google.com/`, "_blank", "noreferrer,noopener");
  };
  return (
    <>
      <Container maxW={"3xl"} id="contact">
        <Stack>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <p>Görüş, Düşünce, Öneri ve Siparişleriniz İçin</p>
            <Typed
              strings={["Bizimle İletişime Geçebilirsiniz..."]}
              typeSpeed={160}
              loop
            />
            <Text>{emailAddress}</Text>
            <Text>{phoneNumber}</Text>
            <Center>
              <HStack pt={4} spacing={4}>
                <FaLinkedin onClick={linkedin} size={28} />
                <FaGithub onClick={github} size={28} />
                <FaEnvelope onClick={email} size={28} />
              </HStack>
            </Center>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
