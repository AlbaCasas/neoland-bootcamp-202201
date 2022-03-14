import styled from "styled-components";
import Box from "../../components/Box";
import Button from "../../components/Button";
import Text from "../../components/Text";

export const Heading = styled(Box)`
  display: flex;
  height: 88px;
  overflow: hidden;
  border-radius: 10px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyledJobHeadingCard = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
    margin-left: 40px;
  }
`;

export const ImageCompany = styled.img`
  width: 32px;
  height: 32px;
`;

export const CreateJobButton = styled(Button)`
  height: 48px;
  width: 56px;
  min-width: 0px;
  align-self: center;
  justify-self: center;
  font-size: 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-width: 136px;
  }
`;

export const Table = styled.table`
  display: flex;
  height: auto;
  margin-top: 32px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  flex-direction: column;
`;

export const RowHeader = styled.tr`
  width: 100%;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: auto;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  justify-content: space-between;
`;

export const Row = styled.tr`
  height: 48px;
  padding: 16px;
  width: 100%;
  border-top: 1px solid #dddddd;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const ImageCandidates = styled.img`
  width: 32px;
  height: 32px;
`;

export const TextDesktop = styled(Text)`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
    text-transform: capitalize;
  }
`;

export const TextMobile = styled(Text)`
  display: block;
  font-size: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const TitleColumn = styled.td`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 200px;
  }
`;

export const LocationColumn = styled.td`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
    width: 160px;
  }
`;

export const RoleColumn = styled.td`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
    width: 160px;
  }
`;

export const CandidateColumn = styled.td`
  width: 95px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 320px;
  }
`;

export const CandidatesWrapper = styled.td`
  height: 32px;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ContainerJobs = styled.div`
  display: flex;
  height: 56px;
  width: 104px;
  gap: 16px;
  align-items: center;
  border-radius: 5px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 160px;
  }
`;
export const ContainerIcon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 32px;
  line-height: 0px;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  align-items: center;
  border-radius: 5px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 48px;
    height: 48px;
  }
`;

export const ContainerText = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
  }
`;

export const Subtitle = styled(Text)`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
  }
`;

export const Title = styled(Text)`
  font-size: 28px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.text};
`;