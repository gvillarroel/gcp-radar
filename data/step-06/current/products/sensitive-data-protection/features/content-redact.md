---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.610Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "content.redact"
feature_slug: "content-redact"
latest_feature_date: "2017-12-14"
deprecation_date: "2017-12-14"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-method-types"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates-deid"
keywords:
  - "favor"
  - "deidentify"
  - "deprecated"
  - "method"
  - "text"
  - "redact"
  - "content"
---

# content.redact

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

The content.redact method was deprecated in favor of content.deidentify for text redaction; deprecated on 2017-12-14.

## Extended Definition

The content.redact method was deprecated in favor of content.deidentify for text redaction; deprecated on 2017-12-14.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data](https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-method-types](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-method-types)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates-deid](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates-deid)

## Supporting Pages

### "De-identifying sensitive data \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data](https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data)
- Source ID: `site-docs-reference-required-4`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API overview To de-identify sensitive data, use Sensitive Data Protection's content.deidentify method.
- Field transformations example The following example sends a projects.content.deidentify request with two field transformations: The first field transformation applies to the first two columns ( column1 and column2 ).
- Note: If you want to use a RecordTransformations configuration in a content.deidentify call, make sure that the value of the item field is of type Table .
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Dlp\V2\Client\DlpServiceClient; use Google\Cloud\Dlp\V2\ContentItem; use Google\Cloud\Dlp\V2\DeidentifyConfig; use Google\Cloud\Dlp\V2\DeidentifyContentRequest; use Google\Cloud\Dlp\V2\InfoType; use Google\Cloud\Dlp\V2\InfoTypeTransformations; use Google\Cloud\Dlp\V2\InfoTypeTransformations\InfoTypeTransformation; use Google\Cloud\Dlp\V2\InspectConfig; use Google\Cloud\Dlp\V2\PrimitiveTransformation; use Google\Cloud\Dlp\V2\RedactConfig; / De-identify data: Redacting with matched input values Uses the Data Loss Prevention API to de-identify sensitive data in a string by redacting matched input values. @param string $callingProjectId The Google Cloud project id to use as a parent resource. @param string $textToInspect The string to deidentify (will be treated as text). / function deidentify redact( // TODO(developer): Replace sample parameters before running the code. string $callingProjectId, string $textToInspect = 'My name is Alicia Abernathy, and my email address is aabernathy@example.com.' ): void { // Instantiate a client. $dlp = new DlpServiceClient(); // Specify the content to be de-identify. $contentItem = (new ContentItem()) ->setValue($textToInspect); // Specify the type of info the inspection will look for. $infoType = (new InfoType()) ->setName('EMAIL ADDRESS'); $inspectConfig = (new InspectConfig()) ->setInfoTypes([$infoType]); // Define type of de-identification. $primitiveTransformation = (new PrimitiveTransformation()) ->setRedactConfig(new RedactConfig()); // Associate de-identification type with info type. $transformation = (new InfoTypeTransformation()) ->setInfoTypes([$infoType]) ->setPrimitiveTransformation($primitiveTransformation); // Construct the configuration for the Redact request and list all desired transformations. $deidentifyConfig = (new DeidentifyConfig()) ->setInfoTypeTransformations((new InfoTypeTransformations()) ->setTransformations([$transformation])); $parent = "projects/$callingProjectId/locations/global"; // Run request $deidentifyContentRequest = (new DeidentifyContentRequest()) ->setParent($parent) ->setDeidentifyConfig($deidentifyConfig) ->setInspectConfig($inspectConfig) ->setItem($contentItem); $response = $dlp->deidentifyContent($deidentifyContentRequest); // Print results printf('Text after redaction: %s', $response->getItem()->getValue()); } Python To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .

### "Creating Sensitive Data Protection de-identification templates \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates-deid](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates-deid)
- Source ID: `site-docs-root-2`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using de-identification templates Once you've created a new template, you can use its name identifier anywhere deidentifyTemplateName is accepted, such as: projects.content.deidentify : De-identifies potentially sensitive data in content using the template as its configuration.
- If you've already had some experience de-identifying sensitive data from text, images, or structured content using Sensitive Data Protection, you've already created a DeidentifyConfig object.
- DlpServiceClient () Convert the project id into a full resource id. parent = f "projects/ { project } " Call the API. response = dlp . list inspect templates ( request = { "parent" : parent }) for template in response : print ( f "Template { template . name } :" ) if template . display name : print ( f " Display Name: { template . display name } " ) print ( f " Created: { template . create time } " ) print ( f " Updated: { template . update time } " ) config = template . inspect config print ( " InfoTypes: {} " . format ( ", " . join ([ it . name for it in config . info types ])) ) print ( f " Minimum likelihood: { config . min likelihood } " ) print ( f " Include quotes: { config . include quote } " ) print ( " Max findings per request: {} " . format ( config . limits . max findings per request ) ) Deleting de-identification templates To delete a specific de-identification template, use one of the . .delete methods: projects.deidentifyTemplates.delete With each . .delete method, you include the resource name of the template to be deleted.
- Listing de-identification templates To list all de-identification templates that have been created, use one of the . .list methods: projects.deidentifyTemplates.list This section demonstrates how to use Sensitive Data Protection to list inspection templates.

### Method types \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-method-types](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-method-types)
- Source ID: `site-api-reference-required-2`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn more, explore the REST API reference for content methods: content.inspect content.deidentify content.reidentify image.redact Storage methods Storage methods are designed to inspect data stored on Google Cloud in systems like Cloud Storage , BigQuery , and Firestore in Datastore mode (Datastore) .
- To learn more, explore the REST API reference for the following: Discovery configurations organizations.locations.discoveryConfigs projects.locations.discoveryConfigs Connections Connections are relevant only to discovery for Cloud SQL . organizations.locations.connections projects.locations.connections Data profiles organizations.locations.projectDataProfiles projects.locations.projectDataProfiles organizations.locations.fileStoreDataProfiles projects.locations.fileStoreDataProfiles organizations.locations.tableDataProfiles projects.locations.tableDataProfiles organizations.locations.columnDataProfiles projects.locations.columnDataProfiles What's next Read the how-to guides to get started with inspecting text and images for sensitive data, as well as redacting sensitive data from text and images: Inspecting text for sensitive data Inspecting structured text for sensitive data Inspecting images for sensitive data Redacting sensitive data from images De-identifying sensitive data For more information about inspecting storage and how to use actions, see Inspecting storage and databases for sensitive data .
- Sensitive Data Protection provides the following method types: Content methods Storage methods Hybrid methods Discovery methods Inspection and de-identification methods This section describes the methods that you can use to locate and, optionally, de-identify each piece of data that matches an information type listed in your your inspection configuration .
- Hybrid methods are similar to content methods in that the data you want to inspect is included in one or more inspection requests; however, unlike content methods , hybrid methods do not return inspection results in the API response.

