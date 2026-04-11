---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.941Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Playbook Loops"
feature_slug: "playbook-loops"
latest_feature_date: "2025-07-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/soar/release-notes"
keywords:
  - "playbook"
  - "loops"
  - "playbooks"
  - "can"
  - "iterate"
  - "over"
  - "lists"
  - "or"
---

# Playbook Loops

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Playbooks can iterate over lists or entities and run actions for each item, including inside playbook blocks.

## Extended Definition

Playbooks can iterate over lists or entities and run actions for each item, including inside playbook blocks.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)

## Supporting Pages

### "Explore the Playbooks page \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)
- Source ID: `site-docs-reference-2`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can apply playbooks associated with environment groups to cases originating from any environment within those groups.
- For more information about the Playbooks page and how to collaborate with it, see the following: Define custom alert views from Playbook Designer Work with the Playbook Simulator Understand playbook monitoring Use the Playbook Navigator Playbook icons legend The following icons appear on the Cases > Playbooks tab when a playbook is attached.
- Menu : Click edit Edit and select the required playbooks or blocks before using Menu to perform bulk actions: New Folder : Add a new playbooks folder; the playbook automatically inherits any changes made to its associated environment groups.
- Filter : Click filter alt Filter and filter the display based on the following criteria: Playbook simulator is on toggle Show Active Playbooks toggle Priority : Set the attachment order of playbooks for the alert.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- This feature update lets playbooks iterate over lists or entities, performing one or more actions for each item.
- It contains the following placeholders HostUrl CurrentUserEmail CurrentUserID CurrentUserFullName CurrentUserRole Note that the Current User placeholders cannot be used in playbooks or jobs.
- If several playbooks have run on an alert, and those playbooks have customized views, you can now select and display any of those customized views for that alert.
- July 27, 2025 Feature Playbook Simulator enhancements for loops The Playbook Simulator now supports visualization and debugging of playbooks that contain loops.

### Google Security Operations SOAR release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- This feature update lets playbooks iterate over lists or entities, performing one or more actions for each item.
- New API for Logs: Admin users can now retrieve raw python logs directly from the platform using the following API: POST/api/external/v1/logging/python Fixed Release Notes 6.2.31 Importing a custom integration on top of an existing commercial integration causes the connector to not work properly (ID #00243798) Specific Integration showing incorrect update available (ID #00181718) SDK call siemplify.current alert.creation time returns 0 (ID #00226591) In rare situations, unable to access several cases via the Platform or via API (ID #00243878) When changing the Case Stage under the Cases tab, the drop down list of stages does not follow the same numerical order as defined in the Settings (ID #44453181) Entities that should be internal are created as external if ingested using the environment alias (ID #00225318) In certain situations, alerts are ingested into the platform for environments that don't exist yet in the platform and as soon as the environments are created - the cases are opened and playbooks run.
- Fixed Parse case wall email doesn't work in playbook simulator (ID #00260679) Fixed Tagged user is not highlighted or hyperlinked on the Case Wall page & Notification popup Fixed Custom List import error not propagated to the user (ID #1032784) Fixed Events tab lists all artifacts even though they are part of different events (ID #49103838) Fixed Issues with Login (ID #00283928) Fixed Advanced Text Editor text formatting not working (ID #00274952) Fixed Playbooks not visible due to missing categoryId and categoryName values (ID #00274872) Fixed Unable to create advanced reports when a specific environment is selected (ID #49898167) April 12, 2024 Announcement Release 6.2.53 is now in General Availability.
- Fixed lastLoginTime returns wrong date for SAML users (ID #00278010) Fixed Playbooks with async actions longer than 7 days can't be saved even though time set to 14 days in IDE (ID #00269032) Fixed Wrong error message returned for environment alias duplicates (ID #00271405) Fixed Clicking on events configuration opens the wrong mapping & modeling rules Fixed Incident Manager appearing in navigation even though user doesn"t have license (ID #49062139) March 15, 2024 Announcement Release 6.2.5.0 is now in General Availability.

