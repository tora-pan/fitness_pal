import {
    StyleSheet,
    TextInput,
    Text,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { profileQuestions } from '../../questions';
import { useDispatch, useSelector } from 'react-redux';
import {
    setName,
    setAge,
    setGender,
    setHeight,
    setWeight,
    setGoals,
    selectProfile,
} from './profileSlice';

export const Profile = ({ navigation }) => {
    const [currentQuestionId, setCurrentQuestionId] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const currentQuestion = profileQuestions[currentQuestionId];

    const handleOptionPress = (option) => {
        setText(option);
        setSelectedOption(option);
    };

    const handleInputChange = (text) => {
        setText(text);
    };
    const finishProfile = () => {
        console.log('finishProfile');
        navigation.navigate('Home');
    };

    const selectTheProfile = useSelector(selectProfile);

    const handleNext = (value) => {
        console.log('valuse', value);
        switch (value) {
            case 'Name':
                dispatch(setName(text));
                break;
            case 'Age':
                dispatch(setAge(text));
                break;
            case 'Weight':
                dispatch(setWeight(text));
                break;
            case 'Height':
                dispatch(setHeight(text));
                break;
            case 'Gender':
                dispatch(setGender(text));
                break;
            case 'Goals':
                dispatch(setGoals(text));
                break;
            case 'Finish':
                finishProfile();
                break;
            default:
                console.log('default');
                break;
        }
        if (currentQuestionId < profileQuestions.length - 1) {
            setCurrentQuestionId(currentQuestionId + 1);
            setText('');
        } else {
            console.log('should be done');
            console.log(selectTheProfile);
        }
    };

    const renderInputQuestion = () => {
        console.log('renderInputQuestion');
        return (
            <TextInput
                style={styles.input}
                placeholder={currentQuestion.placeholder}
                onChangeText={handleInputChange}
                value={text}
            />
        );
    };
    const renderOptionsQuestion = () => {
        return currentQuestion.options.map((option, index) => (
            <TouchableOpacity
                key={index}
                style={[
                    styles.option,
                    selectedOption === option && styles.selectedOption,
                ]}
                onPress={() => handleOptionPress(option)}
            >
                <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
        ));
    };
    const renderScrollWheelQuestion = () => {
        console.log('renderScrollWheelQuestion');
    };
    const renderResults = () => {
        console.log('renderResults');
    };

    console.log(currentQuestion);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.question}>{currentQuestion.question}</Text>
            <SafeAreaView style={styles.questionsWrapper}>
                {currentQuestion.type === 'input'
                    ? renderInputQuestion()
                    : currentQuestion.type === 'options'
                    ? renderOptionsQuestion()
                    : currentQuestion.type === 'scrollwheel'
                    ? renderScrollWheelQuestion()
                    : renderResults()}
            </SafeAreaView>
            <TouchableOpacity
                style={[styles.option, styles.outlineButton]}
                onPress={() => handleNext(currentQuestion.value)}
            >
                <Text style={styles.outlineButtonText}>Next</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionsWrapper: {
        alignItems: 'center',
        marginBottom: 40,
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    option: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        width: 200,
    },
    selectedOption: {
        backgroundColor: '#64b5f6', // Change color to indicate selection
    },
    optionText: {
        fontSize: 16,
    },
    outlineButton: {
        borderWidth: 1,
        borderColor: '#3498db',
        padding: 15,
        borderRadius: 10,
        width: 300,
    },
    outlineButtonText: {
        color: '#3498db',
        fontSize: 16,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: 200,
    },
});
