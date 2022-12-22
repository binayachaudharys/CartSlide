import { Card, EmptyState, Page } from "@shopify/polaris";
import { notFoundImage } from "../assets";

export default function NotFound() {
  return (
    <Page>
      <Card>
        <Card.Section>
          <EmptyState
            heading="There is no page at this address"
            image={notFoundImage}
          >
            <p>
              Check the URL and try again, or use the search bar to find what
              you need.
            </p>
          </EmptyState>
        </Card.Section>
      </Card>
    </Page>
  );
}



// const Details = (
   
//   <Page title=" Design Setting">
   

//    {/* <RadioButton
//     label="Right"

//     checked={value === 'right'}
//     id="disabled"
//     name="accounts"
//     onChange={handlePosition1}
//   />

//   <RadioButton
//     label="Left"

//     id="optional"
//     name="accounts"
//     checked={value === 'left'}
//     onChange={handlePosition}
//   />
// */}

// <Label>Position</Label>
// <label>
// <input id="theme-0" type="radio" name="radio1" checked={value === 'left'} />
// <span for="themo-0" className="themebox-0" onClick={handlePosition}>Left</span>
// </label>

// <label>
// <input id="theme-1" type="radio" name="radio1" checked={value === 'right'}  />
// <span for="theme-1" className="themebox-1" onClick={handlePosition1}>Right</span>
// </label>


// <Label>Theme</Label>
// <label>
// <input id="theme-0" type="radio" name="radio" checked={valuetheme === 'light'} />
// <span for="themo-0" className="themebox-0" onClick={handleTheme}>Light</span>
// </label>

// <label>
// <input id="theme-1" type="radio" name="radio" checked={valuetheme === 'dark'}  />
// <span for="theme-1" className="themebox-1" onClick={handleTheme1}>Dark</span>
// </label>

// <Checkbox
//   label="Theme font iherted"
//   checked={checked}
//   onChange={handleChange}
// />
//   </Page>


// );