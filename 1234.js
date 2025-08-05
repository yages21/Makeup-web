<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Example</title>
</head>
<body>
  <h1 id="greeting">Hello!</h1>
  <button onclick="changeGreeting()">Click Me</button>

  <script>
    function changeGreeting() {
      document.getElementById("greeting").innerText = "You clicked the button!";
    }
  </script>
</body>
</html>



