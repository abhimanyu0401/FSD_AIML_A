async function loadUserData(username) {
            try {
                const url = `https://api.github.com/users/${username}`;
                const response = await fetch(url);
                const data = await response.json();

                const nav = document.getElementById("navbar");
                nav.innerHTML += `<h3>${data.login}</h3>`;

                const sidebar = document.getElementById("sidebar");
                sidebar.innerHTML = `
                   <img src="${data.avatar_url}" alt="${data.login}">
                   <p class="name">${data.name}</p>
                   <p class="username">${data.login}</p>
                 `;

                const repo_count = document.getElementById("repo_count");
                repo_count.innerHTML = `<p> Public Repositories : ${data.public_repos} </p>`;

                const cards = document.getElementById("container");
                const repo_url = `https://api.github.com/users/${username}/repos`;
                const res = await fetch(repo_url);
                const repos = await res.json();
                for (const i of repos) {
                    cards.appendChild(getRepo(i));
                }
            }
            catch (err) {
                console.log("Error : ", err);

            }
        }

        function getRepo(params) {
            const repo = document.createElement("div");
            repo.className = "repo";
            repo.innerHTML = `
            <a href=${params.html_url} target="_blank">${params.name}</a>
            <p> ${params.description} </p>
            <p>${params.language} </p>
            `;
            return repo;
        }
        loadUserData("abhimanyu0401");