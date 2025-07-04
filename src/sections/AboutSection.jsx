import { useMediaQuery, useTheme, Typography, Stack } from "@mui/material";
import EnquiryButton from "../components/EnquiryButton";

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack
      px={isMobile ? 2 : 4}
      py={4}
      gap={2}
      justifyContent="space-between"
      alignItems="start"
      direction={isMobile ? "column" : "row"}
    >
      <Typography
        fontSize={isMobile ? "5vw" : "2vw"}
        fontWeight={500}
        flex={1}
        whiteSpace="nowrap"
      >
        About RSJP Developers
      </Typography>
      <Stack justifyContent="space-between" alignItems="start" spacing={2}>
        <Typography
          fontSize={isMobile ? "3vw" : "1vw"}
          fontWeight={500}
          width={isMobile ? "100%" : 1000}
          textAlign="justify"
        >
          RSJP Developers is a Bangalore-based, award-winning real estate
          company dedicated to helping investors discover the most lucrative
          property buying and selling opportunities in the city. In addition to
          residential and commercial projects, we offer expert services in
          rental management, renovation support, legal consultancy for property
          matters, assistance in opening local bank accounts, and guidance for
          company registration within India.
        </Typography>
        {!isMobile && <EnquiryButton text={"Learn more"} redirect="/#" />}
      </Stack>
      {isMobile && <EnquiryButton text={"Learn more"} redirect="/#" />}
    </Stack>
  );
};

export default AboutSection;
