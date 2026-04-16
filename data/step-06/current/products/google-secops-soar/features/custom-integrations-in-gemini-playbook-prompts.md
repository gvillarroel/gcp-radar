---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.817Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "Custom integrations in Gemini playbook prompts"
feature_slug: "custom-integrations-in-gemini-playbook-prompts"
latest_feature_date: "2024-11-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory"
  - "https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini"
keywords:
  - "custom"
  - "integrations"
  - "in"
  - "gemini"
  - "playbook"
  - "prompts"
  - "users"
  - "can"
---

# Custom integrations in Gemini playbook prompts

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

Users can include custom integrations in prompts when creating a playbook with Gemini.

## Extended Definition

Users can include custom integrations in prompts when creating a playbook with Gemini.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory)
- [https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini](https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini)

## Supporting Pages

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-root-2`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You should validate the logo on the following pages: Response > Integration Setup Response > Playbooks > Playbook Designer Cases > Alert > Alert Playbook View The following is an example of an SVG logo, designed to match our style guide: <?xml version="1.0" encoding="UTF-8"?><svg id="Layer 1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 23"> <defs> <style> .cls-1 { stroke-width: 0px; } </style> </defs> <path class="cls-1" d="M15.51,4.79H5.49c-.4,0-.72.32-.72.72v5.75c0,2.3,1.71,4.15,3.69,5.38.54.34,1.1.62,1.66.86l.09.04c.06.02.12.05.18.06.03,0,.07,0,.1,0,.1,0,.19-.03.28-.07l.09-.04c.76-.33,2.22-1.03,3.46-2.24,1.24-1.22,1.89-2.6,1.89-4v-5.75c0-.4-.32-.72-.72-.72ZM14.32,11.26c0,.88-.44,1.77-1.32,2.63-.65.64-1.55,1.22-2.5,1.68-.95-.46-1.84-1.04-2.5-1.68-.88-.86-1.32-1.75-1.32-2.63v-4.55h7.64v4.55ZM20.28,0H.72c-.4,0-.72.32-.72.72v10.77c0,2.56,1.18,4.99,3.51,7.21,2.29,2.18,5.12,3.56,6.61,4.2l.09.04s.1.04.15.05c.04,0,.09.01.13.01.1,0,.19-.02.28-.06l.09-.04c.53-.23,1.23-.55,2.02-.97,1.42-.75,3.11-1.82,4.59-3.23,2.33-2.22,3.51-4.64,3.51-7.21V.72c0-.4-.32-.72-.72-.72ZM16.17,17.31c-1.9,1.81-4.24,3.04-5.67,3.69-1.43-.65-3.77-1.88-5.67-3.69-1.94-1.84-2.92-3.8-2.92-5.82V1.92h17.18v9.57c0,2.02-.98,3.98-2.92,5.82Z"/></svg> Be sure to encode the SVG before adding it to the integration definition file, as can be found in other integrations in the Content Hub.
- For example, the following JSON object represents a poor structure as it would be unusable inside playbooks: { "10.10.10.10": { "is malicious": "false" } } Instead, format it like this: [ { "is malicious": "false", "ip": "10.10.10.10" } ] If you're using entities inside the action and return results Per Entity, then the best practice is to structure the JSON Result like this: [ { "Entity": "10.10.10.10", "EntityResult": { "is malicious": "false", } } ] Always consider how the output of the action can be used inside automation.
- Configuration parameters All integrations should contain configuration parameters (API Root + Auth parameters), unless the underlying API doesn't require any authentication and the API Root can be hardcoded.
- Documentation link As part of the integration, you can add a link that will point users to the documentation.

### "Map users in the Google SecOps platform \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform)
- Source ID: `site-iam-reference`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- While mapping groups to parameters may require you to create more groups initially, once the mapping is set, new users can join Google SecOps without the need to create additional groups.
- Map users in the Google SecOps platform Supported in: Google secops Note: For customers who've already migrated to Google Cloud, the Permission Groups column doesn't appear on this page.
- Instead of assigning cases, actions, or playbooks to individuals, they can be assigned to a SOC role.
- This enables a more granular level of mapping and can be helpful for large customers.

### "Integrate Active Directory with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory)
- Source ID: `site-api-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action outputs The Remove User From Group action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Not available Output messages Available Script result Available Output messages The Remove User From Group action can return the following output messages: Output message Message description Successfully removed the following users from the group " GROUP NAME " in Active Directory: ENTITY ID The following users were not a part of the group " GROUP NAME " in Active Directory: ENTITY ID Action wasn't able to remove the following users from the group " GROUP NAME " in Active Directory: ENTITY ID No users were removed from the group " GROUP NAME " in Active Directory.
- Action outputs The Add User to Group action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Not available Output messages Available Script result Available Output messages The Add User to Group action can return the following output messages: Output message Message description Successfully added the following users to the group " GROUP NAME " in Active Directory: ENTITY ID The following users were already a part of the group " GROUP NAME " in Active Directory: ENTITY ID Action wasn't able to add the following users to the group " GROUP NAME " in Active Directory: ENTITY ID No users were added to the group " GROUP NAME " in Active Directory.
- Use cases The Active Directory integration can help you solve the following use cases: Activate and deactivate users: use Google SecOps capabilities to deactivate a potentially compromised user account and prevent further unauthorized access.
- You can use a custom port by appending it to the address (such as, mydomain.com:636 ).

### "Answer Threat Intelligence questions with Gemini \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini](https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini)
- Source ID: `site-docs-root-2`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can ask Gemini questions about MITRE tactics, techniques, and procedures (TTPs), and receive contextually relevant answers that include the following MITRE details: Tactic Technique Sub-technique Detection suggestions Procedures Mitigations Gemini returns a link to the curated detections Google SecOps makes available for each TTP.
- Answer Threat Intelligence questions with Gemini Supported in: Google secops SIEM Gemini can answer questions related to threat intelligence about topics such as threat actors, their associations, and their behavior patterns, including questions about MITRE TTPs .
- You can also ask Gemini follow up questions to gain additional insight on a MITRE TTP and how it might impact your enterprise.
- Provide feedback You can provide feedback to responses generated by the Gemini AI investigation assistance.

