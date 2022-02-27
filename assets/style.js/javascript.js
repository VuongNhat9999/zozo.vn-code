

let array = [
    {
        name : 'bu',address : 'Hà Nội',phone : '091312312412', tuoi: 20
    },
    {
        name : 'hong',address : 'Hà Nội',phone : '091312312412'   , tuoi: 21
    },
    {
        name : 'Vượng',address : 'Hà Nội',phone : '091312312412',tuoi: 22
    },
    {
        name : 'nam',address : 'Hà Nội',phone : '091312312412',tuoi: 22
    }
];

let filter = array.filter((item, index) => {
    return item && item.tuoi === 22;
});

console.log(filter);
