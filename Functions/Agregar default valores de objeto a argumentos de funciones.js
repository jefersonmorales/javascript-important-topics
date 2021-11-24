const blog = {
    tittle: 'My first blog',
    // summary: 'Some comment'
}

const openGrandMetadata = ({ tittle, summary = 'Without any comment'}) => {
    console.log(`
    og-tittle: ${tittle}
    og-summary: ${summary}
    `);
}

openGrandMetadata(blog);