import { useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';

const sliderContent = [
  {
    title: 'The best quality products',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed excepturi officiis consectetur? Rerum ipsa, officiis ducimus praesentium numquam earum accusantium illo distinctio. Quibusdam cum similique repellendus, voluptas modi eos?',
    imageUrl:
      'https://img-lescon.mncdn.com/UPLOAD/URUNLER/thumb/20NAE00ARTLM_633_7_medium.jpg',
  },
  {
    title: 'Unmatched Comfort',
    description:
      'Discover the comfort with our state-of-the-art design that fits perfectly to your lifestyle. Our second product offers everything you need for your day-to-day activities.',
    imageUrl:
      'https://www.lescon.com.tr/UPLOAD/URUNLER/thumb/17NAE005009M_010_1_medium.jpg',
  },
];

const ImageSlider = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Stack
        direction="column"
        justifyContent="center"
        sx={{
          backgroundColor: 'aliceblue',
          padding: '20px',
          borderRadius: '10px',
          height: '500px',
          width: '100%',
        }}
      >
        <Typography variant="h2">{sliderContent[activeStep].title}</Typography>
        <Typography>{sliderContent[activeStep].description}</Typography>
      </Stack>
      <Box>
        <img
          src={sliderContent[activeStep].imageUrl}
          alt={`image-${activeStep}`}
          style={{ height: '500px', borderRadius: '10px' }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
          {sliderContent.map((_, index) => (
            <Box
              key={index}
              sx={{
                height: 15,
                width: 15,
                bgcolor: index === activeStep ? 'primary.main' : 'grey.500',
                borderRadius: '50%',
                m: 1,
                cursor: 'pointer',
              }}
              onClick={() => handleStepChange(index)}
            />
          ))}
        </Box>
      </Box>
    </Stack>
  );
};

export default ImageSlider;
