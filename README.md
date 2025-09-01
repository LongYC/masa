# Masa

> It shows time.

Built with [Astro](https://astro.build) framework.

## Developement with Podman / Docker

1. Build the image:

```bash
podman build -t masa-dev .
```

2. Run the container (`CHOKIDAR_USEPOLLING` for non-native filesystem, e.g. macOS & Windows):

```bash
podman run --rm -it -p 4321:4321 -v "$(pwd):/app" -v /app/node_modules -e CHOKIDAR_USEPOLLING=true masa-dev
```
