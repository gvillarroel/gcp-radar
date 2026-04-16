---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.183Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Custom SSL certificates for access routing"
feature_slug: "custom-ssl-certificates-for-access-routing"
latest_feature_date: "2023-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model"
keywords:
  - "certificates"
  - "custom"
  - "access"
  - "routing"
---

# Custom SSL certificates for access routing

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee Pay-as-you-go provisioning can use existing self-managed SSL certificates for customized access routing.

## Extended Definition

Apigee Pay-as-you-go provisioning can use existing self-managed SSL certificates for customized access routing.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model](https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model)

## Supporting Pages

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- For example, shown below is a target endpoint that uses a reference to the keystore: <SSLInfo> <Enabled>true</Enabled> <ClientAuthEnabled>false</ClientAuthEnabled> <KeyStore>ref://keystoreref</KeyStore> <KeyAlias>myKeyAlias</KeyAlias> </SSLInfo> Use the following POST API call to create the reference named keystoreref : curl "https://apigee.googleapis.com/v1/organizations/ {org} /environments/ {env} /references" \ -X POST \ -H "Authorization: Bearer $TOKEN" \ -d '<ResourceReference name=" keystoreref "> <Refers> myTestKeystore </Refers> <ResourceType>KeyStore</ResourceType> </ResourceReference>' Where $TOKEN is set to your OAuth 2.0 access token, as described in Obtaining an OAuth 2.0 access token .
- To later change the reference to point to a different keystore, ensuring that the alias has the same name, use the following PUT call: curl "https://apigee.googleapis.com/v1/organizations/ {org} /environments/ {env} /references/ keystoreref " \ -X PUT \ -H "Authorization: Bearer $TOKEN" \ -d '<ResourceReference name=" keystoreref "> <Refers> myNewKeystore </Refers> <ResourceType>KeyStore</ResourceType> </ResourceReference>' Where $TOKEN is set to your OAuth 2.0 access token, as described in Obtaining an OAuth 2.0 access token .
- In this example, the GoogleAccessToken element is configured to generate a Google Auth Token to authenticate the target request: <HTTPTargetConnection> <Authentication> <GoogleAccessToken> <Scopes> <Scope>https://www.googleapis.com/auth/cloud-platform</Scope> </Scopes> </GoogleAccessToken> </Authentication> <URL> https://secretmanager.googleapis.com/v1/projects/project-id/secrets/secret-id </URL> </HTTPTargetConnection> The following example shows how to automatically set the audience of the GoogleIDToken.
- If not, then the inbound request is forwarded to http://api.mycompany.com/v2 . <RouteRule name="MyRoute"> <Condition>request.header.routeTo = "TargetEndpoint1"</Condition> <TargetEndpoint>TargetEndpoint1</TargetEndpoint> </RouteRule> <RouteRule name="default"> <URL>http://api.mycompany.com/v2</URL> </RouteRule> Note: More dynamic routing The Apigee community article specifying proxy endpoint shows dynamic routing to different world regions based on variables extracted from the request URI.

### AssignMessage policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- Source ID: `site-api-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- You can access the property set rules as follows, where routingrules is the property set name and rule1 , rule2 , rule n are keys: propertyset.routingrules.rule1 propertyset.routingrules.rule2 propertyset.routingrules.rule n To access these properties in an API proxy flow, you must know which rule you want to select at design time.
- After you create a custom request, you can use it in the following ways: Access its variables in other policies Pass it to an external service Note : You cannot pass a custom request message to the target endpoint in the flow.
- You can access the various properties of a custom message in another AssignMessage policy that occurs later in the flow.
- Required Type Complex object Parent Element N/A Child Elements <Add> <AssignTo> <AssignVariable> <Copy> <DisplayName> <IgnoreUnresolvedVariables> <Remove> <Set> The <AssignMessage> element uses the following syntax: Syntax The <AssignMessage> element uses the following syntax: < AssignMessage continueOnError = "[false true]" enabled = "[true false]" name = " POLICY NAME " > < !-- All AssignMessage child elements are optional -- > < Add > < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < Headers > < Header name = " HEADER NAME " > HEADER VALUE < / Header > ... < / Headers > < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < / Add > < AssignTo createNew = "[true false]" transport = "http" type = "[request response]" > DESTINATION VARIABLE NAME < / AssignTo > < AssignVariable > < Name> VARIABLE NAME < / Name > < PropertySetRef> SOURCE VARIABLE < / PropertySetRef > < Ref> SOURCE VARIABLE < / Ref > < ResourceURL> RESOURCE URL OR TEMPLATE < / ResourceURL > < Template> MESSAGE TEMPLATE < / Template > or < Template ref = ' TEMPLATE VARIABLE ' >< / Template > < Value> VARIABLE VALUE < / Value > < / AssignVariable > < Copy source = " VARIABLE NAME " > < !-- Can also be an empty array ( < FormParams / > ) --> < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < !-- Copy all headers -- > < Headers / > < !-- or , copy specific headers by name -- > < Headers > < Header name = " HEADER NAME " / > < !-- or -- > < Header name = " HEADER NAME " > [ false true ] < / Header > ... < / Headers > < Path > [ false true ] < / Path > < Payload > [ false true ] < / Payload > < !-- Can also be an empty array ( < QueryParams / > ) --> < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < StatusCode > [ false true ] < / StatusCode > < Verb > [ false true ] < / Verb > < Version > [ false true ] < / Version > < / Copy > < DisplayName> POLICY DISPLAY NAME < / DisplayName > < IgnoreUnresolvedVariables > [ true false ] < / IgnoreUnresolvedVariables > < !-- Can also be empty to remove everything from the message ( < Remove / > ) -- > < Remove > < !-- Remove all form parameters -- > < FormParams / > < !-- or , remove specific form parameters by name -- > < FormParams > < FormParam name = " FORMPARAM NAME " / > < !-- or -- > < FormParam name = " FORMPARAM NAME " > [ false true ] < / FormParam > ... < / FormParams > < !-- Remove all headers -- > < Headers / > < !-- or , remove specific headers by name -- > < Headers > < Header name = " HEADER NAME " / > < !-- or -- > < Header name = " HEADER NAME " > [ false true ] < / Header > ... < / Headers > < Payload > [ false true ] < / Payload > < !-- Remove all query parameters -- > < QueryParams / > < !-- or , remove specific query parameters by name -- > < QueryParams > < QueryParam name = " QUERYPARAM NAME " / > < !-- or -- > < QueryParam name = " QUERYPARAM NAME " > [ false true ] < / QueryParam > ... < / QueryParams > < / Remove > < Set > < Authentication > < HeaderName> HEADER NAME < / HeaderName > < !-- Use either GoogleAccessToken or GoogleIDToken -- > < GoogleAccessToken > < Scopes > < Scope> SCOPE < / Scope > ... < / Scopes > < / GoogleAccessToken > ----- or ----- < GoogleIDToken > < Audience ref = ' FLOW VARIABLE NAME > TARGET URL </Scope> < / GoogleAccessToken > < / Authentication > < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < Headers > < Header name = " HEADER NAME " > HEADER VALUE < / Header > ... < / Headers > < Path> PATH < / Path > < Payload contentType = " CONTENT TYPE " variablePrefix = " PREFIX " variableSuffix = " SUFFIX " > NEW PAYLOAD < / Payload > < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < StatusCode> HTTP STATUS CODE or { variable } < / StatusCode > < Verb > [ GET POST PUT PATCH DELETE { variable }] < / Verb > < Version > [ 1.0 1.1 { variable }] < / Verb > < / Set > < / AssignMessage > Default Policy The following example shows the default settings when you add an AssignMessage policy to your flow in the Apigee UI.

### JavaScript object model \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model](https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model)
- Source ID: `site-api-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- The request body has the following members: context.targetRequest.body.asXML; context.targetRequest.body.asJSON; context.targetRequest.body.asForm; Examples: For an XML body: < customer number = '1' > < name>Fred<name / > < customer / > To access the elements of the XML object as follows: var name = context . targetRequest . body . asXML . name ; To access XML attributes, use the @ notation. var number = context . targetRequest . body . asXML . @ number ; For a JSON request body: { "a" : 1 , "b" : "2" } var a = context . proxyRequest . body . asJSON . a ; // == 1 var b = context . proxyRequest . body . asJSON . b ; // == 2 To read form parameters: "vehicle=Car&vehicle=Truck" v0 = context . proxyRequest . body . asForm [ 'vehicle' ][ 0 ]; v1 = context . proxyRequest . body . asForm [ 'vehicle' ][ 1 ]; context.
- See also Antipattern: Use waitForComplete() in JavaScript code . // Add the required the headers for making a specific API request var headers = { 'X-SOME-HEADER' : 'some value' }; // Make a GET API request along with headers var myRequest = new Request ( "http://www.example.com" , "GET" , headers ); // Define the callback function and process the response from the GET API request function onComplete ( response , error ) { // Check if the HTTP request was successful if ( response ) { context . setVariable ( 'example.status' , response . status ); } else { context . setVariable ( 'example.error' , 'Woops: ' + error ); } } // Specify the callback Function as an argument httpClient . get ( myRequest , onComplete ); Using the JavaScript policy Use the JavaScript policy to attach custom JavaScript code to a proxy flow.
- The output signed document will have a KeyInfo element that looks like the following: < KeyInfo > < !-- xmlns = "http://www.w3.org/2000/09/xmldsig#" -- > < wssec : SecurityTokenReference wsu : Id = "STR-102" > < wssec : KeyIdentifier ValueType = "http://docs.oasis-open.org/wss/oasis-wss-soap-message-security1.1#ThumbprintSHA1" > XP + 3. .. < / wssec : KeyIdentifier > < / wssec : SecurityTokenReference > < /KeyInfo > Validate signed SOAP documents using WS-Security with X.509 certificates Validates the digital signature for a SOAP document using WS-Security with RSA/X.509.
- See also the java.text.SimpleDateFormat documentation. var pst = crypto . dateFormat ( 'M' ); var pst = crypto . dateFormat ( 'EEE, d MMM yyyy HH:mm:ss Z' ); var pst = crypto . dateFormat ( "yyyy-MM-dd'T'HH:mm:ss.SSSZ" ); Sign SOAP documents using WS-Security with X.509 certificates Secure SOAP documents via digital signatures, using WS-Security with RSA keys and X.509 certificates. crypto.wsSecRsaSign() Signs the SOAP document and returns the signed payload.

