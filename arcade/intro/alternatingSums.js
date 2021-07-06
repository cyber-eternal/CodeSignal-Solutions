function alternatingSums(a) {
    let firstTeam = 0;
    let secondTheam = 0;
    for(let i = 0; i < a.length; i++ ){
        (i === 0) || (i % 2 === 0) ? firstTeam += a[i] : secondTheam += a[i];
    }
    return [firstTeam, secondTheam];
}
