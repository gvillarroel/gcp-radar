---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.622Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Content de-identification"
feature_slug: "content-de-identification"
latest_feature_date: "2017-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates-deid"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-bucketing"
keywords:
  - "ability"
  - "deidentify"
  - "identify"
  - "through"
  - "identification"
  - "provides"
  - "content"
---

# Content de-identification

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Provides the ability to de-identify content through the content.deidentify API.

## Extended Definition

Provides the ability to de-identify content through the content.deidentify API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data](https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates-deid](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates-deid)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-bucketing](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-bucketing)

## Supporting Pages

### De-identifying sensitive data | Sensitive Data Protection | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data](https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data)
- Source ID: `feature-recovery-direct-http`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Field transformations example The following example sends a projects.content.deidentify request with two field transformations: The first field transformation applies to the first two columns ( column1 and column2 ).
- Note: If you want to use a RecordTransformations configuration in a content.deidentify call, make sure that the value of the item field is of type Table .
- API overview To de-identify sensitive data, use Sensitive Data Protection's content.deidentify method.
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Dlp\V2\Client\DlpServiceClient; use Google\Cloud\Dlp\V2\ContentItem; use Google\Cloud\Dlp\V2\DeidentifyConfig; use Google\Cloud\Dlp\V2\DeidentifyContentRequest; use Google\Cloud\Dlp\V2\InfoType; use Google\Cloud\Dlp\V2\InfoTypeTransformations; use Google\Cloud\Dlp\V2\InfoTypeTransformations\InfoTypeTransformation; use Google\Cloud\Dlp\V2\InspectConfig; use Google\Cloud\Dlp\V2\PrimitiveTransformation; use Google\Cloud\Dlp\V2\RedactConfig; /** * De-identify data: Redacting with matched input values * Uses the Data Loss Prevention API to de-identify sensitive data in a string by redacting matched input values. * * @param string $callingProjectId The Google Cloud project id to use as a parent resource. * @param string $textToInspect The string to deidentify (will be treated as text). */ function deidentify_redact( // TODO(developer): Replace sample parameters before running the code. string $callingProjectId, string $textToInspect = 'My name is Alicia Abernathy, and my email address is aabernathy@example.com.' ): void { // Instantiate a client. $dlp = new DlpServiceClient(); // Specify the content to be de-identify. $contentItem = (new ContentItem()) ->setValue($textToInspect); // Specify the type of info the inspection will look for. $infoType = (new InfoType()) ->setName('EMAIL_ADDRESS'); $inspectConfig = (new InspectConfig()) ->setInfoTypes([$infoType]); // Define type of de-identification. $primitiveTransformation = (new PrimitiveTransformation()) ->setRedactConfig(new RedactConfig()); // Associate de-identification type with info type. $transformation = (new InfoTypeTransformation()) ->setInfoTypes([$infoType]) ->setPrimitiveTransformation($primitiveTransformation); // Construct the configuration for the Redact request and list all desired transformations. $deidentifyConfig = (new DeidentifyConfig()) ->setInfoTypeTransformations((new InfoTypeTransformations()) ->setTransformations([$transformation])); $parent = "projects/$callingProjectId/locations/global"; // Run request $deidentifyContentRequest = (new DeidentifyContentRequest()) ->setParent($parent) ->setDeidentifyConfig($deidentifyConfig) ->setInspectConfig($inspectConfig) ->setItem($contentItem); $response = $dlp->deidentifyContent($deidentifyContentRequest); // Print results printf('Text after redaction: %s', $response->getItem()->getValue()); } Python To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .

### "Creating Sensitive Data Protection de-identification templates \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates-deid](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates-deid)
- Source ID: `site-docs-root-2`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using de-identification templates Once you've created a new template, you can use its name identifier anywhere deidentifyTemplateName is accepted, such as: projects.content.deidentify : De-identifies potentially sensitive data in content using the template as its configuration.
- DlpServiceClient () Convert the project id into a full resource id. parent = f "projects/ { project } " Call the API. response = dlp . list inspect templates ( request = { "parent" : parent }) for template in response : print ( f "Template { template . name } :" ) if template . display name : print ( f " Display Name: { template . display name } " ) print ( f " Created: { template . create time } " ) print ( f " Updated: { template . update time } " ) config = template . inspect config print ( " InfoTypes: {} " . format ( ", " . join ([ it . name for it in config . info types ])) ) print ( f " Minimum likelihood: { config . min likelihood } " ) print ( f " Include quotes: { config . include quote } " ) print ( " Max findings per request: {} " . format ( config . limits . max findings per request ) ) Deleting de-identification templates To delete a specific de-identification template, use one of the . .delete methods: projects.deidentifyTemplates.delete With each . .delete method, you include the resource name of the template to be deleted.
- Listing de-identification templates To list all de-identification templates that have been created, use one of the . .list methods: projects.deidentifyTemplates.list This section demonstrates how to use Sensitive Data Protection to list inspection templates.
- If you've already had some experience de-identifying sensitive data from text, images, or structured content using Sensitive Data Protection, you've already created a DeidentifyConfig object.

### "Generalization and bucketing \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-bucketing](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-bucketing)
- Source ID: `site-api-reference-required-2`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This JSON could be included in a request to the content.deidentify method: C# To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .
- For API documentation, see: projects.content.deidentify method BucketingConfig transformation: Buckets values based on custom ranges.
- For more details on the table schema, please see https://cloud.google.com/dlp/docs/reference/rest/v2/ContentItem#Table headers = [{ "name" : val } for val in table to deid [ "header" ]] rows = [] for row in table to deid [ "rows" ]: rows . append ({ "values" : [{ "string value" : cell val } for cell val in row ]}) table = { "headers" : headers , "rows" : rows } Construct the item for table to de-identify. item = { "table" : table } Construct generalised bucket configuration. buckets config = [ { "min " : { "integer value" : 0 }, "max " : { "integer value" : 25 }, "replacement value" : { "string value" : "Low" }, }, { "min " : { "integer value" : 25 }, "max " : { "integer value" : 75 }, "replacement value" : { "string value" : "Medium" }, }, { "min " : { "integer value" : 75 }, "max " : { "integer value" : 100 }, "replacement value" : { "string value" : "High" }, }, ] Construct de-identify configuration that groups values in a table field and replace those with bucket labels. deidentify config = { "record transformations" : { "field transformations" : [ { "fields" : [{ "name" : "happiness score" }], "primitive transformation" : { "bucketing config" : { "buckets" : buckets config } }, } ] } } Call the API to deidentify table data through primitive bucketing. response = dlp . deidentify content ( request = { "parent" : parent , "deidentify config" : deidentify config , "item" : item , } ) Print the results. print ( f "Table after de-identification: { response . item . table } " ) REST ... { "primitiveTransformation": { "bucketingConfig": { "buckets": [ { "min": { "integerValue": "0" }, "max": { "integerValue": "25" }, "replacementValue": { "stringValue": "Low" } }, { "min": { "integerValue": "26" }, "max": { "integerValue": "75" }, "replacementValue": { "stringValue": "Medium" } }, { "min": { "integerValue": "76" }, "max": { "integerValue": "100" }, "replacementValue": { "stringValue": "High" } } ] } } } ...
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Dlp\V2\BucketingConfig; use Google\Cloud\Dlp\V2\BucketingConfig\Bucket; use Google\Cloud\Dlp\V2\Client\DlpServiceClient; use Google\Cloud\Dlp\V2\ContentItem; use Google\Cloud\Dlp\V2\DeidentifyConfig; use Google\Cloud\Dlp\V2\DeidentifyContentRequest; use Google\Cloud\Dlp\V2\FieldId; use Google\Cloud\Dlp\V2\FieldTransformation; use Google\Cloud\Dlp\V2\PrimitiveTransformation; use Google\Cloud\Dlp\V2\RecordTransformations; use Google\Cloud\Dlp\V2\Table; use Google\Cloud\Dlp\V2\Table\Row; use Google\Cloud\Dlp\V2\Value; / De-identify data using primitive bucketing. https://cloud.google.com/dlp/docs/concepts-bucketing#bucketing scenario 1 @param string $callingProjectId The Google Cloud project id to use as a parent resource. @param string $inputCsvFile The input file(csv) path to deidentify. @param string $outputCsvFile The oupt file path to save deidentify content. / function deidentify table primitive bucketing( // TODO(developer): Replace sample parameters before running the code. string $callingProjectId, string $inputCsvFile = './test/data/table4.csv', string $outputCsvFile = './test/data/deidentify table primitive bucketing output.csv' ): void { // Instantiate a client. $dlp = new DlpServiceClient(); // Read a CSV file. $csvLines = file($inputCsvFile, FILE IGNORE NEW LINES); $csvHeaders = explode(',', $csvLines[0]); $csvRows = array slice($csvLines, 1); // Convert CSV file into protobuf objects. $tableHeaders = array map(function ($csvHeader) { return (new FieldId)->setName($csvHeader); }, $csvHeaders); $tableRows = array map(function ($csvRow) { $rowValues = array map(function ($csvValue) { return (new Value()) ->setStringValue($csvValue); }, explode(',', $csvRow)); return (new Row()) ->setValues($rowValues); }, $csvRows); // Construct the table object. $tableToDeIdentify = (new Table()) ->setHeaders($tableHeaders) ->setRows($tableRows); // Specify what content you want the service to de-identify. $contentItem = (new ContentItem()) ->setTable($tableToDeIdentify); // Specify how the content should be de-identified. $buckets = [ (new Bucket()) ->setMin((new Value()) ->setIntegerValue(0)) ->setMax((new Value()) ->setIntegerValue(25)) ->setReplacementValue((new Value()) ->setStringValue('LOW')), (new Bucket()) ->setMin((new Value()) ->setIntegerValue(25)) ->setMax((new Value()) ->setIntegerValue(75)) ->setReplacementValue((new Value()) ->setStringValue('Medium')), (new Bucket()) ->setMin((new Value()) ->setIntegerValue(75)) ->setMax((new Value()) ->setIntegerValue(100)) ->setReplacementValue((new Value()) ->setStringValue('High')), ]; $bucketingConfig = (new BucketingConfig()) ->setBuckets($buckets); $primitiveTransformation = (new PrimitiveTransformation()) ->setBucketingConfig($bucketingConfig); // Specify the field of the table to be de-identified. $fieldId = (new FieldId()) ->setName('score'); $fieldTransformation = (new FieldTransformation()) ->setPrimitiveTransformation($primitiveTransformation) ->setFields([$fieldId]); $recordTransformations = (new RecordTransformations()) ->setFieldTransformations([$fieldTransformation]); // Create the deidentification configuration object. $deidentifyConfig = (new DeidentifyConfig()) ->setRecordTransformations($recordTransformations); $parent = "projects/$callingProjectId/locations/global"; // Send the request and receive response from the service. $deidentifyContentRequest = (new DeidentifyContentRequest()) ->setParent($parent) ->setDeidentifyConfig($deidentifyConfig) ->setItem($contentItem); $response = $dlp->deidentifyContent($deidentifyContentRequest); // Print the results. $csvRef = fopen($outputCsvFile, 'w'); fputcsv($csvRef, $csvHeaders); foreach ($response->getItem()->getTable()->getRows() as $tableRow) { $values = array map(function ($tableValue) { return $tableValue->getStringValue(); }, iterator to array($tableRow->getValues())); fputcsv($csvRef, $values); }; printf('Table after deidentify (File Location): %s', $outputCsvFile); } Python To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .

