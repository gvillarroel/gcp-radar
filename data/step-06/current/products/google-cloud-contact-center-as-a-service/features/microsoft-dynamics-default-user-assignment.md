---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.137Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Microsoft Dynamics default user assignment"
feature_slug: "microsoft-dynamics-default-user-assignment"
latest_feature_date: "2023-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
keywords:
  - "microsoft"
  - "dynamics"
  - "default"
  - "user"
  - "assignment"
  - "lets"
  - "admins"
  - "assign"
---

# Microsoft Dynamics default user assignment

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Lets admins assign a CRM Admin user as the default user for CRM actions and Customer Support Virtual Agent sessions.

## Extended Definition

Lets admins assign a CRM Admin user as the default user for CRM actions and Customer Support Virtual Agent sessions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions](https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- Outbound default and specific assignment options Default outbound caller ID By default, your contact center has one outbound number, which can be configured using the following instructions.
- You can make this assignment while adding a new user or updating an existing user.
- Phone number selection in the Agent Adapter When an agent clicks on the dial option of the adapter, they will now see a drop-down of the default Global Outbound number as well as any other outbound numbers which are associated with the queues to which they are assigned.
- To assign multiple direct phone numbers to an agent, follow the instructions in Bulk user management: Upload new or updated users while following these guidelines: Stay within the limitations for assigning direct phone numbers.

### "User roles and permissions \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions](https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions)
- Source ID: `site-iam-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Queue: Full access Reporting Report builder: Full access to all user data No access Agent adapter in the CCAI Platform portal and CRM Actions available Responsible for viewing or managing users on multiple teams, even when not assigned as the team manager Are responsible for monitoring call and chat queues for all queues Are responsible for downloading reports with data concerning agent performance, queue performance, call and chat volume for all users Configuring queues, redirects, and per-queue routing options Responsible for assigning agents to queues Shuffling team and agent assignments between queues based on volume Adding new users and assigning to teams or deactivating users Assigning existing users to teams Creating or editing queue structures for any language or channel Modifying environment wide settings to disable or enable channels, update how Agents are notified of new sessions, hours of operation, messages played to consumers or routing features like enabling Auto Answer or Priority routing Setting up technical integrations Don't see a role you want?
- No Access Call or chat adapter in the CCAI Platform portal or CRM Actions available Monitoring call and chat queues, only for queues in which their team members are assigned Downloading reports with data concerning agent performance, queue performance, call and chat volume - but only for their team's Creating and editing chat shortcuts Shuffling team and agent assignments between queues based on volume Assigning Agents and teams to queues Configuring priority levels of existing queues (when Priority Routing is enabled) Adding new users and assigning to teams or deactivating users Assigning existing users to teams Manager: Data Manager roles are for users assigned as the team manager to one or more teams and access is partially based on the user's assigned teams.
- Queue: Full access Reporting Report Builder: Full access to all user data No access Agent adapter in the CCAI Platform portal and CRM Call and chat settings Developer settings Actions available Monitoring all call and chat queues Downloading reports with data concerning agent performance, queue performance, call and chat volume for all queues and Agents Shuffling team and agent assignments between queues based on volume Adding new users and assigning to teams and deactivating users Assigning existing users to teams Creating or editing queue structures for any language or channel Admin Full access to environment settings, queue configuration, monitoring, and reporting.
- Custom roles and permissions In addition to the 6 default user roles (Admin, Manager, Manager Data, Manager Teams, Manager Admin, Agent), with custom roles & permissions, you can create custom roles with unique sets of permissions assigned.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Feature benefits For Managers and Admins Automatically remind agents to respond promptly to conversations For Agents Visually shows which chat needs their attention first For end-users Less waiting time and quicker resolution time Feature details The response timer starts when the agent is assigned and the consumer has sent a message and applies even if an agent has not yet sent a message If the agent responds, the counter will not begin again until the consumer replies.
- Setting the default Agent Status To prevent agents from being assigned chats before they're ready, Admins can set an unavailable default status for agents who have just logged in.
- The following variables are available: Customer Attributes : First Name : the end-user's first name Last Name : the end-user's last name Full Name : the end-user's full name Agent Attributes : First Name : the agent's first name Last Name : the agent's last name Full Name : the agent's full name Alias : the agent's alias ID : the agent's ID Session Attributes : Queue : the assigned queue Repeat this step to add more attributes.
- Chat timeout timer restarts when: Chat is assigned to an agent After each message sent by the consumer If a reply isn't made to the chat within the set time frame, the chat will time out and end with one of the following chat statuses: Timeout Agent No Message Timeout End User No Message Timeout Agent Stopped End User Stopped Click Set Chat Details to save.

