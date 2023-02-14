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
        h={['75vh', '95vh']}
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
          spacing={0} pt={['2rem', '6rem']}
          w={'full'}
          h={'inherit'} color={'white'}
          bgGradient={'linear(to-br, #13005AE6, #00337C80)'}
        >
          <Text fontSize={['2xl', '6xl']} fontWeight={'semibold'} py={'2rem'}>
            Spiritual Satisfaction Is Here
          </Text>
          <Button
            colorScheme={'twitter'}
            rounded={'full'} size={'lg'}
          >
            Login Now To ISKCON Edu
          </Button>
          <Image pos={['absolute','relative']} src='/mockuper.png' w={['full', 'xl']} top={['unset','10vh']} bottom={['-1rem', 'unset']} />
        </VStack>
      </Box>
      <Box
      p={[4,16]}
      >
        <Text pt={16}>
          Iskcon,Inc. has launched its official all in one Spiritual & Vedic Education app Named " IskconInc Edu " , 
          which will have free Live and pre recorded Classes on various Spiritual Topics like Bhagavad Gita and 
          Srimad Bhagavtam in a structured manner with Study material , Tests , Quiz , doubt solving , competitions etc. , 
          It will also have training classes on various vedic skills like Deity Worship , Prasadam Cooking , Bhajan Singinng etc. , 
          It will also have structered courses from lower to higher spiritual studies like Bhakti Shastri and Bhakti Adhikari , 
          For kids it will be having special Vedic Camps and much more !! So what to wait for? 
          <br />
          Login into the app now
        </Text>
      </Box>
      <Stack 
      direction={['column', 'row']}
      p={[4,16]} justifyContent={'space-between'}
      >
        <Box maxW={['full', '40%']}>
          <Text 
          fontSize={['2xl','4xl']}
          pt={[8]} fontWeight={'semibold'}
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
          <Text fontSize={'xs'} mb={6}>Organisation Code - orpoi</Text>
        </Box>
        <HStack w={['full', '50%']} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
          <Image src='/poster3.jpeg' w={['40','48']} rounded={16} boxShadow={'xl'} />
          <Image src='/poster2.jpeg' w={['40','48']} rounded={16} boxShadow={'xl'} />
        </HStack>
      </Stack>
      <Stack 
      direction={['column', 'row-reverse']}
      p={[4,16]} justifyContent={'space-between'}
      >
        <Box maxW={['full', '40%']}>
          <Text 
          fontSize={['2xl','4xl']}
          pt={[8]} fontWeight={'semibold'}
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
          <Text fontSize={'xs'} mb={6}>Organisation Code - orpoi</Text>
        </Box>
        <HStack w={['full', '50%']} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
          <Image src='/poster1.jpeg' w={['40','48']} rounded={16} boxShadow={'xl'} />
          <Image src='/poster5.jpeg' w={['40','48']} rounded={16} boxShadow={'xl'} />
        </HStack>
      </Stack>
      <Stack 
      direction={['column', 'row']}
      p={[4,16]} justifyContent={'space-between'}
      >
        <Box maxW={['full', '40%']}>
          <Text 
          fontSize={['2xl','4xl']}
          pt={[8]} fontWeight={'semibold'}
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
          <Text fontSize={'xs'} mb={6}>Organisation Code - orpoi</Text>
        </Box>
        <HStack w={['full', '50%']} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
          <Image src='/poster4.jpeg' w={['40','48']} rounded={16} boxShadow={'xl'} />
          <Image src='/poster2.jpeg' w={['40','48']} rounded={16} boxShadow={'xl'} />
        </HStack>
      </Stack>
      <Box w={'full'} p={4} bg={'twitter.400'} color={'white'}>
        <Text textAlign={'center'}>&copy; Copyright 2023 - ISKCON Inc.</Text>
      </Box>
    </>
  )
}

export default Index