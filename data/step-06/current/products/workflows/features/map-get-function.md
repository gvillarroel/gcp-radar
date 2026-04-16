---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.524Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "map.get function"
feature_slug: "map-get-function"
latest_feature_date: "2022-05-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/reference/stdlib/map/get"
  - "https://docs.cloud.google.com/workflows/docs/execute-workflow-client-libraries"
  - "https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview"
keywords:
  - "performs"
  - "lookups"
  - "safe"
  - "null"
  - "returns"
---

# map.get function

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

The map.get function performs safe map key lookups and returns null when a key is missing.

## Extended Definition

The map.get function performs safe map key lookups and returns null when a key is missing.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/reference/stdlib/map/get](https://docs.cloud.google.com/workflows/docs/reference/stdlib/map/get)
- [https://docs.cloud.google.com/workflows/docs/execute-workflow-client-libraries](https://docs.cloud.google.com/workflows/docs/execute-workflow-client-libraries)
- [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview)

## Supporting Pages

### Function: map.get | Workflows | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/reference/stdlib/map/get](https://docs.cloud.google.com/workflows/docs/reference/stdlib/map/get)
- Source ID: `feature-recovery-direct-http`
- Final score: 221
- Re-rank relevance: N/A

Evidence snippets:
- Performs a safe lookup on a map, returning null if the key is not found.
- If the input is not a map or if the map does not contain the key, returns null.
- Examples # Retrieve item for specified key from map # Returns "world" - init : assign : - my_map : { "key1" : "hello" , "key2" : "world" } - returnStep : return : ${map.get(my_map, "key2")} Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If any of the nested objects are not maps or if the key does not exist in the map then null is returned.

### "Quickstart: Execute a workflow using the Cloud Client Libraries \_|\_ Workflows\

- URL: [https://docs.cloud.google.com/workflows/docs/execute-workflow-client-libraries](https://docs.cloud.google.com/workflows/docs/execute-workflow-client-libraries)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If no input arguments are provided or "searchTerm" is absent, it will fetch the day of the week in Amsterdam and use it as the search term. main : params : [ input ] steps : - validateSearchTermAndRedirectToReadWikipedia : switch : - condition : '${map.get(input, "searchTerm") != null}' assign : - searchTerm : '${input.searchTerm}' next : readWikipedia - getCurrentTime : call : http.get args : url : https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam result : currentTime - setFromCallResult : assign : - searchTerm : '${currentTime.body.dayOfWeek}' - readWikipedia : call : http.get args : url : 'https://en.wikipedia.org/w/api.php' query : action : opensearch search : '${searchTerm}' result : wikiResult - returnOutput : return : '${wikiResult.body[1]}' After creating the workflow, you can deploy it, but don't execute the workflow: gcloud workflows deploy myFirstWorkflow \ --source = myFirstWorkflow.yaml \ --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com \ --location = CLOUD REGION Replace CLOUD REGION with a supported location for the workflow.
- WorkflowName ; import java.io.IOException ; import java.util.concurrent.ExecutionException ; public class WorkflowsQuickstart { private static final String PROJECT = System . getenv ( "GOOGLE CLOUD PROJECT" ); private static final String LOCATION = System . getenv (). getOrDefault ( "LOCATION" , "us-central1" ); private static final String WORKFLOW = System . getenv (). getOrDefault ( "WORKFLOW" , "myFirstWorkflow" ); public static void main ( String ... args ) throws IOException , InterruptedException , ExecutionException { if ( PROJECT == null ) { throw new IllegalArgumentException ( "Environment variable 'GOOGLE CLOUD PROJECT' is required to run this quickstart." ); } workflowsQuickstart ( PROJECT , LOCATION , WORKFLOW ); } private static volatile boolean finished ; public static void workflowsQuickstart ( String projectId , String location , String workflow ) throws IOException , InterruptedException , ExecutionException { // Initialize client that will be used to send requests.
- For example: C# public class ExecuteWorkflowWithArgumentsSample { /// <summary> /// Execute a workflow with arguments and return the execution operation. /// </summary> /// <param name="projectID">Your Google Cloud Project ID.</param> /// <param name="locationID">The region where your workflow is located.</param> /// <param name="workflowID">Your Workflow ID.</param> /// <returns> /// An Execute object representing the completed workflow execution. /// </returns> public async Task<Execution> ExecuteWorkflowWithArguments ( string projectId = "YOUR-PROJECT-ID" , string locationID = "YOUR-LOCATION-ID" , string workflowID = "YOUR-WORKFLOW-ID" ) { // Initialize the client.
- Tasks ; public class ExecuteWorkflowSample { /// <summary> /// Execute a workflow and return the execution operation. /// </summary> /// <param name="projectID">Your Google Cloud Project ID.</param> /// <param name="locationID">The region where your workflow is located.</param> /// <param name="workflowID">Your Workflow ID.</param> /// <returns> /// An Execute object representing the completed workflow execution. /// </returns> public async Task<Execution> ExecuteWorkflow ( string projectId = "YOUR-PROJECT-ID" , string locationID = "YOUR-LOCATION-ID" , string workflowID = "YOUR-WORKFLOW-ID" ) { // Initialize the client.

### Standard library overview \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview)
- Source ID: `site-api-reference-required-2`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Functions delete Takes a map, creates a copy of the map, and removes the item with the specified key. get Performs a safe lookup on a map, returning null if the key is not found. merge Takes two maps, creates a copy of the first map, and adds the items from the second map to the copy. merge nested Takes two maps, creates a copy of the first map, and recursively adds items from the second map to the copy.
- Functions default(val, defaultVal) Returns a value if it is not null; otherwise returns a default value. if(condition, ifTrue, ifFalse) Evaluates a condition and returns one of two arguments depending on what the condition evaluates to.
- Functions decode Decodes given data to string, assuming the specified character set. encode Encodes given text to bytes, using the specified character set. find all Finds the index of all instances of a substring in a string. find all regex Finds all matches of a regular expression in a string. match regex Reports whether a string contains a match of a regular expression. replace all Replaces all instances of a substring with a new string. replace all regex Replaces all matches of a regular expression with a new string. split Splits the source string into a list of all substrings between each instance of the separator. substring Extracts the substring between two zero-based indexes of a source string. to lower Returns a string with all Unicode letters mapped to their lowercase. to upper Returns a string with all Unicode letters mapped to their uppercase. url decode Returns a string with pluses and percent-escaped characters converted to UTF-8. url encode Returns a string with percent-encoded reserved characters, including spaces. url encode plus Returns a string with percent-encoded reserved characters, and spaces replaced by pluses ( + ).
- Functions get env Retrieves the value of the specified environment variable. log Writes one of data , text , or json to the log at specified severity. now Returns Unix time, as a floating-point number. sleep Suspends execution for the given number of seconds. sleep until Suspends execution until the given time.

