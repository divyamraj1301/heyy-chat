import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box display="flex" justifyContent="center" p={3}  w="100%" bgColor='linear-gradient(120deg, silver, blue)' m="40px 0 15px 0" borderRadius="lg" borderWidth="15px">
        <Text fontSize="4xl" fontFamily="Helvetica" fontWeight='bold' color="black">
          Heyy-Chat
        </Text>
      </Box>
      <Box bgColor='linear-gradient(120deg, silver, blue)' w="100%" p={4} textColor="black" borderRadius="lg" borderWidth="16px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
