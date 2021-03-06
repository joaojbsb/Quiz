import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'




const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

function Head(props){
  return <title>{props.children}</title>
}
//function Title(props){
//  return <h1>{props.children}</h1>
//}

//const BackgroundImage = styled.div`
// background-image: url(${db.bg});
//  flex: 1;
//  background-size: cover;
//  background-position: center;
//`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return ( 
    <div>
      <Head>Quiz</Head>
      <QuizBackground BackgroundImage ={db.bg}>
        <QuizContainer>
          <Title>Quiz</Title>

          <Widget>

            <Widget.Header>
              <h1>The legend of Zelda</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Lorem ipsum dolor</p>
            </Widget.Content>

          </Widget>

          <Widget>

            <Widget.Header>
              <h1>The legend of Zelda</h1>
            </Widget.Header>

            <Widget.Content>
              <p>Lorem ipsum dolor</p>
            </Widget.Content>

          </Widget>
          <Footer />
        </QuizContainer>  
        <GitHubCorner projectUrl= "Home"/>      
      </QuizBackground>
    </div> 
    ); 
}
