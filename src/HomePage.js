import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Styled Components for Minimalist Productivity Theme
const Container = styled.div`
  font-family: 'Arial, sans-serif';
  color: #333;
  background-color: #f7f7f7;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroSection = styled.section`
  background-color: #e6f2ff;
  color: #333;
  text-align: center;
  padding: 40px 20px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #555;
`;

const HeroButton = styled.button`
  background-color: #b3d9ff;
  color: #333;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #99ccff;
    transform: scale(1.05);
  }
`;

const FeaturesSection = styled.section`
  margin-top: 40px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
  color: #333;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const FeatureCardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: #4d94ff;
  margin-bottom: 15px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const ReviewsSection = styled.section`
  margin-top: 40px;
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const ReviewCardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ReviewName = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #333;
`;

const ReviewText = styled.p`
  font-size: 1rem;
  color: #666;
`;

const ReviewRating = styled.div`
  color: #f0c929;
  margin-top: 10px;
`;

const HomePage = ({ setIsLoggedIn, setname }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    setIsLoggedIn(false);
    setname('');
    navigate('/login');
  };

  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <HeroTitle style={{color:'skyblue'}}>Welcome to Wizzard</HeroTitle>
        <HeroDescription>
          Empowering students with essential tools for academic success. Explore the Resume Builder, manage tasks with the To-Do List, and resolve doubts with the Doubt Section!
        </HeroDescription>
        <HeroButton onClick={logoutHandler}>Get Started</HeroButton>
      </HeroSection>

      {/* Features Section */}
      <FeaturesSection>
        <SectionTitle>Our Key Features</SectionTitle>
        <FeaturesGrid>
          <FeatureCardContainer>
            <FeatureIcon>📄</FeatureIcon>
            <FeatureTitle>Resume Builder</FeatureTitle>
            <FeatureDescription>
              Create a professional resume effortlessly. Customize and download your resume to stand out in your job applications.
            </FeatureDescription>
          </FeatureCardContainer>
          <FeatureCardContainer>
            <FeatureIcon>📝</FeatureIcon>
            <FeatureTitle>To-Do List</FeatureTitle>
            <FeatureDescription>
              Organize your tasks efficiently. Keep track of assignments, deadlines, and personal goals all in one place.
            </FeatureDescription>
          </FeatureCardContainer>
          <FeatureCardContainer>
            <FeatureIcon>💬</FeatureIcon>
            <FeatureTitle>Your Helper</FeatureTitle>
            <FeatureDescription>
              Get answers to all your previously solved questions and share knowledge with peers. A collaborative space for students to excel.
            </FeatureDescription>
          </FeatureCardContainer>
          <FeatureCardContainer>
            <FeatureIcon>💻</FeatureIcon>
            <FeatureTitle>LeetCode Solver</FeatureTitle>
            <FeatureDescription>
              Input the question number and navigate directly to the solution on LeetCode. Enhance your coding skills with ease!
            </FeatureDescription>
          </FeatureCardContainer>
        </FeaturesGrid>
      </FeaturesSection>

      {/* Customer Reviews Section */}
      <ReviewsSection>
        <SectionTitle>What Our Users Say</SectionTitle>
        <ReviewsGrid>
          <ReviewCardContainer>
            <ReviewName>Yash Shukla</ReviewName>
            <ReviewText>
              The Resume Builder helped me create a polished resume in no time! Highly recommend it.
            </ReviewText>
            <ReviewRating>⭐⭐⭐⭐⭐</ReviewRating>
          </ReviewCardContainer>
          <ReviewCardContainer>
            <ReviewName>Shakti</ReviewName>
            <ReviewText>
              Love the To-Do List feature. It keeps me organized and on top of my assignments!
            </ReviewText>
            <ReviewRating>⭐⭐⭐⭐⭐</ReviewRating>
          </ReviewCardContainer>
          <ReviewCardContainer>
            <ReviewName>Avinash</ReviewName>
            <ReviewText>
              The Doubt Section is amazing for getting quick help from peers. It's a great community!
            </ReviewText>
            <ReviewRating>⭐⭐⭐⭐</ReviewRating>
          </ReviewCardContainer>
          <ReviewCardContainer>
            <ReviewName>Shivam</ReviewName>
            <ReviewText>
              Leetcode solver is top class! I just loved it. Do use it once!
            </ReviewText>
            <ReviewRating>⭐⭐⭐⭐</ReviewRating>
          </ReviewCardContainer>
        </ReviewsGrid>
      </ReviewsSection>
    </Container>
  );
};

export default HomePage;
