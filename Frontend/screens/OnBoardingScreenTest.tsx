import { useState, useRef } from 'react';
import { Text, View, Dimensions, FlatList, Animated, Image } from 'react-native';

const { width } = Dimensions.get('window');

// Sample slides with images & text
const slides = [
    { id: '1', imgSrc: require('../assets/slide-1.png'), title: 'Welcome!', subTitle: 'This is slide 1' },
    { id: '2', imgSrc: require('../assets/slide-2.png'), title: 'All-in-One', subTitle: 'This is slide 2' },
    { id: '3', imgSrc: require('../assets/slide-3.png'), title: 'Get Started', subTitle: 'This is slide 3' },
];

// Render each slide
const RenderItem = ({ item }) => (
    <View className="w-screen items-center justify-center p-5">
        {/* Title */}
        <Text style={{
            fontSize: 32,
            margin: 15,
            fontFamily: 'Inter',
            color: '#FFFFFF'
        }}>
            {item.title}
        </Text>

        {/* Image */}
        <Image source={item.imgSrc} style={{
            width: width * 0.7, // 70% of screen width
            height: width * 0.7, // Maintain square ratio
            resizeMode: 'contain' // Keeps the aspect ratio
        }} />

        {/* Subtitle */}
        <Text className="text-[13px] text-white">{item.subTitle}</Text>
    </View>
);

export const OnBoardingScreenTest = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    // Updates the index when scrolling
    const handleScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
    );

    return (
        <View className="flex-1">
            {/* Top Section with Carousel */}
            <View className="flex-[7.5] bg-white">
                <View className="bg-customBlue h-full rounded-b-[45%] items-center justify-center">
                    <FlatList
                        data={slides}
                        renderItem={({ item }) => <RenderItem item={item} />}
                        keyExtractor={(item) => item.id}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={handleScroll}
                        onMomentumScrollEnd={(event) => {
                            const index = Math.round(event.nativeEvent.contentOffset.x / width);
                            setCurrentIndex(index);
                        }}
                    />

                    {/* Progress Bar Section */}
                    <View className="flex-row justify-center items-center py-2">
                        {slides.map((_, index) => (
                            <View
                                key={index}
                                style={{
                                    height: 6,
                                    width: 20,
                                    marginHorizontal: 4,
                                    borderRadius: 3,
                                    backgroundColor: index === currentIndex ? '#003366' : '#ccc',
                                }}
                            />
                        ))}
                    </View>
                </View>
            </View>

            {/* Bottom Section */}
            <View className="flex-[2.5] bg-white" />
        </View>
    );
};
