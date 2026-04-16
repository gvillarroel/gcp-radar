---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.517Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "Execution current or final step in results"
feature_slug: "execution-current-or-final-step-in-results"
latest_feature_date: "2022-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/access-execution-results"
  - "https://docs.cloud.google.com/workflows/docs/execute-workflow-client-libraries"
  - "https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries/list"
keywords:
  - "results"
  - "include"
  - "final"
  - "current"
  - "step"
  - "execution"
  - "workflow"
---

# Execution current or final step in results

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

Workflow execution results include the current or final step of the execution.

## Extended Definition

Workflow execution results include the current or final step of the execution.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/access-execution-results](https://docs.cloud.google.com/workflows/docs/access-execution-results)
- [https://docs.cloud.google.com/workflows/docs/execute-workflow-client-libraries](https://docs.cloud.google.com/workflows/docs/execute-workflow-client-libraries)
- [https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries/list](https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries/list)

## Supporting Pages

### Access workflow execution results \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/access-execution-results](https://docs.cloud.google.com/workflows/docs/access-execution-results)
- Source ID: `site-docs-root-2`
- Final score: 243
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To view a workflow's execution logs, enter the following command: gcloud workflows executions describe \ --workflow = WORKFLOW NAME \ EXECUTION ID Replace the following: WORKFLOW NAME : the workflow's name EXECUTION ID : the execution's unique ID This command returns output similar to the following: argument: 'null' endTime: '2022-07-19T12:40:07.070039707Z' error: context: - The argument of 'in' must be a dict or an array ; got: null in step "checkSearchTermInInput" , routine "main" , line: 12 payload: "{" message ":" The argument of 'in' must be a dict or an array ; got: null " ," tags ":[" TypeError "]}" stackTrace: elements: - position: column: '26' length: '24' line: '12' routine: main step: checkSearchTermInInput name: projects/1051295516635/locations/us-central1/workflows/myFirstWorkflow/executions/17ffc89c-0a27-4d2f-8356-e681d949a3d3 startTime: '2022-07-19T12:40:07.024823663Z' state: FAILED status: currentSteps: - routine: main step: checkSearchTermInInput workflowRevisionId: 000001 -ac2 The output contains the following information: argument : the runtime arguments passed to the workflow, if any endTime : when the execution ended error : the error message thrown as a part of the exception that resulted in the execution's failure name : the full name of the execution, including the name of the project, the location of the workflow, the name of the workflow, and the execution ID startTime : when the execution began state : indicates the workflow's end state status : the current or final workflow step of the execution workflowRevisionID : the current revision at the time of the execution Execution error maps When a workflow throws an error during execution that isn't caught in a try/except block , the execution fails, and an error map (a JSON dictionary) describing the error is returned.
- Execution state : indicates the workflow's end state, including the current or final workflow step.
- Home Documentation Application development Workflows Guides Send feedback Access workflow execution results Stay organized with collections Save and categorize content based on your preferences.
- Note: To access the Execution details page, you must have a role that contains the workflows.workflows.get , workflows.executions.get , and workflows.stepEntries.list permissions.

### "Method: projects.locations.workflows.executions.stepEntries.list \_|\_ Workflows\

- URL: [https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries/list](https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries/list)
- Source ID: `site-api-reference`
- Final score: 217
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution} Authorization requires the following IAM permission on the specified resource parent : workflows.stepEntries.list Query parameters Parameters pageSize integer Optional.
- Home Documentation Application development Workflows Reference Send feedback Method: projects.locations.workflows.executions.stepEntries.list Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://workflowexecutions.googleapis.com/v1/{parent=projects/ /locations/ /workflows/ /executions/ }/stepEntries The URL uses gRPC Transcoding syntax.
- Returns a list of step entries for a workflow execution.

### "Quickstart: Execute a workflow using the Cloud Client Libraries \_|\_ Workflows\

- URL: [https://docs.cloud.google.com/workflows/docs/execute-workflow-client-libraries](https://docs.cloud.google.com/workflows/docs/execute-workflow-client-libraries)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- WorkflowName ; import java.io.IOException ; import java.util.concurrent.ExecutionException ; public class WorkflowsQuickstart { private static final String PROJECT = System . getenv ( "GOOGLE CLOUD PROJECT" ); private static final String LOCATION = System . getenv (). getOrDefault ( "LOCATION" , "us-central1" ); private static final String WORKFLOW = System . getenv (). getOrDefault ( "WORKFLOW" , "myFirstWorkflow" ); public static void main ( String ... args ) throws IOException , InterruptedException , ExecutionException { if ( PROJECT == null ) { throw new IllegalArgumentException ( "Environment variable 'GOOGLE CLOUD PROJECT' is required to run this quickstart." ); } workflowsQuickstart ( PROJECT , LOCATION , WORKFLOW ); } private static volatile boolean finished ; public static void workflowsQuickstart ( String projectId , String location , String workflow ) throws IOException , InterruptedException , ExecutionException { // Initialize client that will be used to send requests.
- ACTIVE ; // If we haven't seen the results yet, wait. if ( ! finished ) { System . out . println ( "- Waiting for results" ); Thread . sleep ( backoffDelay ); backoffTime += backoffDelay ; backoffDelay = 2 ; // Double the delay to provide exponential backoff. } else { System . out . println ( "Execution finished with state: " + execution . getState (). name ()); System . out . println ( "Execution results: " + execution . getResult ()); } } } } } Node.js const { ExecutionsClient } = require ( ' @google-cloud/workflows ' ); const client = new ExecutionsClient (); / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'my-project'; // const location = 'us-central1'; // const workflow = 'myFirstWorkflow'; // const searchTerm = ''; / Executes a Workflow and waits for the results with exponential backoff. @param {string} projectId The Google Cloud Project containing the workflow @param {string} location The workflow location @param {string} workflow The workflow name @param {string} searchTerm Optional search term to pass to the Workflow as a runtime argument / async function executeWorkflow ( projectId , location , workflow , searchTerm ) { / Sleeps the process N number of milliseconds. @param {Number} ms The number of milliseconds to sleep. / function sleep ( ms ) { return new Promise ( resolve = > { setTimeout ( resolve , ms ); }); } const runtimeArgs = searchTerm ? { searchTerm : searchTerm } : {}; // Execute workflow try { const createExecutionRes = await client . createExecution ({ parent : client . workflowPath ( projectId , location , workflow ), execution : { // Runtime arguments can be passed as a JSON string argument : JSON . stringify ( runtimeArgs ), }, }); const executionName = createExecutionRes [ 0 ]. name ; console . log ( Created execution: ${ executionName } ); // Wait for execution to finish, then print results. let executionFinished = false ; let backoffDelay = 1000 ; // Start wait with delay of 1,000 ms console . log ( 'Poll every second for result...' ); while ( ! executionFinished ) { const [ execution ] = await client . getExecution ({ name : executionName , }); executionFinished = execution . state !== 'ACTIVE' ; // If we haven't seen the result yet, wait a second. if ( ! executionFinished ) { console . log ( '- Waiting for results...' ); await sleep ( backoffDelay ); backoffDelay = 2 ; // Double the delay to provide exponential backoff. } else { console . log ( Execution finished with state: ${ execution . state } ); console . log ( execution . result ); return execution . result ; } } } catch ( e ) { console . error ( Error executing workflow: ${ e } ); } } executeWorkflow ( projectId , location , workflowName , searchTerm ). catch ( err = > { console . error ( err . message ); process . exitCode = 1 ; }); Python import time from google.cloud import workflows v1 from google.cloud.workflows import executions v1 from google.cloud.workflows.executions v1.types import executions TODO(developer): Update and uncomment the following lines. project id = "YOUR PROJECT ID" location = "YOUR LOCATION" # For example: us-central1 workflow id = "YOUR WORKFLOW ID" # For example: myFirstWorkflow Initialize API clients. execution client = executions v1 .
- If no input arguments are provided or "searchTerm" is absent, it will fetch the day of the week in Amsterdam and use it as the search term. main : params : [ input ] steps : - validateSearchTermAndRedirectToReadWikipedia : switch : - condition : '${map.get(input, "searchTerm") != null}' assign : - searchTerm : '${input.searchTerm}' next : readWikipedia - getCurrentTime : call : http.get args : url : https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam result : currentTime - setFromCallResult : assign : - searchTerm : '${currentTime.body.dayOfWeek}' - readWikipedia : call : http.get args : url : 'https://en.wikipedia.org/w/api.php' query : action : opensearch search : '${searchTerm}' result : wikiResult - returnOutput : return : '${wikiResult.body[1]}' After creating the workflow, you can deploy it, but don't execute the workflow: gcloud workflows deploy myFirstWorkflow \ --source = myFirstWorkflow.yaml \ --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com \ --location = CLOUD REGION Replace CLOUD REGION with a supported location for the workflow.
- Java GOOGLE CLOUD PROJECT= PROJECT ID LOCATION= CLOUD REGION WORKFLOW= WORKFLOW NAME mvn compile exec:java -Dexec.mainClass=com.example.workflows.WorkflowsQuickstart Node.js npx tsx index.js Python GOOGLE CLOUD PROJECT= PROJECT ID LOCATION= CLOUD REGION WORKFLOW= WORKFLOW NAME python3 main.py Replace the following: PROJECT ID : your Google Cloud project name CLOUD REGION : the location of your workflow (default: us-central1 ) WORKFLOW NAME : your workflow name (default: myFirstWorkflow ) The output is similar to the following: Execution finished with state: SUCCEEDED Execution results: [ "Thursday" , "Thursday Night Football" , "Thursday (band)" , "Thursday Island" , "Thursday (album)" , "Thursday Next" , "Thursday at the Square" , "Thursday's Child (David Bowie song)" , "Thursday Afternoon" , "Thursday (film)" ] Pass data in an execution request Depending on the client library language, you can also pass a runtime argument in an execution request.

