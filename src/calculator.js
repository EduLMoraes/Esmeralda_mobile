import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import * as Speech from 'expo-speech';

const buttonRowsConfig = [
  [
    { id: 'clear', label: 'C', speech: 'Limpar tudo', type: 'clear', styleType: 'tertiary' },
    { id: 'backspace', label: '⌫', speech: 'Apagar', type: 'backspace', styleType: 'tertiary' },
    { id: 'percent', label: '%', speech: 'Porcento', type: 'percent', styleType: 'tertiary' },
    { id: 'divide', label: '÷', speech: 'Dividido por', type: 'operator', operation: '/', styleType: 'operator' }
  ],
  [
    { id: '7', label: '7', speech: 'Sete', type: 'number', styleType: 'number' },
    { id: '8', label: '8', speech: 'Oito', type: 'number', styleType: 'number' },
    { id: '9', label: '9', speech: 'Nove', type: 'number', styleType: 'number' },
    { id: 'multiply', label: '×', speech: 'Multiplicado por', type: 'operator', operation: '*', styleType: 'operator' }
  ],
  [
    { id: '4', label: '4', speech: 'Quatro', type: 'number', styleType: 'number' },
    { id: '5', label: '5', speech: 'Cinco', type: 'number', styleType: 'number' },
    { id: '6', label: '6', speech: 'Seis', type: 'number', styleType: 'number' },
    { id: 'subtract', label: '−', speech: 'Menos', type: 'operator', operation: '-', styleType: 'operator' }
  ],
  [
    { id: '1', label: '1', speech: 'Um', type: 'number', styleType: 'number' },
    { id: '2', label: '2', speech: 'Dois', type: 'number', styleType: 'number' },
    { id: '3', label: '3', speech: 'Três', type: 'number', styleType: 'number' },
    { id: 'add', label: '+', speech: 'Mais', type: 'operator', operation: '+', styleType: 'operator' }
  ],
  [
    { id: '0', label: '0', speech: 'Zero', type: 'number', styleType: 'number', flex: 2 },
    { id: 'decimal', label: '.', speech: 'Ponto', type: 'decimal', styleType: 'number' },
    { id: 'equals', label: '=', speech: 'Igual', type: 'equals', styleType: 'operator' }
  ]
];

const MAX_DISPLAY_LENGTH = 14;

export default function GetCalculator() {
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [historyText, setHistoryText] = useState('');


  const speak = (textToSpeak) => {
    Speech.speak(textToSpeak, { language: 'pt-BR' });
  };


  const calculate = (val1, val2, op) => {
    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);
    switch (op) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      case '/': return num2 === 0 ? 'Error' : num1 / num2;
      default: return num2;
    }
  };
  

  const formatNumber = (numStr) => {
    if (numStr === 'Error' || numStr === 'NaN') return 'Erro';
    let num = parseFloat(numStr);
    if (isNaN(num)) return 'Erro';

    if (String(num).length > MAX_DISPLAY_LENGTH) {
        if (Math.abs(num) > 1e13 || (Math.abs(num) < 1e-5 && Math.abs(num) > 0) ) {
            return num.toExponential(MAX_DISPLAY_LENGTH - 6);
        } else {
            
            const [integerPart, decimalPart] = String(num).split('.');
            if (!decimalPart) return integerPart.slice(0, MAX_DISPLAY_LENGTH);

            const availableDecimalPlaces = MAX_DISPLAY_LENGTH - integerPart.length - 1;
            if (availableDecimalPlaces < 0) return integerPart.slice(0, MAX_DISPLAY_LENGTH);
            return num.toFixed(Math.min(decimalPart.length, availableDecimalPlaces));
        }
    }
    return String(num);
  };



  const handleButtonPress = (button) => {
    speak(button.speech);

    if (currentValue === 'Erro' && button.type !== 'clear') {
        return;
    }

    switch (button.type) {
      case 'number':
        if (waitingForOperand) {
          setCurrentValue(button.label);
          setWaitingForOperand(false);
        } else {
          if (currentValue.length < MAX_DISPLAY_LENGTH) {
            setCurrentValue(currentValue === '0' ? button.label : currentValue + button.label);
          }
        }
        break;

      case 'decimal':
        if (waitingForOperand) {
          setCurrentValue('0.');
          setWaitingForOperand(false);
        } else if (!currentValue.includes('.') && currentValue.length < MAX_DISPLAY_LENGTH -1) {
          setCurrentValue(currentValue + '.');
        }
        break;

      case 'operator':
        if (operator && previousValue && !waitingForOperand) {
          const result = calculate(previousValue, currentValue, operator);
          const formattedResult = formatNumber(String(result));
          setCurrentValue(formattedResult);
          setPreviousValue(formattedResult);
          setHistoryText(`${formattedResult} ${button.label}`);
        } else {
          setPreviousValue(currentValue);
          setHistoryText(`${currentValue} ${button.label}`);
        }
        setOperator(button.operation);
        setWaitingForOperand(true);
        break;

      case 'equals':
        if (operator && previousValue) {
          const result = calculate(previousValue, currentValue, operator);
          const formattedResult = formatNumber(String(result));
          setHistoryText(`${previousValue} ${operator} ${currentValue} =`);
          setCurrentValue(formattedResult);
          if (formattedResult !== 'Erro') {
            setTimeout(() => speak(formattedResult.replace('.', ' vírgula ')), 100);
          } else {
            setTimeout(() => speak("Erro"), 100);
          }
          setPreviousValue(null);
          setOperator(null);
          setWaitingForOperand(true);
        }
        break;

      case 'clear':
        setCurrentValue('0');
        setPreviousValue(null);
        setOperator(null);
        setWaitingForOperand(false);
        setHistoryText('');
        break;

      case 'backspace':
        if (waitingForOperand) {
          
        } else if (currentValue.length > 1) {
          setCurrentValue(currentValue.slice(0, -1));
        } else {
          setCurrentValue('0');
        }
        break;
        
      case 'percent':
        if (currentValue !== 'Erro') {
            const numericValue = parseFloat(currentValue);
            const result = numericValue / 100;
            const formattedResult = formatNumber(String(result));
            setHistoryText(`${currentValue}% =`);
            setCurrentValue(formattedResult);
          
        }
        break;
        
      default:
        break;
    }
  };


  const getButtonStyle = (styleType) => {
    switch (styleType) {
      case 'number': return styles.buttonNumber;
      case 'operator': return styles.buttonOperator;
      case 'tertiary': return styles.buttonTertiary;
      default: return styles.button;
    }
  };
  const getButtonTextStyle = (styleType) => {
    switch (styleType) {
      case 'number': return styles.buttonTextNumber;
      case 'operator': return styles.buttonTextOperator;
      case 'tertiary': return styles.buttonTextTertiary;
      default: return styles.buttonText;
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.historyText}>{historyText}</Text>
        <Text style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit>{currentValue}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {buttonRowsConfig.map((row, rowIndex) => (
          <View key={`row-${rowIndex}`} style={styles.buttonRow}>
            {row.map((button) => (
              <TouchableOpacity
                key={button.id}
                style={[
                  styles.button,
                  getButtonStyle(button.styleType),
                  button.flex ? { flex: button.flex } : { flex: 1 },
                ]}
                onPress={() => handleButtonPress(button)}
              >
                <Text style={[styles.buttonText, getButtonTextStyle(button.styleType)]}>
                  {button.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const screenWidth = Dimensions.get('window').width;
const buttonMargin = 5;
const buttonSize = (screenWidth / 4) - (buttonMargin * 2.5);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
  },
  displayContainer: {
    padding: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#202020',
    minHeight: 160,
  },
  historyText: {
    fontSize: 24,
    color: '#a0a0a0',
    marginBottom: 10,
  },
  displayText: {
    fontSize: 72,
    color: '#FFFFFF',
    fontWeight: '300',
  },
  buttonContainer: {
    paddingBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: buttonMargin,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: buttonMargin,
    height: buttonSize,
    borderRadius: buttonSize / 2,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  buttonText: {
    fontSize: 32,
    fontWeight: '500',
  },

  buttonNumber: {
    backgroundColor: '#505050',
  },
  buttonTextNumber: {
    color: '#FFFFFF',
  },
  buttonOperator: {
    backgroundColor: '#FF9500',
  },
  buttonTextOperator: {
    color: '#FFFFFF',
  },
  buttonTertiary: {
    backgroundColor: '#D4D4D2',
  },
  buttonTextTertiary: {
    color: '#1C1C1E',
  },
});