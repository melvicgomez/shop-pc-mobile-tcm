/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';

import { Dimensions, Image, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {
  Text,
  Layout as LayoutWrapper,
  Card,
  Button,
} from '@ui-kitten/components';

import { useTheme } from '@/Theme';

const IndexWelcomeContainer = () => {
  const {
    Gutters,
    Layout,
    NavigationColors,
    Colors,
    Fonts,
    MetricsSizes,
    Images,
  } = useTheme();

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const carouselRef = useRef(null);

  const carouselContents = [
    {
      title: 'Deals/Promos',
      description: 'Checkout discounted parts for your new dream PC.',
    },
    {
      title: 'New Arrivals',
      description:
        'Get first to checkout our new arrivals of parts and accessories.',
    },
    {
      title: 'PC Builder',
      description:
        'Build your PC that fits your budget and avoiding bottleneck builds.',
    },
  ];

  function carouselItem({ item, index }) {
    return (
      <View>
        <Card>
          <Image
            style={[Layout.fullSize, Layout.selfCenter]}
            source={Images.welcomeScreenIcons[index]}
            resizeMode="contain"
            height={100}
            marginBottom={24}
            marginTop={24}
          />

          <Text category="h2" style={Fonts.textCenter}>
            {item.title}
          </Text>
          <Text category="s1" style={Fonts.textCenter}>
            {item.description}
          </Text>
        </Card>
      </View>
    );
  }

  return (
    <LayoutWrapper
      style={[
        Layout.fill,
        Layout.colHCenter,
        {
          backgroundColor: NavigationColors.primary,
          flex: 1,
        },
      ]}
    >
      <View style={[Gutters.regularHPadding, Gutters.regularVPadding]}>
        <View style={Layout.center}>
          <Carousel
            ref={carouselRef}
            data={carouselContents}
            renderItem={carouselItem}
            sliderWidth={Dimensions.get('window').width - MetricsSizes.large}
            itemWidth={Dimensions.get('window').width - MetricsSizes.large}
            onSnapToItem={(i) => {
              setActiveSlideIndex(i);
            }}
          />

          <Pagination
            tappableDots
            carouselRef={carouselRef}
            dotsLength={carouselContents.length}
            activeDotIndex={activeSlideIndex}
            dotStyle={{
              width: 10,
              height: 10,
              backgroundColor: Colors.white,
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.8}
            containerStyle={{ marginBottom: 20 }}
          />
        </View>

        <Button
          onPress={() => {
            // go to screen
          }}
        >
          TAKE ME THERE
        </Button>
      </View>
    </LayoutWrapper>
  );
};

export default IndexWelcomeContainer;
