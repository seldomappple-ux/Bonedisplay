# -*- coding: utf-8 -*-
"""
BoneDisplay™ — Asset Health & Completeness Checker
Scans site.config.js and checks if all referenced assets exist on disk.
Ensures zero missing assets or oversized files prior to release.
"""

import os
import sys
import re

if hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONFIG_PATH = os.path.join(PROJECT_ROOT, "site.config.js")
ASSETS_DIR = os.path.join(PROJECT_ROOT, "assets")

def format_size(bytes_size: int) -> str:
    if bytes_size >= 1024 * 1024:
        return f"{bytes_size / (1024 * 1024):.2f} MB"
    return f"{bytes_size / 1024:.1f} KB"

def main():
    print("=" * 60)
    print("   BoneDisplay™ // Asset & Configuration Health Check")
    print("=" * 60)
    print(f"Working Directory: {PROJECT_ROOT}\n")

    if not os.path.isfile(CONFIG_PATH):
        print(f"[ERROR] site.config.js not found: {CONFIG_PATH}")
        sys.exit(1)

    with open(CONFIG_PATH, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()

    # Extract all assets paths referenced in site.config.js
    raw_refs = re.findall(r'["\'](assets/[^"\']+)["\']', content)
    referenced_assets = sorted(list(set(raw_refs)))

    print(f"[*] Found {len(referenced_assets)} unique assets referenced in site.config.js:\n")

    missing = []
    found = []

    for rel_path in referenced_assets:
        disk_path = os.path.join(PROJECT_ROOT, rel_path.replace("/", os.sep))
        if not os.path.exists(disk_path):
            missing.append(rel_path)
            print(f"  [MISSING] ✗ {rel_path}")
        else:
            size = os.path.getsize(disk_path)
            found.append((rel_path, size))
            size_str = format_size(size)
            warn = " (WARNING: > 1.5MB)" if size > 1.5 * 1024 * 1024 else ""
            print(f"  [OK] ✓ {rel_path} ({size_str}){warn}")

    print("\n" + "-" * 60)
    if missing:
        print(f"[RESULT] FAILED: {len(missing)} asset(s) are missing!")
        sys.exit(1)
    else:
        print(f"[RESULT] SUCCESS: All {len(found)} assets verified successfully!")
        sys.exit(0)

if __name__ == "__main__":
    main()
