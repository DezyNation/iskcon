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
  Show,
} from '@chakra-ui/react'
import Link from 'next/link'

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
          <Link href={'https://app.iskconincedu.com/'}>
            <Button
              colorScheme={'twitter'}
              rounded={'full'} size={'lg'}
            >
              Login Now To ISKCON Edu
            </Button>
          </Link>
          <Text fontSize={'xs'}>Organisation Code - orpoi</Text>
          <Image pos={['absolute', 'relative']} src='/mockuper.png' w={['full', 'xl']} top={['unset', '10vh']} bottom={['-1rem', 'unset']} />
        </VStack>
      </Box>
      <Box p={[4, 16]}>
        <Text pt={8} textAlign={'center'} fontWeight={'semibold'} fontSize={['xl', '3xl']}>Download Our App</Text>
        <Text pt={4} textAlign={'center'} fontWeight={'medium'} fontSize={['lg', 'lg']}>Organisation Code For iOS Users - orpoi</Text>
        <Stack direction={['column', 'row']} gap={4} w={'full'} alignItems={'center'} justifyContent={'space-evenly'}>
          <Link href={'https://apps.apple.com/in/app/classplus/id1324522260'}>
            <Image src={'https://freeiconshop.com/wp-content/uploads/edd/app-store-badge-128x128.png'} maxW={'xs'} />
          </Link>
          <Link href={'https://play.google.com/store/apps/details?id=co.diy.orpoi'}>
            <Image src={'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'} maxW={'xs'} />
          </Link>
        </Stack>
      </Box>
      <Box
        p={[4, 16]}
      >
        <Text fontSize={'lg'}>
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
        p={[4, 16]} justifyContent={'space-between'}
      >
        <Box maxW={['full', '40%']}>
          <Text
            fontSize={['2xl', '4xl']}
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
          <Link href={'https://app.iskconincedu.com/'}>
            <Button
              colorScheme={'twitter'}
              rounded={'full'} size={'lg'}
            >
              Login Now
            </Button>
          </Link>
          <Text fontSize={'xs'} mb={6}>Organisation Code - orpoi</Text>
        </Box>
        <HStack w={['full', '50%']} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
          <Show below='md'>
            <Image src='/poster5.jpeg' w={['full', '48']} rounded={16} boxShadow={'xl'} />
          </Show>
          <Show above='md'>
            <Image src='/poster5_d.png' w={['full']} rounded={16} boxShadow={'xl'} />
          </Show>
        </HStack>
      </Stack>
      <Stack
        direction={['column', 'row-reverse']}
        p={[4, 16]} justifyContent={'space-between'}
      >
        <Box maxW={['full', '40%']}>
          <Text
            fontSize={['2xl', '4xl']}
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
          <Link href={'https://app.iskconincedu.com/'}>
            <Button
              colorScheme={'twitter'}
              rounded={'full'} size={'lg'}
            >
              Login Now
            </Button>
          </Link>
          <Text fontSize={'xs'} mb={6}>Organisation Code - orpoi</Text>
        </Box>
        <HStack w={['full', '50%']} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
          <Show below='md'>
            <Image src='/poster1.jpeg' w={['full', '48']} rounded={16} boxShadow={'xl'} />
          </Show>
          <Show above='md'>
            <Image src='/poster1_d.png' w={['full']} rounded={16} boxShadow={'xl'} />
          </Show>
        </HStack>
      </Stack>
      <Stack
        direction={['column', 'row']}
        p={[4, 16]} justifyContent={'space-between'}
      >
        <Box maxW={['full', '40%']}>
          <Text
            fontSize={['2xl', '4xl']}
            pt={[8]} fontWeight={'semibold'}
          >
            Precious Knowledge
          </Text>
          <Text py={6} fontSize={'lg'} lineHeight={'7'}>
            Keep learning from free pdfs about Vedic Cosmology,
            Devotional Service and Spiritual worlds.
            <br />
            Curiousity shoul never stop!
          </Text>
          <Link href={'https://app.iskconincedu.com/'}>
            <Button
              colorScheme={'twitter'}
              rounded={'full'} size={'lg'}
            >
              Login Now
            </Button>
          </Link>
          <Text fontSize={'xs'} mb={6}>Organisation Code - orpoi</Text>
        </Box>
        <Stack pos={'relative'} direction={['column', 'row']} gap={'4'} w={['full', '50%']} justifyContent={'center'}>
          <Show below='md'>
            <Image src='/poster4.jpeg' w={['full', '48']} rounded={16} boxShadow={'xl'} />
            <Image src='/poster3.png' w={['full', '48']} rounded={16} boxShadow={'xl'} />
          </Show>
          <Show above='md'>
            <Image src='/poster4_d.png' pos={'relative'} top={'-2rem'} left={'-2rem'} w={'xs'} objectFit={'contain'} rounded={16} />
            <Image src='/poster3_d.png' pos={'relative'} bottom={'-2rem'} right={'2rem'} w={'xs'} objectFit={'contain'} rounded={16} />
          </Show>
        </Stack>
      </Stack>
      <Stack
        direction={['column', 'row-reverse']}
        p={[4, 16]} justifyContent={'space-between'}
      >
        <Box maxW={['full', '40%']}>
          <Text
            fontSize={['2xl', '4xl']}
            pt={[8]} fontWeight={'semibold'}
          >
            Attempt Quizzes
          </Text>
          <Text py={6} fontSize={'lg'} lineHeight={'7'}>
            See how much you've learned and advanced in your spiritual journey by
            attempting interesting quizes.
            <br />
            Learning is now fun!
          </Text>
          <Link href={'https://app.iskconincedu.com/'}>
            <Button
              colorScheme={'twitter'}
              rounded={'full'} size={'lg'}
            >
              Login Now
            </Button>
          </Link>
          <Text fontSize={'xs'} mb={6}>Organisation Code - orpoi</Text>
        </Box>
        <Stack direction={['column', 'row']} gap={'4'} w={['full', '50%']} justifyContent={'center'}>
          <Show below='md'>
            <Image src='/poster2.jpeg' w={['full', '48']} rounded={16} boxShadow={'xl'} />
          </Show>
          <Show above='md'>
            <Image src='/poster2_d.png' w={['full']} rounded={16} boxShadow={'xl'} />
          </Show>
        </Stack>
      </Stack>
      <Stack
        direction={['column', 'row']}
        p={[4, 16]} justifyContent={'space-between'}
      >
        <Box maxW={['full', '40%']}>
          <Text
            fontSize={['2xl', '4xl']}
            pt={[8]} fontWeight={'semibold'}
          >
            Want To Learn More?
          </Text>
          <Text py={6} fontSize={'lg'} lineHeight={'7'}>
            We have short courses to help you advance with greater enthusiasm in your spiritual journey.
            We are adding the new courses regularly.
            <br />
            Enroll in any of them and start learning!
          </Text>
          <Link href={'https://app.iskconincedu.com/'}>
            <Button
              colorScheme={'twitter'}
              rounded={'full'} size={'lg'}
            >
              Login Now
            </Button>
          </Link>
          <Text fontSize={'xs'} mb={6}>Organisation Code - orpoi</Text>
        </Box>
        <Stack direction={['column', 'row']} gap={'4'} w={['full', '50%']} justifyContent={'center'}>
          <Show below='md'>
            <Image src='/poster6.jpeg' w={['full', '48']} rounded={16} boxShadow={'xl'} />
          </Show>
          <Show above='md'>
            <Image src='/poster6_d.png' w={['full']} rounded={16} boxShadow={'xl'} />
          </Show>
        </Stack>
      </Stack>


      <Box>
        <Stack
          direction={['column', 'row']}
          p={[8, 16]} alignItems={'center'}
          justifyContent={'flex-start'}
        >
          <Image
            w={['full', 'sm']}
            src={'srila_prabhupada.png'}
          />
          <Box pt={[8, 0]} pl={[0, 16]}>
            <Text>With The Blessings Of His Divine Grace</Text>
            <Text className={'messiri'} fontSize={['4xl', '5xl', '6xl']} color={'yellow.500'}>Srila Prabhupada</Text>
            <Text pt={8}>
              Srila Prabhupada is the divine personality and  biggest ambassador of Santana Dharma,
              who preached it glories around the globe fulfilling desire of Lord Krishna and Lord Chaitanya
              saving humanity from dark well of Materialism,voidism and atheism.
              It was his wish and order to establish Varṇasrama Dharma to make Krishna Consciousness Movement success at wider scale.
            </Text>
          </Box>
        </Stack>
      </Box>

      {/* Footer */}
      <Box w={'full'} p={4} bg={'twitter.500'} color={'white'}>
        <Text textAlign={'center'}>&copy; Copyright 2023 - ISKCON Inc.</Text>
      </Box>
    </>
  )
}

export default Index