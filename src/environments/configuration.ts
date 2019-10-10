interface Developer {
    name: string;
    github: string;
}

const developers: Developer[] = [
    {name: 'Kévin', github: 'KSeguineau'},
    {name: 'Jean-Baptiste', github: 'jbmerand'},
    {name: 'Olivier', github: 'olivier29000'},
    {name: 'Eloi', github: 'EloiEloi'},
    {name: 'Guillaume', github: 'gPierre56'},
    {name: 'Cécile', github: 'cecilepey'},
    {name: 'Bilel', github: 'bilelkharbeche'}
];

const baseUrl = 'https://api.github.com';

const githubApi = {
    userUrl: `${baseUrl}/users`
};


export {developers, githubApi};
