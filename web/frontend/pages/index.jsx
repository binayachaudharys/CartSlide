import {
  Page,
  Layout,
  TextField,
  RadioButton,
  Label,
  Checkbox,
  Stack,
  RangeSlider,
  Card,
  Button,
  ColorPicker,
  ChoiceList,
  ContextualSaveBar,
  Frame,

} from "@shopify/polaris";
import { useCallback, useEffect, useState } from "react";
import './indexpage.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Setting } from '../Setting.json'
import Sketch from "./test";
import TestColor from "./testcolor";




export default function HomePage() {

  const data = Setting;
  

  const [visable, setVisable] = useState(false);
  
  const [value, setValue] = useState(data.position);
  const [valuetheme, setTheme] = useState(data.theme);

  const [checked, setChecked] = useState(data.checked);
  const [color, setColor] = useState({
    hue: 120,
    brightness: 1,
    saturation: 1,
  });
  const [color1, setColor1] = useState({
    hue: 12,
    brightness: 5,
    saturation: 6,
  });
  const [color2, setColor2] = useState({
    hue: 160,
    brightness: 12,
    saturation: 12,
  });

  const [rangeFonts, setRangeFont] = useState(data.font_size);
  const [rangeValue, setRangeValue] = useState(data.mobile_size);

  const handleRangeSliderFont = useCallback(
    
    (value) => setRangeFont(value),
    [],
  );
  const handleRangeSliderChange = useCallback(
    (value) => setRangeValue(value),
    [],
  );

  const handleChange = useCallback((newChecked) => setChecked(newChecked), []);


  const handlePosition = useCallback(() => {
    if(value==="left")
    {
     
      setValue("left");
      setVisable(false);
    }
    else if(value==="right")
    {
      setValue("right");
      setVisable(false);
    }
   

   
    console.log(value);

  }, []);
  const handlePosition1 = useCallback(() => {
    if(value==="right")
    {
      setValue("right");
      setVisable(false);
    }
    else
    {
      setValue("left");
      setVisable(true);
    }
    console.log(value);
  }, []);

  const handleTheme = useCallback(() => {
    setTheme("light");
    console.log("light");

  }, []);
  const handleTheme1 = useCallback(() => {
    setTheme("dark");
    console.log("dart");
  }, []);


  const [selected, setSelected] = useState(data.choiceitem);

  const handleChoiceListChange = useCallback((value) => setSelected(value), []);
  const [checked1, setChecked1] = useState(data.checked1);
  const [checked2, setChecked2] = useState(data.checked2);
  const [checked3, setChecked3] = useState(data.checked3);
  const [checked4, setChecked4] = useState(data.checked4);
  const [checked5, setChecked5] = useState(data.checked5);


  const [rangeCount, setCountDown] = useState(data.countdown);


  const handleRangeSlider = useCallback(
    (value) => setCountDown(value),
    [],
  );


  const handleChange1 = useCallback((newChecked) => setChecked1(newChecked), []);
  const handleChange2 = useCallback((newChecked) => setChecked2(newChecked), []);
  const handleChange3 = useCallback((newChecked) => setChecked3(newChecked), []);
  const handleChange4 = useCallback((newChecked) => setChecked4(newChecked), []);
  const handleChange5 = useCallback((newChecked) => setChecked5(newChecked), []);





  const renderChildren = useCallback(
    (isSelected) =>
      isSelected && (
        <div>
          <Stack>
        
          < TestColor  datacolor={data} index={0} />
          <Label>Accent/button color</Label>

    < TestColor  datacolor={data} index={1}/>
    <Label>Button hover color</Label>
    < TestColor  datacolor={data} index={2}/>
     
      
     


           <Label>Button text/icon color</Label>
          </Stack>
        </div>
      ),
    [],
  );
 



  const Details = (
    <div>
      <Page title=" Design Setting">
        <Card sectioned>


          <Label>Position</Label>
          <div className="row">
            <div className="col-sm-6">
              <label>
                <input id="theme-0" type="radio" name="radio1" checked={value === 'left'} />
                <span for="themo-0" className="themebox-0" onClick={handlePosition}>Left</span>
              </label>

            </div>
            <div className="col-sm-6">
              <label>
                <input id="theme-1" type="radio" name="radio1" checked={value === 'right'} />
                <span for="theme-1" className="themebox-1" onClick={handlePosition1}>Right</span>
              </label>

            </div>
          </div>
    
          <Label> Theme</Label>
          <Stack>
         
            <ChoiceList

              choices={[
                { label: 'Light', value: 'light'},
       

                {
                  label: 'Dark',
                  value: 'dark',
                  renderChildren,
                },
              ]}
              selected={selected}
              onChange={handleChoiceListChange}
            />
          </Stack>
       
       
          <div className="colorpicker" >


        
          <Stack>
            <Checkbox
              label="Theme font iherted"
              checked={checked}
              onChange={handleChange}
            />
          </Stack>
      

          <RangeSlider
            label="Opacity percentage"
            value={rangeFonts}
            onChange={handleRangeSliderFont}
            output
            suffix={rangeFonts}
          />

          <RangeSlider
            label="Mobile"
            value={rangeValue}
            onChange={handleRangeSliderChange}
            output
            suffix={rangeValue}
          />
  </div>
        </Card>
      </Page>
    </div>

  );


 







  const FunctionD = (
    <div>
      <Page title="Functionality Setting">

        <Card sectioned>


          <div>
            <Checkbox
              label="Enable cart notes"
              checked={checked1}
              onChange={handleChange1}
            />
          </div>
          <div>
            <Checkbox
              label="Sticky footer "
              checked={checked2}
              onChange={handleChange2}
            />
          </div>
          <div>
            <Checkbox
              label="Continue shopping link"
              checked={checked3}
              onChange={handleChange3}
            />
          </div>
          <div>
            <Checkbox
              label="Show additional checkout buttons "
              checked={checked4}
              onChange={handleChange4}
            />
          </div>
          <Checkbox
            label="Show custom properties in cart "
            checked={checked5}
            onChange={handleChange5}
          />


          <Label> Variant & property format</Label>

          <RadioButton
            label="Value.Value"

            checked={value === 'right'}
            id="disabled"
            name="accounts"
            onChange={handlePosition1}
          />

          <RadioButton
            label="Key:Value"

            id="optional"
            name="accounts"
            checked={value === 'left'}
            onChange={handlePosition}
          />
          <RangeSlider
            label="Countdown timer minutes"
            value={rangeCount}
            onChange={(value,ture)=>{handleRangeSlider(value);setVisable(ture)}}
            output
            suffix={rangeCount}
          />

          <center>

            <Button  >More Settings</Button>
          </center>
        </Card>


      </Page>
    </div>


  );

  const createSuvery = async () => {
    

    await fetch('http://localhost:3000/Setting', {
        method: 'PUT',
        body: JSON.stringify({position:value,theme:valuetheme,choiceitem:selected,checked:checked,checked1:checked1,checked2:checked2,checked3:checked3,checked4:checked4,checked5:checked5,font_size:rangeFonts,mobile_size:rangeValue,countdown:rangeCount}),
        headers: { 'Content-Type': 'application/json' }
    })

    alert("Update Position")
    setVisable(false);
}


console.log(rangeCount);
  return (
    <div className="container">
      <Frame> 
        {
           visable &&
        
        <ContextualSaveBar
          message="Unsaved changes"
          saveAction={{
            onAction: () => createSuvery(),
            loading: false,
            disabled: false,
          }}
          discardAction={{
            onAction: () => { setVisable(false), console.log('add form submit logic')},
          }}
        />
      }


        <Page title="Settings" fullWidth>
          <Layout>
            <Layout.AnnotatedSection
              title="Store details"
              description="Shopify and your customers will use this information to contact you."
            >
              {Details}
              {FunctionD}

            </Layout.AnnotatedSection>
            <Layout.AnnotatedSection
              title="Store address"
              description="This address will appear on your invoices."
            >
              {/* Address fields */}
            </Layout.AnnotatedSection>
          </Layout>
        </Page>
      </Frame>
    </div>

  );
}
