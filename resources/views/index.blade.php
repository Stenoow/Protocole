<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Protocole</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('css/main.css') }}">
    <script type="module" src="{{ asset('js/main.js') }}"></script>
</head>
<body>

    <header class="fixed-top mb-4">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <h1 class="text-center text-light ms-auto me-auto">Protocole</h1>
        </nav>
    </header>

    <main>
        <canvas id="canvas" class="canvas"></canvas>
        <p class="text-center mt-3"><a href="#" id="download" class="btn btn-primary">Télécharger l'image</a></p>
        <p class="text-center mt-3"><a href="#" id="delete" class="btn btn-danger">Supprimer l'image actuel</a></p>
    </main>

    <footer class="fixed-bottom">
        <p class="text-center">&copy; 2023 Concept par Yohanna Tilly / Développement par Bomont Jérémie</p>
    </footer>
</body>
</html>
