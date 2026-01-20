import { useTheme } from "@/hooks/use-theme";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, Controller } from "react-hook-form";
import { personalInformationSchema, PersonalInformationSchema } from "./persona-information-schema";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { layoutTheme } from "@/constant/theme";

export default function PersonalInformationForm() {
    const { colorScheme } = useTheme();
    const styles = getStyles(colorScheme)

    const { control, handleSubmit, formState: { errors } } = useForm<PersonalInformationSchema>({
        resolver: zodResolver(personalInformationSchema),
    })

    return (
        <View style={styles.container}>
            <Controller control={control} name="name" render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Name"
                />
            )} />
            {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}
        </View>
    )
}


const getStyles = (colorScheme: string) => StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: 20,
        paddingVertical: 15,
        paddingTop: 80,
        gap: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: layoutTheme.fonts.sora.bold,
        color: layoutTheme.colors.neutral.white,
    },
    input: {
        width: "100%",
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: layoutTheme.colors.neutral.white,
    },
    error: {
        color: layoutTheme.colors.text.error,
        fontSize: 12,
        fontFamily: layoutTheme.fonts.sora.regular,
    },
});