---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.659Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Privileged Access Manager for private cloud deletion"
feature_slug: "privileged-access-manager-for-private-cloud-deletion"
latest_feature_date: "2025-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management"
  - "https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient"
keywords:
  - "privileged"
  - "access"
  - "manager"
  - "private"
  - "deletion"
  - "uses"
  - "speed"
  - "up"
---

# Privileged Access Manager for private cloud deletion

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Uses Privileged Access Manager to speed up deletion of soft-deleted private clouds.

## Extended Definition

Uses Privileged Access Manager to speed up deletion of soft-deleted private clouds.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management](https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management)
- [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)

## Supporting Pages

### "Accessing management appliances \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management](https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management)
- Source ID: `site-docs-reference-required-3`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Reset access credentials If you misplace the credentials to vCenter Server or NSX Manager, you can reset the password to your management appliances for your private cloud using the Google Cloud CLI or Google Cloud VMware Engine by doing the following: Important: If you change the password that VMware Engine generates for either vCenter Server or NSX Manager, those changes won't be reflected in the Google Cloud console.
- In the prompt that appears and contains your access credentials, click Reset Password . gcloud To reset the password to a management appliance using the Google Cloud CLI, do the following: Reset vCenter user credentials by running the gcloud vmware private-clouds vcenter credentials reset command : gcloud vmware private-clouds vcenter credentials reset \ --private-cloud= PRIVATE CLOUD ID \ --project= PROJECT ID \ --location= REGION Reset NSX user credentials by running the gcloud vmware private-clouds nsx credentials reset command : gcloud vmware private-clouds nsx credentials reset \ --private-cloud= PRIVATE CLOUD ID \ --project= PROJECT ID \ --location= REGION Replace the following: PRIVATE CLOUD ID : the private cloud private cloud ID for this request.
- Copy the credentials for vCenter Server or NSX Manager from the prompt that appears. gcloud To get the password to a management appliance using the Google Cloud CLI, do the following: To show vCenter user credentials, run the gcloud vmware private-clouds vcenter credentials describe command : gcloud vmware private-clouds vcenter credentials describe \ --private-cloud= PRIVATE CLOUD ID \ --project= PROJECT ID \ --location= REGION To show NSX user credentials, run the gcloud vmware private-clouds nsx credentials describe command : gcloud vmware private-clouds nsx credentials describe \ --private-cloud= PRIVATE CLOUD ID \ --project= PROJECT ID \ --location= REGION Replace the following: PRIVATE CLOUD ID : the private cloud private cloud ID for this request.
- Click the URL column for vCenter Server or NSX Manager. gcloud To get the connection details to a management appliance using the Google Cloud CLI, do the following: To show management appliance URLs, run the gcloud vmware private-clouds describe command : gcloud vmware private-clouds describe \ --private-cloud= PRIVATE CLOUD ID \ --project= PROJECT ID \ --location= REGION Replace the following: PRIVATE CLOUD ID : the private cloud private cloud ID for this request.

### "Manage private cloud resources and activity \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Manage private cloud resources and activity After you create a private cloud, you can view detailed information about it, manage its resources and activity, and access its VMware management appliances.
- For more information about DNS forwarding, see Configuring DNS for name resolution for private cloud vCenter access from on-premises workstations .
- To view a list of your private clouds, start by accessing its resource summary page: In the Google Cloud console, go to the Private clouds page.
- Access the vCenter for this private cloud.

### "Class VmwareEngineAsyncClient (1.11.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- Source ID: `site-python-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . show nsx credentials show nsx credentials ( request : typing .
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . get location get location ( request : typing .
- For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } dns bind permission path dns bind permission path ( project : str , location : str ) - > str Returns a fully-qualified dns bind permission string. dns forwarding path dns forwarding path ( project : str , location : str , private cloud : str ) - > str Returns a fully-qualified dns forwarding string. external access rule path external access rule path ( project : str , location : str , network policy : str , external access rule : str ) - > str Returns a fully-qualified external access rule string. external address path external address path ( project : str , location : str , private cloud : str , external address : str ) - > str Returns a fully-qualified external address string. fetch network policy external addresses fetch network policy external addresses ( request : typing .
- It contains FQDNs and corresponding IP addresses for the private cloud's ESXi hosts and management VM appliances like vCenter and NSX Manager. get mtls endpoint and cert source get mtls endpoint and cert source ( client options : typing .

