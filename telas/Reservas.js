import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TextComponent, TextInput } from "react-native";
import { UtilsContext } from "./config/context"
import { useState, useContext } from 'react';
import React from "react";
import { enGB, registerTranslation } from 'react-native-paper-dates'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DatePickerModal } from 'react-native-paper-dates';
import { Button } from 'react-native-paper';
registerTranslation('en-GB', enGB)

const styles = StyleSheet.create({
    viewClass: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#003566",
        height: "100%"
    },
    nomeCond: {
        backgroundColor: "#FFD60A",
        height: 50,
        display: "flex",
        justifyContent: "center",
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: "center"
    },
    labelText: {
        paddingLeft: "20%",
        color: "white"
    },
    input: {
        backgroundColor: "white",
        height: 25,
        marginLeft: "20%",
        marginRight: "20%",
        borderRadius: 5
    },
    viewReserva: {
        display: "flex",
        justifyContent: "flex-start",
    },
    dateButton: {
        backgroundColor: "#FFD60A",
        height: 50,
        width: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "30%",
        borderRadius: 50,
        marginBottom: 50
    },
    dateText: {
        fontSize: 18,
    },
    viewButton: {
        display: "flex",
        justifyContent: "flex-end",
    },
    reservarButton: {
        backgroundColor: "#FFD60A",
        height: 50,
        display: "flex",
        justifyContent: "center",
        marginHorizontal: "30%",
        borderRadius: 5,
        marginBottom: 50
    },
    buttonText: {
        textAlign: "center",
        fontSize: 30
    },
});

export default function RealizarRezerva(props)
{
    const [date, setDate] = React.useState(undefined);
    const [open, setOpen] = React.useState(false);
    const Dates = [new Date()]



    Dates.forEach(date => {
        date.setDate(date.getDate() + 1)
    });

    const onDismissSingle = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirmSingle = React.useCallback(
        (params) => {
        setOpen(false);
        setDate(params.date);
        },
        [setOpen, setDate]
    );

    return(
        <View style = {styles.viewClass}>
            <View style = {styles.viewReserva}>
                <SafeAreaProvider>
                    <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                        <TouchableOpacity style={styles.dateButton} onPress={() => setOpen(true)} uppercase={false} mode="outlined">
                            <Text style = {styles.dateText}>Selecione uma data</Text>
                        </TouchableOpacity>
                        <DatePickerModal
                            locale="en"
                            mode="single"
                            visible={open}
                            onDismiss={onDismissSingle}
                            date={date}
                            onConfirm={onConfirmSingle}
                            validRange={{startDate: new Date(), disabledDates: Dates}}
                        />
                    </View>
                </SafeAreaProvider>
            </View>

            <View style = {styles.viewButton}>
                <TouchableOpacity style={styles.reservarButton} onPress = {() => props.navigation.navigate("TelaPrincipalUser")}>
                    <Text style = {styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress = {() => props.navigation.navigate("TelaPrincipalUser")}>
                    <Text style = {styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}