import React from "react";
import ServiceLayout from "../components/ServiceLayout";

export default function CctvSurveillance() {
  return (
    <ServiceLayout
      title="CCTV & Surveillance Systems"
      category="Division 02: Hardware, CCTV & POS"
      tagline="AI-driven high-definition camera arrays with thermal detection, license plate reading, and mobile cloud surveillance."
      image="/cctv.jpg"
      techStack={["Hikvision", "Dahua", "NVR Arrays", "PoE Switches", "Cloud Video Storage"]}
      branches={[
        {
          title: "AI Motion-Detecting IP CCTV Arrays",
          timeline: "2 – 6 Days",
          concept: "High-definition IP camera networks with built-in AI microprocessors that filter out environmental noise to detect real human and vehicle intrusion.",
          features: [
            "4K Ultra-HD resolution with ColorVu night-vision",
            "Smart perimeter intrusion detection & line crossing alerts",
            "Power over Ethernet (PoE) single-cable installation",
            "Two-way audio talkback capability on key points",
          ],
          useCase: "Commercial warehouses, residential estates, and perimeter fences.",
        },
        {
          title: "ANPR License Plate & Thermal Readers",
          timeline: "3 – 7 Days",
          concept: "Specialized cameras designed to capture vehicle license plates at entry gates and detect heat variations across equipment or perimeters.",
          features: [
            "Automatic Number Plate Recognition (ANPR) speed indexing",
            "White-list gate trigger integration for recognized cars",
            "Thermal imaging for overheating machine parts or fire risk",
            "High-speed shutter capture day and night",
          ],
          useCase: "Parking management, toll gates, fuel stations, and industrial facilities.",
        },
        {
          title: "NVR Storage & Cloud Redundancy Setup",
          timeline: "1 – 3 Days",
          concept: "Configuring central Network Video Recorders (NVR) with RAID hard drive redundancy and off-site cloud backup to prevent footage loss.",
          features: [
            "High-capacity enterprise hard drives (30-90 days retention)",
            "H.265+ video compression saving 70% storage space",
            "Encrypted off-site cloud recording for critical views",
            "RAID 1/5 disk protection against hard drive failure",
          ],
          useCase: "High-risk commercial premises requiring mandatory long-term footage retention.",
        },
        {
          title: "Remote Mobile Viewing & Alarm Integration",
          timeline: "1 – 2 Days",
          concept: "Connecting security camera arrays to iOS/Android mobile apps and linking them to physical sirens or monitoring control rooms.",
          features: [
            "Real-time live multi-camera viewing on smartphones & tablets",
            "Instant mobile push notifications upon perimeter breach",
            "Integration with strobe lights and loud audible sirens",
            "Remote playback of recorded events from anywhere",
          ],
          useCase: "Business owners wanting full visibility over operations while off-site.",
        },
      ]}
    />
  );
}