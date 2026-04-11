---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.797Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Organization policy constraint gcp.restrictCmekCryptoKeyProjects"
feature_slug: "organization-policy-constraint-gcp-restrictcmekcryptokeyprojects"
latest_feature_date: "2022-03-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/storage/docs/troubleshooting"
  - "https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions"
keywords:
  - "organization"
  - "policy"
  - "constraint"
  - "gcp"
  - "restrictcmekcryptokeyprojects"
  - "this"
  - "restricts"
  - "which"
---

# Organization policy constraint gcp.restrictCmekCryptoKeyProjects

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

This organization policy constraint restricts which projects can supply Cloud KMS keys for Cloud Storage requests.

## Extended Definition

This organization policy constraint restricts which projects can supply Cloud KMS keys for Cloud Storage requests.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions)

## Supporting Pages

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- August 02, 2022 Feature Customer-managed encryption key (CMEK) organization policy constraints are now generally available ( GA ). constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK. constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
- March 25, 2022 Feature Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview . constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK. constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
- This permission allows principals to know the organizational policy constraints that a project is subject to.
- June 02, 2025 Libraries Go 1.55.0 (2025-05-29) Features storage/control: Add Client Libraries Storage IntelligenceConfig ( 2aaada3 ) storage/internal: Add IpFilter to Bucket ( #12309 ) ( d8ae687 ) storage/internal: Add Object.Retention message ( d8ae687 ) Bug Fixes storage: Add EnableNewAuthLibrary internalOption to HTTP newClient ( #12320 ) ( 0036073 ) storage: Migrate oauth2/google usages to cloud.google.com/go/auth ( #11191 ) ( 3a22349 ) storage: Omit check on MultiRangeDownloader ( #12342 ) ( 774621c ) storage: Retry url.Error and net.OpErrors when they wrap an io.EOF ( #12289 ) ( 080f6b0 ) Documentation storage/internal: Add explicit Optional annotations to fields that have always been treated as optional ( d8ae687 ) storage/internal: Add note that Bucket.project output format is always project number format ( d8ae687 ) storage/internal: Add note that managedFolders are supported for GetIamPolicy and SetIamPolicy ( d8ae687 ) May 26, 2025 Libraries Java 2.52.3 (2025-05-19) Bug Fixes Update grpc client side metrics detection to be graceful when not running on gcp ( #3097 ) ( 10cd32d ) Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20250509-2.0.0 ( #3103 ) ( 1fd1090 ) Update sdk-platform-java dependencies ( #3102 ) ( 3b53b94 ) May 19, 2025 Libraries Go 1.54.0 (2025-05-12) Features storage: Add experimental ZB API option ( #12214 ) ( f669982 ) Bug Fixes storage: Fix append writer hang ( #12201 ) ( 7ce2a2a ) storage: Retry unwrapped EOFs ( #12202 ) ( b2d42bd ) May 12, 2025 Libraries Java 2.52.2 (2025-05-06) Bug Fixes Fix a possible NPE that could happen when shutting down a grpc Storage instance ( #3089 ) ( 56f5d0a ) Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20250424-2.0.0 ( #3084 ) ( c7afbde ) Update sdk-platform-java dependencies ( #3087 ) ( 762ca13 ) May 05, 2025 Libraries Java 2.52.0 (2025-04-28) [!IMPORTANT] This release has a direct memory leak when using a StorageOptions.grpc() instance and performing downloads.

### Troubleshooting \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Solution : Check with your security administrator team to see if the bucket to which you're sending requests is being affected by an organization policy that uses a custom constraint.
- For example, the Domain Restricted Sharing constraint ( constraints/iam.allowedPolicyMemberDomains ) restricts resource sharing based on the organization's domain.
- If you continue to see this error after overriding the organization policy, then you might need to wait a few minutes for the change to take effect.
- Solution : Some organization policy constraints can prevent you from making your data public.

### "Set and manage IAM policies on buckets \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . use Google\Cloud\Storage\StorageClient; / Removes a member / role IAM pair from a given Cloud Storage bucket. @param string $bucketName The name of your Cloud Storage bucket. (e.g. 'my-bucket') @param string $role The role from which the specified member should be removed. (e.g. 'roles/storage.objectViewer') @param string $member The member to be removed from the specified role. (e.g. 'group:example@google.com') / function remove bucket iam member(string $bucketName, string $role, string $member): void { $storage = new StorageClient(); $bucket = $storage->bucket($bucketName); $iam = $bucket->iam(); $policy = $iam->policy(['requestedPolicyVersion' => 3]); $policy['version'] = 3; foreach ($policy['bindings'] as $i => $binding) { // This example only removes member from bindings without a condition. if ($binding['role'] == $role && !isset($binding['condition'])) { $key = array search($member, $binding['members']); if ($key !== false) { unset($binding['members'][$key]); // If the last member is removed from the binding, clean up the // binding. if (count($binding['members']) == 0) { unset($policy['bindings'][$i]); // Ensure array keys are sequential, otherwise JSON encodes // the array as an object, which fails when calling the API. $policy['bindings'] = array values($policy['bindings']); } else { // Ensure array keys are sequential, otherwise JSON encodes // the array as an object, which fails when calling the API. $binding['members'] = array values($binding['members']); $policy['bindings'][$i] = $binding; } $iam->setPolicy($policy); printf('User %s removed from role %s for bucket %s' .
- To see how to express a condition in CEL, visit: @see https://cloud.google.com/storage/docs/access-control/iam#conditions. @param string $bucketName The name of your Cloud Storage bucket. (e.g. 'my-bucket') @param string $role the role that will be given to members in this binding. (e.g. 'roles/storage.objectViewer') @param string $title The title of the condition. (e.g. 'Title') @param string $description The description of the condition. (e.g. 'Condition Description') @param string $expression Te condition specified in CEL expression language. (e.g. 'resource.name.startsWith("projects/ /buckets/bucket-name/objects/prefix-a-")') / function remove bucket conditional iam binding(string $bucketName, string $role, string $title, string $description, string $expression): void { $storage = new StorageClient(); $bucket = $storage->bucket($bucketName); $policy = $bucket->iam()->policy(['requestedPolicyVersion' => 3]); $policy['version'] = 3; $key of conditional binding = null; foreach ($policy['bindings'] as $key => $binding) { if ($binding['role'] == $role && isset($binding['condition'])) { $condition = $binding['condition']; if ($condition['title'] == $title && $condition['description'] == $description && $condition['expression'] == $expression) { $key of conditional binding = $key; break; } } } if ($key of conditional binding != null) { unset($policy['bindings'][$key of conditional binding]); // Ensure array keys are sequential, otherwise JSON encodes // the array as an object, which fails when calling the API. $policy['bindings'] = array values($policy['bindings']); $bucket->iam()->setPolicy($policy); print('Conditional Binding was removed.' .
- This role contains the following permissions, which are required to set and manage IAM policies for buckets: storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update storage.buckets.list This permission is only required if you plan on using the Google Cloud console to perform the tasks on this page.
- For more information, see Set up authentication for client libraries . use Google\Cloud\Storage\StorageClient; / Adds a conditional IAM binding to a bucket's IAM policy. @param string $bucketName The name of your Cloud Storage bucket. (e.g. 'my-bucket') @param string $role The role that will be given to members in this binding. (e.g. 'roles/storage.objectViewer') @param string[] $members The member(s) associated with this binding. (e.g. ['group:example@google.com']) @param string $title The title of the condition. (e.g. 'Title') @param string $description The description of the condition. (e.g. 'Condition Description') @param string $expression The condition specified in CEL expression language. (e.g. 'resource.name.startsWith("projects/ /buckets/bucket-name/objects/prefix-a-")') To see how to express a condition in CEL, visit: @see https://cloud.google.com/storage/docs/access-control/iam#conditions. / function add bucket conditional iam binding(string $bucketName, string $role, array $members, string $title, string $description, string $expression): void { $storage = new StorageClient(); $bucket = $storage->bucket($bucketName); $policy = $bucket->iam()->policy(['requestedPolicyVersion' => 3]); $policy['version'] = 3; $policy['bindings'][] = [ 'role' => $role, 'members' => $members, 'condition' => [ 'title' => $title, 'description' => $description, 'expression' => $expression, ], ]; $bucket->iam()->setPolicy($policy); printf('Added the following member(s) with role %s to %s:' .

