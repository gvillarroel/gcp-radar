---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:23:11.936Z"
product_name: "AutoML Translation"
product_slug: "automl-translation"
feature_name: "AutoML Translation API availability"
feature_slug: "automl-translation-api-availability"
latest_feature_date: "2024-09-16"
deprecation_date: "2025-09-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/glossary"
  - "https://docs.cloud.google.com/translate/docs/hybrid-glossaries-tutorial"
  - "https://docs.cloud.google.com/dotnet/docs/reference/Google.Api.CommonProtos/latest/Google.Api"
keywords:
  - "available"
  - "longer"
  - "will"
  - "availability"
  - "deprecated"
---

# AutoML Translation API availability

Product: AutoML Translation
Coverage: MEDIUM

## Step 02 Summary

AutoML Translation API is deprecated and will no longer be available on Google Cloud after September 30, 2025; deprecated on 2025-09-30.

## Extended Definition

AutoML Translation API is deprecated and will no longer be available on Google Cloud after September 30, 2025; deprecated on 2025-09-30.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)
- [https://docs.cloud.google.com/translate/docs/hybrid-glossaries-tutorial](https://docs.cloud.google.com/translate/docs/hybrid-glossaries-tutorial)
- [https://docs.cloud.google.com/dotnet/docs/reference/Google.Api.CommonProtos/latest/Google.Api](https://docs.cloud.google.com/dotnet/docs/reference/Google.Api.CommonProtos/latest/Google.Api)

## Supporting Pages

### "Creating and using glossaries (Advanced) \_|\_ Cloud Translation \_|\_ Google\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)
- Source ID: `site-docs-root`
- Final score: 67
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can get a list of the available glossaries and can delete glossaries that you no longer need.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1/glossaries" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ project-number /locations/us-central1/operations/ operation-id ", "metadata": { "@type": "type.googleapis.com/google.cloud.translation.v3beta1.CreateGlossaryMetadata", "name": "projects/ project-number /locations/us-central1/glossaries/ glossary-id ", "state": "RUNNING", "submitTime": "2019-11-19T19:05:10.650047636Z" } } Equivalent term sets glossary Once you have the glossary terms identified in your equivalent term set, make the glossary file available to the Cloud Translation API by creating a glossary resource.
- String projectId = "YOUR-PROJECT-ID" ; String glossaryId = "your-glossary-display-name" ; List<String> languageCodes = new ArrayList <> (); languageCodes . add ( "your-language-code" ); String inputUri = "gs://your-gcs-bucket/path/to/input/file.txt" ; createGlossary ( projectId , glossaryId , languageCodes , inputUri ); } // Create a equivalent term sets glossary // https://cloud.google.com/translate/docs/advanced/glossary#format-glossary public static void createGlossary ( String projectId , String glossaryId , List<String> languageCodes , String inputUri ) throws IOException , ExecutionException , InterruptedException { // Initialize client that will be used to send requests.
- String projectId = "YOUR-PROJECT-ID" ; // Supported Languages: https://cloud.google.com/translate/docs/languages String sourceLanguage = "your-source-language" ; String targetLanguage = "your-target-language" ; String text = "your-text" ; String glossaryId = "your-glossary-display-name" ; translateTextWithGlossary ( projectId , sourceLanguage , targetLanguage , text , glossaryId ); } // Translates a given text using a glossary. public static void translateTextWithGlossary ( String projectId , String sourceLanguage , String targetLanguage , String text , String glossaryId ) throws IOException { // Initialize client that will be used to send requests.

### "Namespace Google.Api (2.17.0) \_|\_ .NET client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dotnet/docs/reference/Google.Api.CommonProtos/latest/Google.Api](https://docs.cloud.google.com/dotnet/docs/reference/Google.Api.CommonProtos/latest/Google.Api)
- Source ID: `site-docs-reference`
- Final score: 49
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- These fields will be deprecated once the feature graduates and is enabled by default.
- Sub-example 6a Make the templates strict, so that if the table name does not have an instance information, nothing is sent. annotation: option (google.api.routing) = { // The routing code needs two keys instead of one composite // but works only for the tables with the "project-instance" name // syntax. routing parameters { field: "table name" path template: "{project id=projects/ }/instances/ / " } routing parameters { field: "table name" path template: "projects/ /{instance id=instances/ }/ " } }; result: x-goog-request-params: project id=projects/proj foo&instance id=instances/instance bar Sub-example 6b Make the templates loose, so that if the table name does not have an instance information, just the project id part is sent. annotation: option (google.api.routing) = { // The routing code wants two keys instead of one composite // but will work with just the project id for tables without // an instance in the table name. routing parameters { field: "table name" path template: "{project id=projects/ }/ " } routing parameters { field: "table name" path template: "projects/ /{instance id=instances/ }/ " } }; result (is the same as 6a for our example message because it has the instance information): x-goog-request-params: project id=projects/proj foo&instance id=instances/instance bar Example 7 Extracting multiple routing header key-value pairs by matching several path templates on multiple request fields.
- Sub-example 3a The field matches the template. annotation: option (google.api.routing) = { // Take the table name, if it's well-formed (with project-based // syntax). routing parameters { field: "table name" path template: "{table name=projects/ /instances/ / }" } }; result: x-goog-request-params: table name=projects/proj foo/instances/instance bar/table/table baz Sub-example 3b The field does not match the template. annotation: option (google.api.routing) = { // Take the table name, if it's well-formed (with region-based // syntax). routing parameters { field: "table name" path template: "{table name=regions/ /zones/ / }" } }; result: <no routing header will be sent> Sub-example 3c Multiple alternative conflictingly named path templates are specified.
- The examples below will apply to an RPC which has the following request type: Message Definition: message Request { // The name of the Table // Values can be of the following formats: // - projects/<project>/tables/<table> // - projects/<project>/instances/<instance>/tables/<table> // - region/<region>/zones/<zone>/tables/<table> string table name = 1; // This value specifies routing for replication. // It can be in the following formats: // - profiles/<profile id> // - a legacy profile id that can be any string string app profile id = 2; } Example message: { table name: projects/proj foo/instances/instance bar/table/table baz, app profile id: profiles/prof qux } The routing header consists of one or multiple key-value pairs.

### "Translating text from a photo \_|\_ Cloud Translation \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/translate/docs/hybrid-glossaries-tutorial](https://docs.cloud.google.com/translate/docs/hybrid-glossaries-tutorial)
- Source ID: `site-docs-root`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- Args: None Returns: None """ Photo from which to extract text infile = "resources/example.png" Name of file that will hold synthetic speech outfile = "resources/example.mp3" Defines the languages in the glossary This list must match the languages in the glossary Here, the glossary includes French and English glossary langs = [ "fr" , "en" ] Name that will be assigned to your project's glossary resource glossary name = "bistro-glossary" uri of .csv file uploaded to Cloud Storage glossary uri = "gs://cloud-samples-data/translation/bistro glossary.csv" created glossary name = create glossary ( glossary langs , PROJECT ID , glossary name , glossary uri ) photo -> detected text text to translate = pic to text ( infile ) detected text -> translated text text to speak = translate text ( text to translate , "fr" , "en" , PROJECT ID , created glossary name ) translated text -> synthetic audio text to speech ( text to speak , outfile ) Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- The URI of the publicly-available glossary file for this tutorial is gs://cloud-samples-data/translation/bistro glossary.csv .
- Instead, use the publicly-available glossary file created for this tutorial to avoid incurring any Cloud Storage costs.
- The virtual environment will use the newest version of Python.

