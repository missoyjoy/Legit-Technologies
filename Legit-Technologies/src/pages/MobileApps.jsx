import React from "react";
import ServiceLayout from "../components/ServiceLayout";

export default function MobileApps() {
  return (
    <ServiceLayout
      title="Mobile App Development (iOS & Android)"
      category="Division 01: Software, Cyber & Mobile"
      tagline="High-performance native iOS, Android, and cross-platform mobile applications with offline-first sync and cloud APIs."
      image="/Phone.jpg"
      techStack={["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "SQLite", "REST APIs"]}
      branches={[
        {
          title: "Native iOS Application Engineering",
          timeline: "4 – 8 Weeks",
          concept: "Bespoke iOS applications developed in Swift, taking full advantage of Apple's hardware features, security standards, and high-performance UX.",
          features: [
            "Native Swift & SwiftUI performance optimization",
            "Face ID & Touch ID biometric authentication",
            "Apple Pay & location service integrations",
            "App Store submission & review compliance",
          ],
          useCase: "Premium consumer brands and iOS-first enterprise deployments.",
        },
        {
          title: "Native Android Software Engineering",
          timeline: "4 – 8 Weeks",
          concept: "Rugged, high-speed Android applications engineered in Kotlin to operate across diverse smartphone brands and Android handheld terminals.",
          features: [
            "Kotlin-based lightweight architecture",
            "Compatibility across varied Android versions & screen sizes",
            "Background push notification services",
            "Google Play Store publishing management",
          ],
          useCase: "Field teams, logistics drivers, and broad consumer reach across emerging markets.",
        },
        {
          title: "Cross-Platform Framework Apps",
          timeline: "3 – 6 Weeks",
          concept: "Single-codebase mobile development utilizing Flutter and React Native to deploy identical apps to iOS and Android simultaneously.",
          features: [
            "Up to 40% reduction in development timelines",
            "Consistent UI design across both major operating systems",
            "Shared business logic & simplified maintenance",
            "High-frame-rate smooth animations",
          ],
          useCase: "Businesses needing rapid market entry across both iOS and Android platforms.",
        },
        {
          title: "Offline-First Sync & Hardware Integration",
          timeline: "3 – 5 Weeks",
          concept: "Mobile applications designed to work in zero-connectivity field environments, localizing data and syncing to cloud servers when connection restores.",
          features: [
            "Embedded local databases (SQLite/WatermelonDB)",
            "Automatic background conflict-resolution syncing",
            "Bluetooth thermal printer & barcode scanner connectivity",
            "GPS location tagging & geofencing",
          ],
          useCase: "Field agents, remote sales teams, and warehouse inventory staff working off-grid.",
        },
      ]}
    />
  );
}