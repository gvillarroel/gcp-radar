---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:41.795Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Simultaneous visual and text editor view"
feature_slug: "simultaneous-visual-and-text-editor-view"
latest_feature_date: "2022-08-23"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest"
keywords:
  - "resize editor panes"
  - "dual-pane editor"
  - "side-by-side editors"
  - "editor split view"
  - "visual editor"
  - "split editor"
  - "text editor"
  - "Develop view"
---

# Simultaneous visual and text editor view

Product: Apigee UI
Coverage: HIGH

## Step 02 Summary

Enables users to display the visual and text editors side by side in the Develop view and resize either pane for easier editing.

## Extended Definition

Apigee UI’s Develop view supports a dual-pane editing mode where the visual editor and text editor can be shown together, letting users view policy and configuration in both interfaces at the same time. The two panes are resizeable by interacting with the divider between them, as users can drag it to change the visual/text editor proportions.

## Evidence Summary

The referenced Apigee tutorial explicitly describes a view with both visual and text editors and instructs users to drag the divider between them to resize the split editors.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)

## Supporting Pages

### Add the SpikeArrest policy to your API \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- To do so, click and drag the divider between the visual editor and the text editor down a little.
- The text editor displays the XML code for the proxy, including the Spike Arrest policy step in the Response element of the PreFlow. <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SpikeArrest continueOnError="false" enabled="true" name="SA-"> <DisplayName>SA-</DisplayName> <Properties/> <Identifier ref="request.header.some-header-name"/> <MessageWeight ref="request.header.weight"/> <Rate>30ps</Rate> </SpikeArrest> In the XML for the policy, change the value of the <Rate> element to 1pm (which translates into roughly two requests allowed every 60 seconds in the cloud).
- Select Proxy Endpoints > default > PreFlow in the left-hand pane: Note: You may need to expand the visual editor in the right-hand pane to see all the elements.
- Click the + button next to PreFlow in the Response pane at the bottom-right of the visual editor: In the Add policy step dialog, select the Spike Arrest policy.

