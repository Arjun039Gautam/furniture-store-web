import styled from "styled-components";

export const AboutSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("https://images.unsplash.com/photo-1505691723518-36a5ac3be353")
    no-repeat center/cover;
    
`;


export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  color: #fff;
  z-index: 2;
`;

export const Content = styled.div`
  padding: 60px 20px;
  max-width: 900px;
  margin: auto;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  color: #444;
  line-height: 1.8;
  text-align: justify;
`;

export const InspirationSection = styled.section`
  padding: 60px 20px;
  max-width: 1000px;
  margin: auto;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 90px;
`;



export const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  justify-content: space-between;
`;

export const ProgressTrack = styled.div`
  width: 80%;
  height: 8px;
  background: #eee;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 10px;
`;

export const ProgressFill = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  background: #333;
`;

export const LogoSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px 20px;
  background: #f8f8f8;
  flex-wrap: wrap;
`;

export const Logo = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 15px;
  color: #333;
`;
