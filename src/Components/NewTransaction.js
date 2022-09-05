import { Box, Typography, TextField, Button, styled } from '@mui/material'
import { useContext, useState } from 'react';
import { ExpenseContext } from '../App';
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const Container = styled(Box)`
 display:flex;
 flex-direction:column;
 & > h5, & > div, & > button {
    margin-top: 2rem
 }
`

const NewTransaction = ({ transactions, setTransaction }) => {
  let { id, setId, text, setText, amount, setAmount, index, setIndex } =
    useContext(ExpenseContext);
  // function to add a new transaction
  const AddTransaction = () => {
    if ((text !== "") & (amount !== "")) {
      const transaction = {
        id: Math.floor(Math.random() * 1000000),
        text: text,
        amount: +amount,
      };
      // it will run if a new transaction is made
      if (id === false)
        setTransaction((currentArray) => [transaction, ...currentArray]);
         // it will run  if transaction is to be edited
      if (id === true) {
        let temp = [...transactions];
        temp[index] = transaction;
        setTransaction(temp);
        setId(false);
        setIndex("");
      }
      setText("");
      setAmount("");
    }
  };

  return (
    <Container>
      <Typography variant="h5">New Transaction</Typography>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Select Expense
        </InputLabel>
        <NativeSelect value={text} onChange={(e) => setText(e.target.value)}>
          <option></option>
          <option value="Salary">Salary</option>
          <option value="Grocery">Grocery</option>
          <option value="Veggies">Veggies</option>
          <option value="Travelling">Travelling</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </NativeSelect>
      </FormControl>
      <TextField
        label="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button variant="contained" onClick={AddTransaction}>
        Add Transaction
      </Button>
    </Container>
  );
};

export default NewTransaction;