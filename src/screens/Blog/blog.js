import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';

const NewsBlog = () => {
    const openUniversityWebsite = () => {
        Linking.openURL('https://muele.mak.ac.ug/'); // Replace with actual URL
    };

    return (
        <ScrollView style={styles.root}>
            <View style={styles.container}>
                <Text style={styles.title}>University News and Articles</Text>

                <View style={styles.article}>
                    <Image
                        source={require('../../assets/images/muk.jpg')} // Replace with actual image path
                        style={styles.articleImage}
                    />
                    <View style={styles.articleText}>
                        <Text style={styles.articleTitle}>New Building Inauguration</Text>
                        <Text style={styles.articleContent}>The university has inaugurated a new building...</Text>
                    </View>
                </View>

                <View style={styles.article}>
                    <Image
                        source={require('../../assets/images/muk.jpg')} // Replace with actual image path
                        style={styles.articleImage}
                    />
                    <View style={styles.articleText}>
                        <Text style={styles.articleTitle}>New Research Project</Text>
                        <Text style={styles.articleContent}>A groundbreaking research project has been launched...</Text>
                    </View>
                </View>

                <View style={styles.article}>
                    <Image
                        source={require('../../assets/images/muk.jpg')} // Replace with actual image path
                        style={styles.articleImage}
                    />
                    <View style={styles.articleText}>
                        <Text style={styles.articleTitle}>Lecturer Achievements</Text>
                        <Text style={styles.articleContent}>Our lecturers have achieved remarkable milestones...</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={openUniversityWebsite}>
                    <Text style={styles.link}>Visit the University Website for Course Materials</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        padding: 20,
    },
    container: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'green',
        marginVertical: 20,
    },
    article: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginBottom: 20,
    },
    articleImage: {
        width: 100,
        height: 100,
        marginRight: 20,
        borderRadius: 10,
    },
    articleText: {
        flex: 1,
    },
    articleTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    articleContent: {
        fontSize: 16,
        color: 'black',
    },
    link: {
        fontSize: 16,
        color: 'blue',
        textDecorationLine: 'underline',
        marginVertical: 20,
    },
});

export default NewsBlog;
