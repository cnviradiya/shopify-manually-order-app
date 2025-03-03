import {
  Box,
  Card,
  Layout,
  Link,
  List,
  Page,
  Text,
  BlockStack,
  TextField,
  Button,
  InlineStack,
} from "@shopify/polaris";
import { TitleBar, useAppBridge } from "@shopify/app-bridge-react";
import { useCallback, useState } from "react";

export const action = async ({ request }) => {
  console.log("start action");

 	const { session, redirect } = await authenticate.admin(request);

	// Await user form submission data
	const formData = await request.formData();
  console.log(formData);
	
	// Do stuff with the data
  alert('asd');
 	return redirect("/app");
};

export default function CreateOrderPage() {
  const [lineItems, setLineItems] = useState([]);
  const [searchProduct, setSearchProduct] = useState();
  const shopify = useAppBridge();

  const openResoursePicket = async () => {
    const selectedProducts = await shopify.resourcePicker({type: 'product', multiple: true})
    console.log("Selected products", selectedProducts);
  };

  const handleSearchProductFieldChange = useCallback(
    (value) => setSearchProduct(value),
    [],
  );

  return (
    <Page>
      <TitleBar title="Create Order" />
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="300">
              <Text as="strong" variant="headingMd">
                Products
              </Text>
              <BlockStack>
                <InlineStack wrap="false" gap={300}>
                  <TextField
                    label="Search products"
                    type="text"
                    value={searchProduct}
                    onChange={handleSearchProductFieldChange}
                    helpText="Select product to create order."
                  />
                  <Button variant="secondary">Browse</Button>
                </InlineStack>
              </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <Card>
            <BlockStack gap="200">
              <Text as="h2" variant="headingMd">
                This is the second
              </Text>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
