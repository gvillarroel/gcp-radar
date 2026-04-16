---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.764Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX LINE integration"
feature_slug: "dialogflow-cx-line-integration"
latest_feature_date: "2021-04-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
  - "https://docs.cloud.google.com/dialogflow/es/docs/analytics"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agents-prebuilt"
keywords:
  - "line"
  - "messaging"
  - "integration"
  - "includes"
---

# Dialogflow CX LINE integration

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX includes an integration with LINE messaging.

## Extended Definition

Dialogflow CX includes an integration with LINE messaging.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- [https://docs.cloud.google.com/dialogflow/es/docs/analytics](https://docs.cloud.google.com/dialogflow/es/docs/analytics)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agents-prebuilt](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agents-prebuilt)

## Supporting Pages

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- These integrations can provide a text agent that you can embed on your website, connect with other messaging platforms, or provide a telephony interface.
- For example: Yes, your international plan includes Japan. (intent match) Are you sure you would like to purchase 300 shirts? ( comparison condition met) Okay, your appointment is for 7 AM tomorrow morning. (form filling completion) Okay, let's talk about aardvarks now. (transition) Event handlers : This fulfillment is called when an event is invoked.
- For example: Intent A training phrases Intent B training phrases Bias for intent B 20 50 No 20 200 Borderline 20 2000 Yes Entity use and training phrase quantity For all entity types used in an intent: Annotate every example of the entity types.
- Dialogflow CX API If none of the ready-to-use integrations are suitable, or you would like to customize the interface for your system, you can use the Dialogflow CX API directly .

### Analytics \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/analytics](https://docs.cloud.google.com/dialogflow/es/docs/analytics)
- Source ID: `site-iam-reference`
- Final score: 62
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: OK PERMISSION DENIED INTERNAL DEADLINE EXCEEDED Integrations view This view charts session and interaction counts for all requests (except Google Assistant) by integration type .
- Common metrics The following common metrics are displayed on multiple chart types: Interactions : For most views, interactions include detect intent request counts via direct API calls and indirect calls via integrations (except for Google Assistant).
- For example, consider that you have three intents: A , B , and C : If A is always the first intent matched in a session, the chart will show a 100% intent path line from session start to A .
- See: tag consumed api Creating a Dashboard with Stackdriver SLI Monitoring Metrics Limitations The following limitations apply: Google Assistant integration data is not supported.

### Prebuilt agents \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agents-prebuilt](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agents-prebuilt)
- Source ID: `site-docs-root`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Webhook The Cloud Functions webhook performs the following actions: Compares plan costs based on a trip location and duration Identifies billing anomalies based on an end-user's phone number package.json { "name": "sample-http", "version": "0.0.1", "dependencies": { "moment": "2.24.0" } } helpers.js // Get the current month , first day of current month and last month values // based on today 's date module . exports = { get date details : function ( bill state ) { const monthNames = [ "January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December" ]; let today = new Date () let first month name = monthNames [ today . getMonth ()] let firstDay = new Date ( today . getFullYear (), today . getMonth (), 1 ); let first day str = first month name + ' 0' + firstDay . getDate () + ', ' + firstDay . getFullYear () let last month name = monthNames [ today . getMonth () - 1 ] let last month first day str = last month name + ' 0' + firstDay . getDate () + ', ' + firstDay . getFullYear () let second last month name = monthNames [ today . getMonth () - 2 ] if ( bill state . toString () == 'current' ) { return [ first month name , first day str , last month name ] } else { return [ last month name , last month first day str , second last month name ] } } } index.js / Responds to any HTTP request . @ param { ! express : Request } req HTTP request context . @ param { ! express : Response } res HTTP response context . / const helpers = require ( './helpers.js' ) exports . cxPrebuiltAgentsTelecom = ( req , res ) => { console . log ( 'Cloud Function:' , 'Invoked cloud function from Dialogflow CX' ); let tag = req . body . fulfillmentInfo . tag ; if ( !! tag ) { switch ( tag ) { // BEGIN detectCustomerAnomaly case 'detectCustomerAnomaly' : console . log ( tag + ' was triggered.' ); let phone number = req . body . sessionInfo . parameters . phone number ; let bill month = req . body . sessionInfo . parameters . bill state ; let parameters = req . body . sessionInfo . parameters ; let bill amount ; let product line ; let anomaly detect = "false" let purchase = "The Godfather" let purchase amount = 9.99 let total bill amount = 64.33 let bill without purchase = 54.34 let updated parameters = {} let [ month name , first of month , last month name ] = helpers . get date details ( bill month ) console . log ( month name , first of month , last month name ) // Getting the month name based on the bill state - current or previous // For example , if the current month is December , we get the values as // December , December 1 st , November // Only 999999 will have anomaly detection if ( phone number . toString () == '999999' ) { anomaly detect = "true" product line = "phone" purchase = "device protection" updated parameters [ "product line" ] = product line updated parameters [ "bill month" ] = month name updated parameters [ "last month" ] = last month name } // If bill hike amount is given - we just add it to the total bill if ( 'bill amount' in parameters ) { bill amount = parameters [ 'bill amount' ] purchase amount = bill amount [ 'amount' ] total bill amount = 54.34 + purchase amount } // Adding the updated session parameters to the new parameters json updated parameters [ "anomaly detect" ] = anomaly detect updated parameters [ "purchase" ] = purchase updated parameters [ "purchase amount" ] = purchase amount updated parameters [ "bill without purchase" ] = bill without purchase updated parameters [ "total bill" ] = total bill amount updated parameters [ "first month" ] = first of month res . status ( 200 ) . send ({ sessionInfo : { parameters : updated parameters } }); break ; // BEGIN validatePhoneLine case 'validatePhoneLine' : console . log ( tag + ' was triggered.' ); let phone = req . body . sessionInfo . parameters . phone number ; let phone line verified ; let line index ; let domestic coverage ; let covered lines = [ '5555555555' , '5105105100' , '1231231234' , '9999999999' ]; // Loop over the covered lines array covered lines . forEach (( line , index ) => { // For each phone line in the array , check if the last 4 digits are // included in the string . when true , update the line index variable if ( line . includes ( phone )) { line index = index ; console . log ( 'This is the index ' + line index ); } }); // Only 9999 will fail ; if ( line index === 3 ) { phone line verified = 'false' ; } else { phone line verified = 'true' ; } // Only 1234 will have domestic coverage . if ( line index === 2 ) { domestic coverage = 'true' ; } else { domestic coverage = 'false' ; } res . status ( 200 ) . send ({ sessionInfo : { parameters : { phone line verified : phone line verified , domestic coverage : domestic coverage } } }); break ; // BEGIN cruisePlanCoverage case 'cruisePlanCoverage' : console . log ( tag + ' was triggered.' ); let port = req . body . sessionInfo . parameters . destination ; let port is covered ; // Sample list of covered cruise ports . let covered ports = [ 'mexico' , 'canada' , 'anguilla' , ]; if ( covered ports . includes ( port . toLowerCase ())) { port is covered = 'true' ; } else { port is covered = 'false' ; } res . status ( 200 ) . send ( { sessionInfo : { parameters : { port is covered : port is covered } } }); break ; // BEGIN internationalCoverage case 'internationalCoverage' : console . log ( tag + ' was triggered.' ); let destination = req . body . sessionInfo . parameters . destination ; let coverage ; // Sample list of covered international monthly destinations . let covered by monthly = [ 'anguilla' , 'australia' , 'brazil' , 'canada' , 'chile' , 'england' , 'france' , 'india' , 'japan' , 'mexico' , 'russia' , 'singapore' , ]; // Sample list of covered international daily destinations . let covered by daily = [ 'anguilla' , 'australia' , 'brazil' , 'canada' , 'chile' , 'england' , 'france' , 'india' , 'japan' , 'mexico' , 'singapore' ]; if ( covered by monthly . includes ( destination . toLowerCase ()) && covered by daily . includes ( destination . toLowerCase ())) { coverage = 'both' ; } else if ( covered by monthly . includes ( destination . toLowerCase ()) && ! covered by daily . includes ( destination . toLowerCase ())) { coverage = 'monthly only' ; } else if ( ! covered by monthly . includes ( destination . toLowerCase ()) && ! covered by daily . includes ( destination . toLowerCase ())) { coverage = 'neither' ; } else { // This should never happen , because covered by daily is a subset of // covered by monthly coverage = 'daily only' ; } res . status ( 200 ) . send ({ sessionInfo : { parameters : { coverage : coverage } } }); break ; // BEGIN cheapestPlan case 'cheapestPlan' : console . log ( tag + ' was triggered.' ); let trip duration = req . body . sessionInfo . parameters . trip duration ; let monthly cost ; let daily cost ; let suggested plan ; // Can only suggest cheapest if both are valid for location . // When trip is longer than 30 days , calculate per - month cost ( example $ // amounts ) .
- Under the Source code section, select Inline Editor and paste the copied source code.

