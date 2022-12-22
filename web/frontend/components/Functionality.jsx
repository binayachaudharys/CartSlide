import {
    Page,
    Layout,
    TextField,
    RadioButton,
    Label,
    Checkbox,
    Stack,
    RangeSlider,
  
  } from "@shopify/polaris";
  import { useCallback, useState } from "react";

  
  export default function Functionality() {
   
  
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
  
  
    const [rangeFont, setRange] = useState(32);

  
    const handleRangeSlider = useCallback(
      (value) => setRange(value),
      [],
    );
  
    
    const handleChange1 = useCallback((newChecked) => setChecked1(newChecked), []);
    const handleChange2 = useCallback((newChecked) => setChecked2(newChecked), []);
  
  
  
  
  
    const FunctionD = (
     <div>
       <Page>
     <Stack>
     <Checkbox
        label="Theme font iherted"
        checked={checked1}
        onChange={handleChange1}
      />
     </Stack>
     <Checkbox
        label="Icon "
        checked={checked2}
        onChange={handleChange2}
      />
  
  <RangeSlider
          label="Opacity percentage"
          value={rangeFont}
          onChange={handleRangeSlider}
          output
        />
  </Page>
        </div>
  
      
    );
 
  }
  