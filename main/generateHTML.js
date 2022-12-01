function generateHTML({ id, name, email, role }) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
    
    <h1 class="fs-1">My Team</h1>
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${name}</div>
            <div class="card-body text-success">
            <h5 class="card-title">${Employee.getRole()}</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">Role: ${role}</li>
            </ul>
            </div>
        </div>
    </body>
</html>`
}

module.exports = generateHTML;
