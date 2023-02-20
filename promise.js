function getUser(id) {
  const p = new Promise((resolve, reject) => {
      setTimeout(() => {
          let user = { userId: id, gitHubUsername: 'stanley' }
          console.log('user...', user)
          resolve(user)
          //reject(new Error("User with id "+id+" not found"))
      }, 3000)
  })
  return p
}

function getRepositories(userName) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          let repos = { userName: userName, repos: ["repo1", "repo2"] }
          console.log(repos)
          resolve(repos)
      }, 2000)
  })
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve({ repository: repo, commits: ["commit1", "commit2"] })
         // reject(new Error("Something wrong happened"))
      }, 1000)
  })
}

// Call getUser with id 1 and handle the returned promise using `.then()` and `.catch()`
getUser(1)
  .then((user) => getRepositories(user.gitHubUsername))
  .then((repositories) => getCommits(repositories.repos[0]))
  .then((commits) => console.log(commits))
  .catch((error) => console.log(error))
