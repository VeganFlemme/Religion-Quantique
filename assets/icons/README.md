# Icons pour PWA

Ce dossier devrait contenir les icônes de l'application en 8 tailles différentes.

## Tailles Requises

- icon-72.png (72x72)
- icon-96.png (96x96)
- icon-128.png (128x128)
- icon-144.png (144x144)
- icon-152.png (152x152)
- icon-192.png (192x192)
- icon-384.png (384x384)
- icon-512.png (512x512)

## Design Suggéré

**Concept** :
- Background : Noir (#000)
- Symbole principal : ∅ = 1 (vert cyber #0f0)
- Style : Minimaliste, cyberpunk Matrix
- Format : PNG transparent ou background noir

**Création** :

Vous pouvez créer ces icônes avec :
- Figma / Sketch / Adobe XD
- GIMP / Photoshop
- Code (Canvas API)
- Générateurs en ligne

**Template Simple** :

```html
<!DOCTYPE html>
<html>
<head>
    <title>Icon Generator</title>
</head>
<body>
    <canvas id="icon" width="512" height="512"></canvas>
    <script>
        const canvas = document.getElementById('icon');
        const ctx = canvas.getContext('2d');
        
        // Background
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, 512, 512);
        
        // Text
        ctx.fillStyle = '#0f0';
        ctx.font = 'bold 120px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('∅ = 1', 256, 256);
        
        // Border
        ctx.strokeStyle = '#0f0';
        ctx.lineWidth = 4;
        ctx.strokeRect(0, 0, 512, 512);
        
        // Download
        const link = document.createElement('a');
        link.download = 'icon-512.png';
        link.href = canvas.toDataURL();
        link.click();
    </script>
</body>
</html>
```

Exécutez ce HTML, puis redimensionnez pour les autres tailles.

## Placeholder

Pour le moment, le site fonctionnera sans ces icônes, mais pour une vraie PWA, elles sont recommandées.

**Alternative temporaire** :
Utilisez un générateur comme https://realfavicongenerator.net/
