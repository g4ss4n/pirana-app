import React, { useState } from 'react';
import Title from '../title/Title';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import operations from './Operations';
import operationExplanations from './OperationExplanations';
import './HomomorphicOperations.css';

const HomomorphicOperations = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedOperation, setSelectedOperation] = useState("");
  const [inputValues, setInputValues] = useState(["", ""]);
  const [outputValue, setOutputValue] = useState("Output shows here");

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleOperationChange = (event) => {
    setSelectedOperation(event.target.value);
    setInputValues(["", ""]);
    setOutputValue("");
  };

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const handleCalculate = () => {
    const operation = operations[selectedOperation];
    if (operation) {
      const parsedInputValues = inputValues.map(val => val.split(',').map(num => parseFloat(num.trim())));
      if (selectedOperation === "SIMDRotate") {
        const output = operation(parsedInputValues[0], parsedInputValues[1][0]);
        setOutputValue(output);
      } else {
        const output = operation(...parsedInputValues);
        setOutputValue(output);
      }
    }
  };

  return (
    <div>
      <Title>Homomorphic Operations Used In PIRANA</Title>
      <Box sx={{ width: '80%', margin: '40px', overflowX: 'auto' }}>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          centered
          sx={{ marginBottom: '20px', overflowY: 'auto', fontSize: 'small' }}
        >
          {/* Render the Tabs dynamically */}
          {operationExplanations.map((operation, index) => (
            <Tab sx={{ fontSize: 'small' }} key={index} label={operation.label} />
          ))}
        </Tabs>
        {/* Render the content based on the selected tab */}
        <div>
          {operationExplanations[selectedTab].content}
        </div>

        <h2 className='homomorphic-operations-text'>Homomorphic Operations Playground</h2>
        {/* Dropdown for selecting operation */}
        <FormControl fullWidth sx={{ marginTop: '20px' }}>
          <InputLabel id="operation-select-label">Select Operation</InputLabel>
          <Select
            labelId="operation-select-label"
            value={selectedOperation}
            onChange={handleOperationChange}
          >
            {operationExplanations.map((operation, index) => (
              <MenuItem key={index} value={operation.key}>{operation.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* Input fields for user input */}
        {selectedOperation && (selectedOperation === "SIMDAdd" || selectedOperation === "SIMDPmul" || selectedOperation === "SIMDMul" || selectedOperation === "SIMDRotate") ? (
          inputValues.map((value, index) => (
            <TextField
              key={index}
              fullWidth
              label={`Input ${index + 1}`}
              value={value}
              onChange={(event) => handleInputChange(index, event.target.value)}
              sx={{ marginTop: '20px' }}
              placeholder="Enter values separated by commas, e.g., 3, 7, 2"
            />
          ))
        ) : (
          <TextField
            fullWidth
            label="Input"
            value={inputValues[0]}
            onChange={(event) => handleInputChange(0, event.target.value)}
            sx={{ marginTop: '20px' }}
            placeholder="Enter values separated by commas, e.g., 3, 7, 2"
          />
        )}
        {/* Button to calculate output */}
        <Button variant="contained" onClick={handleCalculate} sx={{ marginTop: '20px' }}>
          Calculate
        </Button>
        {/* Display calculated output */}
        <div className='output'>{outputValue}</div>
      </Box>
    </div>
  );
};

export default HomomorphicOperations;
