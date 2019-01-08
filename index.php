<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Rock Paper Scissors</title>
</head>
<link rel="stylesheet" href="style.css">
<body>
  <header>
    <h1>Rock Paper Scissors</h1>
  </header>

  <div class="score-board">
    <div id="user-label" class="badge">user</div>
    <div id="comp-label" class="badge">comp</div>
    <span id="user-score">0</span>:<span id="comp-score">0</span>

  </div>

  <div class="result">
    <p>Paper covers rock. you win!</p>
  </div>

  <div class="choices">
    <div class="choice" id="r">
      <img src="rock.png" style="width:60px; height:60px;" alt="">
    </div>
    <div class="choice" id="p">
      <img src="paper.jpg" style="width:60px; height:60px;" alt="">
    </div>
    <div class="choice" id="s">
      <img src="scissor.png" style="width:60px; height:60px;" alt="">
    </div>
  </div>
  <p id="action-message">Make your Move</p>
  <script src="app.js"></script>

  </script>
</body>
</html>
