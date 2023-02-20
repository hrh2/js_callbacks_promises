function getUser(id,callback){
    setTimeout(()=>{
       callback({userId:id,gitHubUserName:'joanna'})
    },1000)
}


function getRepositories(userName,callback){
    setTimeout(()=>{
       callback({userName:userName,repos:['repos1','repos2','repos3']})
    },1000)
}
function getCommits(repo,callback){
     setTimeout(()=>{
     callback({repo:repo,commits:['commit1','commit2','commit']})
     },1000)
}

let user=getUser(1,(user)=>{
    console.log(user)
    getRepositories(user.gitHubUserName,(repositories)=>{
        console.log(repositories)
        getCommits(repositories.repos[0],(commits)=>{
            console.log(commits)
        })
    })
})