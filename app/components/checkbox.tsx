import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Checkbox, Text, PaperProvider } from 'react-native-paper';

type MyCheckboxProps = {
    children?: React.ReactNode;
};

export default function MyCheckbox ({ children }: MyCheckboxProps) {
    const [checked, setChecked] = React.useState(false);

    return (
            <View style={styles.container}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => setChecked(!checked)}
                />
                {children}
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginBottom: '8%',
        marginLeft: '5%',
    },
    label: {
        marginLeft: 8,
        fontSize: 16,
    },
});