import { Card, Page, Layout, TextContainer, Heading } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import TestColor from "./testcolor";
import { Setting } from '../Setting.json';
import { useState } from "react";

export default function PageName() {

  const data = Setting;

  const [dataA, setDataA] = useState([]);
  const testa = ()=>{
    alert("hello");
  }
  console.log(dataA);
  return (
    <Page>
      <TitleBar
        title="Page name"
        primaryAction={{
          content: "Primary action",
          onAction: () => console.log("Primary action"),
        }}
        secondaryActions={[
          {
            content: "Secondary action",
            onAction: () => console.log("Secondary action"),
          },
        ]}
      />
      {/* <Layout>
        <Layout.Section>
          <Card sectioned>
            <Heading>Heading</Heading>
            <TextContainer>
              <p>Body</p>
            </TextContainer>
          </Card>
          <Card sectioned>
            <Heading>Heading</Heading>
            <TextContainer>
              <p>Body</p>
            </TextContainer>
          </Card>
        </Layout.Section>
        <Layout.Section secondary>
          <Card sectioned>
            <Heading>Heading</Heading>
            <TextContainer>
              <p>Body</p>
            </TextContainer>
          </Card>
        </Layout.Section>
      </Layout> */}

    < TestColor  datacolor={data} index={0} />
    < TestColor  datacolor={data} index={1}/>
    < TestColor  datacolor={data} index={2}/>
    </Page>
  );
}
