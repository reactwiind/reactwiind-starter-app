import {Container} from "reactwiind";

export const Wrapper = ({children}:any) => {  
  return (
    <Container padding="p-8">  
        {children}
    </Container>
  );
};