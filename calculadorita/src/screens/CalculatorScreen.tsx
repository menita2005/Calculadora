import {Pressable, Text, View} from "react-native";
import { colors, styles } from "../config/theme/app-theme";
import { CalculatorButton } from "../components/CalculatorButton";
import { useCalculator } from "../hooks/useCalculator";


export const CalculatorScreen = () => {
    const {
        number,
    } = useCalculator();




    return (
        <View style={styles.calculatorContainer}>
            <View style={{paddingHorizontal: 30, paddingBottom: 20}}>

            <Text  style={styles.mainResult}></Text>

            <Text style={styles.subResult}>
            </Text>
            </View>

            <View style={styles.row}>
                <CalculatorButton  label="C" color={colors.lightGray}/>
                <CalculatorButton  label="+/-" color={colors.lightGray}/>
                <CalculatorButton   label="Del" color={colors.lightGray}/>
                <CalculatorButton  label="÷" color={colors.orange}/>
                
            </View>

            <View style={styles.row}>
                <CalculatorButton  label="7" color={colors.darkGray}/>
                <CalculatorButton label="8" color={colors.darkGray}/>
                <CalculatorButton  label="9" color={colors.darkGray}/>
                <CalculatorButton  label="x" color={colors.orange}/>
            </View>

            <View style={styles.row}>
                <CalculatorButton  label="4" color={colors.darkGray}/>
                <CalculatorButton label="5" color={colors.darkGray}/>
                <CalculatorButton  label="6" color={colors.darkGray}/>
                <CalculatorButton label="-" color={colors.orange}/>
            </View>

            <View style={styles.row}>
                <CalculatorButton  label="1" color={colors.darkGray}/>
                <CalculatorButton  label="2" color={colors.darkGray}/>
                <CalculatorButton label="3" color={colors.darkGray}/>
                <CalculatorButton  label="+" color={colors.orange}/>
            </View>

            <View style={styles.row}>
                <CalculatorButton  label="0" color={colors.darkGray} doubleSize/>
                <CalculatorButton label="." color={colors.darkGray}/>
                <CalculatorButton label="=" color={colors.orange}/>
            </View>
        </View>
    );
};