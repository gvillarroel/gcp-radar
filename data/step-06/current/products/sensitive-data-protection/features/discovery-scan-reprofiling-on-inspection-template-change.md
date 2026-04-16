---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.351Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Discovery scan reprofiling on inspection template change"
feature_slug: "discovery-scan-reprofiling-on-inspection-template-change"
latest_feature_date: "2024-02-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates-inspect"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage"
keywords:
  - "reprofiling"
  - "template"
  - "change"
  - "inspection"
  - "discovery"
  - "scan"
  - "scans"
---

# Discovery scan reprofiling on inspection template change

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Discovery scans can be configured to reprofile data when the inspection template changes.

## Extended Definition

Discovery scans can be configured to reprofile data when the inspection template changes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates-inspect](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates-inspect)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage)

## Supporting Pages

### "Overview of sensitive data discovery \_|\_ Sensitive Data Protection \_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)
- Source ID: `site-docs-reference-3`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Default reprofiling frequency The default reprofiling frequency differs depending on the discovery type of your scan configuration: BigQuery profiling: for each table, wait 30 days and then reprofile the table if it has changes in the schema, table rows, or inspection template.
- By default, if you change an inspection template that your scan configuration uses, the changes are applied only to future scans.
- It includes the following settings: Scope (organization, folder, or project) of the discovery operation Type of resource to profile Inspection templates to use Scan frequency Specific subsets of data that should be included in or excluded from discovery Actions that you want Sensitive Data Protection to take after discovery—for example, which Google Cloud services to publish the profiles to Service agent to use for discovery operations For information about how to create an organization-level or project-level discovery scan configuration, see the following pages: Discovery type Create an organization-level scan configuration Create a project-level scan configuration 1 Discovery for BigQuery data Profile BigQuery data in an organization or folder Profile BigQuery data in a single project Discovery for Cloud SQL data Profile Cloud SQL data in an organization or folder Profile Cloud SQL data in a single project Discovery for Cloud Storage data Profile Cloud Storage data in an organization or folder Profile Cloud Storage data in a single project Discovery for Vertex AI data Profile Vertex AI data in an organization or folder Profile Vertex AI data in a single project Discovery for Amazon S3 data Discovery for Amazon S3 data Not applicable Discovery for Azure Blob Storage data Discovery for Azure Blob Storage data Not applicable Secrets discovery (no profiles generated) Configure secrets discovery at the organization level Configure secrets discovery at the project level 1 Not suitable for customers who have an organization-level discovery subscription, such as one provided through Security Command Center Scan configuration scopes You can create a scan configuration at the following levels: Organization Folder Project Single data resource At the organization and folder levels, if two or more active scan configurations have the same project in their scope, Sensitive Data Protection determines which scan configuration can generate profiles for that project.
- If you want inspection template changes to trigger reprofile operations on the affected data, add or update a schedule in your scan configuration, and turn on the option to reprofile the data when the inspection template changes.

### "Creating Sensitive Data Protection inspection templates \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates-inspect](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates-inspect)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON input: POST https : // dlp . googleapis . com / v2 / projects /[ PROJECT ID ]/ inspectTemplates ? key = { YOUR API KEY } { "inspectTemplate" :{ "displayName" : "Phone number inspection" , "description" : "Scans for phone numbers" , "inspectConfig" :{ "infoTypes" : [ { "name":"PHONE NUMBER" }, { "name":"US TOLLFREE PHONE NUMBER" } ] , "minLikelihood" : "POSSIBLE" , "limits" :{ "maxFindingsPerRequest" : 100 } , "includeQuote" : true } } } JSON output: The response JSON looks like the following: { "name" : "projects/[PROJECT ID]/inspectTemplates/[JOB ID]" , "displayName" : "Phone number inspection" , "description" : "Scans for phone numbers" , "createTime" : "2018-11-30T07:26:28.164136Z" , "updateTime" : "2018-11-30T07:26:28.164136Z" , "inspectConfig" :{ "infoTypes" : [ { "name":"PHONE NUMBER" }, { "name":"US TOLLFREE PHONE NUMBER" } ] , "minLikelihood" : "POSSIBLE" , "limits" :{ "maxFindingsPerRequest" : 100 } , "includeQuote" : true } } Note: This template was created at the project level, but you could also create it at the organization level using the organizations.inspectTemplates.create method.
- For more information, including code samples, see: Inspecting storage and databases for sensitive data Creating and scheduling Sensitive Data Protection inspection jobs Console To get started quickly using your new template, follow the instructions provided in Quickstart creating a Sensitive Data Protection inspection template with the following change: In the Configure detection > Templates section, click in the Template name field and select the template you just created.
- This JSON creates a new template with the given display name and description, and scans for matches on the infoTypes PHONE NUMBER and US TOLLFREE PHONE NUMBER .
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Dlp\V2\Client\DlpServiceClient; use Google\Cloud\Dlp\V2\CreateInspectTemplateRequest; use Google\Cloud\Dlp\V2\InfoType; use Google\Cloud\Dlp\V2\InspectConfig; use Google\Cloud\Dlp\V2\InspectConfig\FindingLimits; use Google\Cloud\Dlp\V2\InspectTemplate; use Google\Cloud\Dlp\V2\Likelihood; / Create a new DLP inspection configuration template. @param string $callingProjectId project ID to run the API call under @param string $templateId name of the template to be created @param string $displayName (Optional) The human-readable name to give the template @param string $description (Optional) A description for the trigger to be created @param int $maxFindings (Optional) The maximum number of findings to report per request (0 = server maximum) / function create inspect template( string $callingProjectId, string $templateId, string $displayName = '', string $description = '', int $maxFindings = 0 ): void { // Instantiate a client. $dlp = new DlpServiceClient(); // ----- Construct inspection config ----- // The infoTypes of information to match $personNameInfoType = (new InfoType()) ->setName('PERSON NAME'); $phoneNumberInfoType = (new InfoType()) ->setName('PHONE NUMBER'); $infoTypes = [$personNameInfoType, $phoneNumberInfoType]; // Whether to include the matching string in the response $includeQuote = true; // The minimum likelihood required before returning a match $minLikelihood = likelihood::LIKELIHOOD UNSPECIFIED; // Specify finding limits $limits = (new FindingLimits()) ->setMaxFindingsPerRequest($maxFindings); // Create the configuration object $inspectConfig = (new InspectConfig()) ->setMinLikelihood($minLikelihood) ->setLimits($limits) ->setInfoTypes($infoTypes) ->setIncludeQuote($includeQuote); // Construct inspection template $inspectTemplate = (new InspectTemplate()) ->setInspectConfig($inspectConfig) ->setDisplayName($displayName) ->setDescription($description); // Run request $parent = "projects/$callingProjectId/locations/global"; $createInspectTemplateRequest = (new CreateInspectTemplateRequest()) ->setParent($parent) ->setInspectTemplate($inspectTemplate) ->setTemplateId($templateId); $template = $dlp->createInspectTemplate($createInspectTemplateRequest); // Print results printf('Successfully created template %s' .

### "Profile Azure Blob Storage data \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage)
- Source ID: `site-docs-reference-3`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If organizational policies prevent you from creating an inspection template in the global region, then before you perform this task, you must create an inspection template in the region where you plan to store the discovery scan configuration.
- Confirm that you have an inspection template in the global region or the region where you plan to store the discovery scan configuration and all generated data profiles.
- If you store your inspection template in the global region, an in-memory copy of that template is read in the region where you store the discovery scan configuration.
- The inspection template that you enter must be in the same region where you plan to store this discovery scan configuration and all the generated data profiles.

