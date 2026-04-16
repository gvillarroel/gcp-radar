---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:52:40.545Z"
product_name: "AI Hypercomputer"
product_slug: "ai-hypercomputer"
feature_name: "Managed instance group workload policies"
feature_slug: "managed-instance-group-workload-policies"
latest_feature_date: "2025-06-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a3-high-mega"
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4-or-a3ultra"
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4x"
keywords:
  - "instance"
  - "managed"
  - "group"
  - "policies"
  - "workload"
---

# Managed instance group workload policies

Product: AI Hypercomputer
Coverage: MEDIUM

## Step 02 Summary

AI Hypercomputer now supports workload policies on managed instance groups, including a high-throughput workload type optimized for high networking performance.

## Extended Definition

AI Hypercomputer now supports workload policies on managed instance groups, including a high-throughput workload type optimized for high networking performance.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a3-high-mega](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a3-high-mega)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4-or-a3ultra](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4-or-a3ultra)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4x](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4x)

## Supporting Pages

### "Create an AI-optimized MIG with A3 High or A3 Mega machine type \_|\_ AI\

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a3-high-mega](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a3-high-mega)
- Source ID: `site-docs-root-required-2`
- Final score: 141
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Flex-start Create a zonal or regional MIG and a resize request as follows: To create a zonal MIG and a resize request in it, do the following: Create a zonal MIG using the instance-groups managed create command as follows. gcloud compute instance-groups managed create MIG NAME \ --template= INSTANCE TEMPLATE URL \ --size=0 \ --default-action-on-vm-failure=do-nothing \ --zone= ZONE Create a resize request in the zonal MIG using the instance-groups managed resize-requests create command as follows: gcloud compute instance-groups managed resize-requests create MIG NAME \ --resize-request= RESIZE REQUEST NAME \ --resize-by= COUNT \ --zone= ZONE To create a regional MIG and a resize request in it, do the following: Create a regional MIG using the instance-groups managed create command as follows. gcloud compute instance-groups managed create MIG NAME \ --template= INSTANCE TEMPLATE URL \ --size=0 \ --default-action-on-vm-failure=do-nothing \ --zones= ZONE \ --target-distribution-shape=any-single-zone \ --instance-redistribution-type=none Create a resize request in the regional MIG using the beta instance-groups managed resize-requests create command as follows: gcloud beta compute instance-groups managed resize-requests create MIG NAME \ --resize-request= RESIZE REQUEST NAME \ --resize-by= COUNT \ --region= REGION Reservation-bound The commands that you use to create a MIG use a workload policy to specify instance placement.
- Create a zonal or regional MIG and a resize request as follows: To create a zonal MIG and a resize request in it, do the following: Create a zonal MIG using the instance-groups managed create command as follows. gcloud compute instance-groups managed create MIG NAME \ --template= INSTANCE TEMPLATE URL \ --size=0 \ --workload-policy= WORKLOAD POLICY URL \ --zone= ZONE Create a resize request in the zonal MIG using the instance-groups managed resize-requests create command as follows: gcloud compute instance-groups managed resize-requests create MIG NAME \ --resize-request= RESIZE REQUEST NAME \ --resize-by= COUNT \ --zone= ZONE To create a regional MIG and a resize request in it, do the following: Create a regional MIG using the instance-groups managed create command as follows. gcloud compute instance-groups managed create MIG NAME \ --template= INSTANCE TEMPLATE URL \ --size=0 \ --workload-policy= WORKLOAD POLICY URL \ --zones= ZONE \ --target-distribution-shape=any-single-zone \ --instance-redistribution-type=none Create a resize request in the regional MIG using the beta instance-groups managed resize-requests create command as follows: gcloud beta compute instance-groups managed resize-requests create MIG NAME \ --resize-request= RESIZE REQUEST NAME \ --resize-by= COUNT \ --region= REGION Spot The commands that you use to create a MIG use a workload policy to specify instance placement.
- Create a zonal or regional MIG and a resize request as follows: To create a zonal MIG and a resize request in it, do the following: Create a zonal MIG using the instance-groups managed create command as follows. gcloud compute instance-groups managed create MIG NAME \ --template= INSTANCE TEMPLATE URL \ --size=0 \ --workload-policy= WORKLOAD POLICY URL \ --zone= ZONE Create a resize request in the zonal MIG using the instance-groups managed resize-requests create command as follows: gcloud compute instance-groups managed resize-requests create MIG NAME \ --resize-request= RESIZE REQUEST NAME \ --resize-by= COUNT \ --zone= ZONE To create a regional MIG and a resize request in it, do the following: Create a regional MIG using the instance-groups managed create command as follows. gcloud compute instance-groups managed create MIG NAME \ --template= INSTANCE TEMPLATE URL \ --size=0 \ --workload-policy= WORKLOAD POLICY URL \ --zones= ZONE \ --target-distribution-shape=any-single-zone \ --instance-redistribution-type=none Create a resize request in the regional MIG using the beta instance-groups managed resize-requests create command as follows: gcloud beta compute instance-groups managed resize-requests create MIG NAME \ --resize-request= RESIZE REQUEST NAME \ --resize-by= COUNT \ --region= REGION Replace the following: MIG NAME : the name of the MIG.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /instanceGroupManagers { "versions": [ { "instanceTemplate": " INSTANCE TEMPLATE URL " } ], "name": " MIG NAME ", "targetSize": 0, "distributionPolicy": { "targetShape": "ANY SINGLE ZONE", "zones": [ { "zone": "projects/ PROJECT ID /zones/ ZONE " } ] }, "updatePolicy": { "instanceRedistributionType": "NONE" }, "resourcePolicies": { "workloadPolicy": WORKLOAD POLICY URL } } Create a resize request in the regional MIG by making a POST request to the beta.regionInstanceGroupManagerResizeRequests.insert method as follows: POST https://compute.googleapis.com/compute/beta/projects/ PROJECT ID /regions/ REGION /instanceGroupManagers/ MIG NAME /resizeRequests { "name": " RESIZE REQUEST NAME ", "resizeBy": COUNT } Spot The requests that you use to create a MIG use a workload policy to specify instance placement.

### "Create an AI-optimized MIG with A4 or A3 Ultra machine type \_|\_ AI Hypercomputer\

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4-or-a3ultra](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4-or-a3ultra)
- Source ID: `site-docs-root-required-2`
- Final score: 141
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Flex-start Create a zonal or regional MIG and a resize request as follows: To create a zonal MIG and a resize request in it, do the following: Create a zonal MIG using the instance-groups managed create command as follows. gcloud compute instance-groups managed create MIG NAME \ --template= INSTANCE TEMPLATE URL \ --size=0 \ --default-action-on-vm-failure=do-nothing \ --zone= ZONE Create a resize request in the zonal MIG using the instance-groups managed resize-requests create command as follows: gcloud compute instance-groups managed resize-requests create MIG NAME \ --resize-request= RESIZE REQUEST NAME \ --resize-by= COUNT \ --zone= ZONE To create a regional MIG and a resize request in it, do the following: Create a regional MIG using the instance-groups managed create command as follows. gcloud compute instance-groups managed create MIG NAME \ --template= INSTANCE TEMPLATE URL \ --size=0 \ --default-action-on-vm-failure=do-nothing \ --zones= ZONE \ --target-distribution-shape=any-single-zone \ --instance-redistribution-type=none Create a resize request in the regional MIG using the beta instance-groups managed resize-requests create command as follows: gcloud beta compute instance-groups managed resize-requests create MIG NAME \ --resize-request= RESIZE REQUEST NAME \ --resize-by= COUNT \ --region= REGION Reservation-bound The commands that you use to create a MIG use a workload policy to specify instance placement.
- Create a zonal or regional MIG and a resize request as follows: To create a zonal MIG and a resize request in it, do the following: Create a zonal MIG using the instance-groups managed create command as follows. gcloud compute instance-groups managed create MIG NAME \ --template= INSTANCE TEMPLATE URL \ --size=0 \ --workload-policy= WORKLOAD POLICY URL \ --zone= ZONE Create a resize request in the zonal MIG using the instance-groups managed resize-requests create command as follows: gcloud compute instance-groups managed resize-requests create MIG NAME \ --resize-request= RESIZE REQUEST NAME \ --resize-by= COUNT \ --zone= ZONE To create a regional MIG and a resize request in it, do the following: Create a regional MIG using the instance-groups managed create command as follows. gcloud compute instance-groups managed create MIG NAME \ --template= INSTANCE TEMPLATE URL \ --size=0 \ --workload-policy= WORKLOAD POLICY URL \ --zones= ZONE \ --target-distribution-shape=any-single-zone \ --instance-redistribution-type=none Create a resize request in the regional MIG using the beta instance-groups managed resize-requests create command as follows: gcloud beta compute instance-groups managed resize-requests create MIG NAME \ --resize-request= RESIZE REQUEST NAME \ --resize-by= COUNT \ --region= REGION Spot The commands that you use to create a MIG use a workload policy to specify instance placement.
- Create a zonal or regional MIG and a resize request as follows: To create a zonal MIG and a resize request in it, do the following: Create a zonal MIG using the instance-groups managed create command as follows. gcloud compute instance-groups managed create MIG NAME \ --template= INSTANCE TEMPLATE URL \ --size=0 \ --workload-policy= WORKLOAD POLICY URL \ --zone= ZONE Create a resize request in the zonal MIG using the instance-groups managed resize-requests create command as follows: gcloud compute instance-groups managed resize-requests create MIG NAME \ --resize-request= RESIZE REQUEST NAME \ --resize-by= COUNT \ --zone= ZONE To create a regional MIG and a resize request in it, do the following: Create a regional MIG using the instance-groups managed create command as follows. gcloud compute instance-groups managed create MIG NAME \ --template= INSTANCE TEMPLATE URL \ --size=0 \ --workload-policy= WORKLOAD POLICY URL \ --zones= ZONE \ --target-distribution-shape=any-single-zone \ --instance-redistribution-type=none Create a resize request in the regional MIG using the beta instance-groups managed resize-requests create command as follows: gcloud beta compute instance-groups managed resize-requests create MIG NAME \ --resize-request= RESIZE REQUEST NAME \ --resize-by= COUNT \ --region= REGION Replace the following: MIG NAME : the name of the MIG.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /instanceGroupManagers { "versions": [ { "instanceTemplate": " INSTANCE TEMPLATE URL " } ], "name": " MIG NAME ", "targetSize": 0, "distributionPolicy": { "targetShape": "ANY SINGLE ZONE", "zones": [ { "zone": "projects/ PROJECT ID /zones/ ZONE " } ] }, "updatePolicy": { "instanceRedistributionType": "NONE" }, "resourcePolicies": { "workloadPolicy": WORKLOAD POLICY URL } } Create a resize request in the regional MIG by making a POST request to the beta.regionInstanceGroupManagerResizeRequests.insert method as follows: POST https://compute.googleapis.com/compute/beta/projects/ PROJECT ID /regions/ REGION /instanceGroupManagers/ MIG NAME /resizeRequests { "name": " RESIZE REQUEST NAME ", "resizeBy": COUNT } Spot The requests that you use to create a MIG use a workload policy to specify instance placement.

### "Create an AI-optimized MIG with A4X \_|\_ AI Hypercomputer \_|\_ Google\

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4x](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4x)
- Source ID: `site-docs-root-required-2`
- Final score: 141
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a zonal or regional MIG as follows: To create a zonal MIG, use the following command: gcloud compute instance-groups managed create MIG NAME \ --template= INSTANCE TEMPLATE URL \ --size= TARGET SIZE \ --workload-policy= WORKLOAD POLICY URL \ --zone= ZONE To create a regional MIG, use the following command: gcloud compute instance-groups managed create MIG NAME \ --template= INSTANCE TEMPLATE URL \ --size= TARGET SIZE \ --workload-policy= WORKLOAD POLICY URL \ --region= REGION Replace the following: MIG NAME : the name of the MIG.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instanceGroupManagers { "versions": [ { "instanceTemplate": " INSTANCE TEMPLATE URL " } ], "name": " MIG NAME ", "instanceTemplate": " INSTANCE TEMPLATE URL ", "targetSize": " TARGET SIZE ", "resourcePolicies": { "workloadPolicy": WORKLOAD POLICY URL } } To create a regional MIG, make a POST request to the regionInstanceGroupManagers.insert method .
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /instanceGroupManagers { "versions": [ { "instanceTemplate": " INSTANCE TEMPLATE URL " } ], "name": " MIG NAME ", "instanceTemplate": " INSTANCE TEMPLATE URL ", "targetSize": " TARGET SIZE ", "resourcePolicies": { "workloadPolicy": WORKLOAD POLICY URL } } Replace the following: PROJECT ID : the project ID.
- To create a MIG, select one of the following options: gcloud To create a MIG with a specified target size, use the instance-groups managed create command .

