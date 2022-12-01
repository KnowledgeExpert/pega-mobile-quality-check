export function getUrl(env: string) {
    let url = '';
    switch (env) {
        case `dev`:
            url = 'https://kexpert02.pegalabs.io/prweb';
            break;
        case `stage`:
            url = 'https://kexpert02.pegalabs.io/prweb';
            break;
        default:
            url = 'https://pega870-web.tm.k-expert.com/prweb/app/default/beEBp4uRVTogorRwSwWqbOtn9IL2fwdI*/!STANDARD';
            break;
    }
    return url;
}