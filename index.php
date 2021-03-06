<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link type="text/css" rel="stylesheet" href="css/custom.css">

    <title>AoT Guess Who</title>
  </head>
  <body class="bg-dark">
    <!-- <div class="container-fluid"> -->
    	<div class="row vh-100 mx-0">
    		<div class="col-3 bg-darker rounded" id="sticky-sidebar">
    			<? include('sidebar.php') ?>
    		</div>
    		<div class="col p-5 mt-0 vh-100" id="main">
    			<? include('grid.php') ?>
    		</div>
    	</div>
    <!-- </div> -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

    <script src="js/load-player-stats.js"></script>
    <script src="js/flip.js"></script>
  </body>
</html>