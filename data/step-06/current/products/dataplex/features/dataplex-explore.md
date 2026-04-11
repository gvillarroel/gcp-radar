---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.600Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Dataplex Explore"
feature_slug: "dataplex-explore"
latest_feature_date: "2024-07-22"
deprecation_date: "2024-07-22"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/lineage-use-cases-impact-analysis"
  - "https://docs.cloud.google.com/dataplex/docs/release-notes"
  - "https://docs.cloud.google.com/dataplex/docs/manage-glossaries"
keywords:
  - "dataplex"
  - "explore"
  - "is"
  - "an"
  - "exploration"
  - "capability"
  - "being"
  - "retired"
---

# Dataplex Explore

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Dataplex Explore is an exploration capability being retired in favor of BigQuery Studio; deprecated on 2024-07-22.

## Extended Definition

Dataplex Explore is an exploration capability being retired in favor of BigQuery Studio; deprecated on 2024-07-22.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/lineage-use-cases-impact-analysis](https://docs.cloud.google.com/dataplex/docs/lineage-use-cases-impact-analysis)
- [https://docs.cloud.google.com/dataplex/docs/release-notes](https://docs.cloud.google.com/dataplex/docs/release-notes)
- [https://docs.cloud.google.com/dataplex/docs/manage-glossaries](https://docs.cloud.google.com/dataplex/docs/manage-glossaries)

## Supporting Pages

### "Analyze the impact of data changes on workflows \_|\_ Knowledge Catalog\

- URL: [https://docs.cloud.google.com/dataplex/docs/lineage-use-cases-impact-analysis](https://docs.cloud.google.com/dataplex/docs/lineage-use-cases-impact-analysis)
- Source ID: `site-docs-root-2`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- In the Lineage Explorer pane, do the following: In the Column Level Lineage section, select the medicare participation indicator column name from the list.
- After you finish the environment setup, use BigQuery and Lineage Explorer to track data transformations and the effect they have on the workflows.
- In the Lineage Explorer pane, do the following: In the Column Level Lineage section, select the nppes credentials column name from the list.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

### Knowledge Catalog release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/release-notes](https://docs.cloud.google.com/dataplex/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- February 17, 2022 Feature Dataplex Explore provides a fully-managed, serverless data exploration experience that enables you to query your data using Apache SparkSQL queries and Jupyter notebooks.
- October 18, 2024 Feature Data lineage is available in the following Google Cloud regions: Berlin ( europe-west10 ) Dammam ( me-central2 ) Doha ( me-central1 ) Johannesburg ( africa-south1 ) Turin ( europe-west12 ) Data lineage is available in the following BigQuery Omni regions: AWS - Asia Pacific (Sydney) ( aws-ap-southeast-2 ) AWS - Europe (Ireland) ( aws-eu-west-1 ) AWS - Europe (Frankfurt) ( aws-eu-central-1 ) AWS - US West (Oregon) ( aws-us-west-2 ) October 15, 2024 Feature Dataplex is available in Dammam ( me-central2 ).
- August 01, 2023 Feature Dataplex is available in the following regions: Los Angeles ( us-west2 ) Salt Lake City ( us-west3 ) Las Vegas ( us-west4 ) Columbus ( us-east5 ) Santiago ( southamerica-west1 ) Finland ( europe-north1 ) Warsaw ( europe-central2 ) Madrid ( europe-southwest1 ) Milan ( europe-west8 ) Paris ( europe-west9 ) Jakarta ( asia-southeast2 ) For more information, see Locations and Pricing .
- June 30, 2024 Feature Dataplex is available in the following regions: Berlin ( europe-west10 ) Dallas ( us-south1 ) Doha ( me-central1 ) Johannesburg ( africa-south1 ) Osaka ( asia-northeast2 ) Tel Aviv ( me-west1 ) Turin ( europe-west12 ) For more information, see Locations and Pricing .

### Manage a business glossary \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/manage-glossaries](https://docs.cloud.google.com/dataplex/docs/manage-glossaries)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- COLUMN NAME " , } , { "name" : "projects/ TERM PROJECT NUMBER /locations/ TERM LOCATION ID /entryGroups/@dataplex/entries/projects/ TERM PROJECT NUMBER /locations/ TERM LOCATION ID /glossaries/ TERM GLOSSARY ID /terms/ TERM ID " , "type" : "TARGET" } ] } EOF ) " Replace the following: PROJECT NUMBER : the project number of the data asset being linked to ENTRY LOCATION ID : the location ID of the data asset being linked to ENTRY GROUP ID : the entry group of the data asset being linked to ENTRY LINK ID : an ID for the link between the term and the Knowledge Catalog entry that represents the data asset TERM PROJECT NUMBER : the project number for the term being linked COLUMN NAME : the column to which you want to attach the term Lookup data assets linked to a term REST alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"' gcurl -X POST https://dataplex.googleapis.com/v1/projects/ TERM PROJECT ID /locations/ DEFINITION LINKS LOCATION ID :lookupEntryLinks?entry = projects/ TERM PROJECT NUMBER /locations/ TERM LOCATION ID /entryGroups/@dataplex/entries/projects/ TERM PROJECT NUMBER /locations/ TERM LOCATION ID /glossaries/ TERM GLOSSARY ID /terms/ TERM ID & entry link types = projects/dataplex-types/locations/global/entryLinkTypes/definition & entry mode = TARGET & page size = 10 Replace the following: TERM PROJECT ID : the project ID of the term whose definition links you are looking up.
- REST alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"' gcurl -X POST https://dataplex.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ ENTRY LOCATION ID /entryGroups/ ENTRY GROUP ID /entryLinks?entry link id = ENTRY LINK ID -d " $( cat<<EOF { "entry link type" : "projects/dataplex-types/locations/global/entryLinkTypes/definition" , "entry references" : [{ "name" : "projects/ PROJECT NUMBER /locations/ ENTRY LOCATION ID /entryGroups/ ENTRY GROUP ID /entries/ ENTRY ID " , "type" : "SOURCE" } , { "name" : "projects/ TERM PROJECT NUMBER /locations/ TERM LOCATION ID /entryGroups/@dataplex/entries/projects/ TERM PROJECT NUMBER /locations/ TERM LOCATION ID /glossaries/ TERM GLOSSARY ID /terms/ TERM ID " , "type" : "TARGET" } ] } EOF ) " Replace the following: PROJECT NUMBER : the project number of the data asset being linked to ENTRY LOCATION ID : the location ID of the data asset being linked to ENTRY GROUP ID : the entry group of the data asset being linked to ENTRY LINK ID : an ID for the link between the term and the Knowledge Catalog entry that represents the data asset.
- These files are of the following format: Sample format for terms and categories of a glossary { "entry" : { "name" : "projects/ PROJECT NUMBER /locations/ LOCATION ID /entryGroups/@dataplex/entries/projects/ PROJECT NUMBER /locations/ LOCATION ID /glossaries/ GLOSSARY ID /categories/ CATEGORY ID " , "entryType" : "projects/dataplex-types/locations/global/entryTypes/glossary-category" , "aspects" : { "dataplex-types.global.glossary-category-aspect" : { "data" : {}} , "dataplex-types.global.overview" : { "data" : { "content" : " CONTENT " }} , "dataplex-types.global.contacts" : { "data" : { "identities" : [{ role: "steward" , name: " CONTACT DISPLAY NAME " , id: " CONTACT EMAIL " }]}}} , "parentEntry" : "projects/ PROJECT NUMBER /locations/ LOCATION ID /entryGroups/@dataplex/entries/projects/ PROJECT NUMBER /locations/ LOCATION ID /glossaries/ GLOSSARY ID " , "entrySource" : { "resource" : "projects/ PROJECT NUMBER /locations/ LOCATION ID /glossaries/ GLOSSARY ID /categories/ CATEGORY ID " , "displayName" : " CATEGORY NAME " , "description" : " CATEGORY DESCRIPTION " , "ancestors" : [{ "name" : "projects/ PROJECT NUMBER /locations/ LOCATION ID /entryGroups/@dataplex/entries/projects/ PROJECT NUMBER /locations/ LOCATION ID /glossaries/ GLOSSARY ID " , "type" : "projects/dataplex-types/locations/global/entryTypes/glossary" }]}}} { "entry" : { "name" : "projects/ PROJECT NUMBER /locations/ LOCATION ID /entryGroups/@dataplex/entries/projects/ PROJECT NUMBER /locations/ LOCATION ID /glossaries/ GLOSSARY ID /terms/ TERM1 ID " , "entryType" : "projects/dataplex-types/locations/global/entryTypes/glossary-term" , "aspects" : { "dataplex-types.global.glossary-term-aspect" : { "data" : {}} , "dataplex-types.global.overview" : { "data" : { "content" : " TERM1 CONTENT " }} , "dataplex-types.global.contacts" : { "data" : { "identities" : [{ role: "steward" , name: " CONTACT DISPLAY NAME " , id: " CONTACT EMAIL " }]}}} , "parentEntry" : "projects/ PROJECT NUMBER /locations/ LOCATION ID /entryGroups/@dataplex/entries/projects/ PROJECT NUMBER /locations/ LOCATION ID /glossaries/ GLOSSARY ID " , "entrySource" : { "resource" : "projects/ PROJECT NUMBER /locations/ LOCATION ID /glossaries/ GLOSSARY ID /terms/ TERM1 ID " , "displayName" : " TERM1 DISPLAY NAME " , "description" : " TERM1 DESCRIPTION " , "ancestors" : [{ "name" : "projects/ PROJECT NUMBER /locations/ LOCATION ID /entryGroups/@dataplex/entries/projects/ PROJECT NUMBER /locations/ LOCATION ID /glossaries/ GLOSSARY ID " , "type" : "projects/dataplex-types/locations/global/entryTypes/glossary" } , { "name" : "projects/ PROJECT NUMBER /locations/ LOCATION ID /entryGroups/@dataplex/entries/projects/ PROJECT NUMBER /locations/ LOCATION ID /glossaries/ GLOSSARY ID /categories/ CATEGORY ID " , "type" : "projects/dataplex-types/locations/global/entryTypes/glossary-category" }]}}} { "entry" : { "name" : "projects/ PROJECT NUMBER /locations/ LOCATION ID /entryGroups/@dataplex/entries/projects/ PROJECT NUMBER /locations/ LOCATION ID /glossaries/ GLOSSARY ID /terms/ TERM2 ID " , "entryType" : "projects/dataplex-types/locations/global/entryTypes/glossary-term" , "aspects" : { "dataplex-types.global.glossary-term-aspect" : { "data" : {}} , "dataplex-types.global.overview" : { "data" : { "content" : " TERM1 CONTENT " }} , "dataplex-types.global.contacts" : { "data" : { "identities" : [{ role: "steward" , name: " CONTACT DISPLAY NAME " , id: " CONTACT EMAIL " }]}}} , "parentEntry" : "projects/ PROJECT NUMBER /locations/ LOCATION ID /entryGroups/@dataplex/entries/projects/ PROJECT NUMBER /locations/ LOCATION ID /glossaries/ GLOSSARY ID " , "entrySource" : { "resource" : "projects/ PROJECT NUMBER /locations/ LOCATION ID /glossaries/ GLOSSARY ID /terms/ TERM2 ID " , "displayName" : " TERM2 DISPLAY NAME " , "description" : " TERM2 DESCRIPTION " , "ancestors" : [{ "name" : "projects/ PROJECT NUMBER /locations/ LOCATION ID /entryGroups/@dataplex/entries/projects/ PROJECT NUMBER /locations/ LOCATION ID /glossaries/ GLOSSARY ID " , "type" : "projects/dataplex-types/locations/global/entryTypes/glossary" } , { "name" : "projects/ PROJECT NUMBER /locations/ LOCATION ID /entryGroups/@dataplex/entries/projects/ PROJECT NUMBER /locations/ LOCATION ID /glossaries/ GLOSSARY ID /categories/ CATEGORY ID " , "type" : "projects/dataplex-types/locations/global/entryTypes/glossary-category" }]}}} Sample format for links between terms { "entryLink" : { "name" : "projects/ PROJECT NUMBER /locations/global/entryGroups/@dataplex/entryLinks/el-import-0606e3f2-8206-4f3a-aba9-32c6196f6048" , "entryLinkType" : "projects/dataplex-types/locations/global/entryLinkTypes/synonym" , "entryReferences" : [{ "name" : "projects/ PROJECT NUMBER /locations/global/entryGroups/@dataplex/entries/projects/ PROJECT NUMBER /locations/global/glossaries/import-glossary/terms/term-1" } , { "name" : "projects/ PROJECT NUMBER /locations/global/entryGroups/@dataplex/entries/projects/ PROJECT NUMBER /locations/global/glossaries/import-glossary/terms/term-2" }]}} { "entryLink" : { "name" : "projects/ PROJECT NUMBER /locations/global/entryGroups/@dataplex/entryLinks/el-import-2f7408e3-af3d-405d-81bb-861cf9ec5146" , "entryLinkType" : "projects/dataplex-types/locations/global/entryLinkTypes/related" , "entryReferences" : [{ "name" : "projects/ PROJECT NUMBER /locations/global/entryGroups/@dataplex/entries/projects/ PROJECT NUMBER /locations/global/glossaries/import-glossary/terms/term-1" } , { "name" : "projects/ PROJECT NUMBER /locations/global/entryGroups/@dataplex/entries/projects/ PROJECT NUMBER /locations/global/glossaries/import-glossary/terms/term-2" }]}} Sample format for links between terms and data assets projects/ PROJECT NUMBER /locations/us-central1/entryGroups/entry-group-1/entries/entry-1 and term projects/ PROJECT NUMBER /locations/global/entryGroups/@dataplex/entries/projects/ PROJECT NUMBER /locations/global/glossaries/import-glossary/terms/term-1 { "entryLink" : { "name" : "projects/ PROJECT NUMBER /locations/global/entryGroups/@dataplex/entryLinks/el-import-0606e3f2-8206-4f3a-aba9-32c6196f6048" , "entryLinkType" : "projects/dataplex-types/locations/global/entryLinkTypes/definition" , "entryReferences" : [{ "name" : "projects/ PROJECT NUMBER /locations/global/entryGroups/@dataplex/entries/projects/ PROJECT NUMBER /locations/global/glossaries/import-glossary/terms/term-1" } , { "name" : "projects/ PROJECT NUMBER /locations/us-central1/entryGroups/entry-group-1/entries/entry-1" }]}} Set GCURL alias alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"' gcurl https:// DATAPLEX API /metadataJobs?metadata job id = JOB ID -d " $( cat<<EOF { "type" : "IMPORT" , "import spec" : { "log level" : "DEBUG" , "source storage uri" : "gs:// STORAGE BUCKET /" , "entry sync mode" : "FULL" , "aspect sync mode" : "INCREMENTAL" , "scope" : { "glossaries" : " GLOSSARY NAME " } } } EOF ) " Replace DATAPLEX API with the Dataplex API endpoint of the format dataplex.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID .
- Optional: Add contacts Look up the entry for your category: gcurl -X GET https://dataplex.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID :lookupEntry \ ?entry = projects/ PROJECT NUMBER /locations/ LOCATION ID /entryGroups/@dataplex/entries/projects/ PROJECT NUMBER /locations/ LOCATION ID /glossaries/ GLOSSARY ID /categories/ CATEGORY ID \ \& view = ALL Update the entry for your category with contacts: gcurl -X PATCH https://dataplex.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION ID /entryGroups/@dataplex/entries/projects/ PROJECT NUMBER /locations/ LOCATION ID /glossaries/ GLOSSARY ID /categories/ CATEGORY ID \ ?update mask = aspects \ \& deleteMissingAspects = false \ \& aspect keys = projects/dataplex-types/locations/global/aspectTypes/contacts \ --data @- { "aspects": { "dataplex-types.global.contacts": { "aspect type": "projects/dataplex-types/locations/global/aspectTypes/contacts", "data": { "identities": [ { "role": "steward", "name": " CONTACT NAME ", "id": " CONTACT EMAIL " } ] }, } } } EOF Create a nested category A business glossary can have a maximum of three nested category levels, excluding the root glossary level.

