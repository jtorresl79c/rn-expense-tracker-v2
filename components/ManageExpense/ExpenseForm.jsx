import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";

function ExpenseForm({onCancel, onSubmit, submitButtonLabel}) {

  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    description: ''
  })

  function inputChangeHandler(inputIdentifier, enteredValue){
    setInputValues( currValues => {
      return {
        ...currValues,
        [inputIdentifier]: enteredValue
      }
    } )
  }

  function submitHandler(){
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description
    }

    onSubmit(expenseData)
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your expense</Text>
      <Text>
        {inputValues.description}
      </Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: inputValues.amount
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: inputValues.date
          }}
          style={styles.rowInput}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          // autoCapitalize: 'none',
          // autoCorrect: false // default is true
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: inputValues.description
        }}
      />


      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>


    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 4,
    textAlign: 'center'
  },
  rowInput: {
    flex: 1
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  },

});
