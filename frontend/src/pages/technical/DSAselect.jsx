import React, { useState } from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Button from '@mui/joy/Button';
import dsaData from './DSAtree.json';


export default function DSAselect() {
  const [selectedDS, setSelectedDS] = useState(null);
  const [selectedOperation, setSelectedOperation] = useState(null);

  const handleDSSelect = (ds) => {
    setSelectedDS(ds);
    setSelectedOperation(null);
  };

  const handleOperationSelect = (operation) => {
    setSelectedOperation(operation);
  };

  const renderButtons = (items, onSelect, selected) => (
    <RadioGroup 
      aria-label="Selection" 
      name="selection" 
      value={selected || ''}
      onChange={(e) => onSelect(e.target.value)}
    >
      <List
        sx={{
          minWidth: 240,
          '--List-gap': '0.5rem',
          '--ListItem-paddingY': '1rem',
          '--ListItem-radius': '8px',
        }}
      >
        {Object.keys(items).map((item) => (
          <ListItem variant="outlined" key={item} sx={{ boxShadow: 'sm' }}>
            <Radio
              overlay
              value={item}
              label={item}
              sx={{ flexGrow: 1, flexDirection: 'row-reverse' }}
              slotProps={{
                action: ({ checked }) => ({
                  sx: (theme) => ({
                    ...(checked && {
                      inset: -1,
                      border: '2px solid',
                      borderColor: theme.vars.palette.primary[500],
                    }),
                  }),
                }),
              }}
            />
          </ListItem>
        ))}
      </List>
    </RadioGroup>
  );

  return (
    <div>
      {!selectedDS && renderButtons(dsaData, handleDSSelect, selectedDS)}
      {selectedDS && !selectedOperation && renderButtons(dsaData[selectedDS], handleOperationSelect, selectedOperation)}
      {selectedOperation && (
        <div>
          <h3>Selected Approach:</h3>
          <p>{dsaData[selectedDS][selectedOperation]}</p>
          <Button onClick={() => setSelectedOperation(null)}>Back to Operations</Button>
        </div>
      )}
      {selectedDS && <Button onClick={() => setSelectedDS(null)}>Back to Data Structures</Button>}
    </div>
  );
}