# Navigation SDK for iOS

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 37
Unique features: 40

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-02-26 | Cycling chevron direction update |  | The cycling guidance chevron points in the direction of device movement during active guidance. |
| 2026-02-26 | Enhanced location context for waypoints |  | GMSNavigationWaypoint can specify a location with a Place ID or a navigationPointToken to improve routing accuracy and arrival handling. |
| 2025-12-18 | Route-aware road labeling |  | The map hides low-priority road labels that do not intersect with the current route. |
| 2025-10-13 | Stop sign references in voice guidance |  | Voice guidance includes stop signs when describing upcoming maneuvers. |
| 2025-10-02 | Narrow road callouts |  | The navigation route can display callouts for narrow roads in supported areas and driving modes. |
| 2025-10-02 | Unpaved road callouts |  | The navigation route can display callouts for unpaved road segments in supported regions and driving modes. |
| 2025-09-25 | Cloud-based maps styling for navigation and road maps |  | Reusable styles associated with map IDs can be used to style both the navigation map and the road map. |
| 2025-09-08 | Counted turns and railway crossings in voice guidance |  | Guidance messages include counted turns and railway crossing mentions. |
| 2025-09-08 | Railroad crossing callouts |  | The navigation route can display railroad crossing callouts. |
| 2025-08-12 | 3D buildings during navigation |  | The navigation map can display 3D buildings during turn-by-turn navigation. |
| 2025-08-12 | Proximity check for user-initiated disruption voting |  | The SDK checks whether a user-initiated vote on a real-time disruption was submitted near the incident. |
| 2025-07-14 | Custom real-time disruption reporting buttons |  | The incident reporting flow can be checked and launched programmatically using the new reporting APIs. |
| 2025-07-14 | Maneuver callouts |  | Callouts now appear before the next maneuver instead of at the moment the maneuver is needed. |
| 2025-07-14 | Real-time disruption callout visibility control |  | The shouldDisplayPrompts method controls whether real-time disruption callouts are shown. |
| 2025-07-14 | showsStopSigns | 2025-07-14 | Controls whether stop signs are shown during navigation; deprecated on 2025-07-14. |
| 2025-07-14 | showsTrafficLights | 2025-07-14 | Controls whether traffic lights are shown during navigation; deprecated on 2025-07-14. |
| 2025-07-14 | Slowdown and stalled vehicle callouts |  | Callouts for slowdowns and stalled vehicles are disabled, and stalled vehicle voting and reporting are no longer available. |
| 2025-05-19 | Destination and entrance highlighting |  | Destinations created with a place ID now highlight the destination building and show an entrance icon when possible. |
| 2025-05-19 | Route-relevant orientation landmark POIs |  | Prominent landmark POIs are displayed along routes and near key intersections to help users orient themselves. |
| 2025-05-19 | Stop sign display setting | 2025-05-19 | The GMSUISettings property for showing stop signs is deprecated because stop signs now appear during navigation by default when data is available; deprecated on 2025-05-19. |
| 2025-05-19 | Traffic light display setting | 2025-05-19 | The GMSUISettings property for showing traffic lights is deprecated because traffic lights now appear during navigation by default when data is available; deprecated on 2025-05-19. |
| 2025-03-24 | Real-time disruption features |  | The SDK can alert users about route disruptions and support reporting and verification of disruptions. |
| 2025-02-04 | Traffic-light references in voice guidance |  | Voice guidance now mentions traffic lights when describing upcoming maneuvers in supported countries. |
| 2024-11-18 | Navigation component colors |  | Navigation UI colors were updated to match the current Google Maps app style. |
| 2024-08-14 | Skip Terms of Service Options API |  | A new options API lets developers present the terms and conditions dialog. |
| 2024-05-28 | Apple Privacy Manifest bundle file |  | The SDK now includes the Apple Privacy Manifest file in its resources bundle. |
| 2024-05-28 | CarPlay support |  | The Navigation SDK for iOS can display navigation on Apple's CarPlay in-dash head units and route voice guidance through the car's speakers. |
| 2024-05-28 | Default map colors |  | The SDK's default map colors were updated to match the newer Google Maps app color palette. |
| 2024-05-28 | GMSNavigationTermsDialogUIParams.cancelButtonTextColor | 2024-05-28 | The cancel button text color property in GMSNavigationTermsDialogUIParams controls the text color for the dialog's cancel button; deprecated on 2024-05-28. |
| 2024-05-28 | OpenGL renderer | 2024-05-28 | OpenGL renderer support is deprecated and will be unsupported in the next major release; deprecated on 2024-05-28. |
| 2024-05-28 | setMetalRendererEnabled | 2024-05-28 | The setMetalRendererEnabled flag is deprecated and will be unsupported in the next major release; deprecated on 2024-05-28. |
| 2024-05-28 | Terrain mode during active navigation | 2024-05-28 | Terrain mode during active navigation in the Navigation SDK for iOS is deprecated and will be replaced by normal mode; deprecated on 2024-05-28. |
| 2024-05-28 | Turn card header and footer designs |  | The default turn card header and footer designs were updated to match the newer rounded-corner turn cards. |
| 2024-05-03 | Traffic lights and stop sign icons |  | The SDK now supports traffic light and stop sign icons along routes in additional countries. |
| 2023-11-22 | Advanced markers |  | Advanced markers are supported for Navigation SDK versions 5.3.0 and higher. |
| 2023-11-22 | Cloud-based styling |  | Cloud-based styling is supported for Navigation SDK versions 5.3.0 and higher. |
| 2023-11-22 | Data-driven styling |  | Data-driven styling is supported for Navigation SDK versions 5.3.0 and higher. |
| 2023-05-17 | GMSNavigatorSession |  | GMSNavigatorSession is a new class for programmatically controlling a navigation session. |
| 2022-08-29 | GMSNavigationMapStyle API | 2022-08-29 | The GMSNavigationMapStyle API and its default and high-detail enumerators are deprecated because the detailed base map is now enabled by default; deprecated on 2022-08-29. |
| 2022-08-29 | Traffic lights and stop signs |  | The SDK can display traffic lights and stop signs during navigation. |

Source file slug: `navigation-sdk-for-ios.md`

