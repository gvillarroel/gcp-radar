---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:03.282Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "DNSManagedZone IAMPolicyMember support"
feature_slug: "dnsmanagedzone-iampolicymember-support"
latest_feature_date: "2023-01-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview"
  - "https://docs.cloud.google.com/config-connector/docs/reference/overview"
keywords:
  - "dnsmanagedzone"
  - "iampolicymember"
  - "supports"
  - "attaching"
  - "resources"
---

# DNSManagedZone IAMPolicyMember support

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

DNSManagedZone supports attaching IAMPolicyMember resources.

## Extended Definition

DNSManagedZone supports attaching IAMPolicyMember resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember)
- [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview)
- [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview)

## Supporting Pages

### IAMPolicyMember | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember)
- Source ID: `site-iam-reference`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- IAMPolicyMember Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember See the License for the specific language governing permissions and # limitations under the License. # Replace ${PROJECT ID?} and ${ORG ID?} below with your desired project and # organization IDs respectively. apiVersion: iam.cnrm.cloud.google.com/v1beta1 kind: IAMPolicyMember metadata: name: iampolicymember-sample-orglevel spec: member: serviceAccount:iampolicymember-dep-orglevel@${PROJECT ID?}.iam.gserviceaccount.com role: roles/storage.admin resourceRef: kind: Organization external: &quot;${ORG ID?}&quot; --- # Replace ${PROJECT ID?} below with your desired project ID.

### Organizing your resources | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview)
- Source ID: `site-docs-root`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- Organizing your resources Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview Config Connector · Start free ... on your preferences.
- Config Connector can create and manage Google Cloud resources at the project-level, folder-level, or organization-level scope....

### Config Connector resources | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview)
- Source ID: `site-docs-reference`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- Config Connector resources Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/overview Note: Config Connector reference documentation is based on the latest version.

