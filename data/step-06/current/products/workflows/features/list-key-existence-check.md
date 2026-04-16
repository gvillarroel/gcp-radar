---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.524Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "List key existence check"
feature_slug: "list-key-existence-check"
latest_feature_date: "2022-02-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview"
  - "https://docs.cloud.google.com/workflows/docs/tutorials/callbacks-firestore"
  - "https://docs.cloud.google.com/workflows/docs/create-workflow-terraform"
keywords:
  - "existence"
  - "checking"
  - "whether"
  - "check"
  - "list"
  - "supports"
---

# List key existence check

Product: Workflows
Coverage: LOW

## Step 02 Summary

Workflows supports checking whether a key exists in a list.

## Extended Definition

Workflows supports checking whether a key exists in a list.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview)
- [https://docs.cloud.google.com/workflows/docs/tutorials/callbacks-firestore](https://docs.cloud.google.com/workflows/docs/tutorials/callbacks-firestore)
- [https://docs.cloud.google.com/workflows/docs/create-workflow-terraform](https://docs.cloud.google.com/workflows/docs/create-workflow-terraform)

## Supporting Pages

### Standard library overview \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview)
- Source ID: `site-api-reference-required-2`
- Final score: 27
- Re-rank relevance: N/A

Evidence snippets:
- Functions in() Checks whether a given key is present in a list or map. keys() Accepts an attribute of type map and returns a list of key elements in the map. len() Computes the length of value according to its type.
- Functions decode Decodes given data to string, assuming the specified character set. encode Encodes given text to bytes, using the specified character set. find all Finds the index of all instances of a substring in a string. find all regex Finds all matches of a regular expression in a string. match regex Reports whether a string contains a match of a regular expression. replace all Replaces all instances of a substring with a new string. replace all regex Replaces all matches of a regular expression with a new string. split Splits the source string into a list of all substrings between each instance of the separator. substring Extracts the substring between two zero-based indexes of a source string. to lower Returns a string with all Unicode letters mapped to their lowercase. to upper Returns a string with all Unicode letters mapped to their uppercase. url decode Returns a string with pluses and percent-escaped characters converted to UTF-8. url encode Returns a string with percent-encoded reserved characters, including spaces. url encode plus Returns a string with percent-encoded reserved characters, and spaces replaced by pluses ( + ).
- Functions compute checksum Computes checksum using a given hashing algorithm. compute hmac Computes the hash-based message authentication code (HMAC) for data given a secret key and hashing algorithm.
- Functions concat Creates a copy of a list with a new element concatenated at the end. prepend Creates a copy of a list with a new element added to the beginning.

### "Create a human-in-the-loop workflow using callbacks \_|\_ Workflows \_|\_\

- URL: [https://docs.cloud.google.com/workflows/docs/tutorials/callbacks-firestore](https://docs.cloud.google.com/workflows/docs/tutorials/callbacks-firestore)
- Source ID: `site-docs-root`
- Final score: 23
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- We'll do better next time! </sl-alert> <p></p> <sl-button id="newBtn" style="display: none;" type="primary">New translation</sl-button> </sl-form> <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js"></script> <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-firestore.js"></script> <script> var firebaseConfig = { apiKey: "XXXX", authDomain: "XXXX", projectId: "XXXX", storageBucket: "XXXX", messagingSenderId: "XXXX", appId: "XXXX", measurementId: "XXXX" }; // Initialize Firebase firebase.initializeApp(firebaseConfig); </script> <script src="./script.js" type="module"></script> </body> </html> Create a text file with the filename script.js that contains the following JavaScript code: document . addEventListener ( "DOMContentLoaded" , async function ( event ) { const textArea = document . getElementById ( "text" ); textArea . focus (); const newBtn = document . getElementById ( "newBtn" ); newBtn . addEventListener ( "sl-focus" , event = > { event . target . blur (); window . location . reload (); }); const translationAlert = document . getElementById ( "translation" ); const buttonRow = document . getElementById ( "buttonRow" ); var callbackUrl = "" ; const validationAlert = document . getElementById ( "validationAlert" ); const rejectionAlert = document . getElementById ( "rejectionAlert" ); const validateBtn = document . getElementById ( "validateBtn" ); const rejectBtn = document . getElementById ( "rejectBtn" ); const translateBtn = document . getElementById ( "translateBtn" ); translateBtn . addEventListener ( "sl-focus" , async event = > { event . target . disabled = true ; event . target . loading = true ; textArea . disabled = true ; console . log ( "Text to translate = " , textArea . value ); const fnUrl = UPDATE ME ; try { console . log ( "Calling workflow executor function..." ); const resp = await fetch ( fnUrl , { method : "POST" , headers : { "accept" : "application/json" , "content-type" : "application/json" }, body : JSON . stringify ({ text : textArea . value }) }); const executionResp = await resp . json (); const executionId = executionResp . executionId . slice ( - 36 ); console . log ( "Execution ID = " , executionId ); const db = firebase . firestore (); const translationDoc = db . collection ( "translations" ). doc ( executionId ); var translationReceived = false ; var callbackReceived = false ; var approvalReceived = false ; translationDoc . onSnapshot (( doc ) = > { console . log ( "Firestore update" , doc . data ()); if ( doc . data ()) { if ( "translation" in doc . data ()) { if ( ! translationReceived ) { console . log ( "Translation = " , doc . data (). translation ); translationReceived = true ; translationAlert . innerText = doc . data (). translation ; translationAlert . open = true ; } } if ( "callback" in doc . data ()) { if ( ! callbackReceived ) { console . log ( "Callback URL = " , doc . data (). callback ); callbackReceived = true ; callbackUrl = doc . data (). callback ; buttonRow . style . display = "block" ; } } if ( "approved" in doc . data ()) { if ( ! approvalReceived ) { const approved = doc . data (). approved ; console . log ( "Approval received = " , approved ); if ( approved ) { validationAlert . open = true ; buttonRow . style . display = "none" ; newBtn . style . display = "inline-block" ; } else { rejectionAlert . open = true ; buttonRow . style . display = "none" ; newBtn . style . display = "inline-block" ; } approvalReceived = true ; } } } }); } catch ( e ) { console . log ( e ); } event . target . loading = false ; }); validateBtn . addEventListener ( "sl-focus" , async event = > { validateBtn . disabled = true ; rejectBtn . disabled = true ; validateBtn . loading = true ; validateBtn . blur (); // call callback await callCallbackUrl ( callbackUrl , true ); }); rejectBtn . addEventListener ( "sl-focus" , async event = > { rejectBtn . disabled = true ; validateBtn . disabled = true ; rejectBtn . loading = true ; rejectBtn . blur (); // call callback await callCallbackUrl ( callbackUrl , false ); }); }); async function callCallbackUrl ( url , approved ) { console . log ( "Calling callback URL with status = " , approved ); const fnUrl = UPDATE ME ; try { const resp = await fetch ( fnUrl , { method : "POST" , headers : { "accept" : "application/json" , "content-type" : "application/json" }, body : JSON . stringify ({ url , approved }) }); const result = await resp . json (); console . log ( "Callback answer = " , result ); } catch ( e ) { console . log ( e ); } } Edit the script.js file, replacing the UPDATE ME placeholders with the Cloud Run function URLs you noted previously.
- Change to the public directory: cd public Create a text file with the filename index.html that contains the following HTML markup. (In a later step, you will modify the index.html file and add the Firebase SDK scripts.) <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width"> <title>Frenglish translation — Feature Workflows callbacks</title> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.42/dist/themes/base.css"> <script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.42/dist/shoelace.js"></script> <link rel="stylesheet" href="./style.css"> </head> <body> <h1>Translate from English to French</h1> <sl-form class="form-overview"> <sl-textarea id="text" placeholder="The quick brown fox jumps over the lazy dog." label="English text to translate"></sl-textarea> <p></p> <sl-button id="translateBtn" type="primary">Translate</sl-button> <p></p> <sl-alert id="translation" type="primary"> Le rapide renard brun saute au dessus du chien paresseux. </sl-alert> <p></p> <div id="buttonRow" style="display: none;"> <sl-button id="validateBtn" type="success">Validate</sl-button> <sl-button id="rejectBtn" type="danger">Reject</sl-button> </div> <p></p> <sl-alert id="validationAlert" type="success"> <sl-icon slot="icon" name="check2-circle"></sl-icon> <strong>The translation has been validated</strong><br> Glad that you liked our translation!
- In the translateBtn.addEventListener method, replace const fnUrl = UPDATE ME; with: const fnUrl = "https:// REGION - PROJECT ID .cloudfunctions.net/invokeTranslationWorkflow" ; In the callCallbackUrl function, replace const fnUrl = UPDATE ME; with: const fnUrl = "https:// REGION - PROJECT ID .cloudfunctions.net/translationCallbackCall" ; Create a text file with the filename style.css that contains the following cascading styles: { font-family : - apple-system , BlinkMacSystemFont , 'Segoe UI' , Roboto , Oxygen , Ubuntu , Cantarell , 'Open Sans' , 'Helvetica Neue' , sans-serif ; } body { margin : 20 px ; } h1 , h2 , h3 , h4 { color : #0ea5e9 ; } Add Firebase to your web app In this tutorial, the HTML page, JavaScript script, and CSS style sheet are deployed as static assets using Firebase Hosting but they can be hosted anywhere and served locally on your own machine for testing purposes.
- It should resemble the following: approved: true callback: "https://workflowexecutions.googleapis.com/v1/projects/26811016474/locations/us-central1/workflows/translation validation/executions/68bfce75-5f62-445f-9cd5-eda23e6fa693/callbacks/72851c97-6bb2-45e3-9816-1e3dcc610662 1a16697f-6d90-478d-9736-33190bbe222b" text: "The quick brown fox jumps over the lazy dog." translation: "Le renard brun rapide saute par-dessus le chien paresseux." The approved status is true or false depending on whether you validate or reject the translation.

### "Quickstart: Create a workflow by using Terraform \_|\_ Workflows \_|\_ Google\

- URL: [https://docs.cloud.google.com/workflows/docs/create-workflow-terraform](https://docs.cloud.google.com/workflows/docs/create-workflow-terraform)
- Source ID: `site-docs-root`
- Final score: 23
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a workflow resource "google workflows workflow" "default" { name = "sample-workflow" region = "us-central1" description = "A sample workflow" service account = google service account.default.id deletion protection = false # set to "true" in production labels = { env = "test" } user env vars = { url = "https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam" } source contents = << -EOF This is a sample workflow that you can replace with your source code The workflow does the following: - Retrieves the current date from a public API and stores the response in currentDate - Retrieves a list of Wikipedia articles from a public API related to the day of the week stored in currentDate - Returns the list of articles in the workflow output Note that when you define workflows in Terraform, variables must be escaped with two dollar signs ($$) and not a single sign ($) - getCurrentDate : call : http.get args : url : $$ { sys.get env ( "url" )} result : currentDate - readWikipedia : call : http.get args : url : https : //en.wikipedia.org/w/api.php query : action : opensearch search : $$ { currentDate.body.dayOfWeek } result : wikiResult - returnOutput : return : $$ { wikiResult.body[1 ]} EOF depends on = [ google project service.default ] } The following arguments are used in the sample workflow: name : the name of your workflow. region : the location of your workflow. description : a description of your workflow. service account : the email address or unique ID of the service account associated with the latest workflow version.
- Confirm that a workflow is created: gcloud workflows list --location us-central1 The output should be similar to the following: NAME STATE REVISION ID UPDATE TIME projects/project-name/locations/us-central1/workflows/sample-workflow ACTIVE 000001 -f9a 2024 -02-24T13:38:58.353765906Z Optionally, you can execute the workflow: gcloud workflows execute sample-workflow Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, delete the Google Cloud project with the resources.
- For more information, see Grant a workflow permission to access Google Cloud resources . labels : a list of key-value label pairs to assign to this workflow that helps you organize your Google Cloud instances.
- Initialize Terraform in the directory: terraform init Check that the changes you propose with Terraform match the expected plan: terraform plan You can ignore the note regarding not using the -out option.

