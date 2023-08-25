import { Box } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box display={{ base: selectedChat ? "flex" : "none", md: "flex" }} alignItems="center" flexDir="column" fontFamily='Helvetica' p={6} bg="white" w={{ base: "100%", md: "68%" }} borderRadius="lg" borderWidth="0px">
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;
