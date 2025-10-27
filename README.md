# hospital-management (Docker pack)

This archive contains a React (Create React App) project for a hospital management prototype,
plus a Dockerfile and build scripts that produce a ZIP with `node_modules` already installed.

## How it works

1. Extract this archive.
2. Build the Docker image and generate the final zip using the included script.

### Linux / macOS

```bash
# Make script executable (once)
chmod +x build-with-docker.sh

# Run
./build-with-docker.sh
```

### Windows (PowerShell)

Open PowerShell as Administrator and run:

```powershell
.uild-with-docker.ps1
```

After the script finishes you will have `hospital-management-installed.zip` containing the project with `node_modules`.

Requirements: Docker installed and running on your machine.

