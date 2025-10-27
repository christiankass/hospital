Param()
$ImageName = "hospital-management:latest"
$ZipOut = "hospital-management-installed.zip"

Write-Host "Building Docker image $ImageName..."
docker build -t $ImageName .

Write-Host "Creating container to extract zip..."
$container = docker create $ImageName
docker cp "$($container):/hospital-management-installed.zip" "./$ZipOut"
docker rm $container

if (Test-Path $ZipOut) {
  Write-Host "Success! Created $ZipOut"
} else {
  Write-Host "Failed to create $ZipOut"
}
