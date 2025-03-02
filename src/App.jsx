import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import Heading from "./components/Heading/Heading";

function App() {
  return (
    <>
      <Section>
        <Container>
          <Heading title="Task 1 - Profile" bottom />

          <Heading title="Task 2 - FriendList" top bottom />

          <Heading title="Task 3 - TransactionHistory" top bottom />
        </Container>
      </Section>
    </>
  );
}

export default App;
