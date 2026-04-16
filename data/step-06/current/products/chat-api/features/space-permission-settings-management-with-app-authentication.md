---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.180Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Space permission settings management with app authentication"
feature_slug: "space-permission-settings-management-with-app-authentication"
latest_feature_date: "2025-07-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces"
  - "https://developers.google.com/workspace/chat/create-spaces"
  - "https://developers.google.com/workspace/chat/authenticate-authorize-granular-oauth-permissions"
keywords:
  - "space"
  - "permission"
  - "settings"
  - "management"
  - "app"
  - "authentication"
  - "chat"
  - "apps"
---

# Space permission settings management with app authentication

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

Chat apps can create, update, and retrieve Chat space permission settings, including announcement spaces, using app authentication; Chat apps can create, update, and retrieve Chat space permission settings, including announcement spaces, using app authentication.

## Extended Definition

Chat apps can create, update, and retrieve Chat space permission settings, including announcement spaces, using app authentication; Chat apps can create, update, and retrieve Chat space permission settings, including announcement spaces, using app authentication.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces)
- [https://developers.google.com/workspace/chat/create-spaces](https://developers.google.com/workspace/chat/create-spaces)
- [https://developers.google.com/workspace/chat/authenticate-authorize-granular-oauth-permissions](https://developers.google.com/workspace/chat/authenticate-authorize-granular-oauth-permissions)

## Supporting Pages

### REST Resource: spaces \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces)
- Source ID: `site-api-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Setting predefined permission settings supports: App authentication with administrator approval with the chat.app.spaces or chat.app.spaces.create scopes.
- Reading and updating permission settings supports: App authentication with administrator approval with the chat.app.spaces scope.
- Resource: Space JSON representation Type SpaceType SpaceThreadingState SpaceDetails JSON representation HistoryState MembershipCount JSON representation AccessSettings JSON representation AccessState PredefinedPermissionSettings PermissionSettings JSON representation PermissionSetting JSON representation Methods Resource: Space A space in Google Chat.
- Page Summary outlined flag Google Chat Spaces are categorized as SPACE, GROUP CHAT, or DIRECT MESSAGE and contain properties like name, display name, threading state, and permission settings.

### Create a named space in Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/create-spaces](https://developers.google.com/workspace/chat/create-spaces)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To allow only space managers to remove the Chat app, set permissionSettings.manageApps to managersAllowed .
- Here's how to create a named space: Node.js chat/client-libraries/cloud/create-space-user-cred.js View on GitHub import { createClientWithUserCredentials } from './authentication-utils.js' ; const USER AUTH OAUTH SCOPES = [ 'https://www.googleapis.com/auth/chat.spaces.create' , ]; // This sample shows how to create a named space with user credential async function main () { // Create a client const chatClient = await createClientWithUserCredentials ( USER AUTH OAUTH SCOPES , ); // Initialize request argument(s) const request = { space : { spaceType : 'SPACE' , // Replace DISPLAY NAME here. displayName : 'DISPLAY NAME' , }, }; // Make the request const response = await chatClient . createSpace ( request ); // Handle the response console . log ( response ); } await main (); Python chat/client-libraries/cloud/create space user cred.py View on GitHub from authentication utils import create client with user credentials from google.apps import chat v1 as google chat SCOPES = [ "https://www.googleapis.com/auth/chat.spaces.create" ] def create space with user cred (): Create a client client = create client with user credentials ( SCOPES ) Initialize request argument(s) request = google chat .
- CreateSpaceRequest ( space = { "space type" : 'SPACE' , Replace DISPLAY NAME here. "display name" : 'DISPLAY NAME' } ) Make the request response = client . create space ( request ) Handle the response print ( response ) create space with user cred () Java chat/client-libraries/cloud/src/main/java/com/google/workspace/api/chat/samples/CreateSpaceUserCred.java View on GitHub import com.google.chat.v1.ChatServiceClient ; import com.google.chat.v1.CreateSpaceRequest ; import com.google.chat.v1.Space ; // This sample shows how to create space with user credential. public class CreateSpaceUserCred { private static final String SCOPE = "https://www.googleapis.com/auth/chat.spaces.create" ; public static void main ( String [] args ) throws Exception { try ( ChatServiceClient chatServiceClient = AuthenticationUtils . createClientWithUserCredentials ( ImmutableList . of ( SCOPE ))) { CreateSpaceRequest .
- SPACE ) // Replace DISPLAY NAME here. . setDisplayName ( "DISPLAY NAME" )); Space response = chatServiceClient . createSpace ( request . build ()); System . out . println ( JsonFormat . printer (). print ( response )); } } } Apps Script chat/advanced-service/Main.gs View on GitHub / This sample shows how to create space with user credential It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.spaces.create' referenced in the manifest file (appsscript.json). / function createSpaceUserCred () { // Initialize request argument(s) const space = { spaceType : "SPACE" , // TODO(developer): Replace DISPLAY NAME here displayName : "DISPLAY NAME" , }; // Make the request const response = Chat .

### "Manage granular OAuth permissions for Google Chat apps \_|\_ Google for\

- URL: [https://developers.google.com/workspace/chat/authenticate-authorize-granular-oauth-permissions](https://developers.google.com/workspace/chat/authenticate-authorize-granular-oauth-permissions)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Handling granular OAuth permissions depends on how you build your Chat app: Apps Script Google Workspace add-ons that extend Chat Standalone Apps Script Chat apps HTTP Google Workspace add-ons that extend Chat Standalone HTTP Chat apps Apps Script If you build your Chat app using Apps Script , Apps Script handles granular OAuth permissions automatically.
- Google Workspace add-ons that extend Chat If you build your Chat app as a Google Workspace add-on that extends Google Chat using Apps Script , follow the instructions in Handle granular OAuth permissions in Apps Script .
- Home Google Workspace Google Chat Guides Send feedback Manage granular OAuth permissions for Google Chat apps Stay organized with collections Save and categorize content based on your preferences.
- Chat apps that use user authentication must support granular OAuth permissions to allow users to grant a subset of requested scopes.

