const express = require("express");
const app = express();
const port = 8000;

// app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send(
        `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My To-Do List</title>
    <link rel="stylesheet" href="main.css">
</head>

<body>
<header>
    <h1>My To-Do List</h1>
</header>

<ul id="list">
    <li class="demo"><input id="item1" name="item1" type="checkbox" value="learn-html">
        <label for="item1"> Learn some HTML </label>
        <button type="button">delete</button>
    </li>
    <li class="demo" id="foo"><input id="item2" name="item2" type="checkbox" value="learn-css">
        <label for="item2"> Learn some CSS </label>
        <button type="button">delete</button>
    </li>
    <li><input id="item3" name="item3" type="checkbox" value="html">
        <label for="item3"> Become a web developer </label>
        <button type="button">delete</button>
    </li>
</ul>

<form>
    <h2>New To-Do</h2>
    <input id="new-to-do" name="new-to-do" type="text">
    <label for="new-to-do"> </label>
    <button type="button">Create</button>
</form>

</body>
</html>
`);
});

app.get("main.css", (req, res) => {
    res.send(
        `* {
    font-family: Arial, Helvetica, sans-serif;
}

h1 {
    color: white;
    width: 300px;
    padding: 15px;
    margin: 10px;
    background-color: grey;
}

#list {
    list-style-type: none;
    width: 300px;
    padding: 1px;
}

#list li {
    width: 300px;
    padding: 4px;
    margin: 10px;
    background-color: lightgrey;
}

#list button {
    border: none;
    padding: 1px 4px;
    margin: 1px;
    background-color: darkgrey;
}

form {
    width: 300px;
    margin: 10px;
}

form h2 {
    color: grey;
    margin: 5px 0px;
}

form input {
    width: 300px;
    border: 1px solid grey;
    display: block;
    margin: 0px;
}

form button {
    border: solid grey;
    border-radius: 5px;
    padding: 1px 4px;
    margin: 10px 0px;
    background-color: lightgrey;
}
`);
});

app.listen(port, () => {
    console.log(`Server Side Rendering app listening on port ${port}`);
});
