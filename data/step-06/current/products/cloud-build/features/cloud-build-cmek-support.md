---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.779Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build CMEK support"
feature_slug: "cloud-build-cmek-support"
latest_feature_date: "2019-06-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/access-github-from-build"
  - "https://docs.cloud.google.com/build/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient"
keywords:
  - "build"
  - "cmek"
  - "added"
  - "for"
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
---

# Cloud Build CMEK support

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build added support for customer-managed encryption keys (CMEK) for compliance.

## Extended Definition

Cloud Build added support for customer-managed encryption keys (CMEK) for compliance.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)
- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient)

## Supporting Pages

### "Accessing GitHub from a build via SSH keys \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- The keys are often collected from the remote hosts when connecting to them for the first time, but they can also be added manually.
- Finished Step #2 PUSH DONE ----------------------------------------------------------------------------------------------------------------- ID CREATE TIME DURATION SOURCE IMAGES STATUS 871 b68bc - cefc - 4411 - 856 c - 2 a2b7c7d2487 XXXX - XX - XXT17 : 57 : 21 + 00 : 00 13 S gs : // [ PROJECT - ID ] cloudbuild / source / 1504288639.02 ---. tgz - SUCCESS Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- In your workingdir directory, create a file named known hosts.github and add the public SSH key to this file: ssh-keyscan -t rsa github.com > known hosts.github In the next section when you configure the build, you'll add instructions in the Cloud Build config file to copy the contents of known hosts.github to the known hosts file in Cloud Build's build environment.
- Home Documentation Application development Cloud Build Guides Send feedback Accessing GitHub from a build via SSH keys Stay organized with collections Save and categorize content based on your preferences.

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- June 20, 2019 Feature Cloud Build now provides Customer-Managed Encryption Keys (CMEK) compliance .
- The default behavior for how Cloud Build uses service accounts in new projects was changed to improve the security posture of our customers going forward.
- Added support for providing filepath filters to trigger a build only on changes to the specified files or subdirectories.
- Feature Added a new Cloud Build Settings page in the Google Cloud console for managing service account permissions.

### "Class CloudBuildAsyncClient (3.35.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient)
- Source ID: `site-python-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- For an overview of private pools, see Private pools overview. git repository link path git repository link path ( project : str , location : str , connection : str , git repository link : str ) - > str Returns a fully-qualified git repository link string. github enterprise config path github enterprise config path ( project : str , config : str ) - > str Returns a fully-qualified github enterprise config string. list build triggers list build triggers ( request : typing .
- Format: projects/{project}/locations/{location}/builds/{build} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Format: projects/{project}/locations/{location}/builds/{build} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Format: projects/{project}/locations/{location}/builds/{build} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

