---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.591Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Developer tool integration for Universal Catalog"
feature_slug: "developer-tool-integration-for-universal-catalog"
latest_feature_date: "2025-09-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/terraform"
  - "https://docs.cloud.google.com/dataplex/docs/authentication"
  - "https://docs.cloud.google.com/dataplex/docs/reference/libraries"
keywords:
  - "developer"
  - "tool"
  - "integration"
  - "for"
  - "universal"
  - "catalog"
  - "dataplex"
  - "can"
---

# Developer tool integration for Universal Catalog

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Dataplex Universal Catalog can connect to developer tools such as Gemini CLI and IDEs for AI-driven data discovery and asset management.

## Extended Definition

Dataplex Universal Catalog can connect to developer tools such as Gemini CLI and IDEs for AI-driven data discovery and asset management.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/terraform](https://docs.cloud.google.com/dataplex/docs/terraform)
- [https://docs.cloud.google.com/dataplex/docs/authentication](https://docs.cloud.google.com/dataplex/docs/authentication)
- [https://docs.cloud.google.com/dataplex/docs/reference/libraries](https://docs.cloud.google.com/dataplex/docs/reference/libraries)

## Supporting Pages

### "Provision Dataplex Universal Catalog resources with Terraform \_|\_ Knowledge\

- URL: [https://docs.cloud.google.com/dataplex/docs/terraform](https://docs.cloud.google.com/dataplex/docs/terraform)
- Source ID: `site-api-reference`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table lists the Terraform resources available for Dataplex Universal Catalog: Service Terraform resources Data sources Dataplex Universal Catalog google dataplex aspect type google dataplex aspect type iam google dataplex asset google dataplex asset iam google dataplex datascan google dataplex datascan iam google dataplex entry google dataplex entry group google dataplex entry group iam google dataplex entry type google dataplex entry type iam google dataplex lake google dataplex lake iam google dataplex task google dataplex task iam google dataplex zone google dataplex zone iam google dataplex aspect type iam policy google dataplex asset iam policy google dataplex datascan iam policy google dataplex entry group iam policy google dataplex entry type iam policy google dataplex lake iam policy google dataplex task iam policy google dataplex zone iam policy Terraform-based guides for Dataplex Universal Catalog The following table lists Terraform-based how-to guides and tutorials for Dataplex Universal Catalog: Guide Details Manage data quality rules as code with Terraform This tutorial explains how to manage Dataplex Universal Catalog data quality rules as code with Terraform, Cloud Build, and GitHub.
- After you author this configuration in one or more Terraform configuration files, you can use the Terraform CLI to apply this configuration to your Dataplex Universal Catalog resources.
- You can use the Terraform provider for Google Cloud to provision and manage Google Cloud resources, including Dataplex Universal Catalog.
- What's next Terraform code samples for Dataplex Universal Catalog Terraform on Google Cloud documentation Google Cloud provider documentation in HashiCorp Infrastructure as code for Google Cloud Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Authenticate to Dataplex Universal Catalog \_|\_ Knowledge Catalog \_|\_\

- URL: [https://docs.cloud.google.com/dataplex/docs/authentication](https://docs.cloud.google.com/dataplex/docs/authentication)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can access the API in the following ways: Client libraries Google Cloud CLI REST Client libraries The Dataplex Universal Catalog client libraries provide high-level language support for authenticating to Dataplex Universal Catalog programmatically.
- Access control for Dataplex Universal Catalog After you authenticate to Dataplex Universal Catalog, you must be authorized to access Google Cloud resources.
- REST You can authenticate to the Dataplex Universal Catalog API by using your gcloud CLI credentials or by using Application Default Credentials .
- Set up authentication for Dataplex Universal Catalog How you set up authentication depends on the environment where your code is running.

### "Dataplex Universal Catalog client libraries \_|\_ Knowledge Catalog \_|\_\

- URL: [https://docs.cloud.google.com/dataplex/docs/reference/libraries](https://docs.cloud.google.com/dataplex/docs/reference/libraries)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Java If you are using Maven , add the following to your pom.xml file: <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-dataplex</artifactId> <version> DATAPLEX LIBRARY VERSION </version> </dependency> If you are using Gradle , add the following to your dependencies: compile group: 'com.google.cloud', name: 'google-cloud-dataplex', version: ' DATAPLEX LIBRARY VERSION ' For more information about the latest Dataplex Universal Catalog version, see Dataplex Universal Catalog Java Cloud client library reference .
- MetadataTemplate ( The name must follow regex ^(([a-zA-Z]{1})([\\w\\- ]{0,62}))$ That means name must only contain alphanumeric character or dashes or underscores, start with an alphabet, and must be less than 63 characters. name = "name of the template" , type = "record" , Aspect Type fields, that themselves are Metadata Templates. record fields = aspect fields , ), ) create operation = client . create aspect type ( parent = parent , aspect type = aspect type , aspect type id = aspect type id ) return create operation . result ( 60 ) if name == " main " : TODO(developer): Replace these variables before running the sample. project id = "MY PROJECT ID" Available locations: https://cloud.google.com/dataplex/docs/locations location = "MY LOCATION" aspect type id = "MY ASPECT TYPE ID" aspect field = dataplex v1 .
- This client only needs to be created // once, and can be reused for multiple requests. try ( CatalogServiceClient client = CatalogServiceClient . create ()) { LocationName locationName = LocationName . of ( projectId , location ); AspectType aspectType = AspectType . newBuilder () . setDescription ( "description of the aspect type" ) . setMetadataTemplate ( AspectType .
- Home Documentation Data analytics Knowledge Catalog Reference Send feedback Dataplex Universal Catalog client libraries Stay organized with collections Save and categorize content based on your preferences.

