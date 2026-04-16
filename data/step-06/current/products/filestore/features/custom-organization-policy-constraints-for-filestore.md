---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.655Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Custom Organization Policy constraints for Filestore"
feature_slug: "custom-organization-policy-constraints-for-filestore"
latest_feature_date: "2025-04-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/create-custom-constraints"
  - "https://docs.cloud.google.com/filestore/docs/cmek-organization-policy"
  - "https://docs.cloud.google.com/filestore/docs/custom-performance"
  - "https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient"
keywords:
  - "custom"
  - "organization"
  - "policy"
  - "constraints"
  - "for"
  - "filestore"
  - "provide"
  - "granular"
---

# Custom Organization Policy constraints for Filestore

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Custom Organization Policy constraints provide granular control over selected Filestore resource fields.

## Extended Definition

Custom Organization Policy constraints provide granular control over selected Filestore resource fields.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/create-custom-constraints](https://docs.cloud.google.com/filestore/docs/create-custom-constraints)
- [https://docs.cloud.google.com/filestore/docs/cmek-organization-policy](https://docs.cloud.google.com/filestore/docs/cmek-organization-policy)
- [https://docs.cloud.google.com/filestore/docs/custom-performance](https://docs.cloud.google.com/filestore/docs/custom-performance)
- [https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient)

## Supporting Pages

### Creating custom constraints for Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/create-custom-constraints](https://docs.cloud.google.com/filestore/docs/create-custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 296
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Test the policy Try creating an instance without setting deletionProtection to true : gcloud filestore instances create test-ins --zone = us-central1 --tier = enterprise --network = name = "default" --file-share = "capacity=1024,name=test-fs" The output is similar to the following: ERROR: (gcloud.filestore.instances.create) FAILED PRECONDITION: Operation denied by custom org policy on resource 'projects/test-project/locations/us-central1/instances/test-ins': ["customConstraints/custom.deletionProtectionEnabledEnforcedOnCreate": "Enforce instance creation with deletion protection."]. - '@type': type.googleapis.com/google.rpc.DebugInfo detail: "generic::failed precondition: Operation denied by custom org policy on\ \ resource 'projects/test-project/locations/us-central1/instances/test-ins':\ \ [\"customConstraints/custom.deletionProtectionEnabledEnforcedOnCreate\": \"\ Enforce instance creation with deletion protection.\"]." . . . - '@type': type.googleapis.com/google.rpc.DebugInfo - '@type': type.googleapis.com/google.rpc.ErrorInfo domain: file.googleapis.com metadata: customConstraints: customConstraints/custom.deletionProtectionEnabledEnforcedOnCreate resource: projects/test-project/locations/us-central1/instances/test-ins reason: CUSTOM ORG POLICY VIOLATION Example custom organization policies for common use cases The following table lists custom organization policies that you might find useful: Description Constraint syntax When setting the access control to a restricted list of IPs and roles, allow setting the administrator IP to a unique IP name : organizations/ ORGANIZATION ID /customConstraints/custom.filestoreAdminIP resourceTypes : - file.googleapis.com/Instance methodTypes : - CREATE - UPDATE condition : "resource.fileShares.size() > 0 && resource.fileShares[0].nfsExportOptions.size() > 0 && resource.fileShares[0].nfsExportOptions.exists(o, o.squashMode == 'NO ROOT SQUASH' && o.accessMode == 'READ WRITE' && o.ipRanges.exists(i, i != '10.0.0.1'))" actionType : ALLOW displayName : Access control admin IP description : Access control restriction allows setting admin IP exclusively to 10.0.0.1.
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom constraints and use those custom constraints in an organization policy.
- Organization Policy provides built-in managed constraints for various Google Cloud services.
- When you have entered a value into each field, the equivalent YAML configuration for this custom constraint appears on the right. gcloud To create a custom constraint, create a YAML file using the following format: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : RESOURCE NAME methodTypes : - CREATE - UPDATE condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .

### Apply a CMEK organization policy \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/cmek-organization-policy](https://docs.cloud.google.com/filestore/docs/cmek-organization-policy)
- Source ID: `site-docs-root-2`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Cloud offers two organization policy constraints to help ensure CMEK usage across an organization: constraints/gcp.restrictNonCmekServices is used to require CMEK protection. constraints/gcp.restrictCmekCryptoKeyProjects is used to limit which Filestore keys are used for CMEK protection.
- Control CMEK use with organization policy Filestore integrates with CMEK organization policy constraints to let you specify encryption compliance requirements for Filestore resources in your organization.
- Require CMEKs for all Filestore resources A common policy is to require CMEKs to be used to protect all resources in an organization.
- You can use the constraints/gcp.restrictNonCmekServices constraint to enforce this policy in Filestore.

### Custom performance \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/custom-performance](https://docs.cloud.google.com/filestore/docs/custom-performance)
- Source ID: `site-docs-root-2`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom performance examples for zonal and regional tiers Provisioned IOPS per TiB Capacity (GiB) Read IOPS Write IOPS Read throughput (MiBps) Write throughput (MiBps) 4,000 100 2,000 600 47 16 600 2,344 703 55 19 1,024 4,000 1,200 94 32 10,239 39,996 11,999 940 320 17,000 100 2,000 600 47 16 600 9,961 2,988 234 80 1024 17,000 5,100 400 136 10,239 169,983 50,995 3,995 1,360 Depending on the access to the small capacity instances feature, the lower capacity range for Filestore regional instances can be either 100 GiB to 10,239 GiB or 1 TiB to 9.75 TiB.
- If custom performance is supported and configured for the provided instance, the response will include the following parameters: "customPerformanceSupported": true, "performanceConfig": { "fixedIops": { "maxIops": "9000" } }, "performanceLimits": { "maxReadIops": "9000", "maxWriteIops": "2700", "maxReadThroughputBps": "221184000", "maxWriteThroughputBps": "73728000", "maxIops": "9000" } Custom performance calculations The following table displays performance calculations based on provisioned IOPS per TiB and allocated capacity.
- Disabled means that custom performance is supported but not enabled for this instance. gcloud Get information about a Filestore instance by running the instances describe command: gcloud filestore instances describe INSTANCE ID --project= PROJECT ID --location= LOCATION The output might vary depending on the instance settings.
- Check custom performance status If you want to the check the custom performance status, follow these instructions: Google Cloud console Go to the Filestore Instances page Click the Instance ID to open the Instance Details page.

### "Class CloudFilestoreManagerAsyncClient (1.16.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- The Filestore Instance to create the snapshots of, in the format projects/{project id}/locations/{location}/instances/{instance id} This corresponds to the parent field on the request instance; if request is provided, this should not be set. snapshot Snapshot Required.
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create backup create backup ( request : typing .
- The elements of the repeated paths field may only include these fields: - "description" - "file shares" - "labels" - "performance config" - "deletion protection enabled" - "deletion protection reason" This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- As such, Filestore instances are resources of the form: /projects/{project number}/locations/{location id}/instances/{instance id} and backups are resources of the form: /projects/{project number}/locations/{location id}/backup/{backup id} Note that location id must be a Google Cloud zone for instances, but a Google Cloud region for backups; for example: projects/12345/locations/us-central1-c/instances/my-filestore projects/12345/locations/us-central1/backups/my-backup Properties api endpoint Return the API endpoint used by the client instance.

