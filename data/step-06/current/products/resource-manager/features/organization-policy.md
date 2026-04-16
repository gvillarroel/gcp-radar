---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.097Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Organization Policy"
feature_slug: "organization-policy"
latest_feature_date: "2017-07-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/access-control-org"
  - "https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies"
  - "https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview"
keywords:
  - "organization"
  - "policy"
  - "lets"
  - "administrators"
  - "centrally"
  - "restrict"
  - "allowed"
  - "configurations"
---

# Organization Policy

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Organization Policy lets administrators centrally restrict allowed configurations across an organization's Cloud resource hierarchy.

## Extended Definition

Organization Policy lets administrators centrally restrict allowed configurations across an organization's Cloud resource hierarchy.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- [https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies)
- [https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview](https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview)

## Supporting Pages

### "Access control for organization resources with IAM \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- For example, to make anotheradmin@gcp-test.com an Organization Administrator, change the previous example as follows: { "bindings" : [ { "members" : [ "user:testuser1@gcp-test.com" ], "role" : "roles/editor" }, { "members" : [ "user:admin@gcp-test.com" , "user:anotheradmin@gcp-test.com" ], "role" : "roles/resourcemanager.organizationAdmin" }, { "members" : [ "user:testuser20@gcp-test.com" ], "role" : "roles/resourcemanager.projectCreator" }, ], "etag" : "BwU1aRxWk30=" } Update the organization resource's allow policy by running the following command: gcloud alpha organizations set-iam-policy <var>ORGANIZATION ID</var> policy.json API Request: POST h tt ps : //cloudresourcemanager.googleapis.com/v3/organizations/12345:setIamPolicy { "policy" : { "version" : "0" , "bindings" : [ { "role" : "roles/resourcemanager.organizationAdmin" , "members" : [ "user:email1@gmail.com" ] }, { "role" : "roles/resourcemanager.projectCreator" , "members" : [ "user:email2@gmail.com" , "user:email3@gmail.com" , "serviceAccount:my-other-app@appspot.gserviceaccount.com" ] } ] "etag" : "BwUjHYKHHiQ=" } } Response: { "bindings" : [ { "role" : "roles/resourcemanager.organizationAdmin" , "members" : [ "user:email1@gmail.com" ] }, { "role" : "roles/resourcemanager.projectCreator" , "members" : [ "user:email2@gmail.com" , "user:email3@gmail.com" , "serviceAccount:my-other-app@appspot.gserviceaccount.com" ] } ] "etag" : "BwUjHYKJUiQ=" } The setIamPolicy() method lets you grant roles to users by attaching an allow policy to the organization resource.
- Http ())) policy = crm . organizations () . getIamPolicy ( resource = flags . organizationId , body = {}) . execute () admin binding = next ( ( binding for binding in policy [ 'bindings' ] if binding [ 'role' ] == 'roles/resourcemanager.organizationAdmin' ), None ) Add an empty Organization Administrator binding if not present. if not admin binding : admin binding = { 'role' : 'roles/resourcemanager.organizationAdmin' , 'members' : [] } policy [ 'bindings' ] . append ( admin binding ) Add the new Admin (if necessary). new admin = 'user:' + flags . adminEmail if new admin not in admin binding [ 'members' ]: admin binding [ 'members' ] . append ( new admin ) policy = crm . organizations () . setIamPolicy ( resource = flags . organizationId , body = { 'resource' : flags . organizationId , 'policy' : policy }) . execute () print json . dumps ( policy , indent = 2 ) Restrict project visibility for users Users can see all projects they have access to in the Google Cloud console and in search queries, regardless of whether or not they are in the user's selected organization resource.
- Request: POST https://cloudresourcemanager.googleapis.com/v3/organizations/12345:getIamPolicy Response: { "bindings" : [ { "role" : "roles/resourcemanager.organizationAdmin" , "members" : [ "user:email1@gmail.com" ] }, { "role" : "roles/resourcemanager.projectCreator" , "members" : [ "user:email2@gmail.com" , "user:email3@gmail.com" , "serviceAccount:my-other-app@appspot.gserviceaccount.com" ] } ] "etag" : "BwUjHYKHHiQ=" } Python The method getIamPolicy() lets you get an allow policy that was previously set. crm = discovery . build ( 'cloudresourcemanager' , 'v3' , http = creds . authorize ( httplib2 .
- Http ())) policy = crm . organizations () . getIamPolicy ( resource = flags . organizationId , body = {}) . execute () print json . dumps ( policy , indent = 2 ) Grant access to an organization resource Organization Administrators can grant IAM roles to team members so that they can access an organization's resources and APIs.

### "Introduction to organization restrictions \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview](https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview)
- Source ID: `site-docs-reference-2`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Cloud administrators who administer Google Cloud, and egress proxy administrators, who configure the egress proxy, engage together to set up organization restrictions.
- The organization restrictions feature lets you prevent data exfiltration through phishing or insider attacks.
- The following diagram illustrates how the different components work to enforce organization restrictions: The architecture diagram shows the following components: Managed device : A device that is governed by the organization policies of a company.
- Common use cases Here are some common organization restrictions use cases: Restrict access to employees in your organization so that employees can access resources only in your Google Cloud organization and not other organizations.

### "Create custom constraints for Essential Contacts \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies)
- Source ID: `site-docs-reference-2`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: essentialcontacts.googleapis.com/Contact To learn more about Organization Policy, see Custom organization policies .
- As the organization policy administrator , you can define an organization policy, which is a set of restrictions called constraints that apply to Google Cloud resources and descendants of those resources in the Google Cloud resource hierarchy .
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom constraints and use those custom constraints in an organization policy.
- Test the policy Try creating a contact for a different category: gcloud essential-contacts create --email = randomemail@example.com --language = en --notification-categories = security The output is similar to the following: (gcloud.essential-contacts.create) FAILED PRECONDITION: Precondition check failed. - '@type': type.googleapis.com/google.rpc.ErrorInfo domain: iam.googleapis.com metadata: customConstraints: customConstraints/custom.onlyTechnicalNotificationsAllowed reason: CUSTOM ORG POLICY VIOLATION - '@type': type.googleapis.com/google.rpc.DebugInfo detail: '[ORIGINAL ERROR] generic::failed precondition: com.google.apps.framework.auth.IamFailedPreconditionException: Operation denied by custom org policy: ["customConstraints/custom.onlyTechnicalNotificationsAllowed": "The contact can only be subscribed to technical notifications."]. [google.rpc.error details ext] { details { [type.googleapis.com/google.rpc.ErrorInfo] { reason: "CUSTOM ORG POLICY VIOLATION" domain: "iam.googleapis.com" metadata { key: "customConstraints" value: "customConstraints/custom.onlyTechnicalNotificationsAllowed" } } } }' Essential Contacts supported resources The following table lists the Essential Contacts resources that you can reference in custom constraints.

