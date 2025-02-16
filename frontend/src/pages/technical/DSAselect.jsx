import React, { useState } from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Button from '@mui/joy/Button';
import dsaData from './DSAtree.json';

export default function DSAselect() {
  const [selectionPath, setSelectionPath] = useState([]);

  const handleSelect = (selection) => {
    setSelectionPath([...selectionPath, selection]);
  };

  const handleBack = () => {
    setSelectionPath(selectionPath.slice(0, -1));
  };

  const handleBackToDataStructures = () => {
    setSelectionPath([]);
  };

  const getCurrentLevel = () => {
    let current = dsaData;
    for (let selection of selectionPath) {
      current = current[selection];
    }
    return current;
  };

  const renderButtons = (items) => (
    <RadioGroup
      aria-label="Selection"
      name="selection"
      onChange={(e) => handleSelect(e.target.value)}
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
          <ListItem 
            key={item} 
            sx={{ 
              p: 0,
            //   '&:hover': {
            //     backgroundColor: 'primary.100',
            //     '& .MuiRadio-action': {
            //       borderColor: 'primary.500',
            //     },
            //   },
            }}
          >
            <Radio
              label={item}
              value={item}
              overlay
              disableIcon
              variant="outlined"
              sx={{
                flexGrow: 1,
                '& .MuiRadio-action': {
                  borderWidth: 1,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </RadioGroup>
  );
  

  const currentLevel = getCurrentLevel();

  return (
    <div>
      {typeof currentLevel === 'object' && renderButtons(currentLevel)}
      {typeof currentLevel !== 'object' && (
        <div>
          <h3>Selected Approach:</h3>
          <p>{Array.isArray(currentLevel) ? currentLevel.join(', ') : currentLevel}</p>
        </div>
      )}
      <div style={{ marginTop: '20px' }}>
        {selectionPath.length > 0 && (
          <Button onClick={handleBack} 
                sx={{     
                    marginRight: '10px',
                    backgroundColor:"#ec9daf",
                }}  
            >
                Back
            </Button>
        )}
        {selectionPath.length > 0 && (
            <Button onClick={handleBackToDataStructures}
                sx={{
                    backgroundColor:"#ec9daf",
                }}    
            >
                Back to Data Structures
            </Button>
        )}
      </div>
    </div>
  );
}
