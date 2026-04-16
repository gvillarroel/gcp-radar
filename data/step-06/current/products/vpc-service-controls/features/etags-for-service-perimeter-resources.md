---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.522Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "Etags for service perimeter resources"
feature_slug: "etags-for-service-perimeter-resources"
latest_feature_date: "2024-11-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/bulk-operations"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/add-projects-perimeter-terraform"
keywords:
  - "etags"
  - "for"
  - "perimeter"
  - "resources"
  - "adds"
  - "etag"
  - "to"
  - "concurrency"
---

# Etags for service perimeter resources

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

Adds etag support to service perimeter resources for concurrency control in VPC Service Controls operations.

## Extended Definition

Adds etag support to service perimeter resources for concurrency control in VPC Service Controls operations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/bulk-operations](https://docs.cloud.google.com/vpc-service-controls/docs/bulk-operations)
- [https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters)
- [https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels](https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels)
- [https://docs.cloud.google.com/vpc-service-controls/docs/add-projects-perimeter-terraform](https://docs.cloud.google.com/vpc-service-controls/docs/add-projects-perimeter-terraform)

## Supporting Pages

### "Making bulk changes to service perimeters \_|\_ VPC Service Controls \_\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/bulk-operations](https://docs.cloud.google.com/vpc-service-controls/docs/bulk-operations)
- Source ID: `site-docs-reference`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: - name: accessPolicies/11271009391/servicePerimeters/storage perimeter title: Storage Perimeter description: Perimeter to protect Storage resources. perimeterType: PERIMETER TYPE REGULAR status: restrictedServices: - storage.googleapis.com - name: accessPolicies/11271009391/servicePerimeters/bigquery perimeter title: BigQuery Perimeter description: Perimeter to protect BigQuery resources. perimeterType: PERIMETER TYPE REGULAR status: restrictedServices: - bigquery.googleapis.com For more information about formatting the YAML file, refer to the JSON structure of Access Context Manager's ServicePerimeterConfig object .
- Instead of manually removing each of the etag properties within the perimeters, you can fetch the perimeters without etag properties by specifying a --format with all fields except etag . gcloud access-context-manager perimeters list \ --policy = POLICY NAME \ --format = "json(name,title,description,perimeterType,status,spec,useExplicitDryRunSpec)" Bulk replace service perimeters The following section details how to bulk replace your service perimeters.
- Etags are likely to change between fetching and updating the perimeters, causing the replace-all command to return an etag mismatch error.
- Example response: { "name" : "operations/accessPolicies/11271009391/replacePerimeters/1583523447707087" , "done" : true , "response" : { "@type" : "type.googleapis.com/google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse" , "servicePerimeters" : [ { "name" : "accessPolicies/11271009391/servicePerimeters/storage perimeter" , "title" : "Storage Perimeter" , "description" : "Perimeter to protect Storage resources." , "status" : { "accessLevels" : [ "accessPolicies/11271009391/accessLevels/corpnet access" ], "restrictedServices" : [ "bigtable.googleapis.com" ] } }, { "name" : "accessPolicies/11271009391/servicePerimeters/storage perimeter" , "title" : "BigQuery Perimeter" , "description" : "Perimeter to protect BigQuery resources." , "status" : { "accessLevels" : [ "accessPolicies/11271009391/accessLevels/prodnet access" ], "restrictedServices" : [ "bigtable.googleapis.com" ] } } ] } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Example migration of VPC networks into separate perimeters \_|\_ VPC Service\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Update the dry-run configuration The following command updates the perimeter perimeter-1 to remove network-host-project , service-project-2 , and adds VPC1 : gcloud access-context-manager perimeters dry-run update perimeter-1 --remove-resources="projects/<network-host-project number>,projects/<service-project-2 number>" --add-resources="//compute.googleapis.com/projects/network-host-project/global/networks/vpc1" --policy=<access policy number> Create a new perimeter in dry-run mode The following command creates the perimeter perimeter-2 and adds service-project-2 , and adds VPC2 : gcloud access-context-manager perimeters dry-run create perimeter-2 --title=perimeter-2 --type="regular" --resources="projects/<service-project-2 number>,//compute.googleapis.com/projects/network-host-project/global/networks/vpc2" --restricted-services="storage.googleapis.com" --policy=<access policy number> Verify the dry-run configuration In this example, run the following commands to ensure that there are no dry-run errors from VPC1 to service-project-1 , and from VPC2 to service-project-2 : To list the Cloud Storage buckets in service-project-1 , log in to VM1 , which is in VPC1 and run the following command: gcloud storage ls --project=service-project-1 To list the Cloud Storage buckets in service-project-2 , run the following command: gcloud storage ls --project=service-project-2 The commands run successfully because the dry-run configuration doesn't affect production traffic.
- To enforce the dry-run configurations, run the following command: gcloud access-context-manager perimeters dry-run enforce-all --policy=<access policy number> After you enforce the dry-run configurations, run the following command to describe perimeter-1 : gcloud access-context-manager perimeters describe perimeter-1 --policy=<access policy number> This example produces the following output in which network-host-project and service-project-2 are removed, and VPC1 is added to perimeter-1 . name: accessPolicies/<access policy number>/servicePerimeters/perimeter-1 status: … resources: - projects/<service-project-1 number> - //compute.googleapis.com/projects/<network-host-project>/global/networks/VPC1 Run the following command to describe perimeter-2 : gcloud access-context-manager perimeters describe perimeter-2 --policy=<access policy number> This example produces the following output in which service-project-2 and VPC2 are added to perimeter-2 . name: accessPolicies/<access policy number>/servicePerimeters/perimeter-2 status: … resources: - projects/<service-project-2 number> - //compute.googleapis.com/projects/<network-host-project>/global/networks/VPC2 title: perimeter-2 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- However, the following dry-run error appears in the audit logs for network-host-project for accessing service-project-2 from VM1 : egressViolations: [ 0: { servicePerimeter: "accessPolicies/<access policy number>/servicePerimeters/perimeter-1" source: "//compute.googleapis.com/projects/network-host-project/global/networks/VPC1" sourceType: "Network" targetResource: "projects/<service-project-2 number>" } ] Similarly, Cloud Storage requests from VM2 to service-project-2 don't have dry-run errors, and requests from VM2 to service-project-1 have the following dry-run error in the audit logs for the network-host-project : egressViolations: [ 0: { servicePerimeter: "accessPolicies/<access policy number>/servicePerimeters/perimeter-2" source: "//compute.googleapis.com/projects/network-host-project/global/networks/VPC2" sourceType: "Network" targetResource: "projects/<service-project-1 number>" } ] Enforce the dry-run configuration You must enforce all dry-run configurations at once in one atomic transaction.
- List the VPC networks in the host project The following command lists the VPC networks in the network-host-project: gcloud compute networks list --project=network-host-project This example produces the following output: NAME SUBNET MODE BGP ROUTING MODE IPV4 RANGE GATEWAY IPV4 vpc1 AUTO REGIONAL vpc2 AUTO REGIONAL Get the perimeter details The following command gets the details of the perimeter: gcloud access-context-manager perimeters describe perimeter-1 This example produces the following output: name: accessPolicies/<access policy number>/servicePerimeters/perimeter-1 status: … resources: - projects/<network-host-project number> - projects/<service-project-1 number> - projects/<service-project-2 number> The <access policy number> is used in the example dry-run mode commands.

### "Allow access to protected resources from outside a perimeter \_|\_ VPC Service\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels](https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following examples explain how to create an access level using different conditions: IP address User and service accounts (principals) Device policy Add access levels to service perimeters You can add access levels to a service perimeter when creating the perimeter, or to an existing perimeter: Read about adding access levels when you create a perimeter Read about adding access levels to an existing perimeter Manage access levels For information about listing, modifying, and deleting existing access levels, read Managing access levels .
- Limitations of using access levels with VPC Service Controls When using access levels with VPC Service Controls, certain limitations apply: Access levels only allow requests from outside a perimeter for the resources of a protected service inside a perimeter.
- Home Documentation Networking VPC Service Controls Guides Send feedback Allow access to protected resources from outside a perimeter Stay organized with collections Save and categorize content based on your preferences.
- Before you use access levels in your perimeter, consider the following: Access levels and ingress rules work together to control incoming traffic to a perimeter.

### "Add projects to service perimeters using Terraform \_|\_ VPC Service Controls\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/add-projects-perimeter-terraform](https://docs.cloud.google.com/vpc-service-controls/docs/add-projects-perimeter-terraform)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Networking VPC Service Controls Guides Send feedback Add projects to service perimeters using Terraform Stay organized with collections Save and categorize content based on your preferences.
- When the function detects a new project being added to the folder, it executes the Terraform script to add the new project to the perimeter.
- You can use Terraform to add a project in a folder to a service perimeter.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

