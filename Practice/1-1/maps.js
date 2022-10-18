let kids = [
    { first : "Natalie", last : "Plyers" },
     { first: "Brittany", last: "Ray" },
     { first: "Zachary", last: "Westly" }
    ];

    function getChildren(kidNames){
        return `${kidNames.first} ${kidNames.last}`;
    }
    let kidWholeNames = kids.map(getChildren);
    console.log(kidWholeNames.join(","));