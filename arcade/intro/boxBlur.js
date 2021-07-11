
boxBlur = I => {
    //Slice off the border
    var B = I.slice(1,-1).map(e=>e.slice(1,-1))
    
    //Replace every element with the average
    // of its neighbors
    return B.map((row,i) =>
        row.map((elem,j) => {
            var sum = 0
            for(var x=0;x<3;++x)
                for(var y=0;y<3;++y)
                    sum += I[i+x][j+y]
            return sum/9|0
        })
    )
}
