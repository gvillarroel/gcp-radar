---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.514Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "Workflows JSON schema"
feature_slug: "workflows-json-schema"
latest_feature_date: "2023-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/reference/syntax"
  - "https://docs.cloud.google.com/workflows/docs/overview"
  - "https://docs.cloud.google.com/workflows/docs/tutorials/callbacks-firestore"
keywords:
  - "authoring"
  - "schema"
  - "json"
  - "provides"
  - "syntax"
  - "when"
---

# Workflows JSON schema

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

The Workflows JSON schema provides IDE syntax support when authoring workflows.

## Extended Definition

The Workflows JSON schema provides IDE syntax support when authoring workflows.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/reference/syntax](https://docs.cloud.google.com/workflows/docs/reference/syntax)
- [https://docs.cloud.google.com/workflows/docs/overview](https://docs.cloud.google.com/workflows/docs/overview)
- [https://docs.cloud.google.com/workflows/docs/tutorials/callbacks-firestore](https://docs.cloud.google.com/workflows/docs/tutorials/callbacks-firestore)

## Supporting Pages

### Syntax overview \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/reference/syntax](https://docs.cloud.google.com/workflows/docs/reference/syntax)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON [ { " PARALLEL STEP NAME " : { "parallel" : { ... " branches " : [ { " BRANCH NAME A " : { "steps" : ... } }, { " BRANCH NAME B " : { "steps" : ... } } ] } } } ] OK Example: break YAML - FOR LOOP STEP NAME A : for : value : LOOP VARIABLE NAME A in : ${ LIST EXPRESSION A } # or simply in: LIST DEFINITION steps : - STEP NAME A : next : continue - FOR LOOP STEP NAME B : for : value : LOOP VARIABLE NAME B range : [ $ { BEGIN EXPRESSION }, $ { END EXPRESSION }] steps : - STEP NAME B : next : break JSON [ { " FOR LOOP STEP NAME A " : { "for" : { "value" : " LOOP VARIABLE NAME A " , "in" : "${ LIST EXPRESSION A }" , "steps" : [ { " STEP NAME A " : { "next" : "continue" } } ] } } }, { " FOR LOOP STEP NAME B " : { "for" : { "value" : " LOOP VARIABLE NAME B " , "range" : [ "${ BEGIN EXPRESSION }" , "${ END EXPRESSION }" ], "steps" : [ { " STEP NAME B " : { "next" : " break " } } ] } } } ] OK Example: call YAML - STEP NAME : call : ... args : ... result : VARIABLE JSON [ { " STEP NAME " : { " call " : ... , "args" : { ... }, "result" : " VARIABLE " } } ] OK Example: condition YAML - STEP NAME A : switch : - condition : ${ EXPRESSION A } next : STEP NAME B - condition : ${ EXPRESSION B } next : STEP NAME C - condition : true next : STEP NAME C next : STEP NAME D JSON [ { " STEP NAME A " : { "switch" : [ { " condition " : "${ EXPRESSION A }" , "next" : " STEP NAME B " }, { " condition " : "${ EXPRESSION B }" , "next" : " STEP NAME C " } { " condition " : true , "next" : " STEP NAME C " } ], "next" : " STEP NAME D " } } ] OK Example: continue YAML - FOR LOOP STEP NAME A : for : value : LOOP VARIABLE NAME A in : ${ LIST EXPRESSION A } # or simply in: LIST DEFINITION steps : - STEP NAME A : next : continue - FOR LOOP STEP NAME B : for : value : LOOP VARIABLE NAME B range : [ $ { BEGIN EXPRESSION }, $ { END EXPRESSION }] steps : - STEP NAME B : next : break JSON [ { " FOR LOOP STEP NAME A " : { "for" : { "value" : " LOOP VARIABLE NAME A " , "in" : "${ LIST EXPRESSION A }" , "steps" : [ { " STEP NAME A " : { "next" : " continue " } } ] } } }, { " FOR LOOP STEP NAME B " : { "for" : { "value" : " LOOP VARIABLE NAME B " , "range" : [ "${ BEGIN EXPRESSION }" , "${ END EXPRESSION }" ], "steps" : [ { " STEP NAME B " : { "next" : "break" } } ] } } } ] OK Example: end YAML - STEP NAME : ... next : end JSON [ { " STEP NAME " : { ... "next" : " end " } } ] OK Example: except YAML - STEP NAME : try : call : http.get ... except : as : ERROR MAP steps : ...
- Subworkflows main Pass runtime arguments in an execution request Runtime arguments Subworkflows raise Raise custom errors. — except retry try Raise errors result Assign the result from a call to this variable. call steps args Assign responses from a call Store result from a call in a variable retry Define the retry behavior and the number of retry attempts. try — Retry steps return Stop a workflow's execution and return a value or expression. — — Complete the execution of a workflow steps Nest a series of steps. branches for loops Subworkflows try main Iteration Nested steps Subworkflows switch Allow the value of an expression to control the flow of a workflow's execution. — condition Conditions try Define a list of steps to retry if an error is raised, or catch and handle the error. — except retry Catch errors Retry steps Example: args YAML - STEP NAME : call : ... args : ... result : VARIABLE JSON [ { " STEP NAME " : { "call" : ... , " args " : { ... }, "result" : " VARIABLE " } } ] OK Example: assign YAML - STEP NAME : assign : - VARIABLE NAME : VALUE JSON [ { " STEP NAME " : { " assign " : [ { " VARIABLE NAME " : " VALUE " } ] } } ] OK Example: branches YAML - PARALLEL STEP NAME : parallel : ... branches : - BRANCH NAME A : steps : ... - BRANCH NAME B : steps : ...
- JSON [ { " PARALLEL STEP NAME " : { " parallel " : { "exception policy" : " POLICY " , "shared" : [ " VARIABLE A " , " VARIABLE B " , ... ], " BRANCHES OR FOR " : ... } } } ] OK Example: raise YAML - step a : raise : "Something went wrong." JSON [ { "step a" : { " raise " : "Something went wrong." } } ] OK Example: result YAML - STEP NAME : call : ... args : ... result : VARIABLE JSON [ { " STEP NAME " : { "call" : ... , "args" : ... , " result " : " VARIABLE " } } ] OK Example: retry YAML - step name : try : steps : ... retry : RETRY POLICY predicate : RETRY PREDICATE max retries : NUMBER OF RETRIES backoff : initial delay : DELAY SECONDS max delay : MAX DELAY SECONDS multiplier : DELAY MULTIPLIER JSON [ { "step name" : { "try" : { "steps" : [ ... ] }, " retry " : " RETRY POLICY " "predicate" : " RETRY PREDICATE " , "max retries" : NUMBER OF RETRIES , "backoff" : { "initial delay" : DELAY SECONDS , "max delay" : MAX DELAY SECONDS , "multiplier" : DELAY MULTIPLIER } } } ] OK Example: return YAML - STEP NAME : ... return : ${ VARIABLE } JSON [ { " STEP NAME " : { ... " return " : "${ VARIABLE }" } } ] OK Example: steps YAML - STEP NAME : steps : - STEP NAME 1 : steps : - STEP NAME A : ... - STEP NAME B : ... - STEP NAME 2 : steps : - STEP NAME C : ...
- Commented out since anchor links don't work in filtered content. --> Reserved word Description Use with See also Examples args Pass arguments and their values when calling a function that accepts parameters. call steps call result Calls assign Set the value of a variable. — — Assign variables branches Execute parallel branches concurrently and the steps in each branch sequentially. steps parallel Execute parallel steps Parallel steps Replace experimental function with parallel step break Terminate iteration of a for loop. next in for loops continue Use break/continue in a loop call Run a function and return a result. — args result Calls condition Provide an expression to control if a step is executed (the first condition to evaluate as true). switch — Conditions continue Terminate the current iteration of a for loop and continue with the next iteration. next in for loops break Use break/continue in a loop end Stop a workflow's execution without returning a value. next — Complete the execution of a workflow except Catch and handle errors thrown during a workflow execution. try retry Catch errors for Iterate over a sequence of numbers or through a collection of data, such as a list or map. steps — Iteration main Define your main workflow.

### Workflows overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/overview](https://docs.cloud.google.com/workflows/docs/overview)
- Source ID: `site-docs-root`
- Final score: 83
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Connecting services When to call a service How do you know when to create steps in YAML or JSON using the Workflows syntax or when to create a service—for example, a Cloud Run service or a Cloud Run function—to do the work instead?
- For example: Provision new tenant projects or infrastructure Turn down resources on a schedule or through event triggers Core concepts A workflow consists of a series of steps described using the Workflows syntax, and can be written in either YAML or JSON.
- A complicated case is typically easier to implement in code, instead of using YAML or JSON and the Workflows syntax.
- Error handling You can make your workflows resilient and customize their behavior when a failure occurs by using Workflows' exception handling, including automated HTTP call retries with exponential back-offs, custom error handlers, and other advanced features.

### "Create a human-in-the-loop workflow using callbacks \_|\_ Workflows \_|\_\

- URL: [https://docs.cloud.google.com/workflows/docs/tutorials/callbacks-firestore](https://docs.cloud.google.com/workflows/docs/tutorials/callbacks-firestore)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deploy the workflow A workflow is made up of a series of steps described using the Workflows syntax, which can be written in either YAML or JSON format.
- We'll do better next time! </sl-alert> <p></p> <sl-button id="newBtn" style="display: none;" type="primary">New translation</sl-button> </sl-form> <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js"></script> <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-firestore.js"></script> <script> var firebaseConfig = { apiKey: "XXXX", authDomain: "XXXX", projectId: "XXXX", storageBucket: "XXXX", messagingSenderId: "XXXX", appId: "XXXX", measurementId: "XXXX" }; // Initialize Firebase firebase.initializeApp(firebaseConfig); </script> <script src="./script.js" type="module"></script> </body> </html> Create a text file with the filename script.js that contains the following JavaScript code: document . addEventListener ( "DOMContentLoaded" , async function ( event ) { const textArea = document . getElementById ( "text" ); textArea . focus (); const newBtn = document . getElementById ( "newBtn" ); newBtn . addEventListener ( "sl-focus" , event = > { event . target . blur (); window . location . reload (); }); const translationAlert = document . getElementById ( "translation" ); const buttonRow = document . getElementById ( "buttonRow" ); var callbackUrl = "" ; const validationAlert = document . getElementById ( "validationAlert" ); const rejectionAlert = document . getElementById ( "rejectionAlert" ); const validateBtn = document . getElementById ( "validateBtn" ); const rejectBtn = document . getElementById ( "rejectBtn" ); const translateBtn = document . getElementById ( "translateBtn" ); translateBtn . addEventListener ( "sl-focus" , async event = > { event . target . disabled = true ; event . target . loading = true ; textArea . disabled = true ; console . log ( "Text to translate = " , textArea . value ); const fnUrl = UPDATE ME ; try { console . log ( "Calling workflow executor function..." ); const resp = await fetch ( fnUrl , { method : "POST" , headers : { "accept" : "application/json" , "content-type" : "application/json" }, body : JSON . stringify ({ text : textArea . value }) }); const executionResp = await resp . json (); const executionId = executionResp . executionId . slice ( - 36 ); console . log ( "Execution ID = " , executionId ); const db = firebase . firestore (); const translationDoc = db . collection ( "translations" ). doc ( executionId ); var translationReceived = false ; var callbackReceived = false ; var approvalReceived = false ; translationDoc . onSnapshot (( doc ) = > { console . log ( "Firestore update" , doc . data ()); if ( doc . data ()) { if ( "translation" in doc . data ()) { if ( ! translationReceived ) { console . log ( "Translation = " , doc . data (). translation ); translationReceived = true ; translationAlert . innerText = doc . data (). translation ; translationAlert . open = true ; } } if ( "callback" in doc . data ()) { if ( ! callbackReceived ) { console . log ( "Callback URL = " , doc . data (). callback ); callbackReceived = true ; callbackUrl = doc . data (). callback ; buttonRow . style . display = "block" ; } } if ( "approved" in doc . data ()) { if ( ! approvalReceived ) { const approved = doc . data (). approved ; console . log ( "Approval received = " , approved ); if ( approved ) { validationAlert . open = true ; buttonRow . style . display = "none" ; newBtn . style . display = "inline-block" ; } else { rejectionAlert . open = true ; buttonRow . style . display = "none" ; newBtn . style . display = "inline-block" ; } approvalReceived = true ; } } } }); } catch ( e ) { console . log ( e ); } event . target . loading = false ; }); validateBtn . addEventListener ( "sl-focus" , async event = > { validateBtn . disabled = true ; rejectBtn . disabled = true ; validateBtn . loading = true ; validateBtn . blur (); // call callback await callCallbackUrl ( callbackUrl , true ); }); rejectBtn . addEventListener ( "sl-focus" , async event = > { rejectBtn . disabled = true ; validateBtn . disabled = true ; rejectBtn . loading = true ; rejectBtn . blur (); // call callback await callCallbackUrl ( callbackUrl , false ); }); }); async function callCallbackUrl ( url , approved ) { console . log ( "Calling callback URL with status = " , approved ); const fnUrl = UPDATE ME ; try { const resp = await fetch ( fnUrl , { method : "POST" , headers : { "accept" : "application/json" , "content-type" : "application/json" }, body : JSON . stringify ({ url , approved }) }); const result = await resp . json (); console . log ( "Callback answer = " , result ); } catch ( e ) { console . log ( e ); } } Edit the script.js file, replacing the UPDATE ME placeholders with the Cloud Run function URLs you noted previously.
- Change to the translationCallbackCall directory: cd ../translationCallbackCall Create a text file with the filename index.js that contains the following Node.js code: const cors = require ( 'cors' )({ origin : true }); const fetch = require ( 'node-fetch' ); exports . translationCallbackCall = async ( req , res ) = > { cors ( req , res , async () = > { res . set ( 'Access-Control-Allow-Origin' , ' ' ); const { url , approved } = req . body ; console . log ( "Approved? " , approved ); console . log ( "URL = " , url ); const { GoogleAuth } = require ( ' google-auth-library ' ); const auth = new GoogleAuth (); const token = await auth . getAccessToken (); console . log ( "Token" , token ); try { const resp = await fetch ( url , { method : 'POST' , headers : { 'accept' : 'application/json' , 'content-type' : 'application/json' , 'authorization' : Bearer ${ token } }, body : JSON . stringify ({ approved }) }); console . log ( "Response = " , JSON . stringify ( resp )); const result = await resp . json (); console . log ( "Outcome = " , JSON . stringify ( result )); res . status ( 200 ). json ({ status : 'OK' }); } catch ( e ) { console . error ( e ); res . status ( 200 ). json ({ status : 'error' }); } }); }; Create a text file with the filename package.json that contains the following npm metadata: { "name" : "approve-translation-workflow" , "version" : "0.0.1" , "dependencies" : { "cors" : "^2.8.5" , "node-fetch" : "^2.6.1" , "google-auth-library" : "^7.1.1" } } Deploy the function with an HTTP trigger and allow unauthenticated access: gcloud functions deploy translationCallbackCall \ --region = ${ REGION } \ --runtime nodejs14 \ --entry-point = translationCallbackCall \ --trigger-http \ --allow-unauthenticated The function might take a few minutes to deploy.
- WORKFLOW NAME ; const execResponse = await client . createExecution ({ parent : client . workflowPath ( PROJECT ID , CLOUD REGION , WORKFLOW NAME ), execution : { argument : JSON . stringify ({ text }) } }); console . log ( Translation workflow execution request: ${ JSON . stringify ( execResponse ) } ); const execName = execResponse [ 0 ]. name ; console . log ( Created translation workflow execution: ${ execName } ); res . set ( 'Access-Control-Allow-Origin' , ' ' ); res . status ( 200 ). json ({ executionId : execName }); }); }; Create a text file with the filename package.json that contains the following npm metadata: { "name" : "launch-translation-workflow" , "version" : "0.0.1" , "dependencies" : { "@google-cloud/workflows" : "^1.2.5" , "cors" : "^2.8.5" } } Deploy the function with an HTTP trigger and allow unauthenticated access: gcloud functions deploy invokeTranslationWorkflow \ --region = ${ REGION } \ --runtime nodejs14 \ --entry-point = invokeTranslationWorkflow \ --set-env-vars PROJECT ID = ${ GOOGLE CLOUD PROJECT } ,CLOUD REGION = ${ REGION } ,WORKFLOW NAME = translation validation \ --trigger-http \ --allow-unauthenticated The function might take a few minutes to deploy.

