// http://localhost:8081/payment/confirmation/page

import Gradient from "@/components/ui/gradient";
import { useTheme } from "@/hooks/use-theme";
import { StyleSheet, View } from "react-native";

export default function PaymentConfirmation() {
    const { colorScheme } = useTheme()
    const styles = getStyles(colorScheme)
    return (
        <View style={styles.container}>
            
            <Gradient/>
        </View>
    )
}

const getStyles = (colorScheme: string) => StyleSheet.create({
    container: {
        flex: 1,
    },
})