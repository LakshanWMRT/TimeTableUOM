import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

export default function TimeTablePhoto() {
    return (
        <View>
            <Text>Check your downloads...</Text>
            <WebView
            style={{ flex: 1, backgroundColor: 'white' }}
            source={{
                uri: 'https://uom.lk/sites/default/files/Faculty/IT/ugs/files/B19L3S1_IT_Timetable_V10_0.pdf',
            }}
            bounces={true}
            useWebKit={true}
            scrollEnabled={true}
        />
        </View>
        
    )
}