import React from 'react'
import Head from 'next/head'
import {
  Box,
  HStack,
  Stack,
  Image,
  Text,
  Button,
  VStack,
} from '@chakra-ui/react'

const Index = () => {
  return (
    <>
      <Head><title>ISKCON Edu App</title></Head>
      <Box
        pos={'relative'}
        width={'full'}
        h={['80vh', '95vh']}
        bgImg={'/bgimg.jpg'}
        bgPos={'center'}
        bgSize={'cover'}
      >
        <Box
          p={4} display={'flex'}
          pos={'absolute'} t={0}
          l={0} w={'full'} color={'white'}
        >
          <Text className='messiri' mx={'auto'}>ISKCON Inc.</Text>
        </Box>
        <VStack
          spacing={0} pt={'6rem'}
          w={'full'}
          h={'inherit'} color={'white'}
          bgGradient={'linear(to-br, #13005AE6, #00337C80)'}
        >
          <Text fontSize={['xl', '6xl']} fontWeight={'semibold'} py={'2rem'}>
            Spiritual Satisfaction Is Here
          </Text>
          <Button
            colorScheme={'twitter'}
            rounded={'full'} size={'lg'}
          >
            Login Now To ISKCON Edu
          </Button>
          <Image pos={'relative'} src='/mockuper.png' w={['full', 'xl']} top={'10vh'} />
        </VStack>
      </Box>
      <Stack 
      direction={['column', 'row']}
      p={[4,16]} justifyContent={'space-between'}
      >
        <Box maxW={['full', '40%']}>
          <Text 
          fontSize={['xl','4xl']}
          pt={[4,8]} fontWeight={'semibold'}
          >
            Attend Free Live Sessions
          </Text>
          <Text py={6} fontSize={'lg'} lineHeight={'7'}>
            You can attend live sessions about the Bhagvatam, the Bhagvad Gita, 
            Vedic Cosmology and many other life changing topics from 
            His Grace Gauranga Sundar Prabhu.
            <br />
            That too for FREE!
          </Text>
          <Button
            colorScheme={'twitter'}
            rounded={'full'} size={'lg'}
          >
            Login Now
          </Button>
        </Box>
        <Box w={['full', '50%']} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
          <Image src='/ss1.jpeg' w={['full', '48']} mx={'auto'} rounded={16} boxShadow={'xl'} />
        </Box>
      </Stack>
      <Stack 
      direction={['column', 'row-reverse']}
      p={[4,16]} justifyContent={'space-between'}
      >
        <Box maxW={['full', '40%']}>
          <Text 
          fontSize={['xl','4xl']}
          pt={[4,8]} fontWeight={'semibold'}
          >
            Group Chat
          </Text>
          <Text py={6} fontSize={'lg'} lineHeight={'7'}>
            Don't hessitate to ask for the solutions about your problems. <br />
            Ask in the group or directly from our Guru ji.
            <br />
            No more suffering from now onwards!
          </Text>
          <Button
            colorScheme={'twitter'}
            rounded={'full'} size={'lg'}
          >
            Login Now
          </Button>
        </Box>
        <Box w={['full', '50%']} display={'flex'} flexDirection={'row'} alignItems={'center'}>
          <Image src='/ss2.jpeg' w={['full', '48']} mx={'auto'} rounded={16} boxShadow={'xl'} />
        </Box>
      </Stack>
      <Stack 
      direction={['column', 'row']}
      p={[4,16]} justifyContent={'space-between'}
      >
        <Box maxW={['full', '40%']}>
          <Text 
          fontSize={['xl','4xl']}
          pt={[4,8]} fontWeight={'semibold'}
          >
            Precious Knowledge
          </Text>
          <Text py={6} fontSize={'lg'} lineHeight={'7'}>
            Keep learning from free pdfs about Vedic Cosmology, 
            Devotional Service and Spiritual worlds. 
            Attempt quizes and test your learning.
            <br />
            Curiousity shoul never stop!
          </Text>
          <Button
            colorScheme={'twitter'}
            rounded={'full'} size={'lg'}
          >
            Login Now
          </Button>
        </Box>
        <Box w={['full', '50%']} display={'flex'} flexDirection={'row'} alignItems={'center'}>
          <Image src='/ss4.jpeg' w={['full', '48']} mx={'auto'} rounded={16} boxShadow={'xl'} />
        </Box>
      </Stack>
    </>
  )
}

export default Index